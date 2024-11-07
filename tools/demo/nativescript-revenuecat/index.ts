import { DemoSharedBase } from '../utils';
import { RevenueCat } from '@mleleux/nativescript-revenuecat';

export class DemoSharedNativescriptRevenuecat extends DemoSharedBase {
  async getProducts() {
    const products = await RevenueCat.getProducts(['sub_annual_trial_1_week']); // replace with your own products here
    console.log(products);
    return products;
  }

  async getOfferings() {
    RevenueCat.getCurrentOffering()
      .then((offerings) => {
        console.log(offerings);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getEntitlements() {
    RevenueCat.getEntitlementInfos()
      .then((entitlements) => {
        console.log(entitlements);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getUserId() {
    const userId = await RevenueCat.getAppUserID();
    console.log(userId);
    return userId;
  }

  async login() {
    const appUserId = await this.getUserId();
    RevenueCat.logIn(appUserId)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async logout() {
    RevenueCat.logOut().then(() => {
      console.log('Logged out');
    });
  }

  async purchase() {
    const product = await this.getProducts();
    if (__IOS__) RevenueCat.setSimulatesAskToBuyInSandbox(true);

    RevenueCat.purchaseProduct(product[0])
      .then((purchase) => {
        console.log(purchase);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async restorePurchases() {
    RevenueCat.restorePurchases()
      .then((purchases) => {
        console.log(purchases);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getCustomerInfo() {
    RevenueCat.getCustomerInfo()
      .then((customerInfo) => {
        console.log(customerInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async setAttributes() {
    const attributes = {
      test: 'attribute',
    };
    RevenueCat.setAttributes(attributes)
      .then(() => {
        console.log('attributes set');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async setEmail() {
    const email = 'testemail@email.com';
    await RevenueCat.setEmail(email);
    console.log('email set');
  }

  async setPhone() {
    const phone = '33777777777';
    await RevenueCat.setPhoneNumber(phone);
    console.log('phone set');
  }

  async setDisplayName() {
    const displayName = 'testDisplay';
    await RevenueCat.setDisplayName(displayName);
    console.log('display name set');
  }

  async setFirebaseID() {
    const firebaseAppInstanceID = 'testFirebase';
    await RevenueCat.setFirebaseAppInstanceID(firebaseAppInstanceID);
    console.log('firebase id set');
  }
}
