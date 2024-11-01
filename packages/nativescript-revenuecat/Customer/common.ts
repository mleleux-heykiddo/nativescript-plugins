import { Entitlement } from '../Entitlement';

type CustomerInfo = com.revenuecat.purchases.CustomerInfo;

export abstract class BaseCustomer {
  public nativeValue: CustomerInfo | RCCustomerInfo;
  public abstract readonly debug: string | null;

  public appUserId: string;
  public originalPurchaseDate: Date;
  public expirationDate: Date;
  public firstSeen: Date;
  public entitlements: Entitlement[] = [];
  public allPurchasedProductIds: string[] = [];

  constructor(nativeValue: CustomerInfo | RCCustomerInfo) {
    this.nativeValue = nativeValue;
  }
}
