import { BaseProduct } from '../Product/common';

type ProductOffering = com.revenuecat.purchases.Offering;

export interface BasePackage {
  packageId: string;
  storeProduct: BaseProduct;
  nativeProduct?: SKProduct;
}

export abstract class BaseOffering {
  public nativeValue: ProductOffering | RCOffering;
  public abstract readonly debug: string | null;

  public offeringId: string;
  public availablePackages: Array<BasePackage> = [];
  public metadata: { [key: string]: string } = {};
  public description: string;

  constructor(nativeValue: ProductOffering | RCOffering) {
    this.nativeValue = nativeValue;
  }
}
