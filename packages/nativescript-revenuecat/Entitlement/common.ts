type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;

export abstract class BaseEntitlement {
  public nativeValue: EntitlementInfo | RCEntitlementInfo;
  public abstract readonly debug: string | null;

  public entitlementId: string;
  public isActive: boolean;
  public isSandbox: boolean;
  public latestPurchaseDate: Date;
  public originalPurchaseDate: Date;
  public unsubscribeDate: Date;
  public productId: string;
  public willRenew: boolean;

  constructor(nativeValue: EntitlementInfo | RCEntitlementInfo) {
    this.nativeValue = nativeValue;
  }
}
