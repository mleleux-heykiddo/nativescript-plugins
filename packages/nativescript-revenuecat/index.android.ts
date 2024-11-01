import { PurchaseResult, RevenueCatCommon } from './common';
import { Utils } from '@nativescript/core';
import { Product } from './Product/index.android';
import { Offering } from './Offering/index.android';
import { Entitlement } from './Entitlement/index.android';
import { Customer } from './Customer/index.android';

const Purchases = com.revenuecat.purchases.Purchases;
const PurchasesConfiguration = com.revenuecat.purchases.PurchasesConfiguration;
const Interfaces = com.revenuecat.purchases.interfaces;

export class RevenueCat extends RevenueCatCommon {
  static configure(apiKey: string, appUserID?: string): void {
    if (!appUserID) {
      Purchases.configure(new PurchasesConfiguration.Builder(Utils.android.getApplicationContext(), apiKey).build());
    } else {
      Purchases.configure(new PurchasesConfiguration.Builder(Utils.android.getApplicationContext(), apiKey).appUserID(appUserID).build());
    }
  }

  static async getProducts(productIdentifiers: string[]): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      Purchases.getSharedInstance().getProducts(
        Utils.dataSerialize(productIdentifiers),
        new Interfaces.GetStoreProductsCallback({
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

  static async getOfferings(): Promise<Offering[]> {
    return new Promise((resolve, reject) => {
      Purchases.getSharedInstance().getOfferings(
        new Interfaces.ReceiveOfferingsCallback({
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
      Purchases.getSharedInstance().getCustomerInfo(
        new Interfaces.ReceiveCustomerInfoCallback({
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
      Purchases.getSharedInstance().purchase(
        new com.revenuecat.purchases.PurchaseParams.Builder(Utils.android.getCurrentActivity(), product.nativeValue).build(),
        new Interfaces.PurchaseCallback({
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
      Purchases.getSharedInstance().restorePurchases(
        new Interfaces.ReceiveCustomerInfoCallback({
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

  static async getAppUserID(): Promise<string> {
    return Purchases.getSharedInstance().getAppUserID();
  }

  static async logIn(appUserID: string): Promise<{ customerInfo: Customer; created: boolean }> {
    return new Promise((resolve, reject) => {
      Purchases.getSharedInstance().logIn(
        appUserID,
        new Interfaces.LogInCallback({
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
      Purchases.getSharedInstance().logOut(
        new Interfaces.ReceiveCustomerInfoCallback({
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

  static async setDebugLogsEnabled(enabled: boolean): Promise<void> {
    Purchases.setDebugLogsEnabled(enabled);
  }

  static async setLogLevel(logLevel: number): Promise<void> {
    Purchases.setLogLevel(logLevel);
  }

  static async getCustomerInfo(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      Purchases.getSharedInstance().getCustomerInfo(
        new Interfaces.ReceiveCustomerInfoCallback({
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

  static async setAttributes(attributes: any): Promise<void> {
    Purchases.getSharedInstance().setAttributes(Utils.dataSerialize(attributes));
  }

  static async setEmail(email: string): Promise<void> {
    Purchases.getSharedInstance().setEmail(email);
  }

  static async setPhoneNumber(phone: string): Promise<void> {
    Purchases.getSharedInstance().setPhoneNumber(phone);
  }

  static async setDisplayName(displayName: string): Promise<void> {
    Purchases.getSharedInstance().setDisplayName(displayName);
  }

  static async setFirebaseAppInstanceID(firebaseAppInstanceID: string): Promise<void> {
    Purchases.getSharedInstance().setFirebaseAppInstanceID(firebaseAppInstanceID);
  }

  static async setKeyword(keyword: string): Promise<void> {
    Purchases.getSharedInstance().setKeyword(keyword);
  }

  static async canMakePayments(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Purchases.canMakePayments(
        Utils.android.getApplicationContext(),
        new Interfaces.Callback({
          onReceived: (canMakePayments) => {
            resolve(canMakePayments.booleanValue());
          },
        })
      );
    });
  }

  static async isConfigured(): Promise<boolean> {
    return Purchases.isConfigured();
  }
}
