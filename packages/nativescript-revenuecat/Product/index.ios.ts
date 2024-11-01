import { BaseProduct, ProductCategory } from './common';

export class Product extends BaseProduct {
  public nativeValue: RCStoreProduct;

  constructor(nativeValue: RCStoreProduct) {
    super(nativeValue);

    this.productId = nativeValue.productIdentifier;
    this.localizedDescription = nativeValue.localizedDescription;
    this.localizedTitle = nativeValue.localizedTitle;
    this.priceAmount = nativeValue.price.doubleValue;
    this.priceFormatted = nativeValue.localizedPriceString;
    this.priceCurrencyCode = nativeValue.currencyCode;
    this.billingPeriod = nativeValue.subscriptionPeriod.unit.toString();
    this.isFamilyShareable = nativeValue.isFamilyShareable;
    this.productCategory = this.mapProductCategory(nativeValue.productCategory);
    this.skProduct = nativeValue.sk1Product;
  }

  private mapProductCategory(nativeCategory: RCStoreProductCategory): ProductCategory {
    switch (nativeCategory) {
      case RCStoreProductCategory.Subscription:
        return ProductCategory.SUBSCRIPTION;
      case RCStoreProductCategory.NonSubscription:
        return ProductCategory.NON_SUBSCRIPTION;
      default:
        throw new Error(`Unknown product category: ${nativeCategory}`);
    }
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
