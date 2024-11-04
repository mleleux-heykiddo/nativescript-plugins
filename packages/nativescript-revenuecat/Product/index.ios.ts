import { BaseProduct, BillingPeriod, ProductCategory } from './common';

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
    this.billingPeriod = this.mapBillingPeriod(nativeValue.subscriptionPeriod.unit);
    this.isFamilyShareable = nativeValue.isFamilyShareable;
    this.productCategory = this.mapProductCategory(nativeValue.productCategory);
    this.skProduct = nativeValue.sk1Product;
  }

  private mapBillingPeriod(unit: RCSubscriptionPeriodUnit): BillingPeriod {
    switch (unit) {
      case RCSubscriptionPeriodUnit.Day:
        return BillingPeriod.DAY;
      case RCSubscriptionPeriodUnit.Week:
        return BillingPeriod.WEEK;
      case RCSubscriptionPeriodUnit.Month:
        return BillingPeriod.MONTH;
      case RCSubscriptionPeriodUnit.Year:
        return BillingPeriod.YEAR;
      default:
        throw new Error(`Unknown billing period unit: ${unit}`);
    }
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
