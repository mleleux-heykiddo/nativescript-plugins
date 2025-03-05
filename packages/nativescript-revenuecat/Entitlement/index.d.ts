import { BaseEntitlement } from './common';
export declare type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;

/**
 * @description iOS or Android SDK specific Entitlement period types.
 */
export declare const EntitlementPeriodType;

export declare class Entitlement extends BaseEntitlement {
  public readonly debug: string | null;

  constructor(nativeValue: EntitlementInfo | RCEntitlementInfo);
}
