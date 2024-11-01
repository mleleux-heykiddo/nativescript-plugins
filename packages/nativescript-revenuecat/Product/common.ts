type ProductDetails = com.revenuecat.purchases.models.GoogleStoreProduct;

export enum RecurrenceMode {
  INFINITE_RECURRING = 1,
  FINITE_RECURRING = 2,
  NON_RECURRING = 3,
  UNKNOWN = 4,
}

export enum ProductCategory {
  SUBSCRIPTION = 0,
  NON_SUBSCRIPTION = 1,
}

export abstract class BaseProduct {
  public nativeValue: ProductDetails | RCStoreProduct;
  public abstract readonly debug: string | null;

  public productId: string;
  public localizedTitle: string;
  public localizedDescription: string;
  public priceAmount: number;
  public priceFormatted: string;
  public priceCurrencyCode: string;
  public billingPeriod: string;
  /** Android only */
  public type: string;
  public offerToken: string;
  public pricingPhases: Array<{
    priceAmount: number;
    priceFormatted: string;
    priceCurrencyCode: string;
    billingPeriod: string;
    billingCycleCount: number;
    recurrenceMode: RecurrenceMode;
  }> = [];
  /** iOS only */
  public isFamilyShareable: boolean;
  public productCategory: ProductCategory;
  public skProduct: SKProduct;

  constructor(nativeValue: ProductDetails | RCStoreProduct) {
    this.nativeValue = nativeValue;
  }
}
