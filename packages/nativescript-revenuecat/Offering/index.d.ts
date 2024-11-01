import { BaseOffering } from './common';
export declare type ProductOffering = com.revenuecat.purchases.Offering;

export declare class Offering extends BaseOffering {
  public readonly debug: string | null;

  constructor(nativeValue: ProductOffering | RCOffering);
}
