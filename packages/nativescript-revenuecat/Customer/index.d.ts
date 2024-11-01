import { BaseCustomer } from './common';
export declare type CustomerInfo = com.revenuecat.purchases.CustomerInfo;

export declare class Customer extends BaseCustomer {
  public readonly debug: string | null;

  constructor(nativeValue: CustomerInfo | RCCustomerInfo);
}
