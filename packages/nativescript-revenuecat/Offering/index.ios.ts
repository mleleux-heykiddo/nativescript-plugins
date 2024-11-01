import { Product } from '../Product/index.ios';
import { BaseOffering } from './common';

export class Offering extends BaseOffering {
  public nativeValue: RCOffering;

  constructor(nativeValue: RCOffering) {
    super(nativeValue);

    this.offeringId = nativeValue.identifier;
    this.description = nativeValue.serverDescription;
    this.metadata = Object.fromEntries(Array.from(nativeValue.metadata.allKeys).map((key) => [key, nativeValue.metadata.objectForKey(key)]));
    const packages = Array.from(nativeValue.availablePackages);
    this.availablePackages = packages.map((nativePackage) => ({
      storeProduct: new Product(nativePackage.storeProduct),
      packageId: nativePackage.identifier,
    }));
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
