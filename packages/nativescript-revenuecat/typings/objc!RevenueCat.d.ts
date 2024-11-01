declare class PurchasesReceiptParser extends NSObject {
  static alloc(): PurchasesReceiptParser; // inherited from NSObject

  static default(): PurchasesReceiptParser;

  static new(): PurchasesReceiptParser; // inherited from NSObject

  static readonly default_: PurchasesReceiptParser;
}

declare class RCAttribution extends NSObject {
  static alloc(): RCAttribution; // inherited from NSObject

  static new(): RCAttribution; // inherited from NSObject

  collectDeviceIdentifiers(): void;

  enableAdServicesAttributionTokenCollection(): void;

  setAd(installAd: string): void;

  setAdGroup(adGroup: string): void;

  setAdjustID(adjustID: string): void;

  setAirshipChannelID(airshipChannelID: string): void;

  setAppsflyerID(appsflyerID: string): void;

  setAttributes(attributes: NSDictionary<string, string>): void;

  setCampaign(campaign: string): void;

  setCleverTapID(cleverTapID: string): void;

  setCreative(creative: string): void;

  setDisplayName(displayName: string): void;

  setEmail(email: string): void;

  setFBAnonymousID(fbAnonymousID: string): void;

  setFirebaseAppInstanceID(firebaseAppInstanceID: string): void;

  setKeyword(keyword: string): void;

  setKochavaDeviceID(kochavaDeviceID: string): void;

  setMediaSource(mediaSource: string): void;

  setMixpanelDistinctID(mixpanelDistinctID: string): void;

  setMparticleID(mparticleID: string): void;

  setOnesignalID(onesignalID: string): void;

  setOnesignalUserID(onesignalUserID: string): void;

  setPhoneNumber(phoneNumber: string): void;

  setPushToken(pushToken: NSData): void;

  setPushTokenString(pushToken: string): void;
}

declare const enum RCAttributionNetwork {
  AppleSearchAds = 0,

  Adjust = 1,

  AppsFlyer = 2,

  Branch = 3,

  Tenjin = 4,

  Facebook = 5,

  MParticle = 6,

  AdServices = 7,
}

declare const enum RCCacheFetchPolicy {
  FromCacheOnly = 0,

  FetchCurrent = 1,

  NotStaleCachedOrFetched = 2,

  CachedOrFetched = 3,
}

declare class RCConfiguration extends NSObject {
  static alloc(): RCConfiguration; // inherited from NSObject

  static builderWithAPIKey(apiKey: string): RCConfigurationBuilder;

  static new(): RCConfiguration; // inherited from NSObject
}

declare class RCConfigurationBuilder extends NSObject {
  static alloc(): RCConfigurationBuilder; // inherited from NSObject

  static new(): RCConfigurationBuilder; // inherited from NSObject

  constructor(o: { APIKey: string });

  build(): RCConfiguration;

  initWithAPIKey(apiKey: string): this;

  withApiKey(apiKey: string): RCConfigurationBuilder;

  withAppUserID(appUserID: string): RCConfigurationBuilder;

  withDangerousSettings(dangerousSettings: RCDangerousSettings): RCConfigurationBuilder;

  /**
   * @since 15.0
   */
  withDiagnosticsEnabled(diagnosticsEnabled: boolean): RCConfigurationBuilder;

  withEntitlementVerificationMode(mode: RCEntitlementVerificationMode): RCConfigurationBuilder;

  withNetworkTimeout(networkTimeout: number): RCConfigurationBuilder;

  withObserverMode(observerMode: boolean): RCConfigurationBuilder;

  withPlatformInfo(platformInfo: RCPlatformInfo): RCConfigurationBuilder;

  withPurchasesAreCompletedByStoreKitVersion(purchasesAreCompletedBy: RCPurchasesAreCompletedBy, storeKitVersion: RCStoreKitVersion): RCConfigurationBuilder;

  withShowStoreMessagesAutomatically(showStoreMessagesAutomatically: boolean): RCConfigurationBuilder;

  withStoreKit1Timeout(storeKit1Timeout: number): RCConfigurationBuilder;

  withStoreKitVersion(version: RCStoreKitVersion): RCConfigurationBuilder;

  withUserDefaults(userDefaults: NSUserDefaults): RCConfigurationBuilder;

  withUsesStoreKit2IfAvailable(usesStoreKit2IfAvailable: boolean): RCConfigurationBuilder;
}

declare class RCCustomerInfo extends NSObject {
  static alloc(): RCCustomerInfo; // inherited from NSObject

  static new(): RCCustomerInfo; // inherited from NSObject

  readonly activeSubscriptions: NSSet<string>;

  readonly allPurchasedProductIdentifiers: NSSet<string>;

  readonly entitlements: RCEntitlementInfos;

  readonly firstSeen: Date;

  readonly latestExpirationDate: Date;

  readonly managementURL: NSURL;

  readonly nonConsumablePurchases: NSSet<string>;

  readonly nonSubscriptionTransactions: NSArray<RCStoreTransaction>;

  readonly nonSubscriptions: NSArray<RCNonSubscriptionTransaction>;

  readonly originalAppUserId: string;

  readonly originalApplicationVersion: string;

  readonly originalPurchaseDate: Date;

  readonly rawData: NSDictionary<string, any>;

  readonly requestDate: Date;

  expirationDateForEntitlement(entitlementIdentifier: string): Date;

  expirationDateForProductIdentifier(productIdentifier: string): Date;

  purchaseDateForEntitlement(entitlementIdentifier: string): Date;

  purchaseDateForProductIdentifier(productIdentifier: string): Date;
}

declare class RCDangerousSettings extends NSObject {
  static alloc(): RCDangerousSettings; // inherited from NSObject

  static new(): RCDangerousSettings; // inherited from NSObject

  readonly autoSyncPurchases: boolean;

  readonly customEntitlementComputation: boolean;

  constructor(o: { autoSyncPurchases: boolean });

  initWithAutoSyncPurchases(autoSyncPurchases: boolean): this;
}

/**
 * @since 16.0
 */
declare class RCDebugViewController extends UIViewController {
  static alloc(): RCDebugViewController; // inherited from NSObject

  static new(): RCDebugViewController; // inherited from NSObject
}

declare const enum RCDiscountType {
  Introductory = 0,

  Promotional = 1,
}

declare class RCEntitlementInfo extends NSObject {
  static alloc(): RCEntitlementInfo; // inherited from NSObject

  static new(): RCEntitlementInfo; // inherited from NSObject

  readonly billingIssueDetectedAt: Date;

  readonly expirationDate: Date;

  readonly identifier: string;

  readonly isActive: boolean;

  readonly isActiveInAnyEnvironment: boolean;

  readonly isActiveInCurrentEnvironment: boolean;

  readonly isSandbox: boolean;

  readonly latestPurchaseDate: Date;

  readonly originalPurchaseDate: Date;

  readonly ownershipType: RCPurchaseOwnershipType;

  readonly periodType: RCPeriodType;

  readonly productIdentifier: string;

  readonly productPlanIdentifier: string;

  readonly rawData: NSDictionary<string, any>;

  readonly store: RCStore;

  readonly unsubscribeDetectedAt: Date;

  readonly verification: RCVerificationResult;

  readonly willRenew: boolean;
}

declare class RCEntitlementInfos extends NSObject {
  static alloc(): RCEntitlementInfos; // inherited from NSObject

  static new(): RCEntitlementInfos; // inherited from NSObject

  readonly active: NSDictionary<string, RCEntitlementInfo>;

  readonly activeInAnyEnvironment: NSDictionary<string, RCEntitlementInfo>;

  readonly activeInCurrentEnvironment: NSDictionary<string, RCEntitlementInfo>;

  readonly all: NSDictionary<string, RCEntitlementInfo>;

  readonly verification: RCVerificationResult;

  objectForKeyedSubscript(key: string): RCEntitlementInfo;
}

declare const enum RCEntitlementVerificationMode {
  Disabled = 0,

  Informational = 1,

  Enforced = 2,
}

declare class RCIntroEligibility extends NSObject {
  static alloc(): RCIntroEligibility; // inherited from NSObject

  static new(): RCIntroEligibility; // inherited from NSObject

  readonly status: RCIntroEligibilityStatus;
}

declare const enum RCIntroEligibilityStatus {
  Unknown = 0,

  Ineligible = 1,

  Eligible = 2,

  NoIntroOfferExists = 3,
}

declare const enum RCLogLevel {
  Verbose = 4,

  Debug = 0,

  Info = 1,

  Warn = 2,

  Error = 3,
}

declare class RCNonSubscriptionTransaction extends NSObject {
  static alloc(): RCNonSubscriptionTransaction; // inherited from NSObject

  static new(): RCNonSubscriptionTransaction; // inherited from NSObject

  readonly productIdentifier: string;

  readonly purchaseDate: Date;

  readonly storeTransactionIdentifier: string;

  readonly transactionIdentifier: string;
}

declare class RCOffering extends NSObject {
  static alloc(): RCOffering; // inherited from NSObject

  static new(): RCOffering; // inherited from NSObject

  readonly annual: RCPackage;

  readonly availablePackages: NSArray<RCPackage>;

  readonly identifier: string;

  readonly lifetime: RCPackage;

  readonly metadata: NSDictionary<string, any>;

  readonly monthly: RCPackage;

  readonly serverDescription: string;

  readonly sixMonth: RCPackage;

  readonly threeMonth: RCPackage;

  readonly twoMonth: RCPackage;

  readonly weekly: RCPackage;

  constructor(o: { identifier: string; serverDescription: string; metadata: NSDictionary<string, any>; availablePackages: NSArray<RCPackage> | RCPackage[] });

  initWithIdentifierServerDescriptionMetadataAvailablePackages(identifier: string, serverDescription: string, metadata: NSDictionary<string, any>, availablePackages: NSArray<RCPackage> | RCPackage[]): this;

  objectForKeyedSubscript(key: string): RCPackage;

  packageWithIdentifier(identifier: string): RCPackage;
}

declare class RCOfferings extends NSObject {
  static alloc(): RCOfferings; // inherited from NSObject

  static new(): RCOfferings; // inherited from NSObject

  readonly all: NSDictionary<string, RCOffering>;

  readonly current: RCOffering;

  currentOfferingForPlacement(placementIdentifier: string): RCOffering;

  objectForKeyedSubscript(key: string): RCOffering;

  offeringWithIdentifier(identifier: string): RCOffering;
}

declare class RCPackage extends NSObject {
  static alloc(): RCPackage; // inherited from NSObject

  static new(): RCPackage; // inherited from NSObject

  static packageTypeFrom(string: string): RCPackageType;

  static stringFrom(packageType: RCPackageType): string;

  readonly identifier: string;

  readonly localizedIntroductoryPriceString: string;

  readonly localizedPriceString: string;

  readonly offeringIdentifier: string;

  readonly packageType: RCPackageType;

  readonly presentedOfferingContext: RCPresentedOfferingContext;

  readonly product: SKProduct;

  readonly storeProduct: RCStoreProduct;

  constructor(o: { identifier: string; packageType: RCPackageType; storeProduct: RCStoreProduct; offeringIdentifier: string });

  constructor(o: { identifier: string; packageType: RCPackageType; storeProduct: RCStoreProduct; presentedOfferingContext: RCPresentedOfferingContext });

  initWithIdentifierPackageTypeStoreProductOfferingIdentifier(identifier: string, packageType: RCPackageType, storeProduct: RCStoreProduct, offeringIdentifier: string): this;

  initWithIdentifierPackageTypeStoreProductPresentedOfferingContext(identifier: string, packageType: RCPackageType, storeProduct: RCStoreProduct, presentedOfferingContext: RCPresentedOfferingContext): this;
}

declare const enum RCPackageType {
  Unknown = -2,

  Custom = -1,

  Lifetime = 0,

  Annual = 1,

  SixMonth = 2,

  ThreeMonth = 3,

  TwoMonth = 4,

  Monthly = 5,

  Weekly = 6,
}

declare const enum RCPaymentMode {
  PayAsYouGo = 0,

  PayUpFront = 1,

  FreeTrial = 2,
}

declare const enum RCPeriodType {
  Normal = 0,

  Intro = 1,

  Trial = 2,
}

declare class RCPlatformInfo extends NSObject {
  static alloc(): RCPlatformInfo; // inherited from NSObject

  static new(): RCPlatformInfo; // inherited from NSObject

  constructor(o: { flavor: string; version: string });

  initWithFlavorVersion(flavor: string, version: string): this;
}

declare class RCPresentedOfferingContext extends NSObject {
  static alloc(): RCPresentedOfferingContext; // inherited from NSObject

  static new(): RCPresentedOfferingContext; // inherited from NSObject

  readonly offeringIdentifier: string;

  readonly placementIdentifier: string;

  readonly targetingContext: RCTargetingContext;

  constructor(o: { offeringIdentifier: string });

  constructor(o: { offeringIdentifier: string; placementIdentifier: string; targetingContext: RCTargetingContext });

  initWithOfferingIdentifier(offeringIdentifier: string): this;

  initWithOfferingIdentifierPlacementIdentifierTargetingContext(offeringIdentifier: string, placementIdentifier: string, targetingContext: RCTargetingContext): this;
}

declare class RCPromotionalOffer extends NSObject {
  static alloc(): RCPromotionalOffer; // inherited from NSObject

  static new(): RCPromotionalOffer; // inherited from NSObject

  readonly discount: RCStoreProductDiscount;

  readonly signedData: RCPromotionalOfferSignedData;
}

declare class RCPromotionalOfferEligibility extends NSObject {
  static alloc(): RCPromotionalOfferEligibility; // inherited from NSObject

  static new(): RCPromotionalOfferEligibility; // inherited from NSObject
}

declare class RCPromotionalOfferSignedData extends NSObject {
  static alloc(): RCPromotionalOfferSignedData; // inherited from NSObject

  static new(): RCPromotionalOfferSignedData; // inherited from NSObject

  readonly identifier: string;

  readonly keyIdentifier: string;

  readonly nonce: NSUUID;

  readonly signature: string;

  readonly timestamp: number;
}

declare const enum RCPurchaseOwnershipType {
  Purchased = 0,

  FamilyShared = 1,

  Unknown = 2,
}

declare class RCPurchaserInfo extends NSObject {
  static alloc(): RCPurchaserInfo; // inherited from NSObject

  static new(): RCPurchaserInfo; // inherited from NSObject
}

declare class RCPurchases extends NSObject implements RCPurchasesType {
  static addAttributionDataFromNetwork(data: NSDictionary<string, any>, network: RCAttributionNetwork): void;

  static addAttributionDataFromNetworkForNetworkUserId(data: NSDictionary<string, any>, network: RCAttributionNetwork, networkUserId: string): void;

  static alloc(): RCPurchases; // inherited from NSObject

  static canMakePayments(): boolean;

  static configureWithAPIKey(apiKey: string): RCPurchases;

  static configureWithAPIKeyAppUserID(apiKey: string, appUserID: string): RCPurchases;

  static configureWithAPIKeyAppUserIDObserverMode(apiKey: string, appUserID: string, observerMode: boolean): RCPurchases;

  static configureWithAPIKeyAppUserIDObserverModeUserDefaults(apiKey: string, appUserID: string, observerMode: boolean, userDefaults: NSUserDefaults): RCPurchases;

  static configureWithAPIKeyAppUserIDObserverModeUserDefaultsUseStoreKit2IfAvailable(apiKey: string, appUserID: string, observerMode: boolean, userDefaults: NSUserDefaults, useStoreKit2IfAvailable: boolean): RCPurchases;

  static configureWithAPIKeyAppUserIDObserverModeUserDefaultsUseStoreKit2IfAvailableDangerousSettings(apiKey: string, appUserID: string, observerMode: boolean, userDefaults: NSUserDefaults, useStoreKit2IfAvailable: boolean, dangerousSettings: RCDangerousSettings): RCPurchases;

  static configureWithAPIKeyAppUserIDPurchasesAreCompletedByStoreKitVersion(apiKey: string, appUserID: string, purchasesAreCompletedBy: RCPurchasesAreCompletedBy, storeKitVersion: RCStoreKitVersion): RCPurchases;

  static configureWithConfiguration(configuration: RCConfiguration): RCPurchases;

  static configureWithConfigurationBuilder(builder: RCConfigurationBuilder): RCPurchases;

  static new(): RCPurchases; // inherited from NSObject

  static setAutomaticAppleSearchAdsAttributionCollection(newValue: boolean): void;

  static setDebugLogsEnabled(newValue: boolean): void;

  static setForceUniversalAppStore(newValue: boolean): void;

  static setLogHandler(newValue: (p1: RCLogLevel, p2: string) => void): void;

  static setLogLevel(newValue: RCLogLevel): void;

  static setPlatformInfo(value: RCPlatformInfo): void;

  static setProxyURL(newValue: NSURL): void;

  static setSimulatesAskToBuyInSandbox(newValue: boolean): void;

  static setVerboseLogHandler(newValue: (p1: RCLogLevel, p2: string, p3: string, p4: string, p5: number) => void): void;

  static setVerboseLogs(newValue: boolean): void;

  readonly storeFrontCountryCode: string;

  static automaticAppleSearchAdsAttributionCollection: boolean;

  static debugLogsEnabled: boolean;

  static forceUniversalAppStore: boolean;

  static readonly frameworkVersion: string;

  static readonly isConfigured: boolean;

  static logHandler: (p1: RCLogLevel, p2: string) => void;

  static logLevel: RCLogLevel;

  static platformInfo: RCPlatformInfo;

  static proxyURL: NSURL;

  static readonly sharedPurchases: RCPurchases;

  /**
   * @since 8.0
   */
  static simulatesAskToBuyInSandbox: boolean;

  static verboseLogHandler: (p1: RCLogLevel, p2: string, p3: string, p4: string, p5: number) => void;

  static verboseLogs: boolean;

  allowSharingAppStoreAccount: boolean; // inherited from RCPurchasesType

  readonly appUserID: string; // inherited from RCPurchasesType

  readonly attribution: RCAttribution; // inherited from RCPurchasesType

  readonly cachedCustomerInfo: RCCustomerInfo; // inherited from RCPurchasesType

  readonly cachedOfferings: RCOfferings; // inherited from RCPurchasesType

  delegate: RCPurchasesDelegate; // inherited from RCPurchasesType

  finishTransactions: boolean; // inherited from RCPurchasesType

  readonly isAnonymous: boolean; // inherited from RCPurchasesType

  purchasesAreCompletedBy: RCPurchasesAreCompletedBy; // inherited from RCPurchasesType

  /**
   * @since 15.0
   */
  beginRefundRequestForActiveEntitlementWithCompletion(completionHandler: (p1: RCRefundRequestStatus, p2: NSError) => void): void;

  /**
   * @since 15.0
   */
  beginRefundRequestForEntitlementCompletion(entitlementID: string, completionHandler: (p1: RCRefundRequestStatus, p2: NSError) => void): void;

  /**
   * @since 15.0
   */
  beginRefundRequestForProductCompletion(productID: string, completionHandler: (p1: RCRefundRequestStatus, p2: NSError) => void): void;

  checkTrialOrIntroDiscountEligibilityCompletion(productIdentifiers: NSArray<string> | string[], receiveEligibility: (p1: NSDictionary<string, RCIntroEligibility>) => void): void;

  checkTrialOrIntroDiscountEligibilityForProductCompletion(product: RCStoreProduct, completion: (p1: RCIntroEligibilityStatus) => void): void;

  checkTrialOrIntroDiscountEligibilityWithProductCompletionHandler(product: RCStoreProduct, completionHandler: (p1: RCIntroEligibilityStatus) => void): void;

  checkTrialOrIntroDiscountEligibilityWithProductIdentifiersCompletionHandler(productIdentifiers: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, RCIntroEligibility>) => void): void;

  checkTrialOrIntroductoryPriceEligibilityCompletion(productIdentifiers: NSArray<string> | string[], completion: (p1: NSDictionary<string, RCIntroEligibility>) => void): void;

  collectDeviceIdentifiers(): void;

  createAliasCompletionBlock(alias: string, completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  customerInfoWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  customerInfoWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  customerInfoWithFetchPolicyCompletionHandler(fetchPolicy: RCCacheFetchPolicy, completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  eligiblePromotionalOffersForProductCompletionHandler(product: RCStoreProduct, completionHandler: (p1: NSArray<RCPromotionalOffer>) => void): void;

  getCustomerInfoWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  getCustomerInfoWithFetchPolicyCompletion(fetchPolicy: RCCacheFetchPolicy, completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  getOfferingsWithCompletion(completion: (p1: RCOfferings, p2: NSError) => void): void;

  getProductsWithIdentifiersCompletion(productIdentifiers: NSArray<string> | string[], completion: (p1: NSArray<RCStoreProduct>) => void): void;

  getPromotionalOfferForProductDiscountWithProductWithCompletion(discount: RCStoreProductDiscount, product: RCStoreProduct, completion: (p1: RCPromotionalOffer, p2: NSError) => void): void;

  identifyCompletionBlock(appUserID: string, completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  invalidateCustomerInfoCache(): void;

  invalidatePurchaserInfoCache(): void;

  logInCompletion(appUserID: string, completion: (p1: RCCustomerInfo, p2: boolean, p3: NSError) => void): void;

  logInCompletionHandler(appUserID: string, completionHandler: (p1: RCCustomerInfo, p2: boolean, p3: NSError) => void): void;

  logOutWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  logOutWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  offeringsWithCompletionBlock(completion: (p1: RCOfferings, p2: NSError) => void): void;

  offeringsWithCompletionHandler(completionHandler: (p1: RCOfferings, p2: NSError) => void): void;

  /**
   * @since 14.0
   */
  presentCodeRedemptionSheet(): void;

  productsCompletionHandler(productIdentifiers: NSArray<string> | string[], completionHandler: (p1: NSArray<RCStoreProduct>) => void): void;

  productsWithIdentifiersCompletionBlock(productIdentifiers: NSArray<string> | string[], completion: (p1: NSArray<SKProduct>) => void): void;

  promotionalOfferForProductDiscountProductCompletionHandler(discount: RCStoreProductDiscount, product: RCStoreProduct, completionHandler: (p1: RCPromotionalOffer, p2: NSError) => void): void;

  purchasePackageWithCompletion(package: RCPackage, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchasePackageWithCompletionBlock(package: RCPackage, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchasePackageWithPromotionalOfferCompletion(package: RCPackage, promotionalOffer: RCPromotionalOffer, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseProductWithCompletion(product: RCStoreProduct, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseProductWithCompletionBlock(product: SKProduct, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseProductWithPromotionalOfferCompletion(product: RCStoreProduct, promotionalOffer: RCPromotionalOffer, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseWithPackageCompletionHandler(package: RCPackage, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaseWithPackagePromotionalOfferCompletionHandler(package: RCPackage, promotionalOffer: RCPromotionalOffer, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaseWithProductCompletionHandler(product: RCStoreProduct, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaseWithProductPromotionalOfferCompletionHandler(product: RCStoreProduct, promotionalOffer: RCPromotionalOffer, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaserInfoWithCompletionBlock(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  resetWithCompletionBlock(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  restorePurchasesWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  restorePurchasesWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  restoreTransactionsWithCompletionBlock(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  setAd(value: string): void;

  setAdGroup(adGroup: string): void;

  setAdjustID(adjustID: string): void;

  setAirshipChannelID(airshipChannelID: string): void;

  setAppsflyerID(appsflyerID: string): void;

  setAttributes(attributes: NSDictionary<string, string>): void;

  setCampaign(campaign: string): void;

  setCleverTapID(cleverTapID: string): void;

  setCreative(creative: string): void;

  setDisplayName(displayName: string): void;

  setEmail(email: string): void;

  setFBAnonymousID(fbAnonymousID: string): void;

  setFirebaseAppInstanceID(firebaseAppInstanceID: string): void;

  setKeyword(keyword: string): void;

  setMediaSource(mediaSource: string): void;

  setMixpanelDistinctID(mixpanelDistinctID: string): void;

  setMparticleID(mparticleID: string): void;

  setOnesignalID(onesignalID: string): void;

  setPhoneNumber(phoneNumber: string): void;

  setPushToken(pushToken: NSData): void;

  setPushTokenString(pushToken: string): void;

  shouldPurchasePromoProductDefermentBlock(product: RCStoreProduct, defermentBlock: (p1: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void) => void): void;

  /**
   * @since 13.0
   */
  showManageSubscriptionsWithCompletion(completion: (p1: NSError) => void): void;

  /**
   * @since 13.0
   */
  showManageSubscriptionsWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

  /**
   * @since 13.4
   */
  showPriceConsentIfNeeded(): void;

  syncAttributesAndOfferingsIfNeededWithCompletion(completion: (p1: RCOfferings, p2: NSError) => void): void;

  /**
   * @since 13.0
   */
  syncAttributesAndOfferingsIfNeededWithCompletionHandler(completionHandler: (p1: RCOfferings, p2: NSError) => void): void;

  syncPurchasesWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  syncPurchasesWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;
}

declare const enum RCPurchasesAreCompletedBy {
  RevenueCat = 0,

  MyApp = 1,
}

interface RCPurchasesDelegate extends NSObjectProtocol {
  /**
   * @since 13.4
   */
  shouldShowPriceConsent?: boolean;

  purchasesDidReceiveUpdatedPurchaserInfo?(purchases: RCPurchases, purchaserInfo: RCCustomerInfo): void;

  purchasesReadyForPromotedProductPurchase?(purchases: RCPurchases, product: RCStoreProduct, startPurchase: (p1: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void) => void): void;

  purchasesReceivedUpdatedCustomerInfo?(purchases: RCPurchases, customerInfo: RCCustomerInfo): void;

  purchasesShouldPurchasePromoProductDefermentBlock?(purchases: RCPurchases, product: RCStoreProduct, makeDeferredPurchase: (p1: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void) => void): void;
}
declare var RCPurchasesDelegate: {
  prototype: RCPurchasesDelegate;
};

declare class RCPurchasesDiagnostics extends NSObject {
  static alloc(): RCPurchasesDiagnostics; // inherited from NSObject

  static default(): RCPurchasesDiagnostics;

  static new(): RCPurchasesDiagnostics; // inherited from NSObject

  static readonly default_: RCPurchasesDiagnostics;

  testSDKHealthWithCompletion(completionHandler: (p1: NSError) => void): void;
}

declare const enum RCPurchasesErrorCode {
  UnknownError = 0,

  PurchaseCancelledError = 1,

  StoreProblemError = 2,

  PurchaseNotAllowedError = 3,

  PurchaseInvalidError = 4,

  ProductNotAvailableForPurchaseError = 5,

  ProductAlreadyPurchasedError = 6,

  ReceiptAlreadyInUseError = 7,

  InvalidReceiptError = 8,

  MissingReceiptFileError = 9,

  NetworkError = 10,

  InvalidCredentialsError = 11,

  UnexpectedBackendResponseError = 12,

  ReceiptInUseByOtherSubscriberError = 13,

  InvalidAppUserIdError = 14,

  OperationAlreadyInProgressForProductError = 15,

  UnknownBackendError = 16,

  InvalidAppleSubscriptionKeyError = 17,

  IneligibleError = 18,

  InsufficientPermissionsError = 19,

  PaymentPendingError = 20,

  InvalidSubscriberAttributesError = 21,

  LogOutAnonymousUserError = 22,

  ConfigurationError = 23,

  UnsupportedError = 24,

  EmptySubscriberAttributesError = 25,

  ProductDiscountMissingIdentifierError = 26,

  ProductDiscountMissingSubscriptionGroupIdentifierError = 28,

  CustomerInfoError = 29,

  SystemInfoError = 30,

  BeginRefundRequestError = 31,

  ProductRequestTimedOut = 32,

  APIEndpointBlocked = 33,

  InvalidPromotionalOfferError = 34,

  OfflineConnectionError = 35,

  FeatureNotAvailableInCustomEntitlementsComputationMode = 36,

  SignatureVerificationFailed = 37,
}

declare class RCPurchasesErrorUtils extends NSObject {
  static alloc(): RCPurchasesErrorUtils; // inherited from NSObject

  static new(): RCPurchasesErrorUtils; // inherited from NSObject
}

interface RCPurchasesType {
  allowSharingAppStoreAccount: boolean;

  appUserID: string;

  attribution: RCAttribution;

  cachedCustomerInfo: RCCustomerInfo;

  cachedOfferings: RCOfferings;

  delegate: RCPurchasesDelegate;

  finishTransactions: boolean;

  isAnonymous: boolean;

  purchasesAreCompletedBy: RCPurchasesAreCompletedBy;

  /**
   * @since 15.0
   */
  beginRefundRequestForActiveEntitlementWithCompletion(completionHandler: (p1: RCRefundRequestStatus, p2: NSError) => void): void;

  /**
   * @since 15.0
   */
  beginRefundRequestForEntitlementCompletion(entitlementID: string, completionHandler: (p1: RCRefundRequestStatus, p2: NSError) => void): void;

  /**
   * @since 15.0
   */
  beginRefundRequestForProductCompletion(productID: string, completionHandler: (p1: RCRefundRequestStatus, p2: NSError) => void): void;

  checkTrialOrIntroDiscountEligibilityCompletion(productIdentifiers: NSArray<string> | string[], receiveEligibility: (p1: NSDictionary<string, RCIntroEligibility>) => void): void;

  checkTrialOrIntroDiscountEligibilityForProductCompletion(product: RCStoreProduct, completion: (p1: RCIntroEligibilityStatus) => void): void;

  checkTrialOrIntroDiscountEligibilityWithProductCompletionHandler(product: RCStoreProduct, completionHandler: (p1: RCIntroEligibilityStatus) => void): void;

  checkTrialOrIntroDiscountEligibilityWithProductIdentifiersCompletionHandler(productIdentifiers: NSArray<string> | string[], completionHandler: (p1: NSDictionary<string, RCIntroEligibility>) => void): void;

  collectDeviceIdentifiers(): void;

  customerInfoWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  customerInfoWithFetchPolicyCompletionHandler(fetchPolicy: RCCacheFetchPolicy, completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  eligiblePromotionalOffersForProductCompletionHandler(product: RCStoreProduct, completionHandler: (p1: NSArray<RCPromotionalOffer>) => void): void;

  getCustomerInfoWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  getCustomerInfoWithFetchPolicyCompletion(fetchPolicy: RCCacheFetchPolicy, completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  getOfferingsWithCompletion(completion: (p1: RCOfferings, p2: NSError) => void): void;

  getProductsWithIdentifiersCompletion(productIdentifiers: NSArray<string> | string[], completion: (p1: NSArray<RCStoreProduct>) => void): void;

  getPromotionalOfferForProductDiscountWithProductWithCompletion(discount: RCStoreProductDiscount, product: RCStoreProduct, completion: (p1: RCPromotionalOffer, p2: NSError) => void): void;

  invalidateCustomerInfoCache(): void;

  logInCompletion(appUserID: string, completion: (p1: RCCustomerInfo, p2: boolean, p3: NSError) => void): void;

  logInCompletionHandler(appUserID: string, completionHandler: (p1: RCCustomerInfo, p2: boolean, p3: NSError) => void): void;

  logOutWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  logOutWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  offeringsWithCompletionHandler(completionHandler: (p1: RCOfferings, p2: NSError) => void): void;

  /**
   * @since 14.0
   */
  presentCodeRedemptionSheet(): void;

  productsCompletionHandler(productIdentifiers: NSArray<string> | string[], completionHandler: (p1: NSArray<RCStoreProduct>) => void): void;

  promotionalOfferForProductDiscountProductCompletionHandler(discount: RCStoreProductDiscount, product: RCStoreProduct, completionHandler: (p1: RCPromotionalOffer, p2: NSError) => void): void;

  purchasePackageWithCompletion(package: RCPackage, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchasePackageWithPromotionalOfferCompletion(package: RCPackage, promotionalOffer: RCPromotionalOffer, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseProductWithCompletion(product: RCStoreProduct, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseProductWithPromotionalOfferCompletion(product: RCStoreProduct, promotionalOffer: RCPromotionalOffer, completion: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: NSError, p4: boolean) => void): void;

  purchaseWithPackageCompletionHandler(package: RCPackage, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaseWithPackagePromotionalOfferCompletionHandler(package: RCPackage, promotionalOffer: RCPromotionalOffer, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaseWithProductCompletionHandler(product: RCStoreProduct, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  purchaseWithProductPromotionalOfferCompletionHandler(product: RCStoreProduct, promotionalOffer: RCPromotionalOffer, completionHandler: (p1: RCStoreTransaction, p2: RCCustomerInfo, p3: boolean, p4: NSError) => void): void;

  restorePurchasesWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  restorePurchasesWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;

  setAd(value: string): void;

  setAdGroup(adGroup: string): void;

  setAdjustID(adjustID: string): void;

  setAppsflyerID(appsflyerID: string): void;

  setAttributes(attributes: NSDictionary<string, string>): void;

  setCampaign(campaign: string): void;

  setCleverTapID(cleverTapID: string): void;

  setCreative(creative: string): void;

  setDisplayName(displayName: string): void;

  setEmail(email: string): void;

  setFBAnonymousID(fbAnonymousID: string): void;

  setFirebaseAppInstanceID(firebaseAppInstanceID: string): void;

  setKeyword(keyword: string): void;

  setMediaSource(mediaSource: string): void;

  setMixpanelDistinctID(mixpanelDistinctID: string): void;

  setMparticleID(mparticleID: string): void;

  setOnesignalID(onesignalID: string): void;

  setPhoneNumber(phoneNumber: string): void;

  setPushToken(pushToken: NSData): void;

  setPushTokenString(pushToken: string): void;

  /**
   * @since 13.0
   */
  showManageSubscriptionsWithCompletion(completion: (p1: NSError) => void): void;

  /**
   * @since 13.0
   */
  showManageSubscriptionsWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

  /**
   * @since 13.4
   */
  showPriceConsentIfNeeded(): void;

  syncAttributesAndOfferingsIfNeededWithCompletion(completion: (p1: RCOfferings, p2: NSError) => void): void;

  /**
   * @since 13.0
   */
  syncAttributesAndOfferingsIfNeededWithCompletionHandler(completionHandler: (p1: RCOfferings, p2: NSError) => void): void;

  syncPurchasesWithCompletion(completion: (p1: RCCustomerInfo, p2: NSError) => void): void;

  syncPurchasesWithCompletionHandler(completionHandler: (p1: RCCustomerInfo, p2: NSError) => void): void;
}
declare var RCPurchasesType: {
  prototype: RCPurchasesType;
};

declare const enum RCRefundRequestStatus {
  UserCancelled = 0,

  Success = 1,

  Error = 2,
}

declare const enum RCStore {
  AppStore = 0,

  MacAppStore = 1,

  PlayStore = 2,

  Stripe = 3,

  Promotional = 4,

  UnknownStore = 5,

  Amazon = 6,

  Billing = 7,

  External = 8,
}

declare const enum RCStoreKitVersion {
  Version1 = 1,

  Version2 = 2,
}

declare const enum RCStoreMessageType {
  BillingIssue = 0,

  PriceIncreaseConsent = 1,

  Generic = 2,

  WinBackOffer = 3,
}

declare class RCStoreProduct extends NSObject {
  static alloc(): RCStoreProduct; // inherited from NSObject

  static new(): RCStoreProduct; // inherited from NSObject

  readonly currencyCode: string;

  readonly discounts: NSArray<RCStoreProductDiscount>;

  readonly introductoryDiscount: RCStoreProductDiscount;

  /**
   * @since 14.0
   */
  readonly isFamilyShareable: boolean;

  readonly localizedDescription: string;

  readonly localizedIntroductoryPriceString: string;

  /**
   * @since 11.2
   */
  readonly localizedPricePerMonth: string;

  /**
   * @since 11.2
   */
  readonly localizedPricePerWeek: string;

  /**
   * @since 11.2
   */
  readonly localizedPricePerYear: string;

  readonly localizedPriceString: string;

  readonly localizedTitle: string;

  readonly price: NSDecimalNumber;

  readonly priceFormatter: NSNumberFormatter;

  /**
   * @since 11.2
   */
  readonly pricePerMonth: NSDecimalNumber;

  /**
   * @since 11.2
   */
  readonly pricePerWeek: NSDecimalNumber;

  /**
   * @since 11.2
   */
  readonly pricePerYear: NSDecimalNumber;

  readonly productCategory: RCStoreProductCategory;

  readonly productIdentifier: string;

  readonly productType: RCStoreProductType;

  readonly sk1Product: SKProduct;

  readonly subscriptionGroupIdentifier: string;

  readonly subscriptionPeriod: RCSubscriptionPeriod;

  constructor(o: { sk1Product: SKProduct });

  initWithSk1Product(sk1Product: SKProduct): this;
}

declare const enum RCStoreProductCategory {
  Subscription = 0,

  NonSubscription = 1,
}

declare class RCStoreProductDiscount extends NSObject {
  static alloc(): RCStoreProductDiscount; // inherited from NSObject

  static new(): RCStoreProductDiscount; // inherited from NSObject

  readonly currencyCode: string;

  readonly localizedPriceString: string;

  readonly numberOfPeriods: number;

  readonly offerIdentifier: string;

  readonly paymentMode: RCPaymentMode;

  readonly price: NSDecimalNumber;

  readonly sk1Discount: SKProductDiscount;

  readonly subscriptionPeriod: RCSubscriptionPeriod;

  readonly type: RCDiscountType;
}

declare const enum RCStoreProductType {
  Consumable = 0,

  NonConsumable = 1,

  NonRenewableSubscription = 2,

  AutoRenewableSubscription = 3,
}

declare class RCStoreTransaction extends NSObject {
  static alloc(): RCStoreTransaction; // inherited from NSObject

  static new(): RCStoreTransaction; // inherited from NSObject

  readonly productId: string;

  readonly productIdentifier: string;

  readonly purchaseDate: Date;

  readonly quantity: number;

  readonly revenueCatId: string;

  readonly sk1Transaction: SKPaymentTransaction;

  readonly storefront: RCStorefront;

  readonly transactionIdentifier: string;
}

declare class RCStorefront extends NSObject {
  static alloc(): RCStorefront; // inherited from NSObject

  static new(): RCStorefront; // inherited from NSObject

  readonly countryCode: string;

  readonly identifier: string;

  /**
   * @since 13.0
   */
  readonly sk1Storefront: SKStorefront;

  /**
   * @since 13.0
   */
  static readonly sk1CurrentStorefront: RCStorefront;
}

declare class RCSubscriptionPeriod extends NSObject {
  static alloc(): RCSubscriptionPeriod; // inherited from NSObject

  static new(): RCSubscriptionPeriod; // inherited from NSObject

  readonly unit: RCSubscriptionPeriodUnit;

  readonly value: number;
}

declare const enum RCSubscriptionPeriodUnit {
  Day = 0,

  Week = 1,

  Month = 2,

  Year = 3,
}

declare class RCTargetingContext extends NSObject {
  static alloc(): RCTargetingContext; // inherited from NSObject

  static new(): RCTargetingContext; // inherited from NSObject

  readonly revision: number;

  readonly ruleId: string;

  constructor(o: { revision: number; ruleId: string });

  initWithRevisionRuleId(revision: number, ruleId: string): this;
}

declare class RCTransaction extends NSObject {
  static alloc(): RCTransaction; // inherited from NSObject

  static new(): RCTransaction; // inherited from NSObject
}

declare const enum RCVerificationResult {
  NotRequested = 0,

  Verified = 1,

  VerifiedOnDevice = 3,

  Failed = 2,
}

declare var RevenueCatVersionNumber: number;

declare var RevenueCatVersionString: interop.Reference<number>;
