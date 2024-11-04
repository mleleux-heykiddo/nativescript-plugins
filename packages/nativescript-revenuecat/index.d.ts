import { LogInResult, PurchaseResult, RevenueCatCommon } from './common';
import { Entitlement } from './Entitlement';
import { Offering } from './Offering';
import { Product } from './Product';
import { ProductCategory } from './Product/common';

export { LogInResult, PurchaseResult, PurchasesStoreTransaction } from './common';
export * from './Customer';
export * from './Entitlement';
export * from './Offering';
export * from './Product';

export declare class RevenueCat extends RevenueCatCommon {
  /**
   * Sets up Purchases with your API key and an app user id.
   * @param {String} apiKey RevenueCat API Key. Needs to be a String
   * @param {String?} appUserID An optional unique id for identifying the user. Needs to be a string.
   */
  public static configure(apiKey: string, appUserId?: string): void;

  /**
   * iOS only.
   * @param {boolean} simulatesAskToBuyInSandbox Set this property to true *only* when testing the ask-to-buy / SCA
   * purchases flow. More information: http://errors.rev.cat/ask-to-buy
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet.
   */
  public static async setSimulatesAskToBuyInSandbox(simulatesAskToBuyInSandbox: boolean): Promise<void>;

  /**
   * Fetch the product info
   * @param {String[]} productIdentifiers Array of product identifiers
   * @param {String} type Optional type of products to fetch, can be SUBSCRIPTION or NON_SUBSCRIPTION. SUBSCRIPTION by default
   * @returns {Promise<Product[]>} A promise containing an array of products. The promise will be rejected
   * if the products are not properly configured in RevenueCat or if there is another error retrieving them.
   * Rejections return an error code, and a userInfo object with more information. The promise will also be rejected
   * if configure has not been called yet.
   */
  public static async getProducts(productIdentifiers: string[], type: ProductCategory = ProductCategory.SUBSCRIPTION): Promise<Product[]>;

  /**
   * Gets the map of current offering
   * @returns {Promise<Offering>} Promise of offering structure. The promise will be rejected if configure
   * has not been called yet.
   */
  public static async getCurrentOffering(): Promise<Offering>;

  /**
   * Gets the map of offerings -> products
   * @returns {Promise<Offering[]>} Promise of entitlements structure. The promise will be rejected if configure
   * has not been called yet.
   */
  public static async getAllOfferings(): Promise<Offering[]>;

  /**
   * Gets the entitlements for the current user.
   * @returns {Promise<Entitlement>} Promise of entitlements structure. The promise will be rejected if configure
   * has not been called yet.
   */
  public static async getEntitlementInfos(): Promise<Entitlement>;

  /**
   * Make a purchase
   *
   * @param {String} productIdentifier The product identifier of the product you want to purchase
   * @returns {Promise<PurchaseResult>} A promise of a purchase object. The promise will be rejected if the purchase
   */
  public static async purchaseProduct(product: Product): Promise<PurchaseResult>;

  /**
   * Restores a user's previous purchases and links their appUserIDs to any user's also using those purchases.
   * @returns {Promise<Customer>} A promise of a customer info object. Rejections return an error code, and an
   * userInfo object with more information. The promise will be also be rejected if configure has not been called yet.
   */
  public static async restorePurchases(): Promise<Customer>;

  /**
   * Get the appUserID
   * @returns {Promise<string>} The app user id in a promise
   */
  public static async getAppUserID(): Promise<string>;

  /**
   * This function will logIn the current user with an appUserID. Typically this would be used after a log in
   * to identify a user without calling configure.
   * @param {String} appUserID The appUserID that should be linked to the currently user
   * @returns {Promise<LogInResult>} A promise of an object that contains the customerInfo after logging in, as well
   * as a boolean indicating whether the user has just been created for the first time in the RevenueCat backend. The
   * promise will be rejected if configure has not been called yet or if there's an issue logging in.
   */
  public static async logIn(appUserID: string): Promise<LogInResult>;

  /**
   * Logs out the Purchases client clearing the saved appUserID. This will generate a random user id and save it in the cache.
   * @returns {Promise<Customer>} A promise of a customer info object. Rejections return an error code,
   * and a userInfo object with more information. The promise will be rejected if configure has not been called yet or if
   * there's an issue logging out.
   */
  public static async logOut(): Promise<Customer>;

  /**
   * Enables/Disables debugs logs
   * @param {boolean} enabled Enable or not debug logs
   * @deprecated, use setLogLevel instead
   */
  public static async setDebugLogsEnabled(enabled: boolean): Promise<void>;

  /**
   * Used to set the log level. Useful for debugging issues with the lovely team @RevenueCat.
   * The default is {LOG_LEVEL.INFO} in release builds and {LOG_LEVEL.DEBUG} in debug builds.
   * @param {LOG_LEVEL} level
   */
  public static async setLogLevel(level: number): Promise<void>;

  /**
   * Gets current customer info
   * @returns {Promise<Customer>} A promise of a customer info object. Rejections return an error code, and an
   * userInfo object with more information. The promise will be rejected if configure has not been called yet or if
   * there's an issue getting the customer information.
   */
  public static async getCustomerInfo(): Promise<Customer>;

  /**
   * Subscriber attributes are useful for storing additional, structured information on a user.
   * Since attributes are writable using a public key they should not be used for
   * managing secure or sensitive information such as subscription status, coins, etc.
   *
   * Key names starting with "$" are reserved names used by RevenueCat. For a full list of key
   * restrictions refer to our guide: https://docs.revenuecat.com/docs/subscriber-attributes
   *
   * @param attributes Map of attributes by key. Set the value as an empty string to delete an attribute.
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet or there's an error
   * setting the subscriber attributes.
   */
  public static async setAttributes(attributes: { [key: string]: string | null }): Promise<void>;

  /**
   * Subscriber attribute associated with the email address for the user
   *
   * @param email Empty String or null will delete the subscriber attribute.
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet or if there's an error
   * setting the email.
   */
  public static async setEmail(email: string | null): Promise<void>;

  /**
   * Subscriber attribute associated with the phone number for the user
   *
   * @param phoneNumber Empty String or null will delete the subscriber attribute.
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet or if there's an error
   * setting the phone number.
   */
  public static async setPhoneNumber(phoneNumber: string | null): Promise<void>;

  /**
   * Subscriber attribute associated with the display name for the user
   *
   * @param displayName Empty String or null will delete the subscriber attribute.
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet or if there's an error
   * setting the display name.
   */
  public static async setDisplayName(displayName: string | null): Promise<void>;

  /**
   * Subscriber attribute associated with the Firebase App Instance ID for the user
   * Required for the RevenueCat Firebase integration
   *
   * @param firebaseAppInstanceID Firebase App Instance ID to use in Firebase integration. Empty String or null will delete the subscriber attribute.
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet or if there's an error
   * setting the Firebase App Instance ID.
   */
  public static async setFirebaseAppInstanceID(firebaseAppInstanceID: string | null): Promise<void>;

  /**
   * Subscriber attribute associated with the install keyword for the user
   *
   * @param keyword Empty String or null will delete the subscriber attribute.
   * @returns {Promise<void>} The promise will be rejected if configure has not been called yet or if there's an error
   * setting the keyword.
   */
  public static async setKeyword(keyword: string | null): Promise<void>;

  /**
   * Check if billing is supported for the current user (meaning IN-APP purchases are supported)
   * and optionally, whether a list of specified feature types are supported.
   *
   * Note: Billing features are only relevant to Google Play Android users.
   * For other stores and platforms, billing features won't be checked.
   *
   * @returns {Promise<boolean>} promise with boolean response. True if billing is supported, false otherwise.
   */
  public static canMakePayments(): Promise<boolean>;

  /**
   * Check if configure has finished and Purchases has been configured.
   *
   * @returns {Promise<Boolean>} promise with boolean response
   */
  public static isConfigured(): Promise<boolean>;
}
