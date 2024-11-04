import { Entitlement } from '../Entitlement/index.android';
import { BaseCustomer } from './common';
type CustomerInfo = com.revenuecat.purchases.CustomerInfo;

const Purchases = com.revenuecat.purchases.Purchases;
export class Customer extends BaseCustomer {
  public nativeValue: CustomerInfo;

  constructor(nativeValue: CustomerInfo) {
    super(nativeValue);

    this.appUserId = Purchases.getSharedInstance().getAppUserID();
    this.originalAppUserId = nativeValue.getOriginalAppUserId();
    this.originalPurchaseDate = nativeValue.getOriginalPurchaseDate() ? new Date(nativeValue.getOriginalPurchaseDate().toString()) : null;
    this.expirationDate = nativeValue.getLatestExpirationDate() ? new Date(nativeValue.getLatestExpirationDate().toString()) : null;
    this.firstSeen = nativeValue.getFirstSeen() ? new Date(nativeValue.getFirstSeen().toString()) : null;
    const activeEntitlements = nativeValue.getEntitlements().getActive();
    const entitlementKeys = new java.util.ArrayList<java.lang.String>(activeEntitlements.keySet());
    for (let i = 0; i < entitlementKeys.size(); i++) {
      const key = entitlementKeys.get(i);
      const entitlement = activeEntitlements.get(key);
      this.entitlements.push(new Entitlement(entitlement));
    }
    const productIdentifiers = new java.util.ArrayList<java.lang.String>(nativeValue.getAllPurchasedProductIds());
    for (let i = 0; i < productIdentifiers.size(); i++) {
      this.allPurchasedProductIds.push(productIdentifiers.get(i));
    }
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
