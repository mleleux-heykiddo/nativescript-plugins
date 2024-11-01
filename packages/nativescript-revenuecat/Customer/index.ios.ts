import { Entitlement } from '../Entitlement/index.ios';
import { BaseCustomer } from './common';

export class Customer extends BaseCustomer {
  public nativeValue: RCCustomerInfo;

  constructor(nativeValue: RCCustomerInfo) {
    super(nativeValue);

    this.appUserId = nativeValue.originalAppUserId;
    this.originalPurchaseDate = new Date(nativeValue.originalPurchaseDate);
    this.expirationDate = new Date(nativeValue.latestExpirationDate);
    this.firstSeen = new Date(nativeValue.firstSeen);
    this.entitlements = Array.from(nativeValue.entitlements.active).map((entitlement) => new Entitlement(entitlement));
    this.allPurchasedProductIds = Array.from(nativeValue.allPurchasedProductIdentifiers);
  }

  public get debug(): string | null {
    if (this.nativeValue) {
      const temp: any = {};
      for (const i in this.nativeValue) {
        if ((<any>this.nativeValue)[i] != null) {
          temp[i] = (<any>this.nativeValue)[i];
        }
      }

      return JSON.stringify(temp);
    } else {
      return null;
    }
  }
}
