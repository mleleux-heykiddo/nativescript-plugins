import { BaseProduct } from './common';
export { RecurrenceMode } from './common';
export declare type ProductDetails = com.revenuecat.purchases.models.GoogleStoreProduct;

export declare class Product extends BaseProduct {
  public readonly debug: string | null;

  constructor(nativeValue: ProductDetails | RCStoreProduct);
}
