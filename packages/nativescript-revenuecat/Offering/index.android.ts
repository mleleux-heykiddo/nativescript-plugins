import { Product } from '../Product/index.android';
import { BaseOffering } from './common';
type ProductOffering = com.revenuecat.purchases.Offering;

export class Offering extends BaseOffering {
  public nativeValue: ProductOffering;

  constructor(nativeValue: ProductOffering) {
    super(nativeValue);
    this.offeringId = nativeValue.getIdentifier();
    this.description = nativeValue.getServerDescription();
    const metadata = nativeValue.getMetadata();
    const metadataKeys = new java.util.ArrayList<com.revenuecat.purchases.Offerings>(metadata.keySet());
    for (let i = 0; i < metadataKeys.size(); i++) {
      const key = metadataKeys.get(i);
      const value = metadata.get(key).toString();
      this.metadata[key] = value;
    }
    const packages = nativeValue.getAvailablePackages();
    for (let i = 0; i < packages.size(); i++) {
      const nativePackage = packages.get(i);
      this.availablePackages.push({
        storeProduct: new Product(nativePackage.getProduct()),
        packageId: nativePackage.getIdentifier(),
      });
    }
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
