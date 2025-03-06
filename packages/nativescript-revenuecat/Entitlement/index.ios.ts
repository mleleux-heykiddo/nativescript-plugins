import { BaseEntitlement, EntitlementPeriodType } from './common';

export class Entitlement extends BaseEntitlement {
  public nativeValue: RCEntitlementInfo;

  constructor(nativeValue: RCEntitlementInfo) {
    super(nativeValue);

    this.entitlementId = nativeValue.identifier;
    this.isActive = nativeValue.isActive;
    this.isSandbox = nativeValue.isSandbox;
    this.latestPurchaseDate = nativeValue.latestPurchaseDate;
    this.originalPurchaseDate = nativeValue.originalPurchaseDate;
    this.unsubscribeDate = nativeValue.unsubscribeDetectedAt;
    this.productId = nativeValue.productIdentifier;
    this.willRenew = nativeValue.willRenew;
    this.periodType = this.mapPeriodType(nativeValue.periodType);
    this.expirationDate = nativeValue.expirationDate;
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

  private mapPeriodType(periodType: RCPeriodType): EntitlementPeriodType {
    switch (periodType) {
      case RCPeriodType.Normal:
        return EntitlementPeriodType.NORMAL;
      case RCPeriodType.Intro:
        return EntitlementPeriodType.INTRO;
      case RCPeriodType.Trial:
        return EntitlementPeriodType.TRIAL;
      default:
        return null;
    }
  }
}
