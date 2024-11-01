import { BaseEntitlement } from './common';
type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;

export class Entitlement extends BaseEntitlement {
  public nativeValue: EntitlementInfo;

  constructor(nativeValue: EntitlementInfo) {
    super(nativeValue);

    this.entitlementId = nativeValue.getIdentifier();
    this.isActive = nativeValue.isActive();
    this.isSandbox = nativeValue.isSandbox();
    this.latestPurchaseDate = nativeValue.getLatestPurchaseDate() ? new Date(nativeValue.getLatestPurchaseDate().toString()) : null;
    this.originalPurchaseDate = nativeValue.getOriginalPurchaseDate() ? new Date(nativeValue.getOriginalPurchaseDate().toString()) : null;
    this.unsubscribeDate = nativeValue.getUnsubscribeDetectedAt() ? new Date(nativeValue.getUnsubscribeDetectedAt().toString()) : null;
    this.productId = nativeValue.getProductIdentifier();
    this.willRenew = nativeValue.getWillRenew();
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
