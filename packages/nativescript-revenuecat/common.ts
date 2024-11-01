import { Observable } from '@nativescript/core';
import { Customer } from './Customer';

export interface PurchasesStoreTransaction {
  /**
   * Id of the transaction.
   */
  transactionIdentifier: string;
  /**
   * Product Id associated with the transaction.
   */
  productIdentifier: string;
  /**
   * Purchase date of the transaction in ISO 8601 format.
   */
  purchaseDate: string;
}

export type PurchaseResult = {
  /**
   * The product identifier of the purchased product
   */
  productIdentifier: string;
  /**
   * The Customer Info for the user.
   */
  customerInfo: Customer;
  /**
   * The transaction object for the purchase
   */
  transaction: PurchasesStoreTransaction;
};

export interface LogInResult {
  /**
   * The Customer Info for the user.
   */
  readonly customerInfo: Customer;
  /**
   * True if the call resulted in a new user getting created in the RevenueCat backend.
   */
  readonly created: boolean;
}

export class RevenueCatCommon extends Observable {}
