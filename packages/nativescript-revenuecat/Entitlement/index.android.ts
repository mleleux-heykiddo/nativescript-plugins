import { BaseEntitlement, EntitlementPeriodType } from './common';
type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;
const PeriodType = com.revenuecat.purchases.PeriodType;

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
    this.periodType = this.mapPeriodType(nativeValue.getPeriodType()); // nativeValue.getPeriodType().toString();
    this.expirationDate = nativeValue.getExpirationDate() ? new Date(nativeValue.getExpirationDate().toString()) : null;
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }

  private mapPeriodType(periodType: com.revenuecat.purchases.PeriodType): EntitlementPeriodType {
    switch (periodType) {
      case PeriodType.NORMAL:
        return EntitlementPeriodType.NORMAL;
      case PeriodType.INTRO:
        return EntitlementPeriodType.INTRO;
      case PeriodType.TRIAL:
        return EntitlementPeriodType.TRIAL;
      default:
        return null;
    }
  }
}
