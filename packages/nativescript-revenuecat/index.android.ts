import { PurchaseResult, RevenueCatCommon } from './common';
import { Utils } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { Product } from './Product/index.android';
import { Offering } from './Offering/index.android';
import { Entitlement } from './Entitlement/index.android';
import { Customer } from './Customer/index.android';

export { EntitlementPeriodType } from './Entitlement/common';

const Purchases = lazy(() => com.revenuecat.purchases.Purchases);

export class RevenueCat extends RevenueCatCommon {
  static configure(apiKey: string, appUserID?: string): void {
    if (!appUserID) {
      Purchases().configure(new com.revenuecat.purchases.PurchasesConfiguration.Builder(Utils.android.getApplicationContext(), apiKey).build());
    } else {
      Purchases().configure(new com.revenuecat.purchases.PurchasesConfiguration.Builder(Utils.android.getApplicationContext(), apiKey).appUserID(appUserID).build());
    }
  }

  static async getProducts(productIdentifiers: string[]): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .getProducts(
          Utils.dataSerialize(productIdentifiers),
          new com.revenuecat.purchases.interfaces.GetStoreProductsCallback({
            onReceived: (products) => {
              const purchasesStoreProducts: Product[] = [];
              for (let i = 0; i < products.size(); i++) {
                const product = products.get(i);
                purchasesStoreProducts.push(new Product(product));
              }
              resolve(purchasesStoreProducts);
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async getCurrentOffering(): Promise<Offering> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .getOfferings(
          new com.revenuecat.purchases.interfaces.ReceiveOfferingsCallback({
            onReceived: (offerings) => {
              resolve(new Offering(offerings.getCurrent()));
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async getAllOfferings(): Promise<Offering[]> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .getOfferings(
          new com.revenuecat.purchases.interfaces.ReceiveOfferingsCallback({
            onReceived: (offerings) => {
              const allOfferings: Offering[] = [];
              const nativeOfferings = offerings.getAll();
              const offeringKeys = new java.util.ArrayList<java.lang.String>(nativeOfferings.keySet());
              for (let i = 0; i < offeringKeys.size(); i++) {
                const key = offeringKeys.get(i);
                const offering = nativeOfferings.get(key);
                allOfferings.push(new Offering(offering));
              }
              resolve(allOfferings);
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async getEntitlementInfos(): Promise<Entitlement[]> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .getCustomerInfo(
          new com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback({
            onReceived: (customerInfo) => {
              const nativeEntitlements = customerInfo.getEntitlements().getAll();
              const entitlements: Entitlement[] = [];
              const entitlementKeys = new java.util.ArrayList<java.lang.String>(nativeEntitlements.keySet());
              for (let i = 0; i < entitlementKeys.size(); i++) {
                const key = entitlementKeys.get(i);
                const entitlement = nativeEntitlements.get(key);
                entitlements.push(new Entitlement(entitlement));
              }
              resolve(entitlements);
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async purchaseProduct(product: Product): Promise<PurchaseResult> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .purchase(
          new com.revenuecat.purchases.PurchaseParams.Builder(Utils.android.getCurrentActivity(), product.nativeValue).build(),
          new com.revenuecat.purchases.interfaces.PurchaseCallback({
            onCompleted: (purchase, purchaserInfo) => {
              resolve({
                productIdentifier: product.productId,
                customerInfo: new Customer(purchaserInfo),
                transaction: {
                  transactionIdentifier: purchase.getPurchaseToken(),
                  productIdentifier: purchase.getSubscriptionOptionId(),
                  purchaseDate: new Date(purchase.getPurchaseTime()).toISOString(),
                },
              });
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async restorePurchases(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .restorePurchases(
          new com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback({
            onReceived: (purchaserInfo) => {
              resolve(new Customer(purchaserInfo));
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async logIn(appUserID: string): Promise<{ customerInfo: Customer; created: boolean }> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .logIn(
          appUserID,
          new com.revenuecat.purchases.interfaces.LogInCallback({
            onReceived: (purchaserInfo, created) => {
              resolve({
                customerInfo: new Customer(purchaserInfo),
                created: created,
              });
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async logOut(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .logOut(
          new com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback({
            onReceived: (purchaserInfo) => {
              resolve(new Customer(purchaserInfo));
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async getCustomerInfo(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .getCustomerInfo(
          new com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback({
            onReceived: (purchaserInfo) => {
              resolve(new Customer(purchaserInfo));
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static async syncPurchases(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      Purchases()
        .getSharedInstance()
        .syncPurchases(
          new com.revenuecat.purchases.interfaces.SyncPurchasesCallback({
            onSuccess: (purchaserInfo) => {
              resolve(new Customer(purchaserInfo));
            },
            onError: (error) => {
              reject(error);
            },
          })
        );
    });
  }

  static getAppUserID(): string {
    return Purchases().getSharedInstance().getAppUserID();
  }

  static setDebugLogsEnabled(enabled: boolean): void {
    Purchases().setDebugLogsEnabled(enabled);
  }

  static setLogLevel(logLevel: number): void {
    Purchases().setLogLevel(logLevel);
  }

  static setAttributes(attributes: any): void {
    Purchases().getSharedInstance().setAttributes(Utils.dataSerialize(attributes));
  }

  static setEmail(email: string): void {
    Purchases().getSharedInstance().setEmail(email);
  }

  static setPhoneNumber(phone: string): void {
    Purchases().getSharedInstance().setPhoneNumber(phone);
  }

  static setDisplayName(displayName: string): void {
    Purchases().getSharedInstance().setDisplayName(displayName);
  }

  static setFirebaseAppInstanceID(firebaseAppInstanceID: string): void {
    Purchases().getSharedInstance().setFirebaseAppInstanceID(firebaseAppInstanceID);
  }

  static setKeyword(keyword: string): void {
    Purchases().getSharedInstance().setKeyword(keyword);
  }

  static async canMakePayments(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Purchases().canMakePayments(
        Utils.android.getApplicationContext(),
        new com.revenuecat.purchases.interfaces.Callback({
          onReceived: (canMakePayments) => {
            resolve(canMakePayments.booleanValue());
          },
        })
      );
    });
  }

  static isConfigured(): boolean {
    return Purchases().isConfigured();
  }
}
