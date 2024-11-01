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

  static async getOfferings(): Promise<Offering[]> {
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

  static async setDebugLogsEnabled(enabled: boolean): Promise<void> {
    RCPurchases.setDebugLogsEnabled(enabled);
  }

  static async setLogLevel(logLevel: number): Promise<void> {
    RCPurchases.setLogLevel(logLevel);
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

  static async setAttributes(attributes: any): Promise<void> {
    RCPurchases.sharedPurchases.setAttributes(attributes);
  }

  static async setEmail(email: string): Promise<void> {
    RCPurchases.sharedPurchases.setEmail(email);
  }

  static async setPhoneNumber(phone: string): Promise<void> {
    RCPurchases.sharedPurchases.setPhoneNumber(phone);
  }

  static async setDisplayName(displayName: string): Promise<void> {
    RCPurchases.sharedPurchases.setDisplayName(displayName);
  }

  static async setFirebaseAppInstanceID(firebaseAppInstanceID: string): Promise<void> {
    RCPurchases.sharedPurchases.setFirebaseAppInstanceID(firebaseAppInstanceID);
  }

  static async setKeyword(keyword: string): Promise<void> {
    RCPurchases.sharedPurchases.setKeyword(keyword);
  }

  static async canMakePayments(): Promise<boolean> {
    return RCPurchases.canMakePayments();
  }

  static async isConfigured(): Promise<boolean> {
    return RCPurchases.isConfigured;
  }
}
