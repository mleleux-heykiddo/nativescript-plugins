import { Entitlement } from '../Entitlement';
import { EntitlementPeriodType } from '../util/platform-utils';

type CustomerInfo = com.revenuecat.purchases.CustomerInfo;

export abstract class BaseCustomer {
  public nativeValue: CustomerInfo | RCCustomerInfo;
  public abstract readonly debug: string | null;

  /**
   * @description The unique identifier of the user.
   * @type {string}
   */
  public appUserId: string;
  /**
   * @description The original unique identifier of the user.
   * @type {string}
   */
  public originalAppUserId: string;
  /**
   * @description When the original purchase was made.
   * @type {Date}
   */
  public originalPurchaseDate: Date;
  /**
   * @description The expiration date of the user's subscription.
   * @type {Date}
   */
  public expirationDate: Date;
  /**
   * @description The date this user was first seen in RevenueCat.
   * @type {Date}
   */
  public firstSeen: Date;
  /**
   * @description Entitlements attached to the user's purchaser info.
   * @type {Entitlement[]}
   */
  public entitlements: Entitlement[] = [];
  /**
   * @description The list of product identifiers purchased by the user.
   * @type {string[]}
   */
  public allPurchasedProductIds: string[] = [];

  constructor(nativeValue: CustomerInfo | RCCustomerInfo) {
    this.nativeValue = nativeValue;
  }

  /**
   * @description Checks if the user has an entitlement in a trialing period.
   * @returns {boolean}
   */
  public hasTrialPeriod(): boolean {
    const hasTrialPeriodEntitlement = this.entitlements.some((entitlement) => entitlement.periodType === EntitlementPeriodType.TRIAL);
    return hasTrialPeriodEntitlement;
  }
}
