type EntitlementInfo = com.revenuecat.purchases.EntitlementInfo;

/**
 * @description iOS or Android SDK specific Entitlement period types.
 */
export enum EntitlementPeriodType {
  NORMAL = 'NORMAL',
  INTRO = 'INTRO',
  TRIAL = 'TRIAL',
}

export abstract class BaseEntitlement {
  public nativeValue: EntitlementInfo | RCEntitlementInfo;
  public abstract readonly debug: string | null;

  /**
    The entitlement identifier configured in the RevenueCat dashboard.
  */
  public entitlementId: string;
  /**
    True if the user has access to this entitlement.
  */
  public isActive: boolean;
  /**
    False if this entitlement is unlocked via a production purchase.
  */
  public isSandbox: boolean;
  /**
    The latest purchase or renewal date for the entitlement.
  */
  public latestPurchaseDate: Date;
  /**
    The first date this entitlement was purchased.
  */
  public originalPurchaseDate: Date;
  /**
    [Android] The date the user canceled the subscription. Will be null if the user has not canceled.
  */
  public unsubscribeDate: Date;
  /**
    The product identifier that unlocked this entitlement.
  */
  public productId: string;
  /**
    True if the underlying subscription is set to renew at the end of
    the billing period (expirationDate). Will always be True if entitlement
    is for lifetime access.
  */
  public willRenew: boolean;
  /**
    The last period type this entitlement was in.
  */
  public periodType: EntitlementPeriodType;
  /**
    The expiration date for the entitlement, can be `nil` for lifetime access.
  */
  public expirationDate?: Date;

  constructor(nativeValue: EntitlementInfo | RCEntitlementInfo) {
    this.nativeValue = nativeValue;
  }
}
