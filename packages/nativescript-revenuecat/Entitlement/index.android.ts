import { BaseEntitlement } from './common';
type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;

/**
 * @type {com.revenuecat.purchases.PeriodType}
 * @description * RevenueCat Android SDK Entitlement period types.
 *
 * Native Enum value mapping:
 * - NORMAL: "NORMAL"
 * - INTRO: "INTRO"
 * - TRIAL: "TRIAL"
 */
export const EntitlementPeriodType: com.revenuecat.purchases.PeriodType = Object.keys(com.revenuecat.purchases.PeriodType).reduce((acc, key) => {
  acc[key] = key; // Ensure the PeriodType value is a string instead of the native object
  return acc;
}, {});

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
    this.periodType = nativeValue.getPeriodType().toString();
    this.expirationDate = nativeValue.getExpirationDate() ? new Date(nativeValue.getExpirationDate().toString()) : null;
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
