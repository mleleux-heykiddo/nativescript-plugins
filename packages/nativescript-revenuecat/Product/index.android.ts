import { BaseProduct, BillingPeriod, RecurrenceMode } from './common';
export { RecurrenceMode } from './common';
type ProductDetails = com.revenuecat.purchases.models.GoogleStoreProduct;
type GoogleSubscriptionOption = com.revenuecat.purchases.models.GoogleSubscriptionOption;
type PricingPhase = com.revenuecat.purchases.models.PricingPhase;

const ProductType = com.revenuecat.purchases.ProductType;
const PeriodUnit = com.revenuecat.purchases.models.Period.Unit;

export class Product extends BaseProduct {
  public nativeValue: ProductDetails;

  constructor(nativeValue: ProductDetails) {
    super(nativeValue);

    this.productId = nativeValue.getProductId();
    this.localizedDescription = nativeValue.getDescription();
    this.localizedTitle = nativeValue.getTitle();
    this.type = nativeValue.getType().toString();
    if (this.type === ProductType.INAPP.toString()) {
      const details = nativeValue.getPrice();
      this.priceAmount = details.getAmountMicros() / 1000000;
      this.priceFormatted = details.getFormatted();
      this.priceCurrencyCode = details.getCurrencyCode();
    } else if (this.type === ProductType.SUBS.toString()) {
      const subscriptionOfferDetails = nativeValue.getSubscriptionOptions().get(0) as GoogleSubscriptionOption;
      this.offerToken = subscriptionOfferDetails.getOfferToken();
      const pricingPhaseList = subscriptionOfferDetails.getPricingPhases();
      const listSize = pricingPhaseList.size();
      for (let i = 0; i < listSize; i++) {
        const details: PricingPhase = pricingPhaseList.get(i);
        const price = details.getPrice();
        if (i === listSize - 1) {
          this.priceAmount = price.getAmountMicros() / 1000000;
          this.priceFormatted = price.getFormatted();
          this.priceCurrencyCode = price.getCurrencyCode();
          this.billingPeriod = this.mapBillingPeriod(details.getBillingPeriod().getUnit());
        }
        this.pricingPhases.push({
          priceAmount: price.getAmountMicros() / 1000000,
          priceFormatted: price.getFormatted(),
          priceCurrencyCode: price.getCurrencyCode(),
          billingPeriod: details.getBillingPeriod().getUnit().toString(),
          billingCycleCount: details.getBillingPeriod().getValue(),
          recurrenceMode: RecurrenceMode[details.getRecurrenceMode().toString()],
        });
      }
    }
  }

  private mapBillingPeriod(unit): BillingPeriod {
    switch (unit) {
      case PeriodUnit.DAY:
        return BillingPeriod.DAY;
      case PeriodUnit.WEEK:
        return BillingPeriod.WEEK;
      case PeriodUnit.MONTH:
        return BillingPeriod.MONTH;
      case PeriodUnit.YEAR:
        return BillingPeriod.YEAR;
      default:
        throw new Error(`Unknown billing period unit: ${unit}`);
    }
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
