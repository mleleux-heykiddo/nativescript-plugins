import { BaseEntitlement } from './common';

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
}
