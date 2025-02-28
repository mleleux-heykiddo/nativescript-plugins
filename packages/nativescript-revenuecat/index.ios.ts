import { LogInResult, PurchaseResult, RevenueCatCommon } from './common';
import { Product } from './Product/index.ios';
import { ProductCategory } from './Product/common';
import { Offering } from './Offering/index.ios';
import { Entitlement } from './Entitlement/index.ios';
import { Customer } from './Customer/index.ios';

export class RevenueCat extends RevenueCatCommon {
  static configure(apiKey: string, appUserID?: string): void {
    RCPurchases.debugLogsEnabled = true;
    if (!appUserID) {
      RCPurchases.configureWithAPIKey(apiKey);
    } else {
      RCPurchases.configureWithAPIKeyAppUserID(apiKey, appUserID);
    }
  }

  static setSimulatesAskToBuyInSandbox(value: boolean): void {
    RCPurchases.setSimulatesAskToBuyInSandbox(value);
  }

  static async getProducts(productIdentifiers: string[], type: ProductCategory = ProductCategory.SUBSCRIPTION): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.getProductsWithIdentifiersCompletion(productIdentifiers, (products) => {
        if (!products) {
          return reject();
        }

        const purchasesStoreProducts: Product[] = Array.from(products)
          .map((product) => {
            return new Product(product);
          })
          .filter((product) => {
            return product.productCategory == type;
          });

        resolve(purchasesStoreProducts);
      });
    });
  }

  static async getCurrentOffering(): Promise<Offering> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.getOfferingsWithCompletion((offerings, error) => {
        if (error) {
          return reject(error);
        }

        resolve(new Offering(offerings.current));
      });
    });
  }

  static async getAllOfferings(): Promise<Offering[]> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.getOfferingsWithCompletion((offerings, error) => {
        if (error) {
          return reject(error);
        }

        const purchasesOfferings = Array.from(offerings.all.allValues).map((offering) => {
          return new Offering(offering);
        });

        resolve(purchasesOfferings);
      });
    });
  }

  static async getEntitlementInfos(): Promise<Entitlement[]> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.getCustomerInfoWithCompletion((customerInfo, error) => {
        if (error) {
          return reject(error);
        }

        const entitlements = Array.from(customerInfo.entitlements.active).map((entitlement) => {
          return new Entitlement(entitlement);
        });

        resolve(entitlements);
      });
    });
  }

  static async purchaseProduct(product: Product): Promise<PurchaseResult> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.purchaseProductWithCompletion(product.nativeValue, (transactionInfo, customerInfo, error, userCancelled) => {
        if (error) {
          return reject(error);
        }
        if (userCancelled) {
          return reject('User cancelled');
        }
        resolve({
          productIdentifier: product.productId,
          customerInfo: new Customer(customerInfo),
          transaction: {
            transactionIdentifier: transactionInfo.transactionIdentifier,
            productIdentifier: transactionInfo.productIdentifier,
            purchaseDate: transactionInfo.purchaseDate ? new Date(transactionInfo.purchaseDate).toISOString() : null,
          },
        });
      });
    });
  }

  static async restorePurchases(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.restorePurchasesWithCompletion((purchaserInfo, error) => {
        if (error) {
          return reject(error);
        }
        resolve(new Customer(purchaserInfo));
      });
    });
  }

  static async getAppUserID(): Promise<string> {
    return RCPurchases.sharedPurchases.appUserID;
  }

  static async logIn(appUserID: string): Promise<LogInResult> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.logInCompletion(appUserID, (purchaserInfo, created, error) => {
        if (error) {
          return reject(error);
        }

        resolve({
          customerInfo: new Customer(purchaserInfo),
          created: created,
        });
      });
    });
  }

  static async logOut(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.logOutWithCompletion((purchaserInfo, error) => {
        if (error) {
          return reject(error);
        }

        resolve(new Customer(purchaserInfo));
      });
    });
  }

  static async getCustomerInfo(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.getCustomerInfoWithCompletion((purchaserInfo, error) => {
        if (error) {
          return reject(error);
        }
        resolve(new Customer(purchaserInfo));
      });
    });
  }

  static async syncPurchases(): Promise<Customer> {
    return new Promise((resolve, reject) => {
      RCPurchases.sharedPurchases.syncPurchasesWithCompletion((purchaserInfo, error) => {
        if (error) {
          return reject(error);
        }
        resolve(new Customer(purchaserInfo));
      });
    });
  }

  static setDebugLogsEnabled(enabled: boolean): void {
    RCPurchases.setDebugLogsEnabled(enabled);
  }

  static setLogLevel(logLevel: number): void {
    RCPurchases.setLogLevel(logLevel);
  }

  static setAttributes(attributes: any): void {
    RCPurchases.sharedPurchases.setAttributes(attributes);
  }

  static setEmail(email: string): void {
    RCPurchases.sharedPurchases.setEmail(email);
  }

  static setPhoneNumber(phone: string): void {
    RCPurchases.sharedPurchases.setPhoneNumber(phone);
  }

  static setDisplayName(displayName: string): void {
    RCPurchases.sharedPurchases.setDisplayName(displayName);
  }

  static setFirebaseAppInstanceID(firebaseAppInstanceID: string): void {
    RCPurchases.sharedPurchases.setFirebaseAppInstanceID(firebaseAppInstanceID);
  }

  static setKeyword(keyword: string): void {
    RCPurchases.sharedPurchases.setKeyword(keyword);
  }

  static canMakePayments(): boolean {
    return RCPurchases.canMakePayments();
  }

  static isConfigured(): boolean {
    return RCPurchases.isConfigured;
  }
}
