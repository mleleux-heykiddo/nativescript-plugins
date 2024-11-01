import { BaseEntitlement } from './common';
export declare type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;

export declare class Entitlement extends BaseEntitlement {
  public readonly debug: string | null;

  constructor(nativeValue: EntitlementInfo | RCEntitlementInfo);
}
