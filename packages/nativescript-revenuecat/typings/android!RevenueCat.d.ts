declare module com {
  export module revenuecat {
    export module purchases {
      export class APIKeyValidator {
        public static class: java.lang.Class<com.revenuecat.purchases.APIKeyValidator>;
        public validate(thisTemp: string, apiKey: com.revenuecat.purchases.Store): com.revenuecat.purchases.APIKeyValidator.ValidationResult;
        public validateAndLog(apiKey: string, configuredStore: com.revenuecat.purchases.Store): void;
        public constructor();
      }
      export module APIKeyValidator {
        export class APIKeyPlatform {
          public static class: java.lang.Class<com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform>;
          public static GOOGLE: com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform;
          public static AMAZON: com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform;
          public static LEGACY: com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform;
          public static OTHER_PLATFORM: com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform;
          public static valueOf(value: string): com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform;
          public static values(): androidNative.Array<com.revenuecat.purchases.APIKeyValidator.APIKeyPlatform>;
        }
        export class ValidationResult {
          public static class: java.lang.Class<com.revenuecat.purchases.APIKeyValidator.ValidationResult>;
          public static VALID: com.revenuecat.purchases.APIKeyValidator.ValidationResult;
          public static GOOGLE_KEY_AMAZON_STORE: com.revenuecat.purchases.APIKeyValidator.ValidationResult;
          public static AMAZON_KEY_GOOGLE_STORE: com.revenuecat.purchases.APIKeyValidator.ValidationResult;
          public static LEGACY: com.revenuecat.purchases.APIKeyValidator.ValidationResult;
          public static OTHER_PLATFORM: com.revenuecat.purchases.APIKeyValidator.ValidationResult;
          public static valueOf(value: string): com.revenuecat.purchases.APIKeyValidator.ValidationResult;
          public static values(): androidNative.Array<com.revenuecat.purchases.APIKeyValidator.ValidationResult>;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.APIKeyValidator.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class AmazonLWAConsentStatus {
        public static class: java.lang.Class<com.revenuecat.purchases.AmazonLWAConsentStatus>;
        public static CONSENTED: com.revenuecat.purchases.AmazonLWAConsentStatus;
        public static UNAVAILABLE: com.revenuecat.purchases.AmazonLWAConsentStatus;
        public static values(): androidNative.Array<com.revenuecat.purchases.AmazonLWAConsentStatus>;
        public static valueOf(value: string): com.revenuecat.purchases.AmazonLWAConsentStatus;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class AppLifecycleHandler {
        public static class: java.lang.Class<com.revenuecat.purchases.AppLifecycleHandler>;
        public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
        public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
        public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
        public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
        public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
        public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
        public constructor(lifecycleDelegate: com.revenuecat.purchases.LifecycleDelegate);
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class AttributionFetcherFactory {
        public static class: java.lang.Class<com.revenuecat.purchases.AttributionFetcherFactory>;
        public static INSTANCE: com.revenuecat.purchases.AttributionFetcherFactory;
        public createAttributionFetcher(thisTemp: com.revenuecat.purchases.Store, store: com.revenuecat.purchases.common.Dispatcher): com.revenuecat.purchases.common.subscriberattributes.DeviceIdentifiersFetcher;
      }
      export module AttributionFetcherFactory {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.AttributionFetcherFactory.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class BillingFactory {
        public static class: java.lang.Class<com.revenuecat.purchases.BillingFactory>;
        public static INSTANCE: com.revenuecat.purchases.BillingFactory;
        public createBilling(thisTemp: com.revenuecat.purchases.Store, store: globalAndroid.app.Application, application: com.revenuecat.purchases.common.BackendHelper, backendHelper: com.revenuecat.purchases.common.caching.DeviceCache, cache: boolean, finishTransactions: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.PurchasesStateProvider, stateProvider: boolean): com.revenuecat.purchases.common.BillingAbstract;
      }
      export module BillingFactory {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.BillingFactory.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class CacheFetchPolicy {
        public static class: java.lang.Class<com.revenuecat.purchases.CacheFetchPolicy>;
        public static CACHE_ONLY: com.revenuecat.purchases.CacheFetchPolicy;
        public static FETCH_CURRENT: com.revenuecat.purchases.CacheFetchPolicy;
        public static NOT_STALE_CACHED_OR_CURRENT: com.revenuecat.purchases.CacheFetchPolicy;
        public static CACHED_OR_FETCHED: com.revenuecat.purchases.CacheFetchPolicy;
        public static valueOf(value: string): com.revenuecat.purchases.CacheFetchPolicy;
        public static values(): androidNative.Array<com.revenuecat.purchases.CacheFetchPolicy>;
      }
      export module CacheFetchPolicy {
        export class Companion {
          public static class: java.lang.Class<com.revenuecat.purchases.CacheFetchPolicy.Companion>;
          public default(): com.revenuecat.purchases.CacheFetchPolicy;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class ComparableData {
        public static class: java.lang.Class<com.revenuecat.purchases.ComparableData>;
        public constructor(customerInfo: com.revenuecat.purchases.CustomerInfo);
        public component4(): number;
        public component6(): string;
        public getOriginalAppUserId(): string;
        public getEntitlements(): com.revenuecat.purchases.EntitlementInfos;
        public toString(): string;
        public getAllPurchaseDatesByProduct(): java.util.Map<string, java.util.Date>;
        public component7(): java.util.Date;
        public getFirstSeen(): java.util.Date;
        public component2(): java.util.Map<string, java.util.Date>;
        public copy(entitlements: com.revenuecat.purchases.EntitlementInfos, allExpirationDatesByProduct: java.util.Map<string, any>, allPurchaseDatesByProduct: java.util.Map<string, any>, schemaVersion: number, firstSeen: java.util.Date, originalAppUserId: string, originalPurchaseDate: java.util.Date): com.revenuecat.purchases.ComparableData;
        public equals(other: any): boolean;
        public component1(): com.revenuecat.purchases.EntitlementInfos;
        public component3(): java.util.Map<string, java.util.Date>;
        public component5(): java.util.Date;
        public hashCode(): number;
        public constructor(entitlements: com.revenuecat.purchases.EntitlementInfos, allExpirationDatesByProduct: java.util.Map<string, any>, allPurchaseDatesByProduct: java.util.Map<string, any>, schemaVersion: number, firstSeen: java.util.Date, originalAppUserId: string, originalPurchaseDate: java.util.Date);
        public getAllExpirationDatesByProduct(): java.util.Map<string, java.util.Date>;
        public getOriginalPurchaseDate(): java.util.Date;
        public getSchemaVersion(): number;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class CustomerInfo extends java.lang.Object {
        public static class: java.lang.Class<com.revenuecat.purchases.CustomerInfo>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.CustomerInfo>;
        public getOriginalAppUserId(): string;
        public getEntitlements(): com.revenuecat.purchases.EntitlementInfos;
        public getPurchaseDateForProductId(productId: string): java.util.Date;
        public getActiveSubscriptions(): java.util.Set<string>;
        public component8(): globalAndroid.net.Uri;
        public component2(): java.util.Map<string, java.util.Date>;
        public getAllPurchasedProductIds(): java.util.Set<string>;
        public equals(other: any): boolean;
        public constructor(entitlements: com.revenuecat.purchases.EntitlementInfos, allExpirationDatesByProduct: java.util.Map<string, any>, allPurchaseDatesByProduct: java.util.Map<string, any>, requestDate: java.util.Date, schemaVersion: number, firstSeen: java.util.Date, originalAppUserId: string, managementURL: globalAndroid.net.Uri, originalPurchaseDate: java.util.Date, jsonObject: org.json.JSONObject);
        public component3(): java.util.Map<string, java.util.Date>;
        public component6(): java.util.Date;
        public hashCode(): number;
        public getAllExpirationDatesByProduct(): java.util.Map<string, java.util.Date>;
        public component4(): java.util.Date;
        public getRawData(): any;
        public component9(): java.util.Date;
        public getManagementURL(): globalAndroid.net.Uri;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
        /** @deprecated */
        public getExpirationDateForSku(sku: string): java.util.Date;
        public getExpirationDateForEntitlement(entitlement: string): java.util.Date;
        public copy(entitlements: com.revenuecat.purchases.EntitlementInfos, allExpirationDatesByProduct: java.util.Map<string, any>, allPurchaseDatesByProduct: java.util.Map<string, any>, requestDate: java.util.Date, schemaVersion: number, firstSeen: java.util.Date, originalAppUserId: string, managementURL: globalAndroid.net.Uri, originalPurchaseDate: java.util.Date, jsonObject: org.json.JSONObject): com.revenuecat.purchases.CustomerInfo;
        public getNonSubscriptionTransactions(): java.util.List<com.revenuecat.purchases.models.Transaction>;
        public getExpirationDateForProductId(productId: string): java.util.Date;
        /** @deprecated */
        public getAllPurchasedSkus(): java.util.Set<string>;
        public toString(): string;
        public getRawData(): org.json.JSONObject;
        public getAllPurchaseDatesByProduct(): java.util.Map<string, java.util.Date>;
        public getRequestDate(): java.util.Date;
        public getFirstSeen(): java.util.Date;
        /** @deprecated */
        public getPurchaseDateForSku(sku: string): java.util.Date;
        public getPurchaseDateForEntitlement(entitlement: string): java.util.Date;
        public component5(): number;
        public component1(): com.revenuecat.purchases.EntitlementInfos;
        public getLatestExpirationDate(): java.util.Date;
        public component7(): string;
        public describeContents(): number;
        public getOriginalPurchaseDate(): java.util.Date;
        public getSchemaVersion(): number;
      }
      export module CustomerInfo {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.CustomerInfo> {
          public static class: java.lang.Class<com.revenuecat.purchases.CustomerInfo.Creator>;
          public constructor();
          public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.CustomerInfo;
          public newArray(size: number): androidNative.Array<com.revenuecat.purchases.CustomerInfo>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class CustomerInfoHelper {
        public static class: java.lang.Class<com.revenuecat.purchases.CustomerInfoHelper>;
        public retrieveCustomerInfo(appUserID: string, fetchPolicy: com.revenuecat.purchases.CacheFetchPolicy, appInBackground: boolean, allowSharingPlayStoreAccount: boolean, callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, backend: com.revenuecat.purchases.common.Backend, offlineEntitlementsManager: com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager, customerInfoUpdateHandler: com.revenuecat.purchases.CustomerInfoUpdateHandler, postPendingTransactionsHelper: com.revenuecat.purchases.PostPendingTransactionsHelper, handler: globalAndroid.os.Handler);
      }
      export module CustomerInfoHelper {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.CustomerInfoHelper.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class CustomerInfoUpdateHandler {
        public static class: java.lang.Class<com.revenuecat.purchases.CustomerInfoUpdateHandler>;
        public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, identityManager: com.revenuecat.purchases.identity.IdentityManager, offlineEntitlementsManager: com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager, appConfig: com.revenuecat.purchases.common.AppConfig, diagnosticsTracker: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, handler: globalAndroid.os.Handler);
        public cacheAndNotifyListeners(customerInfo: com.revenuecat.purchases.CustomerInfo): void;
        public setUpdatedCustomerInfoListener(thisTemp: com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener): void;
        public notifyListeners($i$a$synchronizedCustomerInfoUpdateHandler$notifyListeners$2$1: com.revenuecat.purchases.CustomerInfo): void;
        public getUpdatedCustomerInfoListener(): com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class DangerousSettings {
        public static class: java.lang.Class<com.revenuecat.purchases.DangerousSettings>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.DangerousSettings>;
        public getCustomEntitlementComputation$purchases_defaultsRelease(): boolean;
        public copy(autoSyncPurchases: boolean, customEntitlementComputation: boolean): com.revenuecat.purchases.DangerousSettings;
        public getAutoSyncPurchases(): boolean;
        public component1(): boolean;
        public constructor(autoSyncPurchases: boolean, customEntitlementComputation: boolean);
        public toString(): string;
        public constructor();
        public constructor(autoSyncPurchases: boolean);
        public equals(other: any): boolean;
        public hashCode(): number;
        public describeContents(): number;
        public component2$purchases_defaultsRelease(): boolean;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
      }
      export module DangerousSettings {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.DangerousSettings> {
          public static class: java.lang.Class<com.revenuecat.purchases.DangerousSettings.Creator>;
          public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.DangerousSettings;
          public constructor();
          public newArray(size: number): androidNative.Array<com.revenuecat.purchases.DangerousSettings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class EntitlementInfo extends java.lang.Object {
        public static class: java.lang.Class<com.revenuecat.purchases.EntitlementInfo>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.EntitlementInfo>;
        public copy(identifier: string, isActive: boolean, willRenew: boolean, periodType: com.revenuecat.purchases.PeriodType, latestPurchaseDate: java.util.Date, originalPurchaseDate: java.util.Date, expirationDate: java.util.Date, store: com.revenuecat.purchases.Store, productIdentifier: string, productPlanIdentifier: string, isSandbox: boolean, unsubscribeDetectedAt: java.util.Date, billingIssueDetectedAt: java.util.Date, ownershipType: com.revenuecat.purchases.OwnershipType, jsonObject: org.json.JSONObject, verification: com.revenuecat.purchases.VerificationResult): com.revenuecat.purchases.EntitlementInfo;
        public component2(): boolean;
        public getProductPlanIdentifier(): string;
        public isSandbox(): boolean;
        public getBillingIssueDetectedAt(): java.util.Date;
        public component13(): java.util.Date;
        public getWillRenew(): boolean;
        public component12(): java.util.Date;
        public getVerification(): com.revenuecat.purchases.VerificationResult;
        public constructor(identifier: string, isActive: boolean, willRenew: boolean, periodType: com.revenuecat.purchases.PeriodType, latestPurchaseDate: java.util.Date, originalPurchaseDate: java.util.Date, expirationDate: java.util.Date, store: com.revenuecat.purchases.Store, productIdentifier: string, productPlanIdentifier: string, isSandbox: boolean, unsubscribeDetectedAt: java.util.Date, billingIssueDetectedAt: java.util.Date, ownershipType: com.revenuecat.purchases.OwnershipType, jsonObject: org.json.JSONObject, verification: com.revenuecat.purchases.VerificationResult);
        public getExpirationDate(): java.util.Date;
        public component3(): boolean;
        public component7(): java.util.Date;
        public equals(other: any): boolean;
        public component5(): java.util.Date;
        public component6(): java.util.Date;
        /** @deprecated */
        public constructor(identifier: string, isActive: boolean, willRenew: boolean, periodType: com.revenuecat.purchases.PeriodType, latestPurchaseDate: java.util.Date, originalPurchaseDate: java.util.Date, expirationDate: java.util.Date, store: com.revenuecat.purchases.Store, productIdentifier: string, productPlanIdentifier: string, isSandbox: boolean, unsubscribeDetectedAt: java.util.Date, billingIssueDetectedAt: java.util.Date, ownershipType: com.revenuecat.purchases.OwnershipType, jsonObject: org.json.JSONObject);
        public hashCode(): number;
        public getRawData(): any;
        public component9(): string;
        public getStore(): com.revenuecat.purchases.Store;
        public component8(): com.revenuecat.purchases.Store;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
        public component16(): com.revenuecat.purchases.VerificationResult;
        public component1(): string;
        public getUnsubscribeDetectedAt(): java.util.Date;
        public component4(): com.revenuecat.purchases.PeriodType;
        public toString(): string;
        public getLatestPurchaseDate(): java.util.Date;
        public getRawData(): org.json.JSONObject;
        public component11(): boolean;
        public component10(): string;
        public isActive(): boolean;
        public describeContents(): number;
        public getIdentifier(): string;
        public getPeriodType(): com.revenuecat.purchases.PeriodType;
        public getOwnershipType(): com.revenuecat.purchases.OwnershipType;
        public component14(): com.revenuecat.purchases.OwnershipType;
        public getOriginalPurchaseDate(): java.util.Date;
        public getProductIdentifier(): string;
      }
      export module EntitlementInfo {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.EntitlementInfo> {
          public static class: java.lang.Class<com.revenuecat.purchases.EntitlementInfo.Creator>;
          public constructor();
          public newArray(size: number): androidNative.Array<com.revenuecat.purchases.EntitlementInfo>;
          public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.EntitlementInfo;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class EntitlementInfos {
        public static class: java.lang.Class<com.revenuecat.purchases.EntitlementInfos>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.EntitlementInfos>;
        public equals(other: any): boolean;
        /** @deprecated */
        public constructor(all: java.util.Map<string, com.revenuecat.purchases.EntitlementInfo>);
        public getActive(): java.util.Map<string, com.revenuecat.purchases.EntitlementInfo>;
        public hashCode(): number;
        public constructor(it: java.util.Map<string, com.revenuecat.purchases.EntitlementInfo>, element$iv$iv: com.revenuecat.purchases.VerificationResult);
        public describeContents(): number;
        public get(s: string): com.revenuecat.purchases.EntitlementInfo;
        public getAll(): java.util.Map<string, com.revenuecat.purchases.EntitlementInfo>;
        public getVerification(): com.revenuecat.purchases.VerificationResult;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
      }
      export module EntitlementInfos {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.EntitlementInfos> {
          public static class: java.lang.Class<com.revenuecat.purchases.EntitlementInfos.Creator>;
          public constructor();
          public newArray(size: number): androidNative.Array<com.revenuecat.purchases.EntitlementInfos>;
          public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.EntitlementInfos;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class EntitlementVerificationMode {
        public static class: java.lang.Class<com.revenuecat.purchases.EntitlementVerificationMode>;
        public static DISABLED: com.revenuecat.purchases.EntitlementVerificationMode;
        public static INFORMATIONAL: com.revenuecat.purchases.EntitlementVerificationMode;
        public static values(): androidNative.Array<com.revenuecat.purchases.EntitlementVerificationMode>;
        public isEnabled(): boolean;
        public static valueOf(value: string): com.revenuecat.purchases.EntitlementVerificationMode;
      }
      export module EntitlementVerificationMode {
        export class Companion {
          public static class: java.lang.Class<com.revenuecat.purchases.EntitlementVerificationMode.Companion>;
          public getDefault(): com.revenuecat.purchases.EntitlementVerificationMode;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class ExperimentalPreviewRevenueCatPurchasesAPI {
        public static class: java.lang.Class<com.revenuecat.purchases.ExperimentalPreviewRevenueCatPurchasesAPI>;
        /**
         * Constructs a new instance of the com.revenuecat.purchases.ExperimentalPreviewRevenueCatPurchasesAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class LifecycleDelegate {
        public static class: java.lang.Class<com.revenuecat.purchases.LifecycleDelegate>;
        /**
         * Constructs a new instance of the com.revenuecat.purchases.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onAppBackgrounded(): void; onAppForegrounded(): void });
        public constructor();
        public onAppForegrounded(): void;
        public onAppBackgrounded(): void;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class LogHandler {
        public static class: java.lang.Class<com.revenuecat.purchases.LogHandler>;
        /**
         * Constructs a new instance of the com.revenuecat.purchases.LogHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { v(param0: string, param1: string): void; d(param0: string, param1: string): void; i(param0: string, param1: string): void; w(param0: string, param1: string): void; e(param0: string, param1: string, param2: java.lang.Throwable): void });
        public constructor();
        public e(param0: string, param1: string, param2: java.lang.Throwable): void;
        public w(param0: string, param1: string): void;
        public d(param0: string, param1: string): void;
        public v(param0: string, param1: string): void;
        public i(param0: string, param1: string): void;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class LogLevel {
        public static class: java.lang.Class<com.revenuecat.purchases.LogLevel>;
        public static VERBOSE: com.revenuecat.purchases.LogLevel;
        public static DEBUG: com.revenuecat.purchases.LogLevel;
        public static INFO: com.revenuecat.purchases.LogLevel;
        public static WARN: com.revenuecat.purchases.LogLevel;
        public static ERROR: com.revenuecat.purchases.LogLevel;
        public static valueOf(value: string): com.revenuecat.purchases.LogLevel;
        public static values(): androidNative.Array<com.revenuecat.purchases.LogLevel>;
      }
      export module LogLevel {
        export class Companion {
          public static class: java.lang.Class<com.revenuecat.purchases.LogLevel.Companion>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class Offering {
        public static class: java.lang.Class<com.revenuecat.purchases.Offering>;
        public getServerDescription(): string;
        public getSixMonth(): com.revenuecat.purchases.Package;
        public getMetadata(): java.util.Map<string, any>;
        public getLifetime(): com.revenuecat.purchases.Package;
        public component3(): java.util.Map<string, any>;
        public getAnnual(): com.revenuecat.purchases.Package;
        public equals(other: any): boolean;
        public constructor(identifier: string, serverDescription: string, metadata: java.util.Map<string, any>, availablePackages: java.util.List<com.revenuecat.purchases.Package>);
        public hashCode(): number;
        public getPackage(it: string): com.revenuecat.purchases.Package;
        public component2(): string;
        public constructor(identifier: string, serverDescription: string, metadata: java.util.Map<string, any>, availablePackages: java.util.List<com.revenuecat.purchases.Package>, paywall: com.revenuecat.purchases.paywalls.PaywallData);
        public component5(): com.revenuecat.purchases.paywalls.PaywallData;
        public getThreeMonth(): com.revenuecat.purchases.Package;
        public get(s: string): com.revenuecat.purchases.Package;
        public component1(): string;
        public component4(): java.util.List<com.revenuecat.purchases.Package>;
        public getAvailablePackages(): java.util.List<com.revenuecat.purchases.Package>;
        public getTwoMonth(): com.revenuecat.purchases.Package;
        public toString(): string;
        public getPaywall(): com.revenuecat.purchases.paywalls.PaywallData;
        public getMetadataString(key: string, default_: string): string;
        public copy(identifier: string, serverDescription: string, metadata: java.util.Map<string, any>, availablePackages: java.util.List<com.revenuecat.purchases.Package>, paywall: com.revenuecat.purchases.paywalls.PaywallData): com.revenuecat.purchases.Offering;
        public getWeekly(): com.revenuecat.purchases.Package;
        public getIdentifier(): string;
        public getMonthly(): com.revenuecat.purchases.Package;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class OfferingParserFactory {
        public static class: java.lang.Class<com.revenuecat.purchases.OfferingParserFactory>;
        public static INSTANCE: com.revenuecat.purchases.OfferingParserFactory;
        public createOfferingParser(thisTemp: com.revenuecat.purchases.Store): com.revenuecat.purchases.common.OfferingParser;
      }
      export module OfferingParserFactory {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.OfferingParserFactory.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class Offerings {
        public static class: java.lang.Class<com.revenuecat.purchases.Offerings>;
        public constructor(current: com.revenuecat.purchases.Offering, all: java.util.Map<string, com.revenuecat.purchases.Offering>);
        public getCurrentOfferingForPlacement($this$getCurrentOfferingForPlacement_u24lambda_u240: string): com.revenuecat.purchases.Offering;
        public component3$purchases_defaultsRelease(): com.revenuecat.purchases.Offerings.Placements;
        public component4$purchases_defaultsRelease(): com.revenuecat.purchases.Offerings.Targeting;
        public toString(): string;
        public copy(current: com.revenuecat.purchases.Offering, all: java.util.Map<string, com.revenuecat.purchases.Offering>, placements: com.revenuecat.purchases.Offerings.Placements, targeting: com.revenuecat.purchases.Offerings.Targeting): com.revenuecat.purchases.Offerings;
        public getOffering(identifier: string): com.revenuecat.purchases.Offering;
        public getAll(): java.util.Map<string, com.revenuecat.purchases.Offering>;
        public component2(): java.util.Map<string, com.revenuecat.purchases.Offering>;
        public getTargeting$purchases_defaultsRelease(): com.revenuecat.purchases.Offerings.Targeting;
        public equals(other: any): boolean;
        public constructor(current: com.revenuecat.purchases.Offering, all: java.util.Map<string, com.revenuecat.purchases.Offering>, placements: com.revenuecat.purchases.Offerings.Placements, targeting: com.revenuecat.purchases.Offerings.Targeting);
        public getCurrent(): com.revenuecat.purchases.Offering;
        public hashCode(): number;
        public component1(): com.revenuecat.purchases.Offering;
        public getPlacements$purchases_defaultsRelease(): com.revenuecat.purchases.Offerings.Placements;
        public get(identifier: string): com.revenuecat.purchases.Offering;
      }
      export module Offerings {
        export class Placements {
          public static class: java.lang.Class<com.revenuecat.purchases.Offerings.Placements>;
          public getFallbackOfferingId(): string;
          public component2(): java.util.Map<string, string>;
          public toString(): string;
          public component1(): string;
          public copy(fallbackOfferingId: string, offeringIdsByPlacement: java.util.Map<string, string>): com.revenuecat.purchases.Offerings.Placements;
          public getOfferingIdsByPlacement(): java.util.Map<string, string>;
          public equals(other: any): boolean;
          public constructor(fallbackOfferingId: string, offeringIdsByPlacement: java.util.Map<string, string>);
          public hashCode(): number;
        }
        export class Targeting {
          public static class: java.lang.Class<com.revenuecat.purchases.Offerings.Targeting>;
          public toString(): string;
          public constructor(revision: number, ruleId: string);
          public getRevision(): number;
          public component2(): string;
          public copy(revision: number, ruleId: string): com.revenuecat.purchases.Offerings.Targeting;
          public component1(): number;
          public equals(other: any): boolean;
          public getRuleId(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class OwnershipType {
        public static class: java.lang.Class<com.revenuecat.purchases.OwnershipType>;
        public static PURCHASED: com.revenuecat.purchases.OwnershipType;
        public static FAMILY_SHARED: com.revenuecat.purchases.OwnershipType;
        public static UNKNOWN: com.revenuecat.purchases.OwnershipType;
        public static valueOf(value: string): com.revenuecat.purchases.OwnershipType;
        public static values(): androidNative.Array<com.revenuecat.purchases.OwnershipType>;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class Package {
        public static class: java.lang.Class<com.revenuecat.purchases.Package>;
        /** @deprecated */
        public constructor(identifier: string, packageType: com.revenuecat.purchases.PackageType, product: com.revenuecat.purchases.models.StoreProduct, offering: string);
        public component1(): string;
        public component4(): com.revenuecat.purchases.PresentedOfferingContext;
        public getPackageType(): com.revenuecat.purchases.PackageType;
        public toString(): string;
        public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
        public constructor(identifier: string, packageType: com.revenuecat.purchases.PackageType, product: com.revenuecat.purchases.models.StoreProduct, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
        public equals(other: any): boolean;
        public component2(): com.revenuecat.purchases.PackageType;
        public component3(): com.revenuecat.purchases.models.StoreProduct;
        public getProduct(): com.revenuecat.purchases.models.StoreProduct;
        /** @deprecated */
        public getOffering(): string;
        public hashCode(): number;
        public getIdentifier(): string;
        public copy(identifier: string, packageType: com.revenuecat.purchases.PackageType, product: com.revenuecat.purchases.models.StoreProduct, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.Package;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PackageType {
        public static class: java.lang.Class<com.revenuecat.purchases.PackageType>;
        public static UNKNOWN: com.revenuecat.purchases.PackageType;
        public static CUSTOM: com.revenuecat.purchases.PackageType;
        public static LIFETIME: com.revenuecat.purchases.PackageType;
        public static ANNUAL: com.revenuecat.purchases.PackageType;
        public static SIX_MONTH: com.revenuecat.purchases.PackageType;
        public static THREE_MONTH: com.revenuecat.purchases.PackageType;
        public static TWO_MONTH: com.revenuecat.purchases.PackageType;
        public static MONTHLY: com.revenuecat.purchases.PackageType;
        public static WEEKLY: com.revenuecat.purchases.PackageType;
        public static values(): androidNative.Array<com.revenuecat.purchases.PackageType>;
        public static valueOf(value: string): com.revenuecat.purchases.PackageType;
        public getIdentifier(): string;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PeriodType {
        public static class: java.lang.Class<com.revenuecat.purchases.PeriodType>;
        public static NORMAL: com.revenuecat.purchases.PeriodType;
        public static INTRO: com.revenuecat.purchases.PeriodType;
        public static TRIAL: com.revenuecat.purchases.PeriodType;
        public static valueOf(value: string): com.revenuecat.purchases.PeriodType;
        public static values(): androidNative.Array<com.revenuecat.purchases.PeriodType>;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PostPendingTransactionsHelper {
        public static class: java.lang.Class<com.revenuecat.purchases.PostPendingTransactionsHelper>;
        public constructor(appConfig: com.revenuecat.purchases.common.AppConfig, deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, billing: com.revenuecat.purchases.common.BillingAbstract, dispatcher: com.revenuecat.purchases.common.Dispatcher, identityManager: com.revenuecat.purchases.identity.IdentityManager, postTransactionWithProductDetailsHelper: com.revenuecat.purchases.PostTransactionWithProductDetailsHelper);
        public syncPendingPurchaseQueue(thisTemp: boolean, allowSharingPlayStoreAccount: any, onError: any): void;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PostReceiptHelper {
        public static class: java.lang.Class<com.revenuecat.purchases.PostReceiptHelper>;
        public constructor(appConfig: com.revenuecat.purchases.common.AppConfig, backend: com.revenuecat.purchases.common.Backend, billing: com.revenuecat.purchases.common.BillingAbstract, customerInfoUpdateHandler: com.revenuecat.purchases.CustomerInfoUpdateHandler, deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, subscriberAttributesManager: com.revenuecat.purchases.subscriberattributes.SubscriberAttributesManager, offlineEntitlementsManager: com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager, paywallPresentedCache: com.revenuecat.purchases.paywalls.PaywallPresentedCache);
        public postTokenWithoutConsuming(purchaseToken: string, storeUserID: string, receiptInfo: com.revenuecat.purchases.common.ReceiptInfo, isRestore: boolean, appUserID: string, marketplace: string, initiationSource: com.revenuecat.purchases.PostReceiptInitiationSource, onSuccess: any, onError: any): void;
        public postTransactionAndConsumeIfNeeded(thisTemp: com.revenuecat.purchases.models.StoreTransaction, purchase: com.revenuecat.purchases.models.StoreProduct, storeProduct: boolean, isRestore: string, appUserID: com.revenuecat.purchases.PostReceiptInitiationSource, initiationSource: any, onSuccess: any): void;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PostReceiptInitiationSource {
        public static class: java.lang.Class<com.revenuecat.purchases.PostReceiptInitiationSource>;
        public static RESTORE: com.revenuecat.purchases.PostReceiptInitiationSource;
        public static PURCHASE: com.revenuecat.purchases.PostReceiptInitiationSource;
        public static UNSYNCED_ACTIVE_PURCHASES: com.revenuecat.purchases.PostReceiptInitiationSource;
        public static values(): androidNative.Array<com.revenuecat.purchases.PostReceiptInitiationSource>;
        public static valueOf(value: string): com.revenuecat.purchases.PostReceiptInitiationSource;
        public getPostReceiptFieldValue(): string;
      }
      export module PostReceiptInitiationSource {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.PostReceiptInitiationSource.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PostTransactionWithProductDetailsHelper {
        public static class: java.lang.Class<com.revenuecat.purchases.PostTransactionWithProductDetailsHelper>;
        public constructor(billing: com.revenuecat.purchases.common.BillingAbstract, postReceiptHelper: com.revenuecat.purchases.PostReceiptHelper);
        public postTransactions(it: java.util.List<com.revenuecat.purchases.models.StoreTransaction>, $i$a$forEachPostTransactionWithProductDetailsHelper$postTransactions$1: boolean, transaction: string, element$iv: com.revenuecat.purchases.PostReceiptInitiationSource, $i$f$forEach: any, $this$forEach$iv: any): void;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PresentedOfferingContext {
        public static class: java.lang.Class<com.revenuecat.purchases.PresentedOfferingContext>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.PresentedOfferingContext>;
        public getPlacementIdentifier(): string;
        public component1(): string;
        public getTargetingContext(): com.revenuecat.purchases.PresentedOfferingContext.TargetingContext;
        public constructor(offeringIdentifier: string, placementIdentifier: string, targetingContext: com.revenuecat.purchases.PresentedOfferingContext.TargetingContext);
        public getOfferingIdentifier(): string;
        public toString(): string;
        public copy(offeringIdentifier: string, placementIdentifier: string, targetingContext: com.revenuecat.purchases.PresentedOfferingContext.TargetingContext): com.revenuecat.purchases.PresentedOfferingContext;
        public component3(): com.revenuecat.purchases.PresentedOfferingContext.TargetingContext;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component2(): string;
        public describeContents(): number;
        public constructor(offeringIdentifier: string);
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
      }
      export module PresentedOfferingContext {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.PresentedOfferingContext> {
          public static class: java.lang.Class<com.revenuecat.purchases.PresentedOfferingContext.Creator>;
          public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.PresentedOfferingContext;
          public constructor();
          public newArray(size: number): androidNative.Array<com.revenuecat.purchases.PresentedOfferingContext>;
        }
        export class TargetingContext {
          public static class: java.lang.Class<com.revenuecat.purchases.PresentedOfferingContext.TargetingContext>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.PresentedOfferingContext.TargetingContext>;
          public toString(): string;
          public constructor(revision: number, ruleId: string);
          public getRevision(): number;
          public component2(): string;
          public copy(revision: number, ruleId: string): com.revenuecat.purchases.PresentedOfferingContext.TargetingContext;
          public component1(): number;
          public equals(other: any): boolean;
          public describeContents(): number;
          public getRuleId(): string;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public hashCode(): number;
        }
        export module TargetingContext {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.PresentedOfferingContext.TargetingContext> {
            public static class: java.lang.Class<com.revenuecat.purchases.PresentedOfferingContext.TargetingContext.Creator>;
            public constructor();
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.PresentedOfferingContext.TargetingContext>;
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.PresentedOfferingContext.TargetingContext;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class ProductType {
        public static class: java.lang.Class<com.revenuecat.purchases.ProductType>;
        public static SUBS: com.revenuecat.purchases.ProductType;
        public static INAPP: com.revenuecat.purchases.ProductType;
        public static UNKNOWN: com.revenuecat.purchases.ProductType;
        public static values(): androidNative.Array<com.revenuecat.purchases.ProductType>;
        public static valueOf(value: string): com.revenuecat.purchases.ProductType;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchaseParams {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchaseParams>;
        public getBuilder(): com.revenuecat.purchases.PurchaseParams.Builder;
        public equals(other: any): boolean;
        public constructor(builder: com.revenuecat.purchases.PurchaseParams.Builder);
        public setPresentedOfferingContext$purchases_defaultsRelease(setTemp: com.revenuecat.purchases.PresentedOfferingContext): void;
        public isPersonalizedPrice(): java.lang.Boolean;
        public hashCode(): number;
        public getOldProductId(): string;
        public copy(builder: com.revenuecat.purchases.PurchaseParams.Builder): com.revenuecat.purchases.PurchaseParams;
        public component1(): com.revenuecat.purchases.PurchaseParams.Builder;
        public toString(): string;
        public getGoogleReplacementMode(): com.revenuecat.purchases.models.GoogleReplacementMode;
      }
      export module PurchaseParams {
        export class Builder {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchaseParams.Builder>;
          public constructor(activity: globalAndroid.app.Activity, packageToPurchase: com.revenuecat.purchases.Package);
          public isPersonalizedPrice($this$isPersonalizedPrice_u24lambda_u241: boolean): com.revenuecat.purchases.PurchaseParams.Builder;
          public oldProductId($this$oldProductId_u24lambda_u242: string): com.revenuecat.purchases.PurchaseParams.Builder;
          public build(): com.revenuecat.purchases.PurchaseParams;
          public setPresentedOfferingContext$purchases_defaultsRelease(setTemp: com.revenuecat.purchases.PresentedOfferingContext): void;
          public presentedOfferingContext($this$presentedOfferingContext_u24lambda_u240: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.PurchaseParams.Builder;
          public constructor(activity: globalAndroid.app.Activity, storeProduct: com.revenuecat.purchases.models.StoreProduct);
          public constructor(activity: globalAndroid.app.Activity, subscriptionOption: com.revenuecat.purchases.models.SubscriptionOption);
          public googleReplacementMode($this$googleReplacementMode_u24lambda_u243: com.revenuecat.purchases.models.GoogleReplacementMode): com.revenuecat.purchases.PurchaseParams.Builder;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchaseResult {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchaseResult>;
        public component2(): com.revenuecat.purchases.CustomerInfo;
        public equals(other: any): boolean;
        public hashCode(): number;
        public constructor(storeTransaction: com.revenuecat.purchases.models.StoreTransaction, customerInfo: com.revenuecat.purchases.CustomerInfo);
        public getCustomerInfo(): com.revenuecat.purchases.CustomerInfo;
        public component1(): com.revenuecat.purchases.models.StoreTransaction;
        public getStoreTransaction(): com.revenuecat.purchases.models.StoreTransaction;
        public copy(storeTransaction: com.revenuecat.purchases.models.StoreTransaction, customerInfo: com.revenuecat.purchases.CustomerInfo): com.revenuecat.purchases.PurchaseResult;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class Purchases extends com.revenuecat.purchases.LifecycleDelegate {
        public static class: java.lang.Class<com.revenuecat.purchases.Purchases>;
        public setKeyword(keyword: string): void;
        public setUpdatedCustomerInfoListener(value: com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener): void;
        public static getFrameworkVersion(): string;
        public showInAppMessagesIfNeeded(activity: globalAndroid.app.Activity, inAppMessageTypes: java.util.List<any>): void;
        public setEmail(email: string): void;
        public collectDeviceIdentifiers(): void;
        public setMediaSource(mediaSource: string): void;
        public static setProxyURL(value: java.net.URL): void;
        public static setSharedInstance$purchases_defaultsRelease(value: com.revenuecat.purchases.Purchases): void;
        public syncPurchases(): void;
        /** @deprecated */
        public onAppBackgrounded(): void;
        public setCreative(creative: string): void;
        public logOut(): void;
        /** @deprecated */
        public onAppForegrounded(): void;
        public static isConfigured(): boolean;
        /** @deprecated */
        public purchasePackage(activity: globalAndroid.app.Activity, packageToPurchase: com.revenuecat.purchases.Package, listener: com.revenuecat.purchases.interfaces.PurchaseCallback): void;
        public getPurchasesAreCompletedBy(): com.revenuecat.purchases.PurchasesAreCompletedBy;
        public static canMakePayments(context: globalAndroid.content.Context, features: java.util.List<any>, callback: com.revenuecat.purchases.interfaces.Callback<java.lang.Boolean>): void;
        public static getSharedInstance(): com.revenuecat.purchases.Purchases;
        public static getLogLevel(): com.revenuecat.purchases.LogLevel;
        public static setPlatformInfo(value: com.revenuecat.purchases.common.PlatformInfo): void;
        public setPhoneNumber(phoneNumber: string): void;
        /** @deprecated */
        public static getDebugLogsEnabled(): boolean;
        /** @deprecated */
        public purchaseProduct(activity: globalAndroid.app.Activity, storeProduct: com.revenuecat.purchases.models.StoreProduct, callback: com.revenuecat.purchases.interfaces.PurchaseCallback): void;
        public close(): void;
        public setAdGroup(adGroup: string): void;
        public static configure(configuration: com.revenuecat.purchases.PurchasesConfiguration): com.revenuecat.purchases.Purchases;
        public setCleverTapID(cleverTapID: string): void;
        /** @deprecated */
        public syncObserverModeAmazonPurchase(productID: string, receiptID: string, amazonUserID: string, isoCurrencyCode: string, price: java.lang.Double): void;
        public getOfferings(listener: com.revenuecat.purchases.interfaces.ReceiveOfferingsCallback): void;
        public setPushToken(fcmToken: string): void;
        public getCustomerInfo(fetchPolicy: com.revenuecat.purchases.CacheFetchPolicy, callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public setOnesignalID(onesignalID: string): void;
        public setCampaign(campaign: string): void;
        /** @deprecated */
        public setAllowSharingPlayStoreAccount(value: boolean): void;
        public getCustomerCenterConfigData$purchases_defaultsRelease(callback: com.revenuecat.purchases.interfaces.GetCustomerCenterConfigCallback): void;
        public setKochavaDeviceID(kochavaDeviceID: string): void;
        public getAmazonLWAConsentStatus(callback: com.revenuecat.purchases.interfaces.GetAmazonLWAConsentStatusCallback): void;
        /** @deprecated */
        public getNonSubscriptionSkus(productIds: java.util.List<string>, callback: com.revenuecat.purchases.interfaces.GetStoreProductsCallback): void;
        public logOut(callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public setAppsflyerID(appsflyerID: string): void;
        public logIn(newAppUserID: string): void;
        public setFirebaseAppInstanceID(firebaseAppInstanceID: string): void;
        public purchase(purchaseParams: com.revenuecat.purchases.PurchaseParams, callback: com.revenuecat.purchases.interfaces.PurchaseCallback): void;
        public logIn(newAppUserID: string, callback: com.revenuecat.purchases.interfaces.LogInCallback): void;
        /** @deprecated */
        public getSubscriptionSkus(productIds: java.util.List<string>, callback: com.revenuecat.purchases.interfaces.GetStoreProductsCallback): void;
        public restorePurchases(callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public getStorefrontCountryCode(): string;
        public static getProxyURL(): java.net.URL;
        public static setLogLevel(value: com.revenuecat.purchases.LogLevel): void;
        public getCurrentConfiguration(): com.revenuecat.purchases.PurchasesConfiguration;
        public invalidateCustomerInfoCache(): void;
        public setAd(ad: string): void;
        public setAttributes(attributes: java.util.Map<string, string>): void;
        public isAnonymous(): boolean;
        /** @deprecated */
        public setFinishTransactions(value: boolean): void;
        /** @deprecated */
        public static setDebugLogsEnabled(value: boolean): void;
        public constructor(purchasesOrchestrator: com.revenuecat.purchases.PurchasesOrchestrator);
        public onAppForegrounded(): void;
        public setOnesignalUserID(onesignalUserID: string): void;
        public showInAppMessagesIfNeeded(activity: globalAndroid.app.Activity): void;
        public setDisplayName(displayName: string): void;
        public static getLogHandler(): com.revenuecat.purchases.LogHandler;
        public getProducts(productIds: java.util.List<string>, callback: com.revenuecat.purchases.interfaces.GetStoreProductsCallback): void;
        public getProducts(productIds: java.util.List<string>, type: com.revenuecat.purchases.ProductType, callback: com.revenuecat.purchases.interfaces.GetStoreProductsCallback): void;
        public setAdjustID(adjustID: string): void;
        public getStore(): com.revenuecat.purchases.Store;
        public getAppUserID(): string;
        public setAirshipChannelID(airshipChannelID: string): void;
        public static setLogHandler(value: com.revenuecat.purchases.LogHandler): void;
        public syncAmazonPurchase(productID: string, receiptID: string, amazonUserID: string, isoCurrencyCode: string, price: java.lang.Double): void;
        public removeUpdatedCustomerInfoListener(): void;
        public static getPlatformInfo(): com.revenuecat.purchases.common.PlatformInfo;
        public getUpdatedCustomerInfoListener(): com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener;
        public setPurchasesAreCompletedBy(value: com.revenuecat.purchases.PurchasesAreCompletedBy): void;
        public syncAttributesAndOfferingsIfNeeded(callback: com.revenuecat.purchases.interfaces.SyncAttributesAndOfferingsCallback): void;
        public setMixpanelDistinctID(mixpanelDistinctID: string): void;
        public syncPurchases(listener: com.revenuecat.purchases.interfaces.SyncPurchasesCallback): void;
        public setFBAnonymousID(fbAnonymousID: string): void;
        public setMparticleID(mparticleID: string): void;
        public onAppBackgrounded(): void;
        public getCustomerInfo(callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public static canMakePayments(context: globalAndroid.content.Context, callback: com.revenuecat.purchases.interfaces.Callback<java.lang.Boolean>): void;
        /** @deprecated */
        public getFinishTransactions(): boolean;
        /** @deprecated */
        public getAllowSharingPlayStoreAccount(): boolean;
      }
      export module Purchases {
        export class Companion {
          public static class: java.lang.Class<com.revenuecat.purchases.Purchases.Companion>;
          public setSharedInstance$purchases_defaultsRelease(value: com.revenuecat.purchases.Purchases): void;
          public setPlatformInfo(value: com.revenuecat.purchases.common.PlatformInfo): void;
          public getLogHandler(): com.revenuecat.purchases.LogHandler;
          public getSharedInstance(): com.revenuecat.purchases.Purchases;
          /** @deprecated */
          public setDebugLogsEnabled(value: boolean): void;
          public canMakePayments(context: globalAndroid.content.Context, callback: com.revenuecat.purchases.interfaces.Callback<java.lang.Boolean>): void;
          public canMakePayments(thisTemp: globalAndroid.content.Context, context: java.util.List<any>, features: com.revenuecat.purchases.interfaces.Callback<java.lang.Boolean>): void;
          public setProxyURL(value: java.net.URL): void;
          public getLogLevel(): com.revenuecat.purchases.LogLevel;
          public getPlatformInfo(): com.revenuecat.purchases.common.PlatformInfo;
          public setLogLevel(value: com.revenuecat.purchases.LogLevel): void;
          public isConfigured(): boolean;
          public getBackingFieldSharedInstance$purchases_defaultsRelease(): com.revenuecat.purchases.Purchases;
          public getFrameworkVersion(): string;
          public getProxyURL(): java.net.URL;
          public configure(it: com.revenuecat.purchases.PurchasesConfiguration): com.revenuecat.purchases.Purchases;
          public setBackingFieldSharedInstance$purchases_defaultsRelease(setTemp: com.revenuecat.purchases.Purchases): void;
          /** @deprecated */
          public getDebugLogsEnabled(): boolean;
          public setLogHandler(value: com.revenuecat.purchases.LogHandler): void;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.Purchases.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesAreCompletedBy {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesAreCompletedBy>;
        public static REVENUECAT: com.revenuecat.purchases.PurchasesAreCompletedBy;
        public static MY_APP: com.revenuecat.purchases.PurchasesAreCompletedBy;
        public static valueOf(value: string): com.revenuecat.purchases.PurchasesAreCompletedBy;
        public static values(): androidNative.Array<com.revenuecat.purchases.PurchasesAreCompletedBy>;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module PurchasesAreCompletedByKt {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchasesAreCompletedByKt.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesConfiguration {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesConfiguration>;
        public constructor(builder: com.revenuecat.purchases.PurchasesConfiguration.Builder);
        public getDiagnosticsEnabled(): boolean;
        public getContext(): globalAndroid.content.Context;
        /** @deprecated */
        public getObserverMode(): boolean;
        public getService(): java.util.concurrent.ExecutorService;
        public getDangerousSettings(): com.revenuecat.purchases.DangerousSettings;
        public getPendingTransactionsForPrepaidPlansEnabled(): boolean;
        public copy$purchases_defaultsRelease(thisTemp: string, appUserID: java.util.concurrent.ExecutorService): com.revenuecat.purchases.PurchasesConfiguration;
        public equals(other: any): boolean;
        public getPurchasesAreCompletedBy(): com.revenuecat.purchases.PurchasesAreCompletedBy;
        public hashCode(): number;
        public getApiKey(): string;
        public getShowInAppMessagesAutomatically(): boolean;
        public getStore(): com.revenuecat.purchases.Store;
        public getAppUserID(): string;
        public getVerificationMode(): com.revenuecat.purchases.EntitlementVerificationMode;
      }
      export module PurchasesConfiguration {
        export class Builder {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchasesConfiguration.Builder>;
          public entitlementVerificationMode($this$entitlementVerificationMode_u24lambda_u248: com.revenuecat.purchases.EntitlementVerificationMode): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public appUserID($this$appUserID_u24lambda_u240: string): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          /** @deprecated */
          public observerMode($this$observerMode_u24lambda_u242: boolean): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public constructor(context: globalAndroid.content.Context, apiKey: string);
          public store($this$store_u24lambda_u245: com.revenuecat.purchases.Store): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public diagnosticsEnabled($this$diagnosticsEnabled_u24lambda_u246: boolean): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public pendingTransactionsForPrepaidPlansEnabled($this$pendingTransactionsForPrepaidPlansEnabled_u24lambda_u2410: boolean): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public build(): com.revenuecat.purchases.PurchasesConfiguration;
          public service($this$service_u24lambda_u244: java.util.concurrent.ExecutorService): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public dangerousSettings($this$dangerousSettings_u24lambda_u249: com.revenuecat.purchases.DangerousSettings): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public showInAppMessagesAutomatically($this$showInAppMessagesAutomatically_u24lambda_u241: boolean): com.revenuecat.purchases.PurchasesConfiguration.Builder;
          public purchasesAreCompletedBy($this$purchasesAreCompletedBy_u24lambda_u243: com.revenuecat.purchases.PurchasesAreCompletedBy): com.revenuecat.purchases.PurchasesConfiguration.Builder;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchasesConfiguration.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesError {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesError>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.PurchasesError>;
        public getUnderlyingErrorMessage(): string;
        public constructor(code: com.revenuecat.purchases.PurchasesErrorCode, underlyingErrorMessage: string);
        public describeContents(): number;
        public getMessage(): string;
        public toString(): string;
        public getCode(): com.revenuecat.purchases.PurchasesErrorCode;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
      }
      export module PurchasesError {
        export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.PurchasesError> {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchasesError.Creator>;
          public newArray(size: number): androidNative.Array<com.revenuecat.purchases.PurchasesError>;
          public constructor();
          public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.PurchasesError;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesErrorCode {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesErrorCode>;
        public static UnknownError: com.revenuecat.purchases.PurchasesErrorCode;
        public static PurchaseCancelledError: com.revenuecat.purchases.PurchasesErrorCode;
        public static StoreProblemError: com.revenuecat.purchases.PurchasesErrorCode;
        public static PurchaseNotAllowedError: com.revenuecat.purchases.PurchasesErrorCode;
        public static PurchaseInvalidError: com.revenuecat.purchases.PurchasesErrorCode;
        public static ProductNotAvailableForPurchaseError: com.revenuecat.purchases.PurchasesErrorCode;
        public static ProductAlreadyPurchasedError: com.revenuecat.purchases.PurchasesErrorCode;
        public static ReceiptAlreadyInUseError: com.revenuecat.purchases.PurchasesErrorCode;
        public static InvalidReceiptError: com.revenuecat.purchases.PurchasesErrorCode;
        public static MissingReceiptFileError: com.revenuecat.purchases.PurchasesErrorCode;
        public static NetworkError: com.revenuecat.purchases.PurchasesErrorCode;
        public static InvalidCredentialsError: com.revenuecat.purchases.PurchasesErrorCode;
        public static UnexpectedBackendResponseError: com.revenuecat.purchases.PurchasesErrorCode;
        public static InvalidAppUserIdError: com.revenuecat.purchases.PurchasesErrorCode;
        public static OperationAlreadyInProgressError: com.revenuecat.purchases.PurchasesErrorCode;
        public static UnknownBackendError: com.revenuecat.purchases.PurchasesErrorCode;
        public static InvalidAppleSubscriptionKeyError: com.revenuecat.purchases.PurchasesErrorCode;
        public static IneligibleError: com.revenuecat.purchases.PurchasesErrorCode;
        public static InsufficientPermissionsError: com.revenuecat.purchases.PurchasesErrorCode;
        public static PaymentPendingError: com.revenuecat.purchases.PurchasesErrorCode;
        public static InvalidSubscriberAttributesError: com.revenuecat.purchases.PurchasesErrorCode;
        public static LogOutWithAnonymousUserError: com.revenuecat.purchases.PurchasesErrorCode;
        public static ConfigurationError: com.revenuecat.purchases.PurchasesErrorCode;
        public static UnsupportedError: com.revenuecat.purchases.PurchasesErrorCode;
        public static EmptySubscriberAttributesError: com.revenuecat.purchases.PurchasesErrorCode;
        public static CustomerInfoError: com.revenuecat.purchases.PurchasesErrorCode;
        public static SignatureVerificationError: com.revenuecat.purchases.PurchasesErrorCode;
        public getCode(): number;
        public getDescription(): string;
        public static values(): androidNative.Array<com.revenuecat.purchases.PurchasesErrorCode>;
        public static valueOf(value: string): com.revenuecat.purchases.PurchasesErrorCode;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesException {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesException>;
        public getError(): com.revenuecat.purchases.PurchasesError;
        public getUnderlyingErrorMessage(): string;
        public constructor(error: com.revenuecat.purchases.PurchasesError);
        public getMessage(): string;
        public getCode(): com.revenuecat.purchases.PurchasesErrorCode;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesFactory {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesFactory>;
        public constructor(apiKeyValidator: com.revenuecat.purchases.APIKeyValidator);
        public createPurchases(application: com.revenuecat.purchases.PurchasesConfiguration, appConfig: com.revenuecat.purchases.common.PlatformInfo, prefs: java.net.URL, eTagManager: com.revenuecat.purchases.common.BillingAbstract, dispatcher: boolean, backendDispatcher: boolean, eventsDispatcher: boolean): com.revenuecat.purchases.Purchases;
        public validateConfiguration($i$a$requirePurchasesFactory$validateConfiguration$1$2: com.revenuecat.purchases.PurchasesConfiguration): void;
        public constructor();
      }
      export module PurchasesFactory {
        export class LowPriorityThreadFactory {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchasesFactory.LowPriorityThreadFactory>;
          public constructor(threadName: string);
          public newThread(thisTemp: java.lang.Runnable): java.lang.Thread;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesOrchestrator implements com.revenuecat.purchases.LifecycleDelegate, com.revenuecat.purchases.utils.CustomActivityLifecycleHandler {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesOrchestrator>;
        public static frameworkVersion: string = '8.8.1';
        public setKeyword(keyword: string): void;
        public setUpdatedCustomerInfoListener(value: com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener): void;
        public showInAppMessagesIfNeeded(activity: globalAndroid.app.Activity, inAppMessageTypes: java.util.List<any>): void;
        public getState$purchases_defaultsRelease(): com.revenuecat.purchases.PurchasesState;
        public setEmail(email: string): void;
        public collectDeviceIdentifiers(): void;
        public onActivityResumed(param0: globalAndroid.app.Activity): void;
        public setMediaSource(mediaSource: string): void;
        public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
        public setCreative(creative: string): void;
        public setPhoneNumber(phoneNumber: string): void;
        public close(): void;
        public setAdGroup(adGroup: string): void;
        public syncAttributesAndOfferingsIfNeeded(thisTemp: com.revenuecat.purchases.interfaces.SyncAttributesAndOfferingsCallback): void;
        public setCleverTapID(cleverTapID: string): void;
        public getAllowSharingPlayStoreAccount(): boolean;
        public setPushToken(fcmToken: string): void;
        public getCustomerInfo(fetchPolicy: com.revenuecat.purchases.CacheFetchPolicy, callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public setOnesignalID(onesignalID: string): void;
        public setCampaign(campaign: string): void;
        public onActivityResumed(activity: globalAndroid.app.Activity): void;
        public onActivityPaused(activity: globalAndroid.app.Activity): void;
        public setKochavaDeviceID(kochavaDeviceID: string): void;
        public onActivityStarted(activity: globalAndroid.app.Activity): void;
        public getAmazonLWAConsentStatus(callback: com.revenuecat.purchases.interfaces.GetAmazonLWAConsentStatusCallback): void;
        public logOut(callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public setAppsflyerID(appsflyerID: string): void;
        public purchase(productId: com.revenuecat.purchases.PurchaseParams, $i$a$runPurchasesOrchestrator$purchase$1$2: com.revenuecat.purchases.interfaces.PurchaseCallback): void;
        public setFirebaseAppInstanceID(firebaseAppInstanceID: string): void;
        public getStorefrontCountryCode(): string;
        public logIn(it: string, $i$a$letPurchasesOrchestrator$logIn$2: com.revenuecat.purchases.interfaces.LogInCallback): void;
        public track(paywallEvent: com.revenuecat.purchases.paywalls.events.PaywallEvent): void;
        public setFinishTransactions(value: boolean): void;
        public getCurrentConfiguration(): com.revenuecat.purchases.PurchasesConfiguration;
        public restorePurchases(thisTemp: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
        public invalidateCustomerInfoCache(): void;
        public setAd(ad: string): void;
        public getFinishTransactions(): boolean;
        public setAppConfig(setTemp: com.revenuecat.purchases.common.AppConfig): void;
        public setAllowSharingPlayStoreAccount(value: boolean): void;
        public setAttributes(attributes: java.util.Map<string, string>): void;
        public isAnonymous(): boolean;
        public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
        public onActivityStarted(param0: globalAndroid.app.Activity): void;
        public constructor(
          application: globalAndroid.app.Application,
          backingFieldAppUserID: string,
          backend: com.revenuecat.purchases.common.Backend,
          billing: com.revenuecat.purchases.common.BillingAbstract,
          deviceCache: com.revenuecat.purchases.common.caching.DeviceCache,
          identityManager: com.revenuecat.purchases.identity.IdentityManager,
          subscriberAttributesManager: com.revenuecat.purchases.subscriberattributes.SubscriberAttributesManager,
          appConfig: com.revenuecat.purchases.common.AppConfig,
          customerInfoHelper: com.revenuecat.purchases.CustomerInfoHelper,
          customerInfoUpdateHandler: com.revenuecat.purchases.CustomerInfoUpdateHandler,
          diagnosticsSynchronizer: com.revenuecat.purchases.common.diagnostics.DiagnosticsSynchronizer,
          offlineEntitlementsManager: com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager,
          postReceiptHelper: com.revenuecat.purchases.PostReceiptHelper,
          postTransactionWithProductDetailsHelper: com.revenuecat.purchases.PostTransactionWithProductDetailsHelper,
          postPendingTransactionsHelper: com.revenuecat.purchases.PostPendingTransactionsHelper,
          syncPurchasesHelper: com.revenuecat.purchases.SyncPurchasesHelper,
          offeringsManager: com.revenuecat.purchases.common.offerings.OfferingsManager,
          paywallEventsManager: com.revenuecat.purchases.paywalls.events.PaywallEventsManager,
          paywallPresentedCache: com.revenuecat.purchases.paywalls.PaywallPresentedCache,
          purchasesStateCache: com.revenuecat.purchases.PurchasesStateCache,
          mainHandler: globalAndroid.os.Handler,
          dispatcher: com.revenuecat.purchases.common.Dispatcher,
          initialConfiguration: com.revenuecat.purchases.PurchasesConfiguration
        );
        public onAppForegrounded(): void;
        public setOnesignalUserID(onesignalUserID: string): void;
        public setDisplayName(displayName: string): void;
        public getAppConfig(): com.revenuecat.purchases.common.AppConfig;
        public startProductChange(it: globalAndroid.app.Activity, $i$a$letPurchasesOrchestrator$startProductChange$2: com.revenuecat.purchases.models.PurchasingData, it: com.revenuecat.purchases.PresentedOfferingContext, productId: string, mapOfProductIdToListener: com.revenuecat.purchases.models.GoogleReplacementMode, $i$a$synchronizedPurchasesOrchestrator$startProductChange$3: java.lang.Boolean, $i$a$letPurchasesOrchestrator$startProductChange$4: com.revenuecat.purchases.interfaces.PurchaseCallback): void;
        public setAdjustID(adjustID: string): void;
        public startDeprecatedProductChange(it: globalAndroid.app.Activity, $i$a$letPurchasesOrchestrator$startDeprecatedProductChange$2: com.revenuecat.purchases.models.PurchasingData, it: com.revenuecat.purchases.PresentedOfferingContext, $i$a$synchronizedPurchasesOrchestrator$startDeprecatedProductChange$3: string, $i$a$letPurchasesOrchestrator$startDeprecatedProductChange$4: com.revenuecat.purchases.models.GoogleReplacementMode, appUserID: com.revenuecat.purchases.interfaces.ProductChangeCallback): void;
        public getStore(): com.revenuecat.purchases.Store;
        public getAppUserID(): string;
        public getOfferings(listener: com.revenuecat.purchases.interfaces.ReceiveOfferingsCallback, fetchCurrent: boolean): void;
        public setAirshipChannelID(airshipChannelID: string): void;
        public startPurchase(it: globalAndroid.app.Activity, mapOfProductIdToListener: com.revenuecat.purchases.models.PurchasingData, $i$a$synchronizedPurchasesOrchestrator$startPurchase$2: com.revenuecat.purchases.PresentedOfferingContext, $i$a$letPurchasesOrchestrator$startPurchase$3: java.lang.Boolean, appUserID: com.revenuecat.purchases.interfaces.PurchaseCallback): void;
        public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
        public removeUpdatedCustomerInfoListener(): void;
        public getProducts(it: java.util.List<string>, types: com.revenuecat.purchases.ProductType, thisTemp: com.revenuecat.purchases.interfaces.GetStoreProductsCallback): void;
        public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        public getUpdatedCustomerInfoListener(): com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener;
        public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
        public switchUser(newAppUserID: string): void;
        public getCustomerCenterConfig(callback: com.revenuecat.purchases.interfaces.GetCustomerCenterConfigCallback): void;
        public onActivityPaused(param0: globalAndroid.app.Activity): void;
        public setState$purchases_defaultsRelease(value: com.revenuecat.purchases.PurchasesState): void;
        public getOfflineEntitlementsManager(): com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager;
        public setMixpanelDistinctID(mixpanelDistinctID: string): void;
        public syncPurchases(listener: com.revenuecat.purchases.interfaces.SyncPurchasesCallback): void;
        public setFBAnonymousID(fbAnonymousID: string): void;
        public getProductsOfTypes(it: java.util.Set<string>, element$iv$iv: java.util.Set<any>, $i$f$filterTo: com.revenuecat.purchases.interfaces.GetStoreProductsCallback): void;
        public setMparticleID(mparticleID: string): void;
        public onActivityStopped(activity: globalAndroid.app.Activity): void;
        public onActivityStopped(param0: globalAndroid.app.Activity): void;
        public syncAmazonPurchase(it: string, $i$a$applyPurchasesOrchestrator$syncAmazonPurchase$2: string, $this$syncAmazonPurchase_u24lambda_u243: string, appUserID: string, thisTemp: java.lang.Double): void;
        public onAppBackgrounded(): void;
        public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
        public getCustomerInfo(callback: com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback): void;
      }
      export module PurchasesOrchestrator {
        export class Companion {
          public static class: java.lang.Class<com.revenuecat.purchases.PurchasesOrchestrator.Companion>;
          public getLogLevel(): com.revenuecat.purchases.LogLevel;
          public getLogHandler(): com.revenuecat.purchases.LogHandler;
          public setPlatformInfo(setTemp: com.revenuecat.purchases.common.PlatformInfo): void;
          public setDebugLogsEnabled(value: boolean): void;
          public canMakePayments(mainHandler: globalAndroid.content.Context, hasResponded: java.util.List<any>, billingClient: com.revenuecat.purchases.interfaces.Callback<java.lang.Boolean>): void;
          public getPlatformInfo(): com.revenuecat.purchases.common.PlatformInfo;
          public setLogLevel(value: com.revenuecat.purchases.LogLevel): void;
          public setProxyURL(setTemp: java.net.URL): void;
          public getDebugLogsEnabled(): boolean;
          public getProxyURL(): java.net.URL;
          public setLogHandler(value: com.revenuecat.purchases.LogHandler): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesState {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesState>;
        public getDeprecatedProductChangeCallback(): com.revenuecat.purchases.interfaces.ProductChangeCallback;
        public component4(): boolean;
        public getAppInBackground(): boolean;
        public getFirstTimeInForeground(): boolean;
        public component1(): java.lang.Boolean;
        public component5(): boolean;
        public toString(): string;
        public constructor();
        public equals(other: any): boolean;
        public getPurchaseCallbacksByProductId(): java.util.Map<string, com.revenuecat.purchases.interfaces.PurchaseCallback>;
        public component3(): com.revenuecat.purchases.interfaces.ProductChangeCallback;
        public hashCode(): number;
        public component2(): java.util.Map<string, com.revenuecat.purchases.interfaces.PurchaseCallback>;
        public copy(allowSharingPlayStoreAccount: java.lang.Boolean, purchaseCallbacksByProductId: java.util.Map<string, any>, deprecatedProductChangeCallback: com.revenuecat.purchases.interfaces.ProductChangeCallback, appInBackground: boolean, firstTimeInForeground: boolean): com.revenuecat.purchases.PurchasesState;
        public getAllowSharingPlayStoreAccount(): java.lang.Boolean;
        public constructor(allowSharingPlayStoreAccount: java.lang.Boolean, purchaseCallbacksByProductId: java.util.Map<string, any>, deprecatedProductChangeCallback: com.revenuecat.purchases.interfaces.ProductChangeCallback, appInBackground: boolean, firstTimeInForeground: boolean);
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesStateCache extends com.revenuecat.purchases.PurchasesStateProvider {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesStateCache>;
        public copy(purchasesState: com.revenuecat.purchases.PurchasesState): com.revenuecat.purchases.PurchasesStateCache;
        public equals(other: any): boolean;
        public constructor(purchasesState: com.revenuecat.purchases.PurchasesState);
        public hashCode(): number;
        public getPurchasesState(): com.revenuecat.purchases.PurchasesState;
        public setPurchasesState(setTemp: com.revenuecat.purchases.PurchasesState): void;
        public component1(): com.revenuecat.purchases.PurchasesState;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesStateProvider {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesStateProvider>;
        /**
         * Constructs a new instance of the com.revenuecat.purchases.PurchasesStateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getPurchasesState(): com.revenuecat.purchases.PurchasesState });
        public constructor();
        public getPurchasesState(): com.revenuecat.purchases.PurchasesState;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class PurchasesTransactionException extends com.revenuecat.purchases.PurchasesException {
        public static class: java.lang.Class<com.revenuecat.purchases.PurchasesTransactionException>;
        public constructor(error: com.revenuecat.purchases.PurchasesError);
        public constructor(purchasesError: com.revenuecat.purchases.PurchasesError, userCancelled: boolean);
        public getUserCancelled(): boolean;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class ReplacementMode {
        public static class: java.lang.Class<com.revenuecat.purchases.ReplacementMode>;
        /**
         * Constructs a new instance of the com.revenuecat.purchases.ReplacementMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getName(): string });
        public constructor();
        public getName(): string;
      }
      export module ReplacementMode {
        export class DefaultImpls {
          public static class: java.lang.Class<com.revenuecat.purchases.ReplacementMode.DefaultImpls>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class Store {
        public static class: java.lang.Class<com.revenuecat.purchases.Store>;
        public static APP_STORE: com.revenuecat.purchases.Store;
        public static MAC_APP_STORE: com.revenuecat.purchases.Store;
        public static PLAY_STORE: com.revenuecat.purchases.Store;
        public static STRIPE: com.revenuecat.purchases.Store;
        public static PROMOTIONAL: com.revenuecat.purchases.Store;
        public static UNKNOWN_STORE: com.revenuecat.purchases.Store;
        public static AMAZON: com.revenuecat.purchases.Store;
        public static RC_BILLING: com.revenuecat.purchases.Store;
        public static EXTERNAL: com.revenuecat.purchases.Store;
        public static valueOf(value: string): com.revenuecat.purchases.Store;
        public static values(): androidNative.Array<com.revenuecat.purchases.Store>;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class SyncPurchasesHelper {
        public static class: java.lang.Class<com.revenuecat.purchases.SyncPurchasesHelper>;
        public constructor(billing: com.revenuecat.purchases.common.BillingAbstract, identityManager: com.revenuecat.purchases.identity.IdentityManager, customerInfoHelper: com.revenuecat.purchases.CustomerInfoHelper, postReceiptHelper: com.revenuecat.purchases.PostReceiptHelper);
        public syncPurchases(thisTemp: boolean, isRestore: boolean, appInBackground: any, onSuccess: any): void;
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export class VerificationResult {
        public static class: java.lang.Class<com.revenuecat.purchases.VerificationResult>;
        public static NOT_REQUESTED: com.revenuecat.purchases.VerificationResult;
        public static VERIFIED: com.revenuecat.purchases.VerificationResult;
        public static FAILED: com.revenuecat.purchases.VerificationResult;
        public static VERIFIED_ON_DEVICE: com.revenuecat.purchases.VerificationResult;
        public static values(): androidNative.Array<com.revenuecat.purchases.VerificationResult>;
        public isVerified(): boolean;
        public static valueOf(value: string): com.revenuecat.purchases.VerificationResult;
      }
      export module VerificationResult {
        export class WhenMappings {
          public static class: java.lang.Class<com.revenuecat.purchases.VerificationResult.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class AmazonBackend {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonBackend>;
          public getPostAmazonReceiptCallbacks(): any;
          public setPostAmazonReceiptCallbacks(setTemp: any): void;
          public getAmazonReceiptData(cacheKey: string, call: string, functions: any, thisTemp: any): void;
          public constructor(backendHelper: com.revenuecat.purchases.common.BackendHelper);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class AmazonBilling extends com.revenuecat.purchases.common.BillingAbstract implements com.revenuecat.purchases.amazon.listener.ProductDataResponseListener, com.revenuecat.purchases.amazon.listener.PurchaseResponseListener, com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener, com.revenuecat.purchases.amazon.listener.UserDataResponseListener {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonBilling>;
          public queryPurchases(param0: string, param1: any, param2: any): void;
          public queryAllPurchases(appUserID: string, onReceivePurchaseHistory: any, onReceivePurchaseHistoryError: any): void;
          public purchase(param0: globalAndroid.os.Handler, param1: globalAndroid.app.Activity, param2: string, param3: com.revenuecat.purchases.models.StoreProduct, param4: any, param5: any): void;
          public getStorefront(onSuccess: any, onError: any): void;
          public startConnection(): void;
          public normalizePurchaseData(sku: string, currentlyCachedTokensToSkus: string, thisTemp: string, productID: any, purchaseToken: any): void;
          public constructor(purchasesStateProvider: com.revenuecat.purchases.PurchasesStateProvider);
          public getUserData(onSuccess: any, onError: any): void;
          public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
          public constructor(
            applicationContext: globalAndroid.content.Context,
            amazonBackend: com.revenuecat.purchases.amazon.AmazonBackend,
            cache: com.revenuecat.purchases.amazon.AmazonCache,
            finishTransactions: boolean,
            mainHandler: globalAndroid.os.Handler,
            stateProvider: com.revenuecat.purchases.PurchasesStateProvider,
            diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker,
            purchasingServiceProvider: com.revenuecat.purchases.amazon.PurchasingServiceProvider,
            productDataHandler: com.revenuecat.purchases.amazon.listener.ProductDataResponseListener,
            purchaseHandler: com.revenuecat.purchases.amazon.listener.PurchaseResponseListener,
            purchaseUpdatesHandler: com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener,
            userDataHandler: com.revenuecat.purchases.amazon.listener.UserDataResponseListener,
            dateProvider: com.revenuecat.purchases.common.DateProvider
          );
          public makePurchaseAsync(amazonPurchaseInfo: globalAndroid.app.Activity, storeProduct: string, thisTemp: com.revenuecat.purchases.models.PurchasingData, activity: com.revenuecat.purchases.common.ReplaceProductInfo, appUserID: com.revenuecat.purchases.PresentedOfferingContext, purchasingData: java.lang.Boolean): void;
          public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
          public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
          public getProductData(skus: java.util.Set<string>, marketplace: string, onReceive: any, onError: any): void;
          public endConnection(): void;
          public isConnected(): boolean;
          public constructor(applicationContext: globalAndroid.content.Context, cache: com.revenuecat.purchases.common.caching.DeviceCache, finishTransactions: boolean, mainHandler: globalAndroid.os.Handler, backendHelper: com.revenuecat.purchases.common.BackendHelper, stateProvider: com.revenuecat.purchases.PurchasesStateProvider, diagnosticsTracker: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker);
          public onPurchaseResponse(response: com.amazon.device.iap.model.PurchaseResponse): void;
          public showInAppMessagesIfNeeded(activity: globalAndroid.app.Activity, inAppMessageTypes: java.util.List<any>, subscriptionStatusChange: any): void;
          public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
          public purchase(mainHandler: globalAndroid.os.Handler, activity: globalAndroid.app.Activity, appUserID: string, storeProduct: com.revenuecat.purchases.models.StoreProduct, onSuccess: any, onError: any): void;
          public startConnectionOnMainThread(delayMilliseconds: number): void;
          public queryPurchases(appUserID: string, onSuccess: any, onError: any): void;
          public onPurchaseUpdatesResponse(response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
          public getUserData(param0: any, param1: any): void;
          public onUserDataResponse(response: com.amazon.device.iap.model.UserDataResponse): void;
          public queryPurchases(param0: any, param1: any): void;
          public getAmazonLWAConsentStatus(onSuccess: any, onError: any): void;
          public onProductDataResponse(response: com.amazon.device.iap.model.ProductDataResponse): void;
          public getProductData(param0: java.util.Set<string>, param1: string, param2: any, param3: any): void;
          public queryProductDetailsAsync(productType: com.revenuecat.purchases.ProductType, productIds: java.util.Set<string>, onReceive: any, onError: any): void;
          public consumeAndSave(finishTransactions: boolean, purchase: com.revenuecat.purchases.models.StoreTransaction, shouldConsume: boolean, initiationSource: com.revenuecat.purchases.PostReceiptInitiationSource): void;
          public findPurchaseInPurchaseHistory(appUserID: string, productType: com.revenuecat.purchases.ProductType, productId: string, onCompletion: any, onError: any): void;
          public queryPurchases(onSuccess: any, onError: any): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class AmazonCache {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonCache>;
          public getReceiptSkus(): java.util.Map<string, string>;
          public getAmazonPostedTokensKey$purchases_defaultsRelease(): string;
          public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache);
          public cacheSkusByToken(it: java.util.Map<string, string>): void;
          public addSuccessfullyPostedToken(token: string): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class AmazonOfferingParser extends com.revenuecat.purchases.common.OfferingParser {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonOfferingParser>;
          public findMatchingProduct(thisTemp: java.util.Map<string, any>, productsById: org.json.JSONObject): com.revenuecat.purchases.models.StoreProduct;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export abstract class AmazonPurchasingData extends com.revenuecat.purchases.models.PurchasingData {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonPurchasingData>;
          public getProductId(): string;
          public getProductType(): com.revenuecat.purchases.ProductType;
        }
        export module AmazonPurchasingData {
          export class Product extends com.revenuecat.purchases.amazon.AmazonPurchasingData {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonPurchasingData.Product>;
            public constructor(storeProduct: com.revenuecat.purchases.amazon.AmazonStoreProduct);
            public equals(other: any): boolean;
            public getStoreProduct(): com.revenuecat.purchases.amazon.AmazonStoreProduct;
            public getProductId(): string;
            public hashCode(): number;
            public getProductType(): com.revenuecat.purchases.ProductType;
            public copy(storeProduct: com.revenuecat.purchases.amazon.AmazonStoreProduct): com.revenuecat.purchases.amazon.AmazonPurchasingData.Product;
            public toString(): string;
            public component1(): com.revenuecat.purchases.amazon.AmazonStoreProduct;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class AmazonStoreProduct extends com.revenuecat.purchases.models.StoreProduct {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonStoreProduct>;
          public getTitle(): string;
          public getId(): string;
          public component5(): string;
          public formattedPricePerMonth(param0: java.util.Locale): string;
          public copyWithPresentedOfferingContext(param0: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public getPeriod(): com.revenuecat.purchases.models.Period;
          public component12(): org.json.JSONObject;
          public pricePerYear(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getDefaultOption(): com.revenuecat.purchases.models.SubscriptionOption;
          public component6(): com.revenuecat.purchases.models.Period;
          public component9(): com.revenuecat.purchases.models.SubscriptionOption;
          public pricePerMonth(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getIconUrl(): string;
          public component8(): com.revenuecat.purchases.models.SubscriptionOptions;
          public equals(other: any): boolean;
          public component2(): com.revenuecat.purchases.ProductType;
          public component3(): string;
          public getSubscriptionOptions(): com.revenuecat.purchases.models.SubscriptionOptions;
          /** @deprecated */
          public getSku(): string;
          public component1(): string;
          public component11(): com.revenuecat.purchases.models.Period;
          public formattedPricePerMonth(locale: java.util.Locale): string;
          public getPurchasingData(): com.revenuecat.purchases.amazon.AmazonPurchasingData;
          public getDescription(): string;
          public pricePerWeek(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public component13(): com.revenuecat.purchases.PresentedOfferingContext;
          public getType(): com.revenuecat.purchases.ProductType;
          /** @deprecated */
          public constructor(it: string, thisTemp: com.revenuecat.purchases.ProductType, id: string, type: string, title: com.revenuecat.purchases.models.Period, description: com.revenuecat.purchases.models.Price, period: com.revenuecat.purchases.models.SubscriptionOptions, price: com.revenuecat.purchases.models.SubscriptionOption, subscriptionOptions: string, defaultOption: com.revenuecat.purchases.models.Period, iconUrl: org.json.JSONObject, freeTrialPeriod: string);
          /** @deprecated */
          public copyWithOfferingId(param0: string): com.revenuecat.purchases.models.StoreProduct;
          /** @deprecated */
          public copyWithOfferingId(thisTemp: string): com.revenuecat.purchases.models.StoreProduct;
          public copy(id: string, type: com.revenuecat.purchases.ProductType, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, price: com.revenuecat.purchases.models.Price, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, iconUrl: string, freeTrialPeriod: com.revenuecat.purchases.models.Period, originalProductJSON: org.json.JSONObject, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.amazon.AmazonStoreProduct;
          public toString(): string;
          public pricePerMonth(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public component4(): string;
          public hashCode(): number;
          public pricePerYear(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public constructor(id: string, type: com.revenuecat.purchases.ProductType, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, price: com.revenuecat.purchases.models.Price, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, iconUrl: string, freeTrialPeriod: com.revenuecat.purchases.models.Period, originalProductJSON: org.json.JSONObject);
          /** @deprecated */
          public constructor(id: string, type: com.revenuecat.purchases.ProductType, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, price: com.revenuecat.purchases.models.Price, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, iconUrl: string, freeTrialPeriod: com.revenuecat.purchases.models.Period, originalProductJSON: org.json.JSONObject, presentedOfferingIdentifier: string);
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public getFreeTrialPeriod(): com.revenuecat.purchases.models.Period;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          public copyWithPresentedOfferingContext(presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public constructor(id: string, type: com.revenuecat.purchases.ProductType, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, price: com.revenuecat.purchases.models.Price, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, iconUrl: string, freeTrialPeriod: com.revenuecat.purchases.models.Period, originalProductJSON: org.json.JSONObject, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
          public getPrice(): com.revenuecat.purchases.models.Price;
          public component10(): string;
          public getOriginalProductJSON(): org.json.JSONObject;
          public getName(): string;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public pricePerWeek(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public component7(): com.revenuecat.purchases.models.Price;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class AmazonStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.AmazonStrings>;
          public static INSTANCE: com.revenuecat.purchases.amazon.AmazonStrings;
          public static REQUESTING_PRODUCTS: string = 'Requesting Amazon products with identifiers: %s';
          public static PRODUCT_CHANGES_NOT_SUPPORTED: string = "Amazon doesn't support product changes";
          public static PRODUCTS_REQUEST_FINISHED: string = 'Products request finished with result %s';
          public static USER_DATA_REQUEST_FROM_CACHE: string = 'Getting User data from cache';
          public static USER_DATA_REQUEST_FINISHED: string = 'User data request finished with result %s';
          public static PRODUCTS_REQUEST_UNAVAILABLE: string = 'Unavailable products: %s';
          public static RETRIEVED_PRODUCT_DATA: string = 'Retrieved productData: %s';
          public static RETRIEVED_PRODUCT_DATA_EMPTY: string = 'Product data is empty';
          public static PURCHASE_REQUEST_FINISHED: string = 'Purchase request finished: \n %s';
          public static ERROR_PURCHASE_UNKNOWN: string = 'Failed to make purchase. There was an Amazon store problem.';
          public static ERROR_PURCHASE_NOT_SUPPORTED: string = 'Failed to make purchase. Call is not supported';
          public static ERROR_PURCHASE_ALREADY_OWNED: string = 'Failed to make purchase. User already owns SKU.';
          public static ERROR_PURCHASE_INVALID_SKU: string = 'Failed to make purchase. SKU is invalid';
          public static ERROR_PURCHASE_INVALID_PROXY_ACTIVITY_ARGUMENTS: string = 'Failed to make purchase. Arguments are invalid. \n Intent: %s';
          public static ERROR_PURCHASE_FAILED: string = 'Failed to make purchase. This error normally means that the purchase was cancelled';
          public static ERROR_FETCHING_RECEIPT_INFO: string = 'There was an error fetching receipt information: %s';
          public static ERROR_FETCHING_RECEIPTS: string = "Couldn't fetch information for the following receipts: \n %s";
          public static ERROR_FETCHING_PURCHASE_HISTORY_ALL_RECEIPTS_INVALID: string = 'Error fetching purchase history. All receipts are invalid.';
          public static CACHING_RECEIPT_TERM_SKUS: string = 'Caching term skus for receipts: \n %s';
          public static RECEIPT_DATA_RECEIVED: string = 'Received receipt data: \n %s';
          public static ERROR_FINDING_RECEIPT_SKU: string = "Couldn't find sku for token %s";
          public static ERROR_FAILED_PURCHASES_UPDATES: string = 'Failed to get purchase updates.';
          public static ERROR_UNSUPPORTED_PURCHASES_UPDATES: string = 'Failed to get purchase updates. Call is not supported.';
          public static ERROR_PURCHASES_UPDATES_STORE_PROBLEM: string = 'Failed to get purchase updates. There was an Amazon store problem.';
          public static ERROR_FAILED_USER_DATA: string = 'Failed to get user data. Make sure sandbox mode is enabled if using App Tester. https://rev.cat/enteramazonsandbox';
          public static ERROR_UNSUPPORTED_USER_DATA: string = 'Failed to get user data. Call is not supported.';
          public static ERROR_USER_DATA_STORE_PROBLEM: string = 'Failed to get user data. There was an Amazon store problem.';
          public static ERROR_USER_DATA_MARKETPLACE_NULL_STORE_PROBLEM: string = 'Failed to get marketplace from user data. It was null.';
          public static ERROR_USER_DATA_LWA_CONSENT_STATUS_NULL_STORE_PROBLEM: string = 'Failed to get LWA Consent Status from user data. It was null.';
          public static PRODUCT_PRICE_MISSING: string = "Product %s is missing a price. This is common if you're trying to load a product SKU instead of a subscription term SKU. Make sure you configure the subscription term SKUs in the RevenueCat dashboard.";
          public static WARNING_AMAZON_NOT_FINISHING_TRANSACTIONS: string = "Attempting to interact with the Amazon App Store while RevenueCat is configured not to complete purchases won't do anything. (See AmazonConfiguration.Builder.purchasesAreCompletedBy().) Please use syncAmazonPurchase to send purchases to RevenueCat instead.";
          public static ERROR_TIMEOUT_GETTING_PRODUCT_DATA: string = 'Timeout error trying to get Amazon product data for SKUs: %s. Please check that the SKUs are correct.';
          public static ERROR_TIMEOUT_GETTING_USER_DATA: string = 'Timeout error trying to get Amazon user data.';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class ComparableData {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.ComparableData>;
          public getTitle(): string;
          public getId(): string;
          public component5(): com.revenuecat.purchases.models.Period;
          public getType(): com.revenuecat.purchases.ProductType;
          public constructor(amazonStoreProduct: com.revenuecat.purchases.amazon.AmazonStoreProduct);
          public component7(): com.revenuecat.purchases.models.SubscriptionOptions;
          public getPeriod(): com.revenuecat.purchases.models.Period;
          public toString(): string;
          public getDefaultOption(): com.revenuecat.purchases.models.SubscriptionOption;
          public component4(): string;
          public hashCode(): number;
          public getIconUrl(): string;
          public component8(): com.revenuecat.purchases.models.SubscriptionOption;
          public getFreeTrialPeriod(): com.revenuecat.purchases.models.Period;
          public component11(): com.revenuecat.purchases.PresentedOfferingContext;
          public equals(other: any): boolean;
          public component2(): com.revenuecat.purchases.ProductType;
          public copy(id: string, type: com.revenuecat.purchases.ProductType, title: string, description: string, period: com.revenuecat.purchases.models.Period, price: com.revenuecat.purchases.models.Price, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, iconUrl: string, freeTrialPeriod: com.revenuecat.purchases.models.Period, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.amazon.ComparableData;
          public component3(): string;
          public getPrice(): com.revenuecat.purchases.models.Price;
          public component10(): com.revenuecat.purchases.models.Period;
          public getSubscriptionOptions(): com.revenuecat.purchases.models.SubscriptionOptions;
          public component1(): string;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public constructor(id: string, type: com.revenuecat.purchases.ProductType, title: string, description: string, period: com.revenuecat.purchases.models.Period, price: com.revenuecat.purchases.models.Price, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, iconUrl: string, freeTrialPeriod: com.revenuecat.purchases.models.Period, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
          public component9(): string;
          public getDescription(): string;
          public component6(): com.revenuecat.purchases.models.Price;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class DefaultPurchasingServiceProvider extends com.revenuecat.purchases.amazon.PurchasingServiceProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.DefaultPurchasingServiceProvider>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.amazon.DefaultPurchasingServiceProvider>;
          public registerListener(context: globalAndroid.content.Context, listener: com.amazon.device.iap.PurchasingListener): void;
          public getProductData(skus: java.util.Set<string>): com.amazon.device.iap.model.RequestId;
          public describeContents(): number;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public getProductData(param0: java.util.Set<string>): com.amazon.device.iap.model.RequestId;
          public constructor();
          public getPurchaseUpdates(reset: boolean): com.amazon.device.iap.model.RequestId;
          public getPurchaseUpdates(param0: boolean): com.amazon.device.iap.model.RequestId;
          public purchase(sku: string): com.amazon.device.iap.model.RequestId;
          public getUserData(): com.amazon.device.iap.model.RequestId;
          public notifyFulfillment(receiptId: string, fulfillmentResult: com.amazon.device.iap.model.FulfillmentResult): void;
          public registerListener(param0: globalAndroid.content.Context, param1: com.amazon.device.iap.PurchasingListener): void;
          public purchase(param0: string): com.amazon.device.iap.model.RequestId;
          public notifyFulfillment(param0: string, param1: com.amazon.device.iap.model.FulfillmentResult): void;
        }
        export module DefaultPurchasingServiceProvider {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.amazon.DefaultPurchasingServiceProvider> {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.DefaultPurchasingServiceProvider.Creator>;
            public constructor();
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.amazon.DefaultPurchasingServiceProvider;
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.amazon.DefaultPurchasingServiceProvider>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class ISO3166Alpha2ToISO42170Converter {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.ISO3166Alpha2ToISO42170Converter>;
          public static INSTANCE: com.revenuecat.purchases.amazon.ISO3166Alpha2ToISO42170Converter;
          public convertOrEmpty(iso3166Alpha2Code: string): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module ProductTypeConversionsKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.ProductTypeConversionsKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export class PurchasingServiceProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.amazon.PurchasingServiceProvider>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.amazon.PurchasingServiceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { registerListener(param0: globalAndroid.content.Context, param1: com.amazon.device.iap.PurchasingListener): void; getProductData(param0: java.util.Set<string>): com.amazon.device.iap.model.RequestId; getUserData(): com.amazon.device.iap.model.RequestId; purchase(param0: string): com.amazon.device.iap.model.RequestId; getPurchaseUpdates(param0: boolean): com.amazon.device.iap.model.RequestId; notifyFulfillment(param0: string, param1: com.amazon.device.iap.model.FulfillmentResult): void });
          public constructor();
          public getPurchaseUpdates(param0: boolean): com.amazon.device.iap.model.RequestId;
          public getProductData(param0: java.util.Set<string>): com.amazon.device.iap.model.RequestId;
          public getUserData(): com.amazon.device.iap.model.RequestId;
          public registerListener(param0: globalAndroid.content.Context, param1: com.amazon.device.iap.PurchasingListener): void;
          public purchase(param0: string): com.amazon.device.iap.model.RequestId;
          public notifyFulfillment(param0: string, param1: com.amazon.device.iap.model.FulfillmentResult): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module attribution {
          export class AmazonDeviceIdentifiersFetcher extends com.revenuecat.purchases.common.subscriberattributes.DeviceIdentifiersFetcher {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.attribution.AmazonDeviceIdentifiersFetcher>;
            public getDeviceIdentifiers(limitAdTrackingSetting: globalAndroid.app.Application, isLimitAdTrackingDisabled: any): void;
            public constructor();
            public getDeviceIdentifiers(param0: globalAndroid.app.Application, param1: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module handler {
          export class ProductDataHandler extends com.revenuecat.purchases.amazon.listener.ProductDataResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.ProductDataHandler>;
            public onPurchaseUpdatesResponse(response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public getProductDataCache$purchases_defaultsRelease(): java.util.Map<string, com.amazon.device.iap.model.Product>;
            public getProductData(param0: java.util.Set<string>, param1: string, param2: any, param3: any): void;
            public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public getProductData($i$a$filterKeysProductDataHandler$getProductData$2$cachedProducts$1: java.util.Set<string>, it: string, entry$iv: any, $i$f$filterKeys: any): void;
            public onProductDataResponse(requestId: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
            public onUserDataResponse(response: com.amazon.device.iap.model.UserDataResponse): void;
            public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
            public constructor(purchasingServiceProvider: com.revenuecat.purchases.amazon.PurchasingServiceProvider, mainHandler: globalAndroid.os.Handler);
            public onPurchaseResponse(response: com.amazon.device.iap.model.PurchaseResponse): void;
          }
          export module ProductDataHandler {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.ProductDataHandler.Companion>;
            }
            export class Request {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.ProductDataHandler.Request>;
              public component2(): string;
              public copy(skuList: java.util.List<string>, marketplace: string, onReceive: any, onError: any): com.revenuecat.purchases.amazon.handler.ProductDataHandler.Request;
              public component3(): any;
              public hashCode(): number;
              public getOnError(): any;
              public toString(): string;
              public getOnReceive(): any;
              public component1(): java.util.List<string>;
              public constructor(skuList: java.util.List<string>, marketplace: string, onReceive: any, onError: any);
              public equals(other: any): boolean;
              public component4(): any;
              public getSkuList(): java.util.List<string>;
              public getMarketplace(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module handler {
          export class PurchaseHandler extends com.revenuecat.purchases.amazon.listener.PurchaseResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.PurchaseHandler>;
            public onPurchaseResponse($i$a$letPurchaseHandler$onPurchaseResponse$1: com.amazon.device.iap.model.PurchaseResponse): void;
            public onPurchaseUpdatesResponse(response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public constructor(purchasingServiceProvider: com.revenuecat.purchases.amazon.PurchasingServiceProvider, applicationContext: globalAndroid.content.Context);
            public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public purchase(mainHandler: globalAndroid.os.Handler, activity: globalAndroid.app.Activity, appUserID: string, storeProduct: com.revenuecat.purchases.models.StoreProduct, onSuccess: any, onError: any): void;
            public onUserDataResponse(response: com.amazon.device.iap.model.UserDataResponse): void;
            public purchase(param0: globalAndroid.os.Handler, param1: globalAndroid.app.Activity, param2: string, param3: com.revenuecat.purchases.models.StoreProduct, param4: any, param5: any): void;
            public onProductDataResponse(response: com.amazon.device.iap.model.ProductDataResponse): void;
            public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
          }
          export module PurchaseHandler {
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.PurchaseHandler.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module handler {
          export class PurchaseUpdatesHandler extends com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.PurchaseUpdatesHandler>;
            public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseUpdatesResponse($i$a$letPurchaseUpdatesHandler$onPurchaseUpdatesResponse$1: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public queryPurchases(reset: any, requestId: any): void;
            public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
            public queryPurchases(param0: any, param1: any): void;
            public onUserDataResponse(response: com.amazon.device.iap.model.UserDataResponse): void;
            public onProductDataResponse(response: com.amazon.device.iap.model.ProductDataResponse): void;
            public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
            public constructor(purchasingServiceProvider: com.revenuecat.purchases.amazon.PurchasingServiceProvider);
            public onPurchaseResponse(response: com.amazon.device.iap.model.PurchaseResponse): void;
          }
          export module PurchaseUpdatesHandler {
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.PurchaseUpdatesHandler.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module handler {
          export class UserDataHandler extends com.revenuecat.purchases.amazon.listener.UserDataResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.UserDataHandler>;
            public onPurchaseUpdatesResponse(response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public constructor(purchasingServiceProvider: com.revenuecat.purchases.amazon.PurchasingServiceProvider, mainHandler: globalAndroid.os.Handler, timestampProvider: com.revenuecat.purchases.utils.TimestampProvider);
            public getUserData(param0: any, param1: any): void;
            public onUserDataResponse(request: com.amazon.device.iap.model.UserDataResponse): void;
            public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
            public onProductDataResponse(response: com.amazon.device.iap.model.ProductDataResponse): void;
            public getUserData(cachedUserData: any, $i$a$synchronizedUserDataHandler$getUserData$2: any): void;
            public onPurchaseResponse(response: com.amazon.device.iap.model.PurchaseResponse): void;
          }
          export module UserDataHandler {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.UserDataHandler.Companion>;
            }
            export class Request {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.UserDataHandler.Request>;
              public getOnReceive(): any;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getOnError(): any;
              public component2(): any;
              public constructor(onReceive: any, onError: any);
              public component1(): any;
              public toString(): string;
              public copy(onReceive: any, onError: any): com.revenuecat.purchases.amazon.handler.UserDataHandler.Request;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.handler.UserDataHandler.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module listener {
          export class ProductDataResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.ProductDataResponseListener>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.amazon.listener.ProductDataResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void; onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void; onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void; getProductData(param0: java.util.Set<string>, param1: string, param2: any, param3: any): void });
            public constructor();
            public getProductData(param0: java.util.Set<string>, param1: string, param2: any, param3: any): void;
            public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
            public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
          }
          export module ProductDataResponseListener {
            export class DefaultImpls {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.ProductDataResponseListener.DefaultImpls>;
              public static onPurchaseResponse($this: com.revenuecat.purchases.amazon.listener.ProductDataResponseListener, response: com.amazon.device.iap.model.PurchaseResponse): void;
              public static onUserDataResponse($this: com.revenuecat.purchases.amazon.listener.ProductDataResponseListener, response: com.amazon.device.iap.model.UserDataResponse): void;
              public static onPurchaseUpdatesResponse($this: com.revenuecat.purchases.amazon.listener.ProductDataResponseListener, response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module listener {
          export class PurchaseResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.PurchaseResponseListener>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.amazon.listener.PurchaseResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void; onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void; onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void; purchase(param0: globalAndroid.os.Handler, param1: globalAndroid.app.Activity, param2: string, param3: com.revenuecat.purchases.models.StoreProduct, param4: any, param5: any): void });
            public constructor();
            public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public purchase(param0: globalAndroid.os.Handler, param1: globalAndroid.app.Activity, param2: string, param3: com.revenuecat.purchases.models.StoreProduct, param4: any, param5: any): void;
            public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
          }
          export module PurchaseResponseListener {
            export class DefaultImpls {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.PurchaseResponseListener.DefaultImpls>;
              public static onPurchaseUpdatesResponse($this: com.revenuecat.purchases.amazon.listener.PurchaseResponseListener, response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
              public static onProductDataResponse($this: com.revenuecat.purchases.amazon.listener.PurchaseResponseListener, response: com.amazon.device.iap.model.ProductDataResponse): void;
              public static onUserDataResponse($this: com.revenuecat.purchases.amazon.listener.PurchaseResponseListener, response: com.amazon.device.iap.model.UserDataResponse): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module listener {
          export class PurchaseUpdatesResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void; onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void; onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void; queryPurchases(param0: any, param1: any): void });
            public constructor();
            public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
            public queryPurchases(param0: any, param1: any): void;
            public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
          }
          export module PurchaseUpdatesResponseListener {
            export class DefaultImpls {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener.DefaultImpls>;
              public static onPurchaseResponse($this: com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener, response: com.amazon.device.iap.model.PurchaseResponse): void;
              public static onUserDataResponse($this: com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener, response: com.amazon.device.iap.model.UserDataResponse): void;
              public static onProductDataResponse($this: com.revenuecat.purchases.amazon.listener.PurchaseUpdatesResponseListener, response: com.amazon.device.iap.model.ProductDataResponse): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module listener {
          export class UserDataResponseListener {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.UserDataResponseListener>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.amazon.listener.UserDataResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void; onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void; onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void; getUserData(param0: any, param1: any): void });
            public constructor();
            public getUserData(param0: any, param1: any): void;
            public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
            public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
          }
          export module UserDataResponseListener {
            export class DefaultImpls {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.listener.UserDataResponseListener.DefaultImpls>;
              public static onProductDataResponse($this: com.revenuecat.purchases.amazon.listener.UserDataResponseListener, response: com.amazon.device.iap.model.ProductDataResponse): void;
              public static onPurchaseResponse($this: com.revenuecat.purchases.amazon.listener.UserDataResponseListener, response: com.amazon.device.iap.model.PurchaseResponse): void;
              public static onPurchaseUpdatesResponse($this: com.revenuecat.purchases.amazon.listener.UserDataResponseListener, response: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module purchasing {
          export class ProxyAmazonBillingActivity {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingActivity>;
            public static EXTRAS_RESULT_RECEIVER: string = 'result_receiver';
            public static EXTRAS_SKU: string = 'sku';
            public static EXTRAS_PURCHASING_SERVICE_PROVIDER: string = 'purchasing_service_provider';
            public static EXTRAS_REQUEST_ID: string = 'request_id';
            public constructor();
            public setProxyAmazonBillingDelegate$purchases_defaultsRelease(setTemp: com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingDelegate): void;
            public onDestroy(): void;
            public getProxyAmazonBillingDelegate$purchases_defaultsRelease(): com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingDelegate;
            public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
          }
          export module ProxyAmazonBillingActivity {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingActivity.Companion>;
              public newStartIntent(thisTemp: globalAndroid.content.Context, context: globalAndroid.os.ResultReceiver, resultReceiver: string, sku: com.revenuecat.purchases.amazon.PurchasingServiceProvider): globalAndroid.content.Intent;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module purchasing {
          export class ProxyAmazonBillingActivityBroadcastReceiver {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingActivityBroadcastReceiver>;
            public static PURCHASE_FINISHED_ACTION: string = 'com.revenuecat.purchases.purchase_finished';
            public constructor(activity: globalAndroid.app.Activity);
            public onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void;
            public getOnReceiveCalled(): boolean;
            public setOnReceiveCalled(setTemp: boolean): void;
          }
          export module ProxyAmazonBillingActivityBroadcastReceiver {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingActivityBroadcastReceiver.Companion>;
              public newPurchaseFinishedIntentFilter(): globalAndroid.content.IntentFilter;
              public newPurchaseFinishedIntent(intent: string): globalAndroid.content.Intent;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module amazon {
        export module purchasing {
          export class ProxyAmazonBillingDelegate {
            public static class: java.lang.Class<com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingDelegate>;
            public onDestroy(activity: globalAndroid.app.Activity): void;
            public constructor();
            public setBroadcastReceiver$purchases_defaultsRelease(setTemp: com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingActivityBroadcastReceiver): void;
            public onCreate(thisTemp: globalAndroid.app.Activity, activity: globalAndroid.os.Bundle): void;
            public getBroadcastReceiver$purchases_defaultsRelease(): com.revenuecat.purchases.amazon.purchasing.ProxyAmazonBillingActivityBroadcastReceiver;
            public startAmazonPurchase$purchases_defaultsRelease($i$a$applyProxyAmazonBillingDelegate$startAmazonPurchase$bundle$1: globalAndroid.content.Intent): com.amazon.device.iap.model.RequestId;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module api {
        export class BuildConfig {
          public static class: java.lang.Class<com.revenuecat.purchases.api.BuildConfig>;
          public static DEBUG: boolean = 0;
          public static LIBRARY_PACKAGE_NAME: string = 'com.revenuecat.purchases.api';
          public static BUILD_TYPE: string = 'release';
          public static FLAVOR: string = 'defaults';
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class AppConfig {
          public static class: java.lang.Class<com.revenuecat.purchases.common.AppConfig>;
          public getFinishTransactions(): boolean;
          public setForceSigningErrors(setTemp: boolean): void;
          public getDangerousSettings(): com.revenuecat.purchases.DangerousSettings;
          public setForceServerErrors(setTemp: boolean): void;
          public constructor(it: globalAndroid.content.Context, thisTemp: com.revenuecat.purchases.PurchasesAreCompletedBy, context: boolean, purchasesAreCompletedBy: com.revenuecat.purchases.common.PlatformInfo, showInAppMessagesAutomatically: java.net.URL, platformInfo: com.revenuecat.purchases.Store, proxyURL: com.revenuecat.purchases.DangerousSettings, store: boolean, dangerousSettings: boolean, runningTests: boolean);
          public getPackageName(): string;
          public getShowInAppMessagesAutomatically(): boolean;
          public equals(other: any): boolean;
          public getPlayStoreVersionName(): string;
          public getEnableOfflineEntitlements(): boolean;
          public toString(): string;
          public getPlatformInfo(): com.revenuecat.purchases.common.PlatformInfo;
          public getCustomEntitlementComputation(): boolean;
          public getLanguageTag(): string;
          public getVersionName(): string;
          public getPlayServicesVersionName(): string;
          public getForceSigningErrors(): boolean;
          public getBaseURL(): java.net.URL;
          public getStore(): com.revenuecat.purchases.Store;
          public hashCode(): number;
          public setFinishTransactions(setTemp: boolean): void;
          public getForceServerErrors(): boolean;
        }
        export module AppConfig {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.common.AppConfig.Companion>;
            public getPaywallEventsURL(): java.net.URL;
            public getDiagnosticsURL(): java.net.URL;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class Backend {
          public static class: java.lang.Class<com.revenuecat.purchases.common.Backend>;
          public setOfferingsCallbacks(setTemp: any): void;
          public getCallbacks(): any;
          public setCustomerCenterCallbacks(setTemp: any): void;
          public setCallbacks(setTemp: any): void;
          public constructor(appConfig: com.revenuecat.purchases.common.AppConfig, dispatcher: com.revenuecat.purchases.common.Dispatcher, eventsDispatcher: com.revenuecat.purchases.common.Dispatcher, httpClient: com.revenuecat.purchases.common.HTTPClient, backendHelper: com.revenuecat.purchases.common.BackendHelper);
          public postReceiptData(it: string, item$iv$iv: string, $i$f$mapTo: boolean, $this$mapTo$iv$iv: boolean, destination$iv$iv: java.util.Map<string, any>, $i$f$map: com.revenuecat.purchases.common.ReceiptInfo, $this$map$iv: string, $i$a$letBackend$postReceiptData$body$2: string, it: com.revenuecat.purchases.PostReceiptInitiationSource, $i$a$takeUnlessBackend$postReceiptData$body$3: com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData, it: any, $i$a$mapBackend$postReceiptData$body$4: any): void;
          public getCustomerInfo($i$a$synchronizedBackend$getCustomerInfo$1: string, delay: boolean, endpoint: any, path: any): void;
          public setDiagnosticsCallbacks(setTemp: any): void;
          public close(): void;
          public postDiagnostics(it: java.util.List<any>, item$iv$iv: any, $i$f$mapTo: any): void;
          public getCustomerCenterConfig(endpoint: string, path: any, call: any): void;
          public setIdentifyCallbacks(setTemp: any): void;
          public getVerificationMode(): com.revenuecat.purchases.common.verification.SignatureVerificationMode;
          public getOfferings(delay: string, endpoint: boolean, path: any, cacheKey: any): void;
          public getPostReceiptCallbacks(): any;
          public setProductEntitlementCallbacks(setTemp: any): void;
          public getPaywallEventsCallbacks(): any;
          public logIn(cacheKey: string, call: string, thisTemp: any, appUserID: any): void;
          public getIdentifyCallbacks(): any;
          public getDiagnosticsCallbacks(): any;
          public getProductEntitlementMapping(endpoint: any, path: any): void;
          public setPostReceiptCallbacks(setTemp: java.util.Map<java.util.List<string>, java.util.List<any>>): void;
          public postPaywallEvents($this$encodeToJsonElement$iv: com.revenuecat.purchases.paywalls.events.PaywallEventRequest, $i$a$alsoBackend$postPaywallEvents$1: any, it: any): void;
          public getOfferingsCallbacks(): any;
          public getProductEntitlementCallbacks(): any;
          public getCustomerCenterCallbacks(): any;
          public clearCaches(): void;
          public setPaywallEventsCallbacks(setTemp: any): void;
        }
        export module Backend {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.common.Backend.Companion>;
            public getJson$purchases_defaultsRelease(): kotlinx.serialization.json.Json;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class BackendErrorCode {
          public static class: java.lang.Class<com.revenuecat.purchases.common.BackendErrorCode>;
          public static BackendInvalidPlatform: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendStoreProblem: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendCannotTransferPurchase: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidReceiptToken: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidAppStoreSharedSecret: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidPaymentModeOrIntroPriceNotProvided: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendProductIdForGoogleReceiptNotProvided: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidPlayStoreCredentials: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInternalServerError: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendEmptyAppUserId: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidAuthToken: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidAPIKey: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendBadRequest: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendPlayStoreQuotaExceeded: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendPlayStoreInvalidPackageName: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendPlayStoreGenericError: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendUserIneligibleForPromoOffer: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidAppleSubscriptionKey: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidSubscriberAttributes: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendInvalidSubscriberAttributesBody: com.revenuecat.purchases.common.BackendErrorCode;
          public static BackendProductIDsMalformed: com.revenuecat.purchases.common.BackendErrorCode;
          public static values(): androidNative.Array<com.revenuecat.purchases.common.BackendErrorCode>;
          public getValue(): number;
          public static valueOf(value: string): com.revenuecat.purchases.common.BackendErrorCode;
        }
        export module BackendErrorCode {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.common.BackendErrorCode.Companion>;
            public valueOf(it: number): com.revenuecat.purchases.common.BackendErrorCode;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class BackendHelper {
          public static class: java.lang.Class<com.revenuecat.purchases.common.BackendHelper>;
          public getAuthenticationHeaders$purchases_defaultsRelease(): java.util.Map<string, string>;
          public performRequest(endpoint: com.revenuecat.purchases.common.networking.Endpoint, body: java.util.Map<string, any>, postFieldsToSign: java.util.List<any>, delay: com.revenuecat.purchases.common.Delay, onError: any, onCompleted: any): void;
          public constructor(apiKey: string, dispatcher: com.revenuecat.purchases.common.Dispatcher, appConfig: com.revenuecat.purchases.common.AppConfig, httpClient: com.revenuecat.purchases.common.HTTPClient);
          public enqueue(call: com.revenuecat.purchases.common.Dispatcher.AsyncCall, dispatcher: com.revenuecat.purchases.common.Dispatcher, delay: com.revenuecat.purchases.common.Delay): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module BackendKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.common.BackendKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class BackgroundAwareCallbackCacheKey {
          public static class: java.lang.Class<com.revenuecat.purchases.common.BackgroundAwareCallbackCacheKey>;
          public toString(): string;
          public constructor(cacheKey: java.util.List<string>, appInBackground: boolean);
          public component1(): java.util.List<string>;
          public equals(other: any): boolean;
          public getCacheKey(): java.util.List<string>;
          public copy(cacheKey: java.util.List<string>, appInBackground: boolean): com.revenuecat.purchases.common.BackgroundAwareCallbackCacheKey;
          public getAppInBackground(): boolean;
          public hashCode(): number;
          public component2(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export abstract class BillingAbstract {
          public static class: java.lang.Class<com.revenuecat.purchases.common.BillingAbstract>;
          public queryPurchases(param0: string, param1: any, param2: any): void;
          public endConnection(): void;
          public consumeAndSave(param0: boolean, param1: com.revenuecat.purchases.models.StoreTransaction, param2: boolean, param3: com.revenuecat.purchases.PostReceiptInitiationSource): void;
          public isConnected(): boolean;
          public getStateListener(): com.revenuecat.purchases.common.BillingAbstract.StateListener;
          public startConnection(): void;
          public setPurchasesUpdatedListener(setTemp: com.revenuecat.purchases.common.BillingAbstract.PurchasesUpdatedListener): void;
          public getPurchasesUpdatedListener(): com.revenuecat.purchases.common.BillingAbstract.PurchasesUpdatedListener;
          public getPurchasesStateProvider(): com.revenuecat.purchases.PurchasesStateProvider;
          public queryAllPurchases(param0: string, param1: any, param2: any): void;
          public constructor(purchasesStateProvider: com.revenuecat.purchases.PurchasesStateProvider);
          public setStateListener(setTemp: com.revenuecat.purchases.common.BillingAbstract.StateListener): void;
          public getStorefront(param0: any, param1: any): void;
          public getAmazonLWAConsentStatus(onSuccess: any, onError: any): void;
          public queryProductDetailsAsync(param0: com.revenuecat.purchases.ProductType, param1: java.util.Set<string>, param2: any, param3: any): void;
          public close(): void;
          public showInAppMessagesIfNeeded(param0: globalAndroid.app.Activity, param1: java.util.List<any>, param2: any): void;
          public startConnectionOnMainThread(param0: number): void;
          public findPurchaseInPurchaseHistory(param0: string, param1: com.revenuecat.purchases.ProductType, param2: string, param3: any, param4: any): void;
          public makePurchaseAsync(param0: globalAndroid.app.Activity, param1: string, param2: com.revenuecat.purchases.models.PurchasingData, param3: com.revenuecat.purchases.common.ReplaceProductInfo, param4: com.revenuecat.purchases.PresentedOfferingContext, param5: java.lang.Boolean): void;
          public normalizePurchaseData(productID: string, purchaseToken: string, storeUserID: string, onSuccess: any, onError: any): void;
        }
        export module BillingAbstract {
          export class PurchasesUpdatedListener {
            public static class: java.lang.Class<com.revenuecat.purchases.common.BillingAbstract.PurchasesUpdatedListener>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.common.BillingAbstract$PurchasesUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onPurchasesUpdated(param0: java.util.List<com.revenuecat.purchases.models.StoreTransaction>): void; onPurchasesFailedToUpdate(param0: com.revenuecat.purchases.PurchasesError): void });
            public constructor();
            public onPurchasesUpdated(param0: java.util.List<com.revenuecat.purchases.models.StoreTransaction>): void;
            public onPurchasesFailedToUpdate(param0: com.revenuecat.purchases.PurchasesError): void;
          }
          export class StateListener {
            public static class: java.lang.Class<com.revenuecat.purchases.common.BillingAbstract.StateListener>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.common.BillingAbstract$StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onConnected(): void });
            public constructor();
            public onConnected(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class Config {
          public static class: java.lang.Class<com.revenuecat.purchases.common.Config>;
          public static INSTANCE: com.revenuecat.purchases.common.Config;
          public static frameworkVersion: string = '8.8.1';
          public getLogLevel(): com.revenuecat.purchases.LogLevel;
          public setLogLevel(setTemp: com.revenuecat.purchases.LogLevel): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class Constants {
          public static class: java.lang.Class<com.revenuecat.purchases.common.Constants>;
          public static INSTANCE: com.revenuecat.purchases.common.Constants;
          public static GOOGLE_PLAY_MANAGEMENT_URL: string = 'https://play.google.com/store/account/subscriptions';
          public static SUBS_ID_BASE_PLAN_ID_SEPARATOR: string = ':';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class CustomerInfoFactory {
          public static class: java.lang.Class<com.revenuecat.purchases.common.CustomerInfoFactory>;
          public static INSTANCE: com.revenuecat.purchases.common.CustomerInfoFactory;
          public buildCustomerInfo(arrayOfNonSubscriptions: org.json.JSONObject, numberOfNonSubscriptions: java.util.Date, productId: com.revenuecat.purchases.VerificationResult): com.revenuecat.purchases.CustomerInfo;
          public buildCustomerInfo(httpResult: com.revenuecat.purchases.common.networking.HTTPResult): com.revenuecat.purchases.CustomerInfo;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class DateProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.common.DateProvider>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.common.DateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getNow(): java.util.Date });
          public constructor();
          public getNow(): java.util.Date;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class DefaultDateProvider extends com.revenuecat.purchases.common.DateProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.common.DefaultDateProvider>;
          public constructor();
          public getNow(): java.util.Date;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class DefaultLocaleProvider extends com.revenuecat.purchases.common.LocaleProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.common.DefaultLocaleProvider>;
          public getCurrentLocalesLanguageTags(): string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class DefaultLogHandler extends com.revenuecat.purchases.LogHandler {
          public static class: java.lang.Class<com.revenuecat.purchases.common.DefaultLogHandler>;
          public v(tag: string, msg: string): void;
          public w(tag: string, msg: string): void;
          public e(tag: string, msg: string, throwable: java.lang.Throwable): void;
          public d(param0: string, param1: string): void;
          public d(tag: string, msg: string): void;
          public constructor();
          public i(tag: string, msg: string): void;
          public i(param0: string, param1: string): void;
          public w(param0: string, param1: string): void;
          public v(param0: string, param1: string): void;
          public e(param0: string, param1: string, param2: java.lang.Throwable): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class Delay {
          public static class: java.lang.Class<com.revenuecat.purchases.common.Delay>;
          public static NONE: com.revenuecat.purchases.common.Delay;
          public static DEFAULT: com.revenuecat.purchases.common.Delay;
          public static LONG: com.revenuecat.purchases.common.Delay;
          public static values(): androidNative.Array<com.revenuecat.purchases.common.Delay>;
          public getMinDelayUwyO8pc(): number;
          public static valueOf(value: string): com.revenuecat.purchases.common.Delay;
          public getMaxDelayUwyO8pc(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class Dispatcher {
          public static class: java.lang.Class<com.revenuecat.purchases.common.Dispatcher>;
          public static INTEGRATION_TEST_DELAY_PERCENTAGE: number = 0.01;
          public constructor(executorService: java.util.concurrent.ExecutorService, mainHandler: globalAndroid.os.Handler, runningIntegrationTests: boolean);
          public close(): void;
          public enqueue(commandHandlingExceptions: java.lang.Runnable, $i$a$synchronizedDispatcher$enqueue$1: com.revenuecat.purchases.common.Delay): void;
          public isClosed(): boolean;
        }
        export module Dispatcher {
          export abstract class AsyncCall {
            public static class: java.lang.Class<com.revenuecat.purchases.common.Dispatcher.AsyncCall>;
            public constructor();
            public run(): void;
            public call(): com.revenuecat.purchases.common.networking.HTTPResult;
            public onError(error: com.revenuecat.purchases.PurchasesError): void;
            public onCompletion(result: com.revenuecat.purchases.common.networking.HTTPResult): void;
          }
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.common.Dispatcher.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class DispatcherConstants {
          public static class: java.lang.Class<com.revenuecat.purchases.common.DispatcherConstants>;
          public static INSTANCE: com.revenuecat.purchases.common.DispatcherConstants;
          public getJitterLongDelayUwyO8pc(): number;
          public getJitterDelayUwyO8pc(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module ErrorsKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.common.ErrorsKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class FileHelper {
          public static class: java.lang.Class<com.revenuecat.purchases.common.FileHelper>;
          public removeFirstLinesFromFile(thisTemp: string, filePath: number): void;
          public fileIsEmpty(thisTemp: string): boolean;
          public readFilePerLines(filePath: string, streamBlock: any): void;
          public appendToFile(it: string, file: string): void;
          public fileSizeInKB(thisTemp: string): number;
          public deleteFile(thisTemp: string): boolean;
          public constructor(applicationContext: globalAndroid.content.Context);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class GoogleOfferingParser extends com.revenuecat.purchases.common.OfferingParser {
          public static class: java.lang.Class<com.revenuecat.purchases.common.GoogleOfferingParser>;
          public constructor();
          public findMatchingProduct(it: java.util.Map<string, any>, $i$a$takeIfGoogleOfferingParser$findMatchingProduct$1: org.json.JSONObject): com.revenuecat.purchases.models.StoreProduct;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class GooglePlatformProductId extends com.revenuecat.purchases.common.PlatformProductId {
          public static class: java.lang.Class<com.revenuecat.purchases.common.GooglePlatformProductId>;
          public constructor(productId: string, basePlanId: string, offerId: string);
          public getProductId(): string;
          public constructor(productId: string);
          public getOfferId(): string;
          public getAsMap(): java.util.Map<string, string>;
          public getBasePlanId(): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class HTTPClient {
          public static class: java.lang.Class<com.revenuecat.purchases.common.HTTPClient>;
          public static NO_STATUS_CODE: number = 1;
          public constructor(appConfig: com.revenuecat.purchases.common.AppConfig, eTagManager: com.revenuecat.purchases.common.networking.ETagManager, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, signingManager: com.revenuecat.purchases.common.verification.SigningManager, storefrontProvider: com.revenuecat.purchases.interfaces.StorefrontProvider, dateProvider: com.revenuecat.purchases.common.DateProvider, mapConverter: com.revenuecat.purchases.common.networking.MapConverter, localeProvider: com.revenuecat.purchases.common.LocaleProvider);
          public getSigningManager(): com.revenuecat.purchases.common.verification.SigningManager;
          public performRequest(requestStartTime: java.net.URL, callResult: com.revenuecat.purchases.common.networking.Endpoint, thisTemp: java.util.Map<string, any>, baseURL: java.util.List<any>, endpoint: java.util.Map<string, string>, body: boolean): com.revenuecat.purchases.common.networking.HTTPResult;
          public clearCaches(): void;
        }
        export module HTTPClient {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.common.HTTPClient.Companion>;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.common.HTTPClient.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class LegacyProrationMode {
          public static class: java.lang.Class<com.revenuecat.purchases.common.LegacyProrationMode>;
          public static IMMEDIATE_WITHOUT_PRORATION: com.revenuecat.purchases.common.LegacyProrationMode;
          public static IMMEDIATE_WITH_TIME_PRORATION: com.revenuecat.purchases.common.LegacyProrationMode;
          public static IMMEDIATE_AND_CHARGE_FULL_PRICE: com.revenuecat.purchases.common.LegacyProrationMode;
          public static IMMEDIATE_AND_CHARGE_PRORATED_PRICE: com.revenuecat.purchases.common.LegacyProrationMode;
          public static DEFERRED: com.revenuecat.purchases.common.LegacyProrationMode;
          public static valueOf(value: string): com.revenuecat.purchases.common.LegacyProrationMode;
          public static values(): androidNative.Array<com.revenuecat.purchases.common.LegacyProrationMode>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class LocaleProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.common.LocaleProvider>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.common.LocaleProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCurrentLocalesLanguageTags(): string });
          public constructor();
          public getCurrentLocalesLanguageTags(): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class LogIntent {
          public static class: java.lang.Class<com.revenuecat.purchases.common.LogIntent>;
          public static DEBUG: com.revenuecat.purchases.common.LogIntent;
          public static GOOGLE_ERROR: com.revenuecat.purchases.common.LogIntent;
          public static GOOGLE_WARNING: com.revenuecat.purchases.common.LogIntent;
          public static INFO: com.revenuecat.purchases.common.LogIntent;
          public static PURCHASE: com.revenuecat.purchases.common.LogIntent;
          public static RC_ERROR: com.revenuecat.purchases.common.LogIntent;
          public static RC_PURCHASE_SUCCESS: com.revenuecat.purchases.common.LogIntent;
          public static RC_SUCCESS: com.revenuecat.purchases.common.LogIntent;
          public static USER: com.revenuecat.purchases.common.LogIntent;
          public static WARNING: com.revenuecat.purchases.common.LogIntent;
          public static AMAZON_WARNING: com.revenuecat.purchases.common.LogIntent;
          public static AMAZON_ERROR: com.revenuecat.purchases.common.LogIntent;
          public getEmojiList(): java.util.List<string>;
          public static valueOf(value: string): com.revenuecat.purchases.common.LogIntent;
          public static values(): androidNative.Array<com.revenuecat.purchases.common.LogIntent>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module LogUtilsKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.common.LogUtilsKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module LogWrapperKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.common.LogWrapperKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export abstract class OfferingParser {
          public static class: java.lang.Class<com.revenuecat.purchases.common.OfferingParser>;
          public constructor();
          public findMatchingProduct(param0: java.util.Map<string, any>, param1: org.json.JSONObject): com.revenuecat.purchases.models.StoreProduct;
          public createOfferings(it: org.json.JSONObject, offeringJson: java.util.Map<string, any>): com.revenuecat.purchases.Offerings;
          public createPackage(it: org.json.JSONObject, packageIdentifier: java.util.Map<string, any>, product: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.Package;
          public createOffering(it: org.json.JSONObject, packageJson: java.util.Map<string, any>): com.revenuecat.purchases.Offering;
        }
        export module OfferingParser {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.common.OfferingParser.Companion>;
            public getJson$purchases_defaultsRelease(): kotlinx.serialization.json.Json;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class PlatformInfo {
          public static class: java.lang.Class<com.revenuecat.purchases.common.PlatformInfo>;
          public getFlavor(): string;
          public getVersion(): string;
          public toString(): string;
          public component1(): string;
          public component2(): string;
          public copy(flavor: string, version: string): com.revenuecat.purchases.common.PlatformInfo;
          public equals(other: any): boolean;
          public hashCode(): number;
          public constructor(flavor: string, version: string);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class PlatformProductId {
          public static class: java.lang.Class<com.revenuecat.purchases.common.PlatformProductId>;
          public getProductId(): string;
          public constructor(productId: string);
          public getAsMap(): java.util.Map<string, string>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class PostReceiptErrorHandlingBehavior {
          public static class: java.lang.Class<com.revenuecat.purchases.common.PostReceiptErrorHandlingBehavior>;
          public static SHOULD_BE_MARKED_SYNCED: com.revenuecat.purchases.common.PostReceiptErrorHandlingBehavior;
          public static SHOULD_USE_OFFLINE_ENTITLEMENTS_AND_NOT_CONSUME: com.revenuecat.purchases.common.PostReceiptErrorHandlingBehavior;
          public static SHOULD_NOT_CONSUME: com.revenuecat.purchases.common.PostReceiptErrorHandlingBehavior;
          public static values(): androidNative.Array<com.revenuecat.purchases.common.PostReceiptErrorHandlingBehavior>;
          public static valueOf(value: string): com.revenuecat.purchases.common.PostReceiptErrorHandlingBehavior;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class ReceiptInfo {
          public static class: java.lang.Class<com.revenuecat.purchases.common.ReceiptInfo>;
          public getStoreProduct(): com.revenuecat.purchases.models.StoreProduct;
          public getPricingPhases(): java.util.List<com.revenuecat.purchases.models.PricingPhase>;
          public getCurrency(): string;
          public equals(other: any): boolean;
          public toString(): string;
          public getPlatformProductIds$purchases_defaultsRelease(): java.util.List<com.revenuecat.purchases.common.PlatformProductId>;
          public getPrice(): java.lang.Double;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public getDuration(): string;
          public getProductIDs(): java.util.List<string>;
          public getSubscriptionOptionId(): string;
          public getReplacementMode(): com.revenuecat.purchases.ReplacementMode;
          public hashCode(): number;
          public constructor(it: java.util.List<string>, $i$a$firstOrNullReceiptInfo$subscriptionOption$1: com.revenuecat.purchases.PresentedOfferingContext, it: string, element$iv: com.revenuecat.purchases.models.StoreProduct, $i$f$firstOrNull: java.lang.Double, $this$firstOrNull$iv: string, thisTemp: com.revenuecat.purchases.ReplacementMode);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class ReplaceProductInfo {
          public static class: java.lang.Class<com.revenuecat.purchases.common.ReplaceProductInfo>;
          public component2(): com.revenuecat.purchases.ReplacementMode;
          public getOldPurchase(): com.revenuecat.purchases.models.StoreTransaction;
          public toString(): string;
          public copy(oldPurchase: com.revenuecat.purchases.models.StoreTransaction, replacementMode: com.revenuecat.purchases.ReplacementMode): com.revenuecat.purchases.common.ReplaceProductInfo;
          public equals(other: any): boolean;
          public component1(): com.revenuecat.purchases.models.StoreTransaction;
          public constructor(oldPurchase: com.revenuecat.purchases.models.StoreTransaction, replacementMode: com.revenuecat.purchases.ReplacementMode);
          public getReplacementMode(): com.revenuecat.purchases.ReplacementMode;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export class SubscriberAttributeError {
          public static class: java.lang.Class<com.revenuecat.purchases.common.SubscriberAttributeError>;
          public copy(keyName: string, message: string): com.revenuecat.purchases.common.SubscriberAttributeError;
          public toString(): string;
          public component1(): string;
          public component2(): string;
          public constructor(keyName: string, message: string);
          public equals(other: any): boolean;
          public getMessage(): string;
          public hashCode(): number;
          public getKeyName(): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module caching {
          export class DeviceCache extends com.revenuecat.purchases.interfaces.StorefrontProvider {
            public static class: java.lang.Class<com.revenuecat.purchases.common.caching.DeviceCache>;
            public clearCachesForAppUserID(appUserID: string): void;
            public getProductEntitlementMapping(): com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping;
            public isCustomerInfoCacheStale(appUserID: string, appInBackground: boolean): boolean;
            public addSuccessfullyPostedToken($this$addSuccessfullyPostedToken_u24lambda_u248_u24lambda_u247: string): void;
            public getStorefront(): string;
            public cacheProductEntitlementMapping(productEntitlementMapping: com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping): void;
            public getStorefrontCacheKey(): string;
            public newKey(key: string): string;
            public cacheCustomerInfo(it: string, jsonObject: com.revenuecat.purchases.CustomerInfo): void;
            public constructor(preferences: globalAndroid.content.SharedPreferences, apiKey: string, dateProvider: com.revenuecat.purchases.common.DateProvider);
            public getOfferingsResponseCache(): org.json.JSONObject;
            public startEditing(): globalAndroid.content.SharedPreferences.Editor;
            public isProductEntitlementMappingCacheStale(): boolean;
            public getPreviouslySentHashedTokens(): java.util.Set<string>;
            public customerInfoCacheKey(appUserID: string): string;
            public setCustomerInfoCacheTimestampToNow(appUserID: string): void;
            public getJSONObjectOrNull($i$a$letDeviceCache$getJSONObjectOrNull$1: string): org.json.JSONObject;
            public clearCustomerInfoCache(thisTemp: string): void;
            public setStorefront(countryCode: string): void;
            public getAttributionCacheKey$purchases_defaultsRelease(): string;
            public setCustomerInfoCacheTimestamp(appUserID: string, date: java.util.Date): void;
            public setProductEntitlementMappingCacheTimestampToNow(): void;
            public clearCustomerInfoCache(appUserID: string, editor: globalAndroid.content.SharedPreferences.Editor): void;
            public cacheOfferingsResponse(offeringsResponse: org.json.JSONObject): void;
            public findKeysThatStartWith(it: string): java.util.Set<string>;
            public customerInfoLastUpdatedCacheKey(appUserID: string): string;
            public cleanupOldAttributionData(): void;
            public clearOfferingsResponseCache(): void;
            public getCachedCustomerInfo(it: string): com.revenuecat.purchases.CustomerInfo;
            public getTokensCacheKey(): string;
            public remove(cacheKey: string): void;
            public getLegacyAppUserIDCacheKey(): string;
            public getLegacyCachedAppUserID(): string;
            public cleanPreviouslySentTokens(hashedTokens: java.util.Set<string>): void;
            public getAppUserIDCacheKey(): string;
            public cacheAppUserID(appUserID: string, cacheEditor: globalAndroid.content.SharedPreferences.Editor): globalAndroid.content.SharedPreferences.Editor;
            public getCachedAppUserID(): string;
            public clearCustomerInfoCacheTimestamp(appUserID: string): void;
            public getActivePurchasesNotInCache(hashedTokens: java.util.Map<string, com.revenuecat.purchases.models.StoreTransaction>): java.util.List<com.revenuecat.purchases.models.StoreTransaction>;
            public cacheAppUserID(appUserID: string): void;
            public putString(cacheKey: string, value: string): void;
          }
          export module DeviceCache {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.caching.DeviceCache.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module caching {
          export class InMemoryCachedObject<T> extends java.lang.Object {
            public static class: java.lang.Class<com.revenuecat.purchases.common.caching.InMemoryCachedObject<any>>;
            public constructor();
            public setCachedInstance(setTemp: T): void;
            public constructor(lastUpdatedAt: java.util.Date, dateProvider: com.revenuecat.purchases.common.DateProvider);
            public updateCacheTimestamp(date: java.util.Date): void;
            public getLastUpdatedAt$purchases_defaultsRelease(): java.util.Date;
            public getCachedInstance(): T;
            public clearCacheTimestamp(): void;
            public setLastUpdatedAt$purchases_defaultsRelease(setTemp: java.util.Date): void;
            public clearCache(): void;
            public cacheInstance(instance: T): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module diagnostics {
          export class DiagnosticsEntry extends com.revenuecat.purchases.utils.Event {
            public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsEntry>;
            public static VERSION_KEY: string = 'version';
            public static NAME_KEY: string = 'name';
            public static PROPERTIES_KEY: string = 'properties';
            public static TIMESTAMP_KEY: string = 'timestamp';
            public static VERSION: number = 1;
            public component3(): com.revenuecat.purchases.common.DateProvider;
            public equals(other: any): boolean;
            public getDateProvider(): com.revenuecat.purchases.common.DateProvider;
            public getName(): com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public constructor(name: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName, properties: java.util.Map<string, any>, dateProvider: com.revenuecat.purchases.common.DateProvider, dateTime: java.util.Date);
            public copy(name: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName, properties: java.util.Map<string, any>, dateProvider: com.revenuecat.purchases.common.DateProvider, dateTime: java.util.Date): com.revenuecat.purchases.common.diagnostics.DiagnosticsEntry;
            public component4(): java.util.Date;
            public hashCode(): number;
            public component2(): java.util.Map<string, any>;
            public toString(): string;
            public getProperties(): java.util.Map<string, any>;
            public getDateTime(): java.util.Date;
            public component1(): com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
          }
          export module DiagnosticsEntry {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsEntry.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module diagnostics {
          export class DiagnosticsEntryName {
            public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName>;
            public static HTTP_REQUEST_PERFORMED: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static MAX_EVENTS_STORED_LIMIT_REACHED: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static MAX_DIAGNOSTICS_SYNC_RETRIES_REACHED: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static CLEARING_DIAGNOSTICS_AFTER_FAILED_SYNC: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static GOOGLE_QUERY_PRODUCT_DETAILS_REQUEST: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static GOOGLE_QUERY_PURCHASES_REQUEST: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static GOOGLE_QUERY_PURCHASE_HISTORY_REQUEST: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static PRODUCT_DETAILS_NOT_SUPPORTED: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static CUSTOMER_INFO_VERIFICATION_RESULT: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static AMAZON_QUERY_PRODUCT_DETAILS_REQUEST: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static AMAZON_QUERY_PURCHASES_REQUEST: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static ENTERED_OFFLINE_ENTITLEMENTS_MODE: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static ERROR_ENTERING_OFFLINE_ENTITLEMENTS_MODE: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
            public static values(): androidNative.Array<com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName>;
            public static valueOf(value: string): com.revenuecat.purchases.common.diagnostics.DiagnosticsEntryName;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module diagnostics {
          export class DiagnosticsFileHelper extends com.revenuecat.purchases.utils.EventsFileHelper<com.revenuecat.purchases.common.diagnostics.DiagnosticsEntry> {
            public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsFileHelper>;
            public static DIAGNOSTICS_FILE_PATH: string = 'RevenueCat/diagnostics/diagnostic_entries.jsonl';
            public static DIAGNOSTICS_FILE_LIMIT_IN_KB: number = 500;
            public constructor(fileHelper: com.revenuecat.purchases.common.FileHelper);
            public constructor(fileHelper: com.revenuecat.purchases.common.FileHelper, filePath: string, eventDeserializer: any);
            public isDiagnosticsFileTooBig(): boolean;
          }
          export module DiagnosticsFileHelper {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsFileHelper.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module diagnostics {
          export class DiagnosticsHelper {
            public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsHelper>;
            public static CONSECUTIVE_FAILURES_COUNT_KEY: string = 'consecutive_failures_count';
            public constructor(context: globalAndroid.content.Context, diagnosticsFileHelper: com.revenuecat.purchases.common.diagnostics.DiagnosticsFileHelper, sharedPreferences: any);
            public resetDiagnosticsStatus(): void;
            public increaseConsecutiveNumberOfErrors(): number;
            public clearConsecutiveNumberOfErrors(): void;
          }
          export module DiagnosticsHelper {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsHelper.Companion>;
              public initializeSharedPreferences(context: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module diagnostics {
          export class DiagnosticsSynchronizer {
            public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsSynchronizer>;
            public static MAX_NUMBER_POST_RETRIES: number = 3;
            public static MAX_EVENTS_TO_SYNC_PER_REQUEST: number = 200;
            public constructor(diagnosticsHelper: com.revenuecat.purchases.common.diagnostics.DiagnosticsHelper, diagnosticsFileHelper: com.revenuecat.purchases.common.diagnostics.DiagnosticsFileHelper, diagnosticsTracker: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, backend: com.revenuecat.purchases.common.Backend, diagnosticsDispatcher: com.revenuecat.purchases.common.Dispatcher);
            public syncDiagnosticsFileIfNeeded(): void;
          }
          export module DiagnosticsSynchronizer {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsSynchronizer.Companion>;
              public initializeSharedPreferences(context: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module diagnostics {
          export class DiagnosticsTracker {
            public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker>;
            public static ENDPOINT_NAME_KEY: string = 'endpoint_name';
            public static SUCCESSFUL_KEY: string = 'successful';
            public static RESPONSE_CODE_KEY: string = 'response_code';
            public static BACKEND_ERROR_CODE_KEY: string = 'backend_error_code';
            public static ETAG_HIT_KEY: string = 'etag_hit';
            public static VERIFICATION_RESULT_KEY: string = 'verification_result';
            public static RESPONSE_TIME_MILLIS_KEY: string = 'response_time_millis';
            public static PRODUCT_TYPE_QUERIED_KEY: string = 'product_type_queried';
            public static BILLING_RESPONSE_CODE: string = 'billing_response_code';
            public static BILLING_DEBUG_MESSAGE: string = 'billing_debug_message';
            public constructor(appConfig: com.revenuecat.purchases.common.AppConfig, diagnosticsFileHelper: com.revenuecat.purchases.common.diagnostics.DiagnosticsFileHelper, diagnosticsHelper: com.revenuecat.purchases.common.diagnostics.DiagnosticsHelper, diagnosticsDispatcher: com.revenuecat.purchases.common.Dispatcher);
            public trackEvent(diagnosticsEntry: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntry): void;
            public trackHttpRequestPerformednRVORKE(thisTemp: com.revenuecat.purchases.common.networking.Endpoint, endpoint: number, responseTime: boolean, wasSuccessful: number, responseCode: java.lang.Integer, backendErrorCode: com.revenuecat.purchases.common.networking.HTTPResult.Origin, resultOrigin: com.revenuecat.purchases.VerificationResult): void;
            public trackMaxDiagnosticsSyncRetriesReached(): void;
            public trackEnteredOfflineEntitlementsMode(): void;
            public trackClearingDiagnosticsAfterFailedSync(): void;
            public trackErrorEnteringOfflineEntitlementsMode(reason: com.revenuecat.purchases.PurchasesError): void;
            public trackGoogleQueryProductDetailsRequestWn2Vu4Y(productType: string, billingResponseCode: number, billingDebugMessage: string, responseTime: number): void;
            public trackGoogleQueryPurchaseHistoryRequestWn2Vu4Y(productType: string, billingResponseCode: number, billingDebugMessage: string, responseTime: number): void;
            public trackMaxEventsStoredLimitReached(thisTemp: boolean): void;
            public trackAmazonQueryProductDetailsRequestVtjQ1oo(responseTime: number, wasSuccessful: boolean): void;
            public trackEventInCurrentThread$purchases_defaultsRelease(thisTemp: com.revenuecat.purchases.common.diagnostics.DiagnosticsEntry): void;
            public trackAmazonQueryPurchasesRequestVtjQ1oo(responseTime: number, wasSuccessful: boolean): void;
            public trackCustomerInfoVerificationResultIfNeeded(event: com.revenuecat.purchases.CustomerInfo): void;
            public trackGoogleQueryPurchasesRequestWn2Vu4Y(productType: string, billingResponseCode: number, billingDebugMessage: string, responseTime: number): void;
            public trackProductDetailsNotSupported(thisTemp: number, billingResponseCode: string): void;
          }
          export module DiagnosticsTracker {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class ETagData {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.ETagData>;
            public copy(eTag: string, lastRefreshTime: java.util.Date): com.revenuecat.purchases.common.networking.ETagData;
            public equals(other: any): boolean;
            public constructor(eTag: string, lastRefreshTime: java.util.Date);
            public getETag(): string;
            public component2(): java.util.Date;
            public component1(): string;
            public hashCode(): number;
            public getLastRefreshTime(): java.util.Date;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class ETagManager {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.ETagManager>;
            public storeBackendResultIfNoError$purchases_defaultsRelease(path: string, resultFromBackend: com.revenuecat.purchases.common.networking.HTTPResult, eTagInResponse: string): void;
            public constructor(context: globalAndroid.content.Context, prefs: any, dateProvider: com.revenuecat.purchases.common.DateProvider);
            public getETagHeaders$purchases_defaultsRelease(it: string, storedResult: boolean, eTagData: boolean): java.util.Map<string, string>;
            public clearCaches$purchases_defaultsRelease(): void;
            public getHTTPResultFromCacheOrBackend$purchases_defaultsRelease(storedResult: number, storedResult: string, $i$a$letETagManager$getHTTPResultFromCacheOrBackend$1: string, eTagInResponse: string, resultFromBackend: boolean, thisTemp: java.util.Date, responseCode: com.revenuecat.purchases.VerificationResult): com.revenuecat.purchases.common.networking.HTTPResult;
            public getStoredResult$purchases_defaultsRelease(thisTemp: string): com.revenuecat.purchases.common.networking.HTTPResult;
            public shouldUseCachedVersion$purchases_defaultsRelease(responseCode: number): boolean;
          }
          export module ETagManager {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.ETagManager.Companion>;
              public initializeSharedPreferences(context: globalAndroid.content.Context): globalAndroid.content.SharedPreferences;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.ETagManager.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export abstract class Endpoint {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint>;
            public getPathTemplate(): string;
            public getNeedsNonceToPerformSigning(): boolean;
            public getPath(): string;
            public getName(): string;
            public getSupportsSignatureVerification(): boolean;
          }
          export module Endpoint {
            export class GetAmazonReceipt extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.GetAmazonReceipt>;
              public getPath(): string;
              public component2(): string;
              public hashCode(): number;
              public constructor(userId: string, receiptId: string);
              public equals(other: any): boolean;
              public getUserId(): string;
              public getReceiptId(): string;
              public toString(): string;
              public copy(userId: string, receiptId: string): com.revenuecat.purchases.common.networking.Endpoint.GetAmazonReceipt;
              public component1(): string;
            }
            export class GetCustomerCenterConfig extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.GetCustomerCenterConfig>;
              public getPath(): string;
              public copy(userId: string): com.revenuecat.purchases.common.networking.Endpoint.GetCustomerCenterConfig;
              public hashCode(): number;
              public constructor(userId: string);
              public equals(other: any): boolean;
              public getUserId(): string;
              public toString(): string;
              public component1(): string;
            }
            export class GetCustomerInfo extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.GetCustomerInfo>;
              public getPath(): string;
              public hashCode(): number;
              public constructor(userId: string);
              public equals(other: any): boolean;
              public getUserId(): string;
              public toString(): string;
              public component1(): string;
              public copy(userId: string): com.revenuecat.purchases.common.networking.Endpoint.GetCustomerInfo;
            }
            export class GetOfferings extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.GetOfferings>;
              public getPath(): string;
              public copy(userId: string): com.revenuecat.purchases.common.networking.Endpoint.GetOfferings;
              public hashCode(): number;
              public constructor(userId: string);
              public equals(other: any): boolean;
              public getUserId(): string;
              public toString(): string;
              public component1(): string;
            }
            export class GetProductEntitlementMapping extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.GetProductEntitlementMapping>;
              public static INSTANCE: com.revenuecat.purchases.common.networking.Endpoint.GetProductEntitlementMapping;
              public getPath(): string;
            }
            export class LogIn extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.LogIn>;
              public static INSTANCE: com.revenuecat.purchases.common.networking.Endpoint.LogIn;
              public getPath(): string;
            }
            export class PostAttributes extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.PostAttributes>;
              public getPath(): string;
              public hashCode(): number;
              public constructor(userId: string);
              public equals(other: any): boolean;
              public getUserId(): string;
              public copy(userId: string): com.revenuecat.purchases.common.networking.Endpoint.PostAttributes;
              public toString(): string;
              public component1(): string;
            }
            export class PostDiagnostics extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.PostDiagnostics>;
              public static INSTANCE: com.revenuecat.purchases.common.networking.Endpoint.PostDiagnostics;
              public getPath(): string;
            }
            export class PostPaywallEvents extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.PostPaywallEvents>;
              public static INSTANCE: com.revenuecat.purchases.common.networking.Endpoint.PostPaywallEvents;
              public getPath(): string;
            }
            export class PostReceipt extends com.revenuecat.purchases.common.networking.Endpoint {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.Endpoint.PostReceipt>;
              public static INSTANCE: com.revenuecat.purchases.common.networking.Endpoint.PostReceipt;
              public getPath(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class HTTPRequest {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPRequest>;
            public static ETAG_HEADER_NAME: string = 'XRevenueCatETag';
            public static ETAG_LAST_REFRESH_NAME: string = 'XRCLastRefreshTime';
            public static POST_PARAMS_HASH: string = 'XPostParamsHash';
            public getFullURL(): java.net.URL;
            public equals(other: any): boolean;
            public component2(): java.util.Map<string, string>;
            public constructor(fullURL: java.net.URL, headers: java.util.Map<string, string>, body: org.json.JSONObject);
            public getHeaders(): java.util.Map<string, string>;
            public getBody(): org.json.JSONObject;
            public hashCode(): number;
            public component3(): org.json.JSONObject;
            public copy(fullURL: java.net.URL, headers: java.util.Map<string, string>, body: org.json.JSONObject): com.revenuecat.purchases.common.networking.HTTPRequest;
            public component1(): java.net.URL;
            public toString(): string;
          }
          export module HTTPRequest {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPRequest.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class HTTPResult {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPResult>;
            public static ETAG_HEADER_NAME: string = 'XRevenueCatETag';
            public static SIGNATURE_HEADER_NAME: string = 'XSignature';
            public static REQUEST_TIME_HEADER_NAME: string = 'XRevenueCatRequestTime';
            public getBackendErrorCode(): java.lang.Integer;
            public equals(other: any): boolean;
            public getPayload(): string;
            public getBody(): org.json.JSONObject;
            public getBackendErrorMessage(): string;
            public getVerificationResult(): com.revenuecat.purchases.VerificationResult;
            public getResponseCode(): number;
            public component3(): com.revenuecat.purchases.common.networking.HTTPResult.Origin;
            public component4(): java.util.Date;
            public hashCode(): number;
            public copy(responseCode: number, payload: string, origin: com.revenuecat.purchases.common.networking.HTTPResult.Origin, requestDate: java.util.Date, verificationResult: com.revenuecat.purchases.VerificationResult): com.revenuecat.purchases.common.networking.HTTPResult;
            public toString(): string;
            public component5(): com.revenuecat.purchases.VerificationResult;
            public serialize(): string;
            public component2(): string;
            public getRequestDate(): java.util.Date;
            public constructor(it: number, $i$a$letHTTPResult$body$2: string, it: com.revenuecat.purchases.common.networking.HTTPResult.Origin, $i$a$takeIfHTTPResult$backendErrorCode$1: java.util.Date, it: com.revenuecat.purchases.VerificationResult);
            public component1(): number;
            public getOrigin(): com.revenuecat.purchases.common.networking.HTTPResult.Origin;
          }
          export module HTTPResult {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPResult.Companion>;
              public deserialize(responseCode: string): com.revenuecat.purchases.common.networking.HTTPResult;
            }
            export class Origin {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPResult.Origin>;
              public static BACKEND: com.revenuecat.purchases.common.networking.HTTPResult.Origin;
              public static CACHE: com.revenuecat.purchases.common.networking.HTTPResult.Origin;
              public static values(): androidNative.Array<com.revenuecat.purchases.common.networking.HTTPResult.Origin>;
              public static valueOf(value: string): com.revenuecat.purchases.common.networking.HTTPResult.Origin;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class HTTPResultWithETag {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPResultWithETag>;
            public equals(other: any): boolean;
            public component2(): com.revenuecat.purchases.common.networking.HTTPResult;
            public serialize(): string;
            public component1(): com.revenuecat.purchases.common.networking.ETagData;
            public hashCode(): number;
            public copy(eTagData: com.revenuecat.purchases.common.networking.ETagData, httpResult: com.revenuecat.purchases.common.networking.HTTPResult): com.revenuecat.purchases.common.networking.HTTPResultWithETag;
            public getHttpResult(): com.revenuecat.purchases.common.networking.HTTPResult;
            public constructor(eTagData: com.revenuecat.purchases.common.networking.ETagData, httpResult: com.revenuecat.purchases.common.networking.HTTPResult);
            public toString(): string;
            public getETagData(): com.revenuecat.purchases.common.networking.ETagData;
          }
          export module HTTPResultWithETag {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.networking.HTTPResultWithETag.Companion>;
              public deserialize(it: string): com.revenuecat.purchases.common.networking.HTTPResultWithETag;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class MapConverter {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.MapConverter>;
            public constructor();
            public convertToJSON$purchases_defaultsRelease(it: java.util.Map<string, any>): org.json.JSONObject;
            public createJSONObject$purchases_defaultsRelease(inputMap: java.util.Map<string, any>): org.json.JSONObject;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class PostReceiptProductInfo {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.PostReceiptProductInfo>;
            public constructor(shouldConsume: java.lang.Boolean);
            public equals(other: any): boolean;
            public hashCode(): number;
            public getShouldConsume(): java.lang.Boolean;
            public component1(): java.lang.Boolean;
            public copy(shouldConsume: java.lang.Boolean): com.revenuecat.purchases.common.networking.PostReceiptProductInfo;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class PostReceiptResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.PostReceiptResponse>;
            public equals(other: any): boolean;
            public getCustomerInfo(): com.revenuecat.purchases.CustomerInfo;
            public getBody(): org.json.JSONObject;
            public component2(): java.util.Map<string, com.revenuecat.purchases.common.networking.PostReceiptProductInfo>;
            public copy(customerInfo: com.revenuecat.purchases.CustomerInfo, productInfoByProductId: java.util.Map<string, com.revenuecat.purchases.common.networking.PostReceiptProductInfo>, body: org.json.JSONObject): com.revenuecat.purchases.common.networking.PostReceiptResponse;
            public hashCode(): number;
            public component3(): org.json.JSONObject;
            public constructor(customerInfo: com.revenuecat.purchases.CustomerInfo, productInfoByProductId: java.util.Map<string, com.revenuecat.purchases.common.networking.PostReceiptProductInfo>, body: org.json.JSONObject);
            public getProductInfoByProductId(): java.util.Map<string, com.revenuecat.purchases.common.networking.PostReceiptProductInfo>;
            public toString(): string;
            public component1(): com.revenuecat.purchases.CustomerInfo;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module networking {
          export class RCHTTPStatusCodes {
            public static class: java.lang.Class<com.revenuecat.purchases.common.networking.RCHTTPStatusCodes>;
            public static INSTANCE: com.revenuecat.purchases.common.networking.RCHTTPStatusCodes;
            public static SUCCESS: number = 200;
            public static CREATED: number = 201;
            public static UNSUCCESSFUL: number = 300;
            public static NOT_MODIFIED: number = 304;
            public static BAD_REQUEST: number = 400;
            public static NOT_FOUND: number = 404;
            public static ERROR: number = 500;
            public isSuccessful(statusCode: number): boolean;
            public isServerError(statusCode: number): boolean;
            public isSynced(statusCode: number): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offerings {
          export class OfferingsCache {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offerings.OfferingsCache>;
            public isOfferingsCacheStale(appInBackground: boolean): boolean;
            public cacheOfferings(offerings: com.revenuecat.purchases.Offerings, offeringsResponse: org.json.JSONObject): void;
            public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, dateProvider: com.revenuecat.purchases.common.DateProvider, offeringsCachedObject: com.revenuecat.purchases.common.caching.InMemoryCachedObject<com.revenuecat.purchases.Offerings>);
            public getCachedOfferingsResponse(): org.json.JSONObject;
            public clearCache(): void;
            public getCachedOfferings(): com.revenuecat.purchases.Offerings;
            public clearOfferingsCacheTimestamp(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offerings {
          export class OfferingsFactory {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offerings.OfferingsFactory>;
            public constructor(billing: com.revenuecat.purchases.common.BillingAbstract, offeringParser: com.revenuecat.purchases.common.OfferingParser, dispatcher: com.revenuecat.purchases.common.Dispatcher);
            public createOfferings(error: org.json.JSONObject, thisTemp: any, offeringsJSON: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offerings {
          export class OfferingsManager {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offerings.OfferingsManager>;
            public constructor(offeringsCache: com.revenuecat.purchases.common.offerings.OfferingsCache, backend: com.revenuecat.purchases.common.Backend, offeringsFactory: com.revenuecat.purchases.common.offerings.OfferingsFactory, offeringImagePreDownloader: com.revenuecat.purchases.utils.OfferingImagePreDownloader, mainHandler: globalAndroid.os.Handler);
            public getOfferings(thisTemp: string, appUserID: boolean, appInBackground: any, onError: any, onSuccess: boolean): void;
            public onAppForeground(appUserID: string): void;
            public fetchAndCacheOfferings(appUserID: string, appInBackground: boolean, onError: any, onSuccess: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offlineentitlements {
          export class OfflineCustomerInfoCalculator {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.OfflineCustomerInfoCalculator>;
            public computeOfflineCustomerInfo(appUserID: string, onSuccess: any, onError: any): void;
            public constructor(purchasedProductsFetcher: com.revenuecat.purchases.common.offlineentitlements.PurchasedProductsFetcher, appConfig: com.revenuecat.purchases.common.AppConfig, diagnosticsTracker: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, dateProvider: com.revenuecat.purchases.common.DateProvider);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offlineentitlements {
          export class OfflineEntitlementsManager {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager>;
            public shouldCalculateOfflineCustomerInfoInPostReceipt(isServerError: boolean): boolean;
            public calculateAndCacheOfflineCustomerInfo(alreadyProcessing: string, callbacks: any, $i$a$synchronizedOfflineEntitlementsManager$calculateAndCacheOfflineCustomerInfo$1: any): void;
            public shouldCalculateOfflineCustomerInfoInGetCustomerInfoRequest(isServerError: boolean, appUserId: string): boolean;
            public constructor(backend: com.revenuecat.purchases.common.Backend, offlineCustomerInfoCalculator: com.revenuecat.purchases.common.offlineentitlements.OfflineCustomerInfoCalculator, deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, appConfig: com.revenuecat.purchases.common.AppConfig, diagnosticsTracker: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker);
            public updateProductEntitlementMappingCacheIfStale(completion: any): void;
            public resetOfflineCustomerInfoCache(): void;
            public getOfflineCustomerInfo(): com.revenuecat.purchases.CustomerInfo;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offlineentitlements {
          export class ProductEntitlementMapping {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping>;
            public copy(mappings: java.util.Map<string, com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Mapping>): com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping;
            public toJson(): org.json.JSONObject;
            public constructor(mappings: java.util.Map<string, com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Mapping>);
            public equals(other: any): boolean;
            public getMappings(): java.util.Map<string, com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Mapping>;
            public hashCode(): number;
            public toString(): string;
            public component1(): java.util.Map<string, com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Mapping>;
          }
          export module ProductEntitlementMapping {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Companion>;
              public fromJson(productObject: org.json.JSONObject): com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping;
            }
            export class Mapping {
              public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Mapping>;
              public getBasePlanId(): string;
              public component2(): string;
              public constructor(productIdentifier: string, basePlanId: string, entitlements: java.util.List<string>);
              public component3(): java.util.List<string>;
              public hashCode(): number;
              public equals(other: any): boolean;
              public getEntitlements(): java.util.List<string>;
              public getProductIdentifier(): string;
              public toString(): string;
              public copy(productIdentifier: string, basePlanId: string, entitlements: java.util.List<string>): com.revenuecat.purchases.common.offlineentitlements.ProductEntitlementMapping.Mapping;
              public component1(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offlineentitlements {
          export class PurchasedProduct {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.PurchasedProduct>;
            public getExpiresDate(): java.util.Date;
            public equals(other: any): boolean;
            public component5(): java.util.Date;
            public getStoreTransaction(): com.revenuecat.purchases.models.StoreTransaction;
            public component1(): string;
            public hashCode(): number;
            public copy(productIdentifier: string, basePlanId: string, storeTransaction: com.revenuecat.purchases.models.StoreTransaction, entitlements: java.util.List<string>, expiresDate: java.util.Date): com.revenuecat.purchases.common.offlineentitlements.PurchasedProduct;
            public toString(): string;
            public component2(): string;
            public getEntitlements(): java.util.List<string>;
            public component4(): java.util.List<string>;
            public getProductIdentifier(): string;
            public component3(): com.revenuecat.purchases.models.StoreTransaction;
            public constructor(productIdentifier: string, basePlanId: string, storeTransaction: com.revenuecat.purchases.models.StoreTransaction, entitlements: java.util.List<string>, expiresDate: java.util.Date);
            public getBasePlanId(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module offlineentitlements {
          export class PurchasedProductsFetcher {
            public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.PurchasedProductsFetcher>;
            public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, billing: com.revenuecat.purchases.common.BillingAbstract, dateProvider: com.revenuecat.purchases.common.DateProvider);
            public queryActiveProducts($this$queryActiveProducts_u24lambda_u240: string, productEntitlementMapping: any, thisTemp: any): void;
          }
          export module PurchasedProductsFetcher {
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.common.offlineentitlements.PurchasedProductsFetcher.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module responses {
          export class CustomerInfoResponseJsonKeys {
            public static class: java.lang.Class<com.revenuecat.purchases.common.responses.CustomerInfoResponseJsonKeys>;
            public static INSTANCE: com.revenuecat.purchases.common.responses.CustomerInfoResponseJsonKeys;
            public static REQUEST_DATE: string = 'request_date';
            public static REQUEST_DATE_MS: string = 'request_date_ms';
            public static SUBSCRIBER: string = 'subscriber';
            public static ORIGINAL_APP_USER_ID: string = 'original_app_user_id';
            public static ORIGINAL_APPLICATION_VERSION: string = 'original_application_version';
            public static ENTITLEMENTS: string = 'entitlements';
            public static FIRST_SEEN: string = 'first_seen';
            public static ORIGINAL_PURCHASE_DATE: string = 'original_purchase_date';
            public static NON_SUBSCRIPTIONS: string = 'non_subscriptions';
            public static SUBSCRIPTIONS: string = 'subscriptions';
            public static MANAGEMENT_URL: string = 'management_url';
            public static PURCHASE_DATE: string = 'purchase_date';
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module responses {
          export class EntitlementsResponseJsonKeys {
            public static class: java.lang.Class<com.revenuecat.purchases.common.responses.EntitlementsResponseJsonKeys>;
            public static INSTANCE: com.revenuecat.purchases.common.responses.EntitlementsResponseJsonKeys;
            public static EXPIRES_DATE: string = 'expires_date';
            public static PRODUCT_IDENTIFIER: string = 'product_identifier';
            public static PRODUCT_PLAN_IDENTIFIER: string = 'product_plan_identifier';
            public static PURCHASE_DATE: string = 'purchase_date';
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module responses {
          export class ProductResponseJsonKeys {
            public static class: java.lang.Class<com.revenuecat.purchases.common.responses.ProductResponseJsonKeys>;
            public static INSTANCE: com.revenuecat.purchases.common.responses.ProductResponseJsonKeys;
            public static BILLING_ISSUES_DETECTED_AT: string = 'billing_issues_detected_at';
            public static IS_SANDBOX: string = 'is_sandbox';
            public static ORIGINAL_PURCHASE_DATE: string = 'original_purchase_date';
            public static PURCHASE_DATE: string = 'purchase_date';
            public static PRODUCT_PLAN_IDENTIFIER: string = 'product_plan_identifier';
            public static STORE: string = 'store';
            public static UNSUBSCRIBE_DETECTED_AT: string = 'unsubscribe_detected_at';
            public static EXPIRES_DATE: string = 'expires_date';
            public static PERIOD_TYPE: string = 'period_type';
            public static OWNERSHIP_TYPE: string = 'ownership_type';
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module subscriberattributes {
          export class DeviceIdentifiersFetcher {
            public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.DeviceIdentifiersFetcher>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.common.subscriberattributes.DeviceIdentifiersFetcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getDeviceIdentifiers(param0: globalAndroid.app.Application, param1: any): void });
            public constructor();
            public getDeviceIdentifiers(param0: globalAndroid.app.Application, param1: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module subscriberattributes {
          export class ReservedSubscriberAttribute {
            public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute>;
            public static EMAIL: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static DISPLAY_NAME: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static PHONE_NUMBER: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static FCM_TOKENS: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static IDFA: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static IDFV: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static IP: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static DEVICE_VERSION: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static GPS_AD_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static AMAZON_AD_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static ADJUST_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static APPSFLYER_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static FB_ANON_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static MPARTICLE_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static ONESIGNAL_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static ONESIGNAL_USER_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static AIRSHIP_CHANNEL_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static CLEVER_TAP_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static KOCHAVA_DEVICE_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static MIXPANEL_DISTINCT_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static FIREBASE_APP_INSTANCE_ID: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static MEDIA_SOURCE: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static CAMPAIGN: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static AD_GROUP: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static AD: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static KEYWORD: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static CREATIVE: com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static valueOf(value: string): com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute;
            public static values(): androidNative.Array<com.revenuecat.purchases.common.subscriberattributes.ReservedSubscriberAttribute>;
            public getValue(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module subscriberattributes {
          export abstract class SubscriberAttributeKey {
            public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey>;
            public equals(other: any): boolean;
            public getBackendKey(): string;
            public hashCode(): number;
            public toString(): string;
          }
          export module SubscriberAttributeKey {
            export abstract class AttributionIds extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds>;
            }
            export module AttributionIds {
              export class Adjust extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Adjust>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Adjust;
              }
              export class AppsFlyer extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.AppsFlyer>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.AppsFlyer;
              }
              export class CleverTap extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.CleverTap>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.CleverTap;
              }
              export class Facebook extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Facebook>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Facebook;
              }
              export class Kochava extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Kochava>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Kochava;
              }
              export class Mparticle extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Mparticle>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds.Mparticle;
              }
            }
            export abstract class CampaignParameters extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters>;
            }
            export module CampaignParameters {
              export class Ad extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Ad>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Ad;
              }
              export class AdGroup extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.AdGroup>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.AdGroup;
              }
              export class Campaign extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Campaign>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Campaign;
              }
              export class Creative extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Creative>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Creative;
              }
              export class Keyword extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Keyword>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.Keyword;
              }
              export class MediaSource extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.MediaSource>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.CampaignParameters.MediaSource;
              }
            }
            export class Custom extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.Custom>;
              public constructor(value: string);
            }
            export abstract class DeviceIdentifiers {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers>;
            }
            export module DeviceIdentifiers {
              export class AmazonAdID extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.AmazonAdID>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.AmazonAdID;
              }
              export class DeviceVersion extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.DeviceVersion>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.DeviceVersion;
              }
              export class GPSAdID extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.GPSAdID>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.GPSAdID;
              }
              export class IP extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.IP>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DeviceIdentifiers.IP;
              }
            }
            export class DisplayName extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DisplayName>;
              public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.DisplayName;
            }
            export class Email extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.Email>;
              public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.Email;
            }
            export class FCMTokens extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.FCMTokens>;
              public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.FCMTokens;
            }
            export abstract class IntegrationIds extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds>;
            }
            export module IntegrationIds {
              export class Airship extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.Airship>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.Airship;
              }
              export class FirebaseAppInstanceId extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.FirebaseAppInstanceId>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.FirebaseAppInstanceId;
              }
              export class MixpanelDistinctId extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.MixpanelDistinctId>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.MixpanelDistinctId;
              }
              export class OneSignal extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.OneSignal>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.OneSignal;
              }
              export class OneSignalUserId extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds {
                public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.OneSignalUserId>;
                public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.IntegrationIds.OneSignalUserId;
              }
            }
            export class PhoneNumber extends com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey {
              public static class: java.lang.Class<com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.PhoneNumber>;
              public static INSTANCE: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.PhoneNumber;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class DefaultSignatureVerifier extends com.revenuecat.purchases.common.verification.SignatureVerifier {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.DefaultSignatureVerifier>;
            public verify(thisTemp: androidNative.Array<number>, signatureToVerify: androidNative.Array<number>): boolean;
            public constructor(publicKey: string);
            public verify(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
            public constructor(publicKeyBytes: androidNative.Array<number>);
          }
          export module DefaultSignatureVerifier {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.DefaultSignatureVerifier.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class IntermediateSignatureHelper {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.IntermediateSignatureHelper>;
            public constructor(rootSignatureVerifier: com.revenuecat.purchases.common.verification.SignatureVerifier);
            public createIntermediateKeyVerifierIfVerified(intermediateKeyExpirationDate: com.revenuecat.purchases.common.verification.Signature): com.revenuecat.purchases.utils.Result<com.revenuecat.purchases.common.verification.SignatureVerifier, com.revenuecat.purchases.PurchasesError>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class InvalidSignatureSizeException {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.InvalidSignatureSizeException>;
            public constructor(message: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class Signature {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.Signature>;
            public equals(other: any): boolean;
            public component2(): androidNative.Array<number>;
            public constructor(intermediateKey: androidNative.Array<number>, intermediateKeyExpiration: androidNative.Array<number>, intermediateKeySignature: androidNative.Array<number>, salt: androidNative.Array<number>, payload: androidNative.Array<number>);
            public hashCode(): number;
            public component5(): androidNative.Array<number>;
            public component1(): androidNative.Array<number>;
            public toString(): string;
            public getIntermediateKeySignature(): androidNative.Array<number>;
            public component4(): androidNative.Array<number>;
            public copy(intermediateKey: androidNative.Array<number>, intermediateKeyExpiration: androidNative.Array<number>, intermediateKeySignature: androidNative.Array<number>, salt: androidNative.Array<number>, payload: androidNative.Array<number>): com.revenuecat.purchases.common.verification.Signature;
            public getSalt(): androidNative.Array<number>;
            public getIntermediateKey(): androidNative.Array<number>;
            public getIntermediateKeyExpiration(): androidNative.Array<number>;
            public component3(): androidNative.Array<number>;
            public getPayload(): androidNative.Array<number>;
          }
          export module Signature {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.Signature.Companion>;
              public fromString$purchases_defaultsRelease(expectedSize: string): com.revenuecat.purchases.common.verification.Signature;
            }
            export class Component {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.Signature.Component>;
              public static INTERMEDIATE_KEY: com.revenuecat.purchases.common.verification.Signature.Component;
              public static INTERMEDIATE_KEY_EXPIRATION: com.revenuecat.purchases.common.verification.Signature.Component;
              public static INTERMEDIATE_KEY_SIGNATURE: com.revenuecat.purchases.common.verification.Signature.Component;
              public static SALT: com.revenuecat.purchases.common.verification.Signature.Component;
              public static PAYLOAD: com.revenuecat.purchases.common.verification.Signature.Component;
              public getSize(): number;
              public getEndByte(): number;
              public static values(): androidNative.Array<com.revenuecat.purchases.common.verification.Signature.Component>;
              public static valueOf(value: string): com.revenuecat.purchases.common.verification.Signature.Component;
              public getStartByte(): number;
            }
            export module Component {
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.common.verification.Signature.Component.Companion>;
                public getTotalSize(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class SignatureVerificationException {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationException>;
            public constructor(apiPath: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export abstract class SignatureVerificationMode {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationMode>;
            public getShouldVerify(): boolean;
            public getIntermediateSignatureHelper(): com.revenuecat.purchases.common.verification.IntermediateSignatureHelper;
          }
          export module SignatureVerificationMode {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationMode.Companion>;
              public fromEntitlementVerificationMode(verificationMode: com.revenuecat.purchases.EntitlementVerificationMode, rootVerifier: com.revenuecat.purchases.common.verification.SignatureVerifier): com.revenuecat.purchases.common.verification.SignatureVerificationMode;
            }
            export module Companion {
              export class WhenMappings {
                public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationMode.Companion.WhenMappings>;
              }
            }
            export class Disabled extends com.revenuecat.purchases.common.verification.SignatureVerificationMode {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationMode.Disabled>;
              public static INSTANCE: com.revenuecat.purchases.common.verification.SignatureVerificationMode.Disabled;
            }
            export class Enforced extends com.revenuecat.purchases.common.verification.SignatureVerificationMode {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationMode.Enforced>;
              public constructor();
              public constructor(intermediateSignatureHelper: com.revenuecat.purchases.common.verification.IntermediateSignatureHelper);
              public hashCode(): number;
              public equals(other: any): boolean;
              public toString(): string;
              public component1(): com.revenuecat.purchases.common.verification.IntermediateSignatureHelper;
              public copy(intermediateSignatureHelper: com.revenuecat.purchases.common.verification.IntermediateSignatureHelper): com.revenuecat.purchases.common.verification.SignatureVerificationMode.Enforced;
              public getIntermediateSignatureHelper(): com.revenuecat.purchases.common.verification.IntermediateSignatureHelper;
            }
            export class Informational extends com.revenuecat.purchases.common.verification.SignatureVerificationMode {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerificationMode.Informational>;
              public constructor();
              public constructor(intermediateSignatureHelper: com.revenuecat.purchases.common.verification.IntermediateSignatureHelper);
              public hashCode(): number;
              public equals(other: any): boolean;
              public copy(intermediateSignatureHelper: com.revenuecat.purchases.common.verification.IntermediateSignatureHelper): com.revenuecat.purchases.common.verification.SignatureVerificationMode.Informational;
              public toString(): string;
              public component1(): com.revenuecat.purchases.common.verification.IntermediateSignatureHelper;
              public getIntermediateSignatureHelper(): com.revenuecat.purchases.common.verification.IntermediateSignatureHelper;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class SignatureVerifier {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SignatureVerifier>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.common.verification.SignatureVerifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { verify(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean });
            public constructor();
            public verify(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module common {
        export module verification {
          export class SigningManager {
            public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SigningManager>;
            public static NONCE_BYTES_SIZE: number = 12;
            public static POST_PARAMS_ALGORITHM: string = 'sha256';
            public static POST_PARAMS_SEPARATOR: number = 0;
            public shouldVerifyEndpoint(endpoint: com.revenuecat.purchases.common.networking.Endpoint): boolean;
            public createRandomNonce(): string;
            public getSignatureVerificationMode(): com.revenuecat.purchases.common.verification.SignatureVerificationMode;
            public getPostParamsForSigningHeaderIfNeeded(index: com.revenuecat.purchases.common.networking.Endpoint, pair: java.util.List<any>): string;
            public constructor(signatureVerificationMode: com.revenuecat.purchases.common.verification.SignatureVerificationMode, appConfig: com.revenuecat.purchases.common.AppConfig, apiKey: string);
            public verifyResponse(intermediateKeyVerifier: string, signatureParameters: string, verificationResult: string, result: string, intermediateSignatureHelper: string, signature: string, thisTemp: string): com.revenuecat.purchases.VerificationResult;
          }
          export module SigningManager {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SigningManager.Companion>;
            }
            export class Parameters {
              public static class: java.lang.Class<com.revenuecat.purchases.common.verification.SigningManager.Parameters>;
              public component2(): string;
              public component1(): androidNative.Array<number>;
              public component7(): string;
              public hashCode(): number;
              public toSignatureToVerify(): androidNative.Array<number>;
              public constructor(salt: androidNative.Array<number>, apiKey: string, nonce: string, urlPath: string, postParamsHashHeader: string, requestTime: string, eTag: string, body: string);
              public toString(): string;
              public component5(): string;
              public getETag(): string;
              public component3(): string;
              public component8(): string;
              public getSalt(): androidNative.Array<number>;
              public getRequestTime(): string;
              public equals(other: any): boolean;
              public getNonce(): string;
              public component4(): string;
              public getApiKey(): string;
              public component6(): string;
              public getPostParamsHashHeader(): string;
              public copy(salt: androidNative.Array<number>, apiKey: string, nonce: string, urlPath: string, postParamsHashHeader: string, requestTime: string, eTag: string, body: string): com.revenuecat.purchases.common.verification.SigningManager.Parameters;
              public getBody(): string;
              public getUrlPath(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module customercenter {
        export class CustomerCenterConfigData {
          public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData>;
          public constructor(screens: java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>, appearance: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance, localization: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization, support: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support, lastPublishedAppVersion: string);
          public component5(): string;
          public component1(): java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>;
          public copy(screens: java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>, appearance: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance, localization: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization, support: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support, lastPublishedAppVersion: string): com.revenuecat.purchases.customercenter.CustomerCenterConfigData;
          public getAppearance(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance;
          public component2(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance;
          public equals(other: any): boolean;
          public component4(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support;
          public getScreens(): java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>;
          public getLocalization(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization;
          public toString(): string;
          public component3(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization;
          public getLastPublishedAppVersion(): string;
          public getSupport(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support;
          public hashCode(): number;
        }
        export module CustomerCenterConfigData {
          export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData> {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.serializer>;
            public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.serializer;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData): void;
            public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
          }
          export class Appearance {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance>;
            public copy(light: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation, dark: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance;
            public equals(other: any): boolean;
            public constructor();
            public constructor(light: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation, dark: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation);
            public hashCode(): number;
            public getDark(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation;
            public getLight(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation;
            public component1(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation;
            public component2(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation;
            public toString(): string;
          }
          export module Appearance {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance> {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.serializer>;
              public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.serializer;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance): void;
            }
            export class ColorInformation {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation>;
              public constructor();
              public component4(): com.revenuecat.purchases.paywalls.PaywallColor;
              public hashCode(): number;
              public getTextColor(): com.revenuecat.purchases.paywalls.PaywallColor;
              public toString(): string;
              public component3(): com.revenuecat.purchases.paywalls.PaywallColor;
              public constructor(accentColor: com.revenuecat.purchases.paywalls.PaywallColor, textColor: com.revenuecat.purchases.paywalls.PaywallColor, backgroundColor: com.revenuecat.purchases.paywalls.PaywallColor, buttonTextColor: com.revenuecat.purchases.paywalls.PaywallColor, buttonBackgroundColor: com.revenuecat.purchases.paywalls.PaywallColor);
              public getAccentColor(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component2(): com.revenuecat.purchases.paywalls.PaywallColor;
              public copy(accentColor: com.revenuecat.purchases.paywalls.PaywallColor, textColor: com.revenuecat.purchases.paywalls.PaywallColor, backgroundColor: com.revenuecat.purchases.paywalls.PaywallColor, buttonTextColor: com.revenuecat.purchases.paywalls.PaywallColor, buttonBackgroundColor: com.revenuecat.purchases.paywalls.PaywallColor): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation;
              public getButtonTextColor(): com.revenuecat.purchases.paywalls.PaywallColor;
              public equals(other: any): boolean;
              public getBackgroundColor(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getButtonBackgroundColor(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component1(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component5(): com.revenuecat.purchases.paywalls.PaywallColor;
            }
            export module ColorInformation {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation> {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation.serializer>;
                public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation.serializer;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation): void;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.ColorInformation>;
              }
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Appearance>;
            }
          }
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Companion>;
            public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData>;
          }
          export class HelpPath {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>;
            public equals(other: any): boolean;
            public constructor(id: string, title: string, type: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType, promotionalOffer: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer, feedbackSurvey: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey);
            public getType(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
            public getPromotionalOffer(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer;
            public component1(): string;
            public hashCode(): number;
            public toString(): string;
            public getTitle(): string;
            public copy(id: string, title: string, type: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType, promotionalOffer: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer, feedbackSurvey: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath;
            public getFeedbackSurvey(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey;
            public component5(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey;
            public component2(): string;
            public component3(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
            public getId(): string;
            public component4(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer;
          }
          export module HelpPath {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath> {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.serializer>;
              public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.serializer;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath): void;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>;
            }
            export abstract class PathDetail {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail>;
            }
            export module PathDetail {
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail>;
              }
              export class FeedbackSurvey extends com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey>;
                public constructor(title: string, options: java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option>);
                public getOptions(): java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option>;
                public component1(): string;
                public toString(): string;
                public getTitle(): string;
                public copy(title: string, options: java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option>): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey;
                public component2(): java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option>;
                public hashCode(): number;
                public equals(other: any): boolean;
              }
              export module FeedbackSurvey {
                export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey> {
                  public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.serializer>;
                  public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.serializer;
                  public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                  public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                  public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey): void;
                  public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                  public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey;
                }
                export class Companion {
                  public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Companion>;
                  public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey>;
                }
                export class Option {
                  public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option>;
                  public component2(): string;
                  public hashCode(): number;
                  public equals(other: any): boolean;
                  public getTitle(): string;
                  public copy(id: string, title: string, promotionalOffer: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option;
                  public getId(): string;
                  public component3(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer;
                  public constructor(id: string, title: string, promotionalOffer: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer);
                  public toString(): string;
                  public getPromotionalOffer(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer;
                  public component1(): string;
                }
                export module Option {
                  export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option> {
                    public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option.serializer>;
                    public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option.serializer;
                    public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option): void;
                    public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                    public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option;
                    public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                    public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                  }
                  export class Companion {
                    public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option.Companion>;
                    public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.FeedbackSurvey.Option>;
                  }
                }
              }
              export class PromotionalOffer extends com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer>;
                public toString(): string;
                public getEligible(): boolean;
                public copy(androidOfferId: string, eligible: boolean, title: string, subtitle: string): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer;
                public component2(): boolean;
                public component4(): string;
                public getAndroidOfferId(): string;
                public equals(other: any): boolean;
                public component1(): string;
                public constructor(androidOfferId: string, eligible: boolean, title: string, subtitle: string);
                public getTitle(): string;
                public component3(): string;
                public hashCode(): number;
                public getSubtitle(): string;
              }
              export module PromotionalOffer {
                export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer> {
                  public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer.serializer>;
                  public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer.serializer;
                  public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                  public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                  public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer;
                  public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                  public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer): void;
                }
                export class Companion {
                  public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer.Companion>;
                  public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathDetail.PromotionalOffer>;
                }
              }
            }
            export class PathType {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType>;
              public static MISSING_PURCHASE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
              public static REFUND_REQUEST: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
              public static CHANGE_PLANS: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
              public static CANCEL: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
              public static UNKNOWN: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
              public static values(): androidNative.Array<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType>;
              public static valueOf(value: string): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType;
            }
            export module PathType {
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath.PathType>;
              }
            }
          }
          export class Localization {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization>;
            public getLocalizedStrings(): java.util.Map<string, string>;
            public equals(other: any): boolean;
            public getLocale(): string;
            public component2(): java.util.Map<string, string>;
            public constructor(locale: string, localizedStrings: java.util.Map<string, string>);
            public component1(): string;
            public hashCode(): number;
            public commonLocalizedString(key: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString): string;
            public copy(locale: string, localizedStrings: java.util.Map<string, string>): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization;
            public toString(): string;
          }
          export module Localization {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization> {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.serializer>;
              public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.serializer;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization): void;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization;
            }
            export class CommonLocalizedString {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString>;
              public static NO_THANKS: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static NO_SUBSCRIPTIONS_FOUND: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static TRY_CHECK_RESTORE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static RESTORE_PURCHASES: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static CANCEL: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static BILLING_CYCLE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static CURRENT_PRICE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static EXPIRED: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static EXPIRES: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static NEXT_BILLING_DATE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static REFUND_CANCELED: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static REFUND_ERROR_GENERIC: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static REFUND_GRANTED: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static REFUND_STATUS: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static SUB_EARLIEST_EXPIRATION: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static SUB_EARLIEST_RENEWAL: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static SUB_EXPIRED: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static CONTACT_SUPPORT: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static DEFAULT_BODY: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static DEFAULT_SUBJECT: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static DISMISS: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static UPDATE_WARNING_TITLE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static UPDATE_WARNING_DESCRIPTION: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static UPDATE_WARNING_UPDATE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static UPDATE_WARNING_IGNORE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static PLEASE_CONTACT_SUPPORT: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static APPLE_SUBSCRIPTION_MANAGE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static GOOGLE_SUBSCRIPTION_MANAGE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static AMAZON_SUBSCRIPTION_MANAGE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static PLATFORM_MISMATCH: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static GOING_TO_CHECK_PURCHASES: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static CHECK_PAST_PURCHASES: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static PURCHASES_RECOVERED: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static PURCHASES_RECOVERED_EXPLANATION: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static PURCHASES_NOT_RECOVERED: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public getDefaultValue(): string;
              public static valueOf(value: string): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString;
              public static values(): androidNative.Array<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString>;
            }
            export module CommonLocalizedString {
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.CommonLocalizedString.WhenMappings>;
              }
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Localization>;
            }
          }
          export class Screen {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>;
            public component1(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType;
            public component3(): string;
            public equals(other: any): boolean;
            public getType(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType;
            public getPaths(): java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>;
            public hashCode(): number;
            public component4(): java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>;
            public toString(): string;
            public getTitle(): string;
            public constructor(type: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, title: string, subtitle: string, paths: java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>);
            public component2(): string;
            public copy(type: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, title: string, subtitle: string, paths: java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen;
            public getSubtitle(): string;
          }

          export module Screen {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen> {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.serializer>;
              public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.serializer;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen): void;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>;
            }
            export class ScreenType {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType>;
              public static MANAGEMENT: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType;
              public static NO_ACTIVE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType;
              public static UNKNOWN: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType;
              public static valueOf(value: string): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType;
              public static values(): androidNative.Array<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType>;
            }
            export module ScreenType {
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType>;
              }
            }
          }
          export class Support {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support>;
            public equals(other: any): boolean;
            public constructor();
            public getEmail(): string;
            public component1(): string;
            public copy(email: string): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support;
            public hashCode(): number;
            public toString(): string;
            public constructor(email: string);
          }
          export module Support {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support> {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support.serializer>;
              public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support.serializer;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support): void;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Support>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module customercenter {
        export class CustomerCenterRoot {
          public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterRoot>;
          public getCustomerCenter(): com.revenuecat.purchases.customercenter.CustomerCenterConfigData;
          public constructor(customerCenter: com.revenuecat.purchases.customercenter.CustomerCenterConfigData);
        }
        export module CustomerCenterRoot {
          export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.customercenter.CustomerCenterRoot> {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterRoot.serializer>;
            public static INSTANCE: com.revenuecat.purchases.customercenter.CustomerCenterRoot.serializer;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.customercenter.CustomerCenterRoot;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.customercenter.CustomerCenterRoot): void;
            public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
          }
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.customercenter.CustomerCenterRoot.Companion>;
            public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.customercenter.CustomerCenterRoot>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module customercenter {
        export class HelpPathsSerializer extends kotlinx.serialization.KSerializer<java.util.List<any>> {
          public static class: java.lang.Class<com.revenuecat.purchases.customercenter.HelpPathsSerializer>;
          public static INSTANCE: com.revenuecat.purchases.customercenter.HelpPathsSerializer;
          public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>): void;
          public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
          public deserialize($i$a$forEachHelpPathsSerializer$deserialize$1: kotlinx.serialization.encoding.Decoder): java.util.List<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.HelpPath>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module customercenter {
        export class ScreenMapSerializer extends kotlinx.serialization.KSerializer<java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, any>> {
          public static class: java.lang.Class<com.revenuecat.purchases.customercenter.ScreenMapSerializer>;
          public static INSTANCE: com.revenuecat.purchases.customercenter.ScreenMapSerializer;
          public deserialize(_: kotlinx.serialization.encoding.Decoder): java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>;
          public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
          public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.util.Map<com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen.ScreenType, com.revenuecat.purchases.customercenter.CustomerCenterConfigData.Screen>): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module data {
        export class LogInResult {
          public static class: java.lang.Class<com.revenuecat.purchases.data.LogInResult>;
          public getCustomerInfo(): com.revenuecat.purchases.CustomerInfo;
          public toString(): string;
          public component1(): com.revenuecat.purchases.CustomerInfo;
          public copy(customerInfo: com.revenuecat.purchases.CustomerInfo, created: boolean): com.revenuecat.purchases.data.LogInResult;
          public getCreated(): boolean;
          public equals(other: any): boolean;
          public constructor(customerInfo: com.revenuecat.purchases.CustomerInfo, created: boolean);
          public hashCode(): number;
          public component2(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export abstract class BillingResponse {
          public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse>;
        }
        export module BillingResponse {
          export class BillingUnavailable extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.BillingUnavailable>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.BillingUnavailable;
          }
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.Companion>;
            public fromCode(code: number): com.revenuecat.purchases.google.BillingResponse;
          }
          export class DeveloperError extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.DeveloperError>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.DeveloperError;
          }
          export class Error extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.Error>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.Error;
          }
          export class FeatureNotSupported extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.FeatureNotSupported>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.FeatureNotSupported;
          }
          export class ItemAlreadyOwned extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.ItemAlreadyOwned>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.ItemAlreadyOwned;
          }
          export class ItemNotOwned extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.ItemNotOwned>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.ItemNotOwned;
          }
          export class ItemUnavailable extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.ItemUnavailable>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.ItemUnavailable;
          }
          export class NetworkError extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.NetworkError>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.NetworkError;
          }
          export class OK extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.OK>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.OK;
          }
          export class ServiceDisconnected extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.ServiceDisconnected>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.ServiceDisconnected;
          }
          export class ServiceUnavailable extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.ServiceUnavailable>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.ServiceUnavailable;
          }
          export class Unknown extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.Unknown>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.Unknown;
          }
          export class UserCanceled extends com.revenuecat.purchases.google.BillingResponse {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingResponse.UserCanceled>;
            public static INSTANCE: com.revenuecat.purchases.google.BillingResponse.UserCanceled;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export class BillingWrapper extends com.revenuecat.purchases.common.BillingAbstract {
          public static class: java.lang.Class<com.revenuecat.purchases.google.BillingWrapper>;
          public queryAllPurchases(appUserID: string, onReceivePurchaseHistory: any, onReceivePurchaseHistoryError: any): void;
          public showInAppMessagesIfNeeded(inAppMessageParamsBuilder: globalAndroid.app.Activity, inAppMessageParams: java.util.List<any>, weakActivity: any): void;
          public consumePurchase$purchases_defaultsRelease(token: string, initiationSource: com.revenuecat.purchases.PostReceiptInitiationSource, onConsumed: any): void;
          public getStorefront(onSuccess: any, onError: any): void;
          public startConnection(): void;
          public getBillingClient(): com.android.billingclient.api.BillingClient;
          public constructor(purchasesStateProvider: com.revenuecat.purchases.PurchasesStateProvider);
          public setBillingClient(setTemp: com.android.billingclient.api.BillingClient): void;
          public onPurchasesUpdated(purchase: com.android.billingclient.api.BillingResult, element$iv: java.util.List<any>): void;
          public constructor(clientFactory: com.revenuecat.purchases.google.BillingWrapper.ClientFactory, mainHandler: globalAndroid.os.Handler, deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, purchasesStateProvider: com.revenuecat.purchases.PurchasesStateProvider, dateProvider: com.revenuecat.purchases.common.DateProvider);
          public onBillingServiceDisconnected(): void;
          public consumeAndSave(alreadyAcknowledged: boolean, isInAppProduct: com.revenuecat.purchases.models.StoreTransaction, thisTemp: boolean, finishTransactions: com.revenuecat.purchases.PostReceiptInitiationSource): void;
          public queryProductDetailsAsync(thisTemp: com.revenuecat.purchases.ProductType, productType: java.util.Set<string>, productIds: any, onReceive: any): void;
          public acknowledge$purchases_defaultsRelease(token: string, initiationSource: com.revenuecat.purchases.PostReceiptInitiationSource, onAcknowledged: any): void;
          public onBillingSetupFinished(billingResult: com.android.billingclient.api.BillingResult): void;
          public getPurchaseType$purchases_defaultsRelease(purchaseToken: string, listener: any): void;
          public endConnection(): void;
          public makePurchaseAsync($i$a$synchronizedBillingWrapper$makePurchaseAsync$1: globalAndroid.app.Activity, productId: string, googlePurchasingData: com.revenuecat.purchases.models.PurchasingData, subscriptionOptionId: com.revenuecat.purchases.common.ReplaceProductInfo, thisTemp: com.revenuecat.purchases.PresentedOfferingContext, activity: java.lang.Boolean): void;
          public isConnected(): boolean;
          public startConnectionOnMainThread(delayMilliseconds: number): void;
          public queryPurchases(appUserID: string, onSuccess: any, onError: any): void;
          public getPurchaseContext$purchases_defaultsRelease(): java.util.Map<string, com.revenuecat.purchases.google.PurchaseContext>;
          public queryPurchaseHistoryAsync(productType: string, onReceivePurchaseHistory: any, onReceivePurchaseHistoryError: any): void;
          public findPurchaseInPurchaseHistory(googleProductType: string, thisTemp: com.revenuecat.purchases.ProductType, appUserID: string, productType: any, productId: any): void;
          public getAppInBackground(): boolean;
        }
        export module BillingWrapper {
          export class ClientFactory {
            public static class: java.lang.Class<com.revenuecat.purchases.google.BillingWrapper.ClientFactory>;
            public constructor(context: globalAndroid.content.Context, pendingTransactionsForPrepaidPlansEnabled: boolean);
            public buildClient($this$buildClient_u24lambda_u240: com.android.billingclient.api.PurchasesUpdatedListener): com.android.billingclient.api.BillingClient;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module ProductTypeConversionsKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.google.ProductTypeConversionsKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export class PurchaseContext {
          public static class: java.lang.Class<com.revenuecat.purchases.google.PurchaseContext>;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public constructor(productType: com.revenuecat.purchases.ProductType, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, selectedSubscriptionOptionId: string, replacementMode: com.revenuecat.purchases.models.GoogleReplacementMode);
          public getSelectedSubscriptionOptionId(): string;
          public getReplacementMode(): com.revenuecat.purchases.models.GoogleReplacementMode;
          public getProductType(): com.revenuecat.purchases.ProductType;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module PurchaseStateConversionsKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.google.PurchaseStateConversionsKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module attribution {
          export class GoogleDeviceIdentifiersFetcher extends com.revenuecat.purchases.common.subscriberattributes.DeviceIdentifiersFetcher {
            public static class: java.lang.Class<com.revenuecat.purchases.google.attribution.GoogleDeviceIdentifiersFetcher>;
            public getDeviceIdentifiers(applicationContext: globalAndroid.app.Application, completion: any): void;
            public getDeviceIdentifiers(param0: globalAndroid.app.Application, param1: any): void;
            public constructor(dispatcher: com.revenuecat.purchases.common.Dispatcher);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class AcknowledgePurchaseUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<string> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.AcknowledgePurchaseUseCase>;
            public getErrorMessage(): string;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.AcknowledgePurchaseUseCaseParams, onReceive: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public getOnError(): any;
            public onOk(param0: any): void;
            public onOk(received: string): void;
            public getOnReceive(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public getWithConnectedClient(): any;
            public getBackoffForNetworkErrors(): boolean;
            public executeAsync(): void;
          }
          export module AcknowledgePurchaseUseCase {
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.AcknowledgePurchaseUseCase.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class AcknowledgePurchaseUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.AcknowledgePurchaseUseCaseParams>;
            public getInitiationSource(): com.revenuecat.purchases.PostReceiptInitiationSource;
            public getPurchaseToken(): string;
            public getAppInBackground(): boolean;
            public constructor(purchaseToken: string, initiationSource: com.revenuecat.purchases.PostReceiptInitiationSource, appInBackground: boolean);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export abstract class BillingClientUseCase<T> extends java.lang.Object {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.BillingClientUseCase<any>>;
            public getErrorMessage(): string;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public onOk(param0: T): void;
            public run(delayMilliseconds: number): void;
            public withConnectedClient(it: com.android.billingclient.api.BillingClient, $i$a$letBillingClientUseCase$withConnectedClient$2: any): void;
            public getExecuteRequestOnUIThread(): any;
            public getBackoffForNetworkErrors(): boolean;
            public executeAsync(): void;
            public processResult(billingResult: com.android.billingclient.api.BillingResult, response: T, onSuccess: any, onError: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class ConsumePurchaseUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<string> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.ConsumePurchaseUseCase>;
            public getErrorMessage(): string;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.ConsumePurchaseUseCaseParams, onReceive: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public getOnError(): any;
            public onOk(param0: any): void;
            public onOk(received: string): void;
            public getOnReceive(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public getWithConnectedClient(): any;
            public getBackoffForNetworkErrors(): boolean;
            public executeAsync(): void;
          }
          export module ConsumePurchaseUseCase {
            export class WhenMappings {
              public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.ConsumePurchaseUseCase.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class ConsumePurchaseUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.ConsumePurchaseUseCaseParams>;
            public getInitiationSource(): com.revenuecat.purchases.PostReceiptInitiationSource;
            public getPurchaseToken(): string;
            public getAppInBackground(): boolean;
            public constructor(purchaseToken: string, initiationSource: com.revenuecat.purchases.PostReceiptInitiationSource, appInBackground: boolean);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class GetBillingConfigUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<com.android.billingclient.api.BillingConfig> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.GetBillingConfigUseCase>;
            public getDeviceCache(): com.revenuecat.purchases.common.caching.DeviceCache;
            public getErrorMessage(): string;
            public onOk(received: com.android.billingclient.api.BillingConfig): void;
            public getOnError(): any;
            public onOk(param0: any): void;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public getWithConnectedClient(): any;
            public getOnReceive(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.GetBillingConfigUseCaseParams, deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, onReceive: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public executeAsync(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class GetBillingConfigUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.GetBillingConfigUseCaseParams>;
            public equals(other: any): boolean;
            public constructor(appInBackground: boolean);
            public copy(appInBackground: boolean): com.revenuecat.purchases.google.usecase.GetBillingConfigUseCaseParams;
            public getAppInBackground(): boolean;
            public hashCode(): number;
            public component1(): boolean;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryProductDetailsUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<java.util.List<any>> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryProductDetailsUseCase>;
            public getErrorMessage(): string;
            public getOnError(): any;
            public onOk(param0: any): void;
            public getOnReceive(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public onOk(it: java.util.List<com.android.billingclient.api.ProductDetails>): void;
            public getWithConnectedClient(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.QueryProductDetailsUseCaseParams, onReceive: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public executeAsync(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryProductDetailsUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryProductDetailsUseCaseParams>;
            public component5(): boolean;
            public equals(other: any): boolean;
            public getDateProvider(): com.revenuecat.purchases.common.DateProvider;
            public copy(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, productIds: java.util.Set<string>, productType: com.revenuecat.purchases.ProductType, appInBackground: boolean): com.revenuecat.purchases.google.usecase.QueryProductDetailsUseCaseParams;
            public component2(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
            public getAppInBackground(): boolean;
            public hashCode(): number;
            public component3(): java.util.Set<string>;
            public getProductIds(): java.util.Set<string>;
            public toString(): string;
            public constructor(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, productIds: java.util.Set<string>, productType: com.revenuecat.purchases.ProductType, appInBackground: boolean);
            public component4(): com.revenuecat.purchases.ProductType;
            public getProductType(): com.revenuecat.purchases.ProductType;
            public component1(): com.revenuecat.purchases.common.DateProvider;
            public getDiagnosticsTrackerIfEnabled(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryPurchaseHistoryUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<java.util.List<any>> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryPurchaseHistoryUseCase>;
            public getErrorMessage(): string;
            public getOnError(): any;
            public onOk(param0: any): void;
            public onOk(it: java.util.List<any>): void;
            public getOnReceive(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public getWithConnectedClient(): any;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.QueryPurchaseHistoryUseCaseParams, onReceive: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public executeAsync(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryPurchaseHistoryUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryPurchaseHistoryUseCaseParams>;
            public component4(): boolean;
            public component3(): string;
            public equals(other: any): boolean;
            public getDateProvider(): com.revenuecat.purchases.common.DateProvider;
            public constructor(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, productType: string, appInBackground: boolean);
            public getProductType(): string;
            public component2(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
            public getAppInBackground(): boolean;
            public hashCode(): number;
            public toString(): string;
            public component1(): com.revenuecat.purchases.common.DateProvider;
            public getDiagnosticsTrackerIfEnabled(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
            public copy(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, productType: string, appInBackground: boolean): com.revenuecat.purchases.google.usecase.QueryPurchaseHistoryUseCaseParams;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryPurchasesByTypeUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<java.util.Map<string, any>> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryPurchasesByTypeUseCase>;
            public getErrorMessage(): string;
            public getOnError(): any;
            public getOnSuccess(): any;
            public onOk(param0: any): void;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.QueryPurchasesByTypeUseCaseParams, onSuccess: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public onOk(received: java.util.Map<string, com.revenuecat.purchases.models.StoreTransaction>): void;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public getWithConnectedClient(): any;
            public executeAsync(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryPurchasesByTypeUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryPurchasesByTypeUseCaseParams>;
            public component3(): boolean;
            public equals(other: any): boolean;
            public getDateProvider(): com.revenuecat.purchases.common.DateProvider;
            public getProductType(): string;
            public component2(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
            public getAppInBackground(): boolean;
            public hashCode(): number;
            public constructor(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, appInBackground: boolean, productType: string);
            public toString(): string;
            public component4(): string;
            public copy(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, appInBackground: boolean, productType: string): com.revenuecat.purchases.google.usecase.QueryPurchasesByTypeUseCaseParams;
            public component1(): com.revenuecat.purchases.common.DateProvider;
            public getDiagnosticsTrackerIfEnabled(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryPurchasesUseCase extends com.revenuecat.purchases.google.usecase.BillingClientUseCase<java.util.Map<string, any>> {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryPurchasesUseCase>;
            public getErrorMessage(): string;
            public getOnError(): any;
            public getOnSuccess(): any;
            public onOk(param0: any): void;
            public onOk(received: java.util.Map<string, com.revenuecat.purchases.models.StoreTransaction>): void;
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.UseCaseParams, onError: any, executeRequestOnUIThread: any);
            public constructor(useCaseParams: com.revenuecat.purchases.google.usecase.QueryPurchasesUseCaseParams, onSuccess: any, onError: any, withConnectedClient: any, executeRequestOnUIThread: any);
            public getWithConnectedClient(): any;
            public executeAsync(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class QueryPurchasesUseCaseParams extends com.revenuecat.purchases.google.usecase.UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.QueryPurchasesUseCaseParams>;
            public component3(): boolean;
            public equals(other: any): boolean;
            public getDateProvider(): com.revenuecat.purchases.common.DateProvider;
            public copy(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, appInBackground: boolean): com.revenuecat.purchases.google.usecase.QueryPurchasesUseCaseParams;
            public component2(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
            public getAppInBackground(): boolean;
            public hashCode(): number;
            public constructor(dateProvider: com.revenuecat.purchases.common.DateProvider, diagnosticsTrackerIfEnabled: com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker, appInBackground: boolean);
            public component1(): com.revenuecat.purchases.common.DateProvider;
            public getDiagnosticsTrackerIfEnabled(): com.revenuecat.purchases.common.diagnostics.DiagnosticsTracker;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module google {
        export module usecase {
          export class UseCaseParams {
            public static class: java.lang.Class<com.revenuecat.purchases.google.usecase.UseCaseParams>;
            /**
             * Constructs a new instance of the com.revenuecat.purchases.google.usecase.UseCaseParams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getAppInBackground(): boolean });
            public constructor();
            public getAppInBackground(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module identity {
        export class IdentityManager {
          public static class: java.lang.Class<com.revenuecat.purchases.identity.IdentityManager>;
          public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache, subscriberAttributesCache: com.revenuecat.purchases.subscriberattributes.caching.SubscriberAttributesCache, subscriberAttributesManager: com.revenuecat.purchases.subscriberattributes.SubscriberAttributesManager, offeringsCache: com.revenuecat.purchases.common.offerings.OfferingsCache, backend: com.revenuecat.purchases.common.Backend, offlineEntitlementsManager: com.revenuecat.purchases.common.offlineentitlements.OfflineEntitlementsManager, dispatcher: com.revenuecat.purchases.common.Dispatcher);
          public getCurrentAppUserID(): string;
          public configure(it: string): void;
          public switchUser(newAppUserID: string): void;
          public currentUserIsAnonymous(): boolean;
          public logIn(it: string, oldAppUserID: any, thisTemp: any): void;
          public logOut(completion: any): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class Callback<T> extends java.lang.Object {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.Callback<any>>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceived(param0: T): void });
          public constructor();
          public onReceived(param0: T): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class GetAmazonLWAConsentStatusCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.GetAmazonLWAConsentStatusCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.GetAmazonLWAConsentStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: com.revenuecat.purchases.AmazonLWAConsentStatus): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
          public onSuccess(param0: com.revenuecat.purchases.AmazonLWAConsentStatus): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class GetCustomerCenterConfigCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.GetCustomerCenterConfigCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.GetCustomerCenterConfigCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: com.revenuecat.purchases.customercenter.CustomerCenterConfigData): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
          public onSuccess(param0: com.revenuecat.purchases.customercenter.CustomerCenterConfigData): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class GetStoreProductsCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.GetStoreProductsCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.GetStoreProductsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceived(param0: java.util.List<com.revenuecat.purchases.models.StoreProduct>): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onReceived(param0: java.util.List<com.revenuecat.purchases.models.StoreProduct>): void;
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class LogInCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.LogInCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.LogInCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceived(param0: com.revenuecat.purchases.CustomerInfo, param1: boolean): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onReceived(param0: com.revenuecat.purchases.CustomerInfo, param1: boolean): void;
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class ProductChangeCallback extends com.revenuecat.purchases.interfaces.PurchaseErrorCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.ProductChangeCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.ProductChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCompleted(param0: com.revenuecat.purchases.models.StoreTransaction, param1: com.revenuecat.purchases.CustomerInfo): void; onError(param0: com.revenuecat.purchases.PurchasesError, param1: boolean): void });
          public constructor();
          public onCompleted(param0: com.revenuecat.purchases.models.StoreTransaction, param1: com.revenuecat.purchases.CustomerInfo): void;
          public onError(param0: com.revenuecat.purchases.PurchasesError, param1: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class PurchaseCallback extends com.revenuecat.purchases.interfaces.PurchaseErrorCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.PurchaseCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.PurchaseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCompleted(param0: com.revenuecat.purchases.models.StoreTransaction, param1: com.revenuecat.purchases.CustomerInfo): void; onError(param0: com.revenuecat.purchases.PurchasesError, param1: boolean): void });
          public constructor();
          public onCompleted(param0: com.revenuecat.purchases.models.StoreTransaction, param1: com.revenuecat.purchases.CustomerInfo): void;
          public onError(param0: com.revenuecat.purchases.PurchasesError, param1: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class PurchaseErrorCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.PurchaseErrorCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.PurchaseErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onError(param0: com.revenuecat.purchases.PurchasesError, param1: boolean): void });
          public constructor();
          public onError(param0: com.revenuecat.purchases.PurchasesError, param1: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class ReceiveCustomerInfoCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.ReceiveCustomerInfoCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceived(param0: com.revenuecat.purchases.CustomerInfo): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
          public onReceived(param0: com.revenuecat.purchases.CustomerInfo): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class ReceiveOfferingsCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.ReceiveOfferingsCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.ReceiveOfferingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceived(param0: com.revenuecat.purchases.Offerings): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
          public onReceived(param0: com.revenuecat.purchases.Offerings): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class StorefrontProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.StorefrontProvider>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.StorefrontProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getStorefront(): string });
          public constructor();
          public getStorefront(): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class SyncAttributesAndOfferingsCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.SyncAttributesAndOfferingsCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.SyncAttributesAndOfferingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: com.revenuecat.purchases.Offerings): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
          public onSuccess(param0: com.revenuecat.purchases.Offerings): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class SyncPurchasesCallback {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.SyncPurchasesCallback>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.SyncPurchasesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: com.revenuecat.purchases.CustomerInfo): void; onError(param0: com.revenuecat.purchases.PurchasesError): void });
          public constructor();
          public onSuccess(param0: com.revenuecat.purchases.CustomerInfo): void;
          public onError(param0: com.revenuecat.purchases.PurchasesError): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module interfaces {
        export class UpdatedCustomerInfoListener {
          public static class: java.lang.Class<com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.interfaces.UpdatedCustomerInfoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReceived(param0: com.revenuecat.purchases.CustomerInfo): void });
          public constructor();
          public onReceived(param0: com.revenuecat.purchases.CustomerInfo): void;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class BillingFeature {
          public static class: java.lang.Class<com.revenuecat.purchases.models.BillingFeature>;
          public static SUBSCRIPTIONS: com.revenuecat.purchases.models.BillingFeature;
          public static SUBSCRIPTIONS_UPDATE: com.revenuecat.purchases.models.BillingFeature;
          public static PRICE_CHANGE_CONFIRMATION: com.revenuecat.purchases.models.BillingFeature;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.BillingFeature>;
          public getPlayBillingClientName(): string;
          public static valueOf(value: string): com.revenuecat.purchases.models.BillingFeature;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class ComparableData {
          public static class: java.lang.Class<com.revenuecat.purchases.models.ComparableData>;
          public component5(): string;
          public getType(): com.revenuecat.purchases.ProductType;
          public component2(): java.util.List<string>;
          public component11(): com.revenuecat.purchases.models.PurchaseType;
          public isAutoRenewing(): java.lang.Boolean;
          public component13(): string;
          public getMarketplace(): string;
          public getPurchaseToken(): string;
          public copy(orderId: string, productIds: java.util.List<string>, type: com.revenuecat.purchases.ProductType, purchaseTime: number, purchaseToken: string, purchaseState: com.revenuecat.purchases.models.PurchaseState, isAutoRenewing: java.lang.Boolean, signature: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, storeUserID: string, purchaseType: com.revenuecat.purchases.models.PurchaseType, marketplace: string, subscriptionOptionId: string): com.revenuecat.purchases.models.ComparableData;
          public getStoreUserID(): string;
          public getPurchaseState(): com.revenuecat.purchases.models.PurchaseState;
          public toString(): string;
          public getSignature(): string;
          public component8(): string;
          public component4(): number;
          public component6(): com.revenuecat.purchases.models.PurchaseState;
          public component9(): com.revenuecat.purchases.PresentedOfferingContext;
          public getPurchaseTime(): number;
          public component12(): string;
          public getSubscriptionOptionId(): string;
          public hashCode(): number;
          public getProductIds(): java.util.List<string>;
          public getOrderId(): string;
          public constructor(storeTransaction: com.revenuecat.purchases.models.StoreTransaction);
          public component7(): java.lang.Boolean;
          public component3(): com.revenuecat.purchases.ProductType;
          public equals(other: any): boolean;
          public getPurchaseType(): com.revenuecat.purchases.models.PurchaseType;
          public constructor(orderId: string, productIds: java.util.List<string>, type: com.revenuecat.purchases.ProductType, purchaseTime: number, purchaseToken: string, purchaseState: com.revenuecat.purchases.models.PurchaseState, isAutoRenewing: java.lang.Boolean, signature: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, storeUserID: string, purchaseType: com.revenuecat.purchases.models.PurchaseType, marketplace: string, subscriptionOptionId: string);
          public component10(): string;
          public component1(): string;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class GoogleInstallmentsInfo extends com.revenuecat.purchases.models.InstallmentsInfo {
          public static class: java.lang.Class<com.revenuecat.purchases.models.GoogleInstallmentsInfo>;
          public constructor(commitmentPaymentsCount: number, renewalCommitmentPaymentsCount: number);
          public toString(): string;
          public component1(): number;
          public equals(other: any): boolean;
          public getRenewalCommitmentPaymentsCount(): number;
          public component2(): number;
          public copy(commitmentPaymentsCount: number, renewalCommitmentPaymentsCount: number): com.revenuecat.purchases.models.GoogleInstallmentsInfo;
          public getCommitmentPaymentsCount(): number;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export abstract class GooglePurchasingData extends com.revenuecat.purchases.models.PurchasingData {
          public static class: java.lang.Class<com.revenuecat.purchases.models.GooglePurchasingData>;
          public getProductId(): string;
          public getProductType(): com.revenuecat.purchases.ProductType;
        }
        export module GooglePurchasingData {
          export class InAppProduct extends com.revenuecat.purchases.models.GooglePurchasingData {
            public static class: java.lang.Class<com.revenuecat.purchases.models.GooglePurchasingData.InAppProduct>;
            public constructor(productId: string, productDetails: com.android.billingclient.api.ProductDetails);
            public equals(other: any): boolean;
            public getProductId(): string;
            public component1(): string;
            public hashCode(): number;
            public getProductDetails(): com.android.billingclient.api.ProductDetails;
            public copy(productId: string, productDetails: com.android.billingclient.api.ProductDetails): com.revenuecat.purchases.models.GooglePurchasingData.InAppProduct;
            public getProductType(): com.revenuecat.purchases.ProductType;
            public component2(): com.android.billingclient.api.ProductDetails;
            public toString(): string;
          }
          export class Subscription extends com.revenuecat.purchases.models.GooglePurchasingData {
            public static class: java.lang.Class<com.revenuecat.purchases.models.GooglePurchasingData.Subscription>;
            public equals(other: any): boolean;
            public getOptionId(): string;
            public component3(): com.android.billingclient.api.ProductDetails;
            public component1(): string;
            public hashCode(): number;
            public copy(productId: string, optionId: string, productDetails: com.android.billingclient.api.ProductDetails, token: string): com.revenuecat.purchases.models.GooglePurchasingData.Subscription;
            public getToken(): string;
            public toString(): string;
            public component4(): string;
            public getProductId(): string;
            public component2(): string;
            public constructor(productId: string, optionId: string, productDetails: com.android.billingclient.api.ProductDetails, token: string);
            public getProductDetails(): com.android.billingclient.api.ProductDetails;
            public getProductType(): com.revenuecat.purchases.ProductType;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class GoogleReplacementMode extends com.revenuecat.purchases.ReplacementMode {
          public static class: java.lang.Class<com.revenuecat.purchases.models.GoogleReplacementMode>;
          public static WITHOUT_PRORATION: com.revenuecat.purchases.models.GoogleReplacementMode;
          public static WITH_TIME_PRORATION: com.revenuecat.purchases.models.GoogleReplacementMode;
          public static CHARGE_FULL_PRICE: com.revenuecat.purchases.models.GoogleReplacementMode;
          public static CHARGE_PRORATED_PRICE: com.revenuecat.purchases.models.GoogleReplacementMode;
          public static DEFERRED: com.revenuecat.purchases.models.GoogleReplacementMode;
          public static valueOf(value: string): com.revenuecat.purchases.models.GoogleReplacementMode;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.GoogleReplacementMode>;
          public getName(): string;
          public describeContents(): number;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public getPlayBillingClientMode(): number;
        }
        export module GoogleReplacementMode {
          export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.GoogleReplacementMode> {
            public static class: java.lang.Class<com.revenuecat.purchases.models.GoogleReplacementMode.CREATOR>;
            public createFromParcel(it: globalAndroid.os.Parcel): com.revenuecat.purchases.models.GoogleReplacementMode;
            public fromPlayBillingClientMode(it: java.lang.Integer): com.revenuecat.purchases.models.GoogleReplacementMode;
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.models.GoogleReplacementMode>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class GoogleStoreProduct extends com.revenuecat.purchases.models.StoreProduct {
          public static class: java.lang.Class<com.revenuecat.purchases.models.GoogleStoreProduct>;
          public getTitle(): string;
          public getId(): string;
          public component2(): string;
          public component5(): string;
          public constructor(productId: string, basePlanId: string, type: com.revenuecat.purchases.ProductType, price: com.revenuecat.purchases.models.Price, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, productDetails: com.android.billingclient.api.ProductDetails, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
          public formattedPricePerMonth(param0: java.util.Locale): string;
          public copyWithPresentedOfferingContext(param0: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public getPeriod(): com.revenuecat.purchases.models.Period;
          public pricePerYear(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getDefaultOption(): com.revenuecat.purchases.models.SubscriptionOption;
          public component12(): string;
          public pricePerMonth(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public component3(): com.revenuecat.purchases.ProductType;
          /** @deprecated */
          public constructor(productId: string, basePlanId: string, type: com.revenuecat.purchases.ProductType, price: com.revenuecat.purchases.models.Price, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, productDetails: com.android.billingclient.api.ProductDetails, presentedOfferingIdentifier: string);
          public equals(other: any): boolean;
          public getSubscriptionOptions(): com.revenuecat.purchases.models.SubscriptionOptions;
          /** @deprecated */
          public constructor(productId: string, basePlanId: string, type: com.revenuecat.purchases.ProductType, price: com.revenuecat.purchases.models.Price, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, productDetails: com.android.billingclient.api.ProductDetails);
          public copy(productId: string, basePlanId: string, type: com.revenuecat.purchases.ProductType, price: com.revenuecat.purchases.models.Price, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, productDetails: com.android.billingclient.api.ProductDetails, presentedOfferingIdentifier: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.GoogleStoreProduct;
          /** @deprecated */
          public getSku(): string;
          public component1(): string;
          public formattedPricePerMonth(locale: java.util.Locale): string;
          public getDescription(): string;
          /** @deprecated */
          public constructor(productId: string, basePlanId: string, type: com.revenuecat.purchases.ProductType, price: com.revenuecat.purchases.models.Price, name: string, title: string, description: string, period: com.revenuecat.purchases.models.Period, subscriptionOptions: com.revenuecat.purchases.models.SubscriptionOptions, defaultOption: com.revenuecat.purchases.models.SubscriptionOption, productDetails: com.android.billingclient.api.ProductDetails, presentedOfferingIdentifier: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
          public pricePerWeek(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public component13(): com.revenuecat.purchases.PresentedOfferingContext;
          public getType(): com.revenuecat.purchases.ProductType;
          /** @deprecated */
          public copyWithOfferingId(param0: string): com.revenuecat.purchases.models.StoreProduct;
          public component4(): com.revenuecat.purchases.models.Price;
          public getBasePlanId(): string;
          public getProductDetails(): com.android.billingclient.api.ProductDetails;
          /** @deprecated */
          public copyWithOfferingId(thisTemp: string): com.revenuecat.purchases.models.StoreProduct;
          public toString(): string;
          public pricePerMonth(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public hashCode(): number;
          public copyWithPresentedOfferingContext(googleOption: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public pricePerYear(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          /** @deprecated */
          public constructor(it: string, thisTemp: string, productId: com.revenuecat.purchases.ProductType, basePlanId: com.revenuecat.purchases.models.Price, type: string, price: string, title: com.revenuecat.purchases.models.Period, description: com.revenuecat.purchases.models.SubscriptionOptions, period: com.revenuecat.purchases.models.SubscriptionOption, subscriptionOptions: com.android.billingclient.api.ProductDetails, defaultOption: string);
          public component9(): com.revenuecat.purchases.models.SubscriptionOptions;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          public component7(): string;
          public component11(): com.android.billingclient.api.ProductDetails;
          public getPrice(): com.revenuecat.purchases.models.Price;
          public getProductId(): string;
          public component10(): com.revenuecat.purchases.models.SubscriptionOption;
          public getName(): string;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public component6(): string;
          public pricePerWeek(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public component8(): com.revenuecat.purchases.models.Period;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class GoogleSubscriptionOption extends com.revenuecat.purchases.models.SubscriptionOption {
          public static class: java.lang.Class<com.revenuecat.purchases.models.GoogleSubscriptionOption>;
          public getOfferToken(): string;
          public getId(): string;
          public getPricingPhases(): java.util.List<com.revenuecat.purchases.models.PricingPhase>;
          public component2(): string;
          public constructor(subscriptionOption: com.revenuecat.purchases.models.GoogleSubscriptionOption, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
          public getBasePlanId(): string;
          public getProductDetails(): com.android.billingclient.api.ProductDetails;
          public toString(): string;
          public getTags(): java.util.List<string>;
          public hashCode(): number;
          /** @deprecated */
          public constructor(productId: string, basePlanId: string, offerId: string, pricingPhases: java.util.List<com.revenuecat.purchases.models.PricingPhase>, tags: java.util.List<string>, productDetails: com.android.billingclient.api.ProductDetails, offerToken: string, presentedOfferingId: string);
          public getBillingPeriod(): com.revenuecat.purchases.models.Period;
          public getIntroPhase(): com.revenuecat.purchases.models.PricingPhase;
          public component4(): java.util.List<com.revenuecat.purchases.models.PricingPhase>;
          public component8(): com.revenuecat.purchases.PresentedOfferingContext;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public getOfferId(): string;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          public getFullPricePhase(): com.revenuecat.purchases.models.PricingPhase;
          public component5(): java.util.List<string>;
          public component7(): string;
          public equals(other: any): boolean;
          public component3(): string;
          public isPrepaid(): boolean;
          public copy(productId: string, basePlanId: string, offerId: string, pricingPhases: java.util.List<com.revenuecat.purchases.models.PricingPhase>, tags: java.util.List<string>, productDetails: com.android.billingclient.api.ProductDetails, offerToken: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, installmentsInfo: com.revenuecat.purchases.models.GoogleInstallmentsInfo): com.revenuecat.purchases.models.GoogleSubscriptionOption;
          public getFreePhase(): com.revenuecat.purchases.models.PricingPhase;
          public getProductId(): string;
          public isBasePlan(): boolean;
          public component1(): string;
          public getInstallmentsInfo(): com.revenuecat.purchases.models.InstallmentsInfo;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public component6(): com.android.billingclient.api.ProductDetails;
          public component9(): com.revenuecat.purchases.models.GoogleInstallmentsInfo;
          public constructor(productId: string, basePlanId: string, offerId: string, pricingPhases: java.util.List<com.revenuecat.purchases.models.PricingPhase>, tags: java.util.List<string>, productDetails: com.android.billingclient.api.ProductDetails, offerToken: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext);
          public constructor(productId: string, basePlanId: string, offerId: string, pricingPhases: java.util.List<com.revenuecat.purchases.models.PricingPhase>, tags: java.util.List<string>, productDetails: com.android.billingclient.api.ProductDetails, offerToken: string, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, installmentsInfo: com.revenuecat.purchases.models.GoogleInstallmentsInfo);
          public getInstallmentsInfo(): com.revenuecat.purchases.models.GoogleInstallmentsInfo;
          public constructor(productId: string, basePlanId: string, offerId: string, pricingPhases: java.util.List<com.revenuecat.purchases.models.PricingPhase>, tags: java.util.List<string>, productDetails: com.android.billingclient.api.ProductDetails, offerToken: string);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class InAppMessageType {
          public static class: java.lang.Class<com.revenuecat.purchases.models.InAppMessageType>;
          public static BILLING_ISSUES: com.revenuecat.purchases.models.InAppMessageType;
          public static valueOf(value: string): com.revenuecat.purchases.models.InAppMessageType;
          public getInAppMessageCategoryId$purchases_defaultsRelease(): number;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.InAppMessageType>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class InstallmentsInfo {
          public static class: java.lang.Class<com.revenuecat.purchases.models.InstallmentsInfo>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.models.InstallmentsInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCommitmentPaymentsCount(): number; getRenewalCommitmentPaymentsCount(): number });
          public constructor();
          public getRenewalCommitmentPaymentsCount(): number;
          public getCommitmentPaymentsCount(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class OfferPaymentMode {
          public static class: java.lang.Class<com.revenuecat.purchases.models.OfferPaymentMode>;
          public static FREE_TRIAL: com.revenuecat.purchases.models.OfferPaymentMode;
          public static SINGLE_PAYMENT: com.revenuecat.purchases.models.OfferPaymentMode;
          public static DISCOUNTED_RECURRING_PAYMENT: com.revenuecat.purchases.models.OfferPaymentMode;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.OfferPaymentMode>;
          public static valueOf(value: string): com.revenuecat.purchases.models.OfferPaymentMode;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class Period {
          public static class: java.lang.Class<com.revenuecat.purchases.models.Period>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.Period>;
          public component2(): com.revenuecat.purchases.models.Period.Unit;
          public constructor(value: number, unit: com.revenuecat.purchases.models.Period.Unit, iso8601: string);
          public equals(other: any): boolean;
          public describeContents(): number;
          public getValueInMonths(): number;
          public component3(): string;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public getIso8601(): string;
          public toString(): string;
          public getUnit(): com.revenuecat.purchases.models.Period.Unit;
          public copy(value: number, unit: com.revenuecat.purchases.models.Period.Unit, iso8601: string): com.revenuecat.purchases.models.Period;
          public getValue(): number;
          public component1(): number;
          public getValueInYears$purchases_defaultsRelease(): number;
          public getValueInWeeks$purchases_defaultsRelease(): number;
          public hashCode(): number;
        }
        export module Period {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.Period> {
            public static class: java.lang.Class<com.revenuecat.purchases.models.Period.Creator>;
            public constructor();
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.models.Period>;
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.models.Period;
          }
          export class Factory {
            public static class: java.lang.Class<com.revenuecat.purchases.models.Period.Factory>;
            public create(thisTemp: string): com.revenuecat.purchases.models.Period;
          }
          export class Unit {
            public static class: java.lang.Class<com.revenuecat.purchases.models.Period.Unit>;
            public static DAY: com.revenuecat.purchases.models.Period.Unit;
            public static WEEK: com.revenuecat.purchases.models.Period.Unit;
            public static MONTH: com.revenuecat.purchases.models.Period.Unit;
            public static YEAR: com.revenuecat.purchases.models.Period.Unit;
            public static UNKNOWN: com.revenuecat.purchases.models.Period.Unit;
            public static values(): androidNative.Array<com.revenuecat.purchases.models.Period.Unit>;
            public static valueOf(value: string): com.revenuecat.purchases.models.Period.Unit;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.models.Period.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class PeriodConstants {
          public static class: java.lang.Class<com.revenuecat.purchases.models.PeriodConstants>;
          public static INSTANCE: com.revenuecat.purchases.models.PeriodConstants;
          public static DAYS_PER_WEEK: number = 7.0;
          public static DAYS_PER_MONTH: number = 30.0;
          public static DAYS_PER_YEAR: number = 365.0;
          public static WEEKS_PER_YEAR: number = 52.142857142857146;
          public static MONTHS_PER_YEAR: number = 12.0;
          public static WEEKS_PER_MONTH: number = 4.345238095238096;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export module PeriodKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.models.PeriodKt.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class Price {
          public static class: java.lang.Class<com.revenuecat.purchases.models.Price>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.Price>;
          public copy(formatted: string, amountMicros: number, currencyCode: string): com.revenuecat.purchases.models.Price;
          public equals(other: any): boolean;
          public describeContents(): number;
          public component3(): string;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public toString(): string;
          public component1(): string;
          public constructor(formatted: string, amountMicros: number, currencyCode: string);
          public getAmountMicros(): number;
          public component2(): number;
          public hashCode(): number;
          public getFormatted(): string;
          public getCurrencyCode(): string;
        }
        export module Price {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.Price> {
            public static class: java.lang.Class<com.revenuecat.purchases.models.Price.Creator>;
            public constructor();
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.models.Price;
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.models.Price>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class PricingPhase {
          public static class: java.lang.Class<com.revenuecat.purchases.models.PricingPhase>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.PricingPhase>;
          public component2(): com.revenuecat.purchases.models.RecurrenceMode;
          public component3(): java.lang.Integer;
          public getOfferPaymentMode(): com.revenuecat.purchases.models.OfferPaymentMode;
          public component4(): com.revenuecat.purchases.models.Price;
          public equals(other: any): boolean;
          public describeContents(): number;
          public constructor(billingPeriod: com.revenuecat.purchases.models.Period, recurrenceMode: com.revenuecat.purchases.models.RecurrenceMode, billingCycleCount: java.lang.Integer, price: com.revenuecat.purchases.models.Price);
          public getRecurrenceMode(): com.revenuecat.purchases.models.RecurrenceMode;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public copy(billingPeriod: com.revenuecat.purchases.models.Period, recurrenceMode: com.revenuecat.purchases.models.RecurrenceMode, billingCycleCount: java.lang.Integer, price: com.revenuecat.purchases.models.Price): com.revenuecat.purchases.models.PricingPhase;
          public getPrice(): com.revenuecat.purchases.models.Price;
          public component1(): com.revenuecat.purchases.models.Period;
          public pricePerWeek(): com.revenuecat.purchases.models.Price;
          /** @deprecated */
          public formattedPriceInMonths(locale: java.util.Locale): string;
          public toString(): string;
          public pricePerMonth(): com.revenuecat.purchases.models.Price;
          public pricePerMonth(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getBillingCycleCount(): java.lang.Integer;
          public pricePerWeek(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public hashCode(): number;
          public getBillingPeriod(): com.revenuecat.purchases.models.Period;
          public pricePerYear(): com.revenuecat.purchases.models.Price;
          /** @deprecated */
          public formattedPriceInMonths(): string;
          public pricePerYear(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
        }
        export module PricingPhase {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.PricingPhase> {
            public static class: java.lang.Class<com.revenuecat.purchases.models.PricingPhase.Creator>;
            public constructor();
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.models.PricingPhase;
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.models.PricingPhase>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class PurchaseState {
          public static class: java.lang.Class<com.revenuecat.purchases.models.PurchaseState>;
          public static UNSPECIFIED_STATE: com.revenuecat.purchases.models.PurchaseState;
          public static PURCHASED: com.revenuecat.purchases.models.PurchaseState;
          public static PENDING: com.revenuecat.purchases.models.PurchaseState;
          public static valueOf(value: string): com.revenuecat.purchases.models.PurchaseState;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.PurchaseState>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class PurchaseType {
          public static class: java.lang.Class<com.revenuecat.purchases.models.PurchaseType>;
          public static GOOGLE_PURCHASE: com.revenuecat.purchases.models.PurchaseType;
          public static GOOGLE_RESTORED_PURCHASE: com.revenuecat.purchases.models.PurchaseType;
          public static AMAZON_PURCHASE: com.revenuecat.purchases.models.PurchaseType;
          public static valueOf(value: string): com.revenuecat.purchases.models.PurchaseType;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.PurchaseType>;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class PurchasingData {
          public static class: java.lang.Class<com.revenuecat.purchases.models.PurchasingData>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.models.PurchasingData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getProductId(): string; getProductType(): com.revenuecat.purchases.ProductType });
          public constructor();
          public getProductId(): string;
          public getProductType(): com.revenuecat.purchases.ProductType;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class RawDataContainer<DataType> extends java.lang.Object {
          public static class: java.lang.Class<com.revenuecat.purchases.models.RawDataContainer<any>>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.models.RawDataContainer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getRawData(): DataType });
          public constructor();
          public getRawData(): DataType;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class RecurrenceMode {
          public static class: java.lang.Class<com.revenuecat.purchases.models.RecurrenceMode>;
          public static INFINITE_RECURRING: com.revenuecat.purchases.models.RecurrenceMode;
          public static FINITE_RECURRING: com.revenuecat.purchases.models.RecurrenceMode;
          public static NON_RECURRING: com.revenuecat.purchases.models.RecurrenceMode;
          public static UNKNOWN: com.revenuecat.purchases.models.RecurrenceMode;
          public static valueOf(value: string): com.revenuecat.purchases.models.RecurrenceMode;
          public static values(): androidNative.Array<com.revenuecat.purchases.models.RecurrenceMode>;
          public getIdentifier(): java.lang.Integer;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class StoreProduct {
          public static class: java.lang.Class<com.revenuecat.purchases.models.StoreProduct>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.models.StoreProduct interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getId(): string;
            getType(): com.revenuecat.purchases.ProductType;
            getPrice(): com.revenuecat.purchases.models.Price;
            getName(): string;
            getTitle(): string;
            getDescription(): string;
            getPeriod(): com.revenuecat.purchases.models.Period;
            getSubscriptionOptions(): com.revenuecat.purchases.models.SubscriptionOptions;
            getDefaultOption(): com.revenuecat.purchases.models.SubscriptionOption;
            getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
            getPresentedOfferingIdentifier(): string;
            getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
            getSku(): string;
            copyWithOfferingId(param0: string): com.revenuecat.purchases.models.StoreProduct;
            copyWithPresentedOfferingContext(param0: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
            pricePerWeek(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
            pricePerMonth(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
            pricePerYear(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
            formattedPricePerMonth(param0: java.util.Locale): string;
          });
          public constructor();
          public getTitle(): string;
          public getId(): string;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public getType(): com.revenuecat.purchases.ProductType;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          /** @deprecated */
          public copyWithOfferingId(param0: string): com.revenuecat.purchases.models.StoreProduct;
          public formattedPricePerMonth(param0: java.util.Locale): string;
          public copyWithPresentedOfferingContext(param0: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public getPeriod(): com.revenuecat.purchases.models.Period;
          public getPrice(): com.revenuecat.purchases.models.Price;
          public getSubscriptionOptions(): com.revenuecat.purchases.models.SubscriptionOptions;
          /** @deprecated */
          public getSku(): string;
          public pricePerYear(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getName(): string;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public getDefaultOption(): com.revenuecat.purchases.models.SubscriptionOption;
          public pricePerMonth(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getDescription(): string;
          public pricePerWeek(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
        }
        export module StoreProduct {
          export class DefaultImpls {
            public static class: java.lang.Class<com.revenuecat.purchases.models.StoreProduct.DefaultImpls>;
            public static formattedPricePerMonth($this: com.revenuecat.purchases.models.StoreProduct, locale: java.util.Locale): string;
            public static pricePerWeek($i$a$letStoreProduct$pricePerWeek$1: com.revenuecat.purchases.models.StoreProduct, it: java.util.Locale): com.revenuecat.purchases.models.Price;
            public static pricePerMonth($i$a$letStoreProduct$pricePerMonth$1: com.revenuecat.purchases.models.StoreProduct, it: java.util.Locale): com.revenuecat.purchases.models.Price;
            public static pricePerYear($i$a$letStoreProduct$pricePerYear$1: com.revenuecat.purchases.models.StoreProduct, it: java.util.Locale): com.revenuecat.purchases.models.Price;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class StoreTransaction {
          public static class: java.lang.Class<com.revenuecat.purchases.models.StoreTransaction>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.StoreTransaction>;
          public component15(): com.revenuecat.purchases.ReplacementMode;
          public component5(): string;
          public getType(): com.revenuecat.purchases.ProductType;
          public component2(): java.util.List<string>;
          public isAutoRenewing(): java.lang.Boolean;
          public component13(): string;
          public getMarketplace(): string;
          public getPurchaseToken(): string;
          /** @deprecated */
          public getSkus(): java.util.List<string>;
          public getStoreUserID(): string;
          public component12(): com.revenuecat.purchases.models.PurchaseType;
          public getPurchaseState(): com.revenuecat.purchases.models.PurchaseState;
          public toString(): string;
          public getSignature(): string;
          public component8(): string;
          public component4(): number;
          public component6(): com.revenuecat.purchases.models.PurchaseState;
          public getPurchaseTime(): number;
          public constructor(orderId: string, productIds: java.util.List<string>, type: com.revenuecat.purchases.ProductType, purchaseTime: number, purchaseToken: string, purchaseState: com.revenuecat.purchases.models.PurchaseState, isAutoRenewing: java.lang.Boolean, signature: string, originalJson: org.json.JSONObject, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, storeUserID: string, purchaseType: com.revenuecat.purchases.models.PurchaseType, marketplace: string, subscriptionOptionId: string, replacementMode: com.revenuecat.purchases.ReplacementMode);
          public getSubscriptionOptionId(): string;
          public hashCode(): number;
          public copy(orderId: string, productIds: java.util.List<string>, type: com.revenuecat.purchases.ProductType, purchaseTime: number, purchaseToken: string, purchaseState: com.revenuecat.purchases.models.PurchaseState, isAutoRenewing: java.lang.Boolean, signature: string, originalJson: org.json.JSONObject, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, storeUserID: string, purchaseType: com.revenuecat.purchases.models.PurchaseType, marketplace: string, subscriptionOptionId: string, replacementMode: com.revenuecat.purchases.ReplacementMode): com.revenuecat.purchases.models.StoreTransaction;
          public getProductIds(): java.util.List<string>;
          public getOrderId(): string;
          public getOriginalJson(): org.json.JSONObject;
          public component7(): java.lang.Boolean;
          public component3(): com.revenuecat.purchases.ProductType;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public component11(): string;
          public equals(other: any): boolean;
          public describeContents(): number;
          public getPurchaseType(): com.revenuecat.purchases.models.PurchaseType;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public component9(): org.json.JSONObject;
          public component1(): string;
          /** @deprecated */
          public constructor(it: string, thisTemp: java.util.List<string>, orderId: com.revenuecat.purchases.ProductType, productIds: number, type: string, purchaseTime: com.revenuecat.purchases.models.PurchaseState, purchaseToken: java.lang.Boolean, purchaseState: string, isAutoRenewing: org.json.JSONObject, signature: string, originalJson: string, presentedOfferingIdentifier: com.revenuecat.purchases.models.PurchaseType, storeUserID: string, purchaseType: string, marketplace: com.revenuecat.purchases.ReplacementMode);
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public component10(): com.revenuecat.purchases.PresentedOfferingContext;
          public getReplacementMode(): com.revenuecat.purchases.ReplacementMode;
          public component14(): string;
        }
        export module StoreTransaction {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.StoreTransaction> {
            public static class: java.lang.Class<com.revenuecat.purchases.models.StoreTransaction.Creator>;
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.models.StoreTransaction;
            public constructor();
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.models.StoreTransaction>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class SubscriptionOption {
          public static class: java.lang.Class<com.revenuecat.purchases.models.SubscriptionOption>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.models.SubscriptionOption interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getId(): string; getPricingPhases(): java.util.List<com.revenuecat.purchases.models.PricingPhase>; getTags(): java.util.List<string>; getPresentedOfferingIdentifier(): string; getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext; isBasePlan(): boolean; getBillingPeriod(): com.revenuecat.purchases.models.Period; isPrepaid(): boolean; getFullPricePhase(): com.revenuecat.purchases.models.PricingPhase; getFreePhase(): com.revenuecat.purchases.models.PricingPhase; getIntroPhase(): com.revenuecat.purchases.models.PricingPhase; getPurchasingData(): com.revenuecat.purchases.models.PurchasingData; getInstallmentsInfo(): com.revenuecat.purchases.models.InstallmentsInfo });
          public constructor();
          public getId(): string;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public getPricingPhases(): java.util.List<com.revenuecat.purchases.models.PricingPhase>;
          public getFullPricePhase(): com.revenuecat.purchases.models.PricingPhase;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          public isPrepaid(): boolean;
          public getFreePhase(): com.revenuecat.purchases.models.PricingPhase;
          public isBasePlan(): boolean;
          public getInstallmentsInfo(): com.revenuecat.purchases.models.InstallmentsInfo;
          public getTags(): java.util.List<string>;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public getBillingPeriod(): com.revenuecat.purchases.models.Period;
          public getIntroPhase(): com.revenuecat.purchases.models.PricingPhase;
        }
        export module SubscriptionOption {
          export class DefaultImpls {
            public static class: java.lang.Class<com.revenuecat.purchases.models.SubscriptionOption.DefaultImpls>;
            public static isBasePlan($this: com.revenuecat.purchases.models.SubscriptionOption): boolean;
            public static getIntroPhase($i$a$firstOrNullSubscriptionOption$introPhase$1: com.revenuecat.purchases.models.SubscriptionOption): com.revenuecat.purchases.models.PricingPhase;
            public static isPrepaid($this: com.revenuecat.purchases.models.SubscriptionOption): boolean;
            public static getFullPricePhase($this: com.revenuecat.purchases.models.SubscriptionOption): com.revenuecat.purchases.models.PricingPhase;
            public static getBillingPeriod($this: com.revenuecat.purchases.models.SubscriptionOption): com.revenuecat.purchases.models.Period;
            public static getFreePhase($i$a$firstOrNullSubscriptionOption$freePhase$1: com.revenuecat.purchases.models.SubscriptionOption): com.revenuecat.purchases.models.PricingPhase;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class SubscriptionOptions extends java.lang.Object {
          public static class: java.lang.Class<com.revenuecat.purchases.models.SubscriptionOptions>;
          public static RC_IGNORE_OFFER_TAG: string = 'rcignoreoffer';
          public set(index: number, element: com.revenuecat.purchases.models.SubscriptionOption): com.revenuecat.purchases.models.SubscriptionOption;
          public billingPeriodToDays$purchases_defaultsRelease(thisTemp: com.revenuecat.purchases.models.Period): number;
          public isEmpty(): boolean;
          public get(index: number): com.revenuecat.purchases.models.SubscriptionOption;
          public equals(it: any): boolean;
          public removeAll(elements: java.util.Collection<any>): boolean;
          public contains(element: com.revenuecat.purchases.models.SubscriptionOption): boolean;
          public indexOf(element: com.revenuecat.purchases.models.SubscriptionOption): number;
          public getBasePlan(): com.revenuecat.purchases.models.SubscriptionOption;
          public listIterator(): java.util.ListIterator<com.revenuecat.purchases.models.SubscriptionOption>;
          public size(): number;
          public getIntroOffer(): com.revenuecat.purchases.models.SubscriptionOption;
          public addAll(elements: java.util.Collection<any>): boolean;
          public getSize(): number;
          public remove(element: any): boolean;
          public sort(p0: java.util.Comparator<any>): void;
          public containsAll(elements: java.util.Collection<any>): boolean;
          public add(element: com.revenuecat.purchases.models.SubscriptionOption): boolean;
          public indexOf(element: any): number;
          public clear(): void;
          public contains(element: any): boolean;
          public lastIndexOf(element: any): number;
          public withTag(it: string): java.util.List<com.revenuecat.purchases.models.SubscriptionOption>;
          public hashCode(): number;
          public remove(index: number): com.revenuecat.purchases.models.SubscriptionOption;
          public iterator(): java.util.Iterator<com.revenuecat.purchases.models.SubscriptionOption>;
          public toArray(): androidNative.Array<any>;
          public constructor(subscriptionOptions: java.util.List<any>);
          public lastIndexOf(element: com.revenuecat.purchases.models.SubscriptionOption): number;
          public retainAll(elements: java.util.Collection<any>): boolean;
          public listIterator(index: number): java.util.ListIterator<com.revenuecat.purchases.models.SubscriptionOption>;
          public subList(fromIndex: number, toIndex: number): java.util.List<com.revenuecat.purchases.models.SubscriptionOption>;
          public add(index: number, element: com.revenuecat.purchases.models.SubscriptionOption): void;
          public addAll(index: number, elements: java.util.Collection<any>): boolean;
          public getFreeTrial(): com.revenuecat.purchases.models.SubscriptionOption;
          public replaceAll(p0: any /* any*/): void;
          public toArray(array: androidNative.Array<any>): androidNative.Array<any>;
          public getDefaultOffer(): com.revenuecat.purchases.models.SubscriptionOption;
        }
        export module SubscriptionOptions {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.models.SubscriptionOptions.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class TestStoreProduct extends com.revenuecat.purchases.models.StoreProduct {
          public static class: java.lang.Class<com.revenuecat.purchases.models.TestStoreProduct>;
          public getTitle(): string;
          public getId(): string;
          public component2(): string;
          public getType(): com.revenuecat.purchases.ProductType;
          /** @deprecated */
          public copyWithOfferingId(param0: string): com.revenuecat.purchases.models.StoreProduct;
          public formattedPricePerMonth(param0: java.util.Locale): string;
          public copyWithPresentedOfferingContext(param0: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public getPeriod(): com.revenuecat.purchases.models.Period;
          /** @deprecated */
          public constructor(id: string, title: string, description: string, price: com.revenuecat.purchases.models.Price, period: com.revenuecat.purchases.models.Period, freeTrialPeriod: com.revenuecat.purchases.models.Period, introPrice: com.revenuecat.purchases.models.Price);
          public toString(): string;
          public pricePerYear(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public pricePerMonth(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getDefaultOption(): com.revenuecat.purchases.models.SubscriptionOption;
          public component6(): com.revenuecat.purchases.models.Period;
          public getSku(): string;
          public component4(): string;
          public copy(id: string, name: string, title: string, description: string, price: com.revenuecat.purchases.models.Price, period: com.revenuecat.purchases.models.Period, freeTrialPeriod: com.revenuecat.purchases.models.Period, introPrice: com.revenuecat.purchases.models.Price): com.revenuecat.purchases.models.TestStoreProduct;
          public pricePerMonth(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
          public hashCode(): number;
          public pricePerYear(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          public copyWithPresentedOfferingContext(presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext): com.revenuecat.purchases.models.StoreProduct;
          public equals(other: any): boolean;
          public component3(): string;
          public getPrice(): com.revenuecat.purchases.models.Price;
          public getSubscriptionOptions(): com.revenuecat.purchases.models.SubscriptionOptions;
          public constructor(id: string, name: string, title: string, description: string, price: com.revenuecat.purchases.models.Price, period: com.revenuecat.purchases.models.Period, freeTrialPeriod: com.revenuecat.purchases.models.Period, introPrice: com.revenuecat.purchases.models.Price);
          /** @deprecated */
          public getSku(): string;
          public component1(): string;
          /** @deprecated */
          public copyWithOfferingId(offeringId: string): com.revenuecat.purchases.models.StoreProduct;
          public getName(): string;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public formattedPricePerMonth(locale: java.util.Locale): string;
          public component5(): com.revenuecat.purchases.models.Price;
          public pricePerWeek(locale: java.util.Locale): com.revenuecat.purchases.models.Price;
          public getDescription(): string;
          public pricePerWeek(param0: java.util.Locale): com.revenuecat.purchases.models.Price;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class TestSubscriptionOption extends com.revenuecat.purchases.models.SubscriptionOption {
          public static class: java.lang.Class<com.revenuecat.purchases.models.TestSubscriptionOption>;
          public getId(): string;
          public getPresentedOfferingIdentifier(): string;
          /** @deprecated */
          public getPresentedOfferingIdentifier(): string;
          public getPricingPhases(): java.util.List<com.revenuecat.purchases.models.PricingPhase>;
          public getPurchasingData(): com.revenuecat.purchases.models.PurchasingData;
          public getFullPricePhase(): com.revenuecat.purchases.models.PricingPhase;
          public constructor(productIdentifier: string, pricingPhases: java.util.List<com.revenuecat.purchases.models.PricingPhase>, basePlanId: string, tags: java.util.List<string>, presentedOfferingContext: com.revenuecat.purchases.PresentedOfferingContext, installmentsInfo: com.revenuecat.purchases.models.InstallmentsInfo);
          public isPrepaid(): boolean;
          public getBasePlanId(): string;
          public getFreePhase(): com.revenuecat.purchases.models.PricingPhase;
          public getProductIdentifier(): string;
          public isBasePlan(): boolean;
          public getInstallmentsInfo(): com.revenuecat.purchases.models.InstallmentsInfo;
          public getTags(): java.util.List<string>;
          public getPresentedOfferingContext(): com.revenuecat.purchases.PresentedOfferingContext;
          public getBillingPeriod(): com.revenuecat.purchases.models.Period;
          public getIntroPhase(): com.revenuecat.purchases.models.PricingPhase;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module models {
        export class Transaction {
          public static class: java.lang.Class<com.revenuecat.purchases.models.Transaction>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.Transaction>;
          public constructor(transactionIdentifier: string, revenuecatId: string, productIdentifier: string, productId: string, purchaseDate: java.util.Date);
          public getPurchaseDate(): java.util.Date;
          public component5(): java.util.Date;
          /** @deprecated */
          public getRevenuecatId(): string;
          public component2(): string;
          public equals(other: any): boolean;
          public describeContents(): number;
          public component3(): string;
          public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
          public getTransactionIdentifier(): string;
          public getProductIdentifier(): string;
          public toString(): string;
          public component1(): string;
          public constructor(productId: string, jsonObject: org.json.JSONObject);
          public component4(): string;
          public hashCode(): number;
          public copy(transactionIdentifier: string, revenuecatId: string, productIdentifier: string, productId: string, purchaseDate: java.util.Date): com.revenuecat.purchases.models.Transaction;
          /** @deprecated */
          public getProductId(): string;
        }
        export module Transaction {
          export class Creator extends globalAndroid.os.Parcelable.Creator<com.revenuecat.purchases.models.Transaction> {
            public static class: java.lang.Class<com.revenuecat.purchases.models.Transaction.Creator>;
            public constructor();
            public createFromParcel(parcel: globalAndroid.os.Parcel): com.revenuecat.purchases.models.Transaction;
            public newArray(size: number): androidNative.Array<com.revenuecat.purchases.models.Transaction>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export class EmptyStringToNullSerializer extends kotlinx.serialization.KSerializer<string> {
          public static class: java.lang.Class<com.revenuecat.purchases.paywalls.EmptyStringToNullSerializer>;
          public static INSTANCE: com.revenuecat.purchases.paywalls.EmptyStringToNullSerializer;
          public deserialize(p0: kotlinx.serialization.encoding.Decoder): string;
          public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: string): void;
          public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export class PaywallColor {
          public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallColor>;
          public getStringRepresentation(): string;
          public toString(): string;
          public constructor(stringRepresentation: string, underlyingColor: globalAndroid.graphics.Color);
          public component1(): string;
          public getUnderlyingColor(): globalAndroid.graphics.Color;
          public equals(other: any): boolean;
          public copy(stringRepresentation: string, underlyingColor: globalAndroid.graphics.Color): com.revenuecat.purchases.paywalls.PaywallColor;
          public getColorInt(): number;
          public constructor(stringRepresentation: string);
          public component2(): globalAndroid.graphics.Color;
          public constructor(colorInt: number);
          public hashCode(): number;
        }
        export module PaywallColor {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallColor.Companion>;
          }
          export class Serializer extends kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallColor> {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallColor.Serializer>;
            public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallColor.Serializer;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallColor): void;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallColor;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export class PaywallData {
          public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData>;
          public component7(): java.util.List<string>;
          public getRevision(): number;
          public component5$purchases_defaultsRelease(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>;
          public constructor(templateName: string, config: com.revenuecat.purchases.paywalls.PaywallData.Configuration, assetBaseURL: java.net.URL, revision: number, localization: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>, localizationByTier: java.util.Map<string, any>, zeroDecimalPlaceCountries: java.util.List<string>, defaultLocale: string);
          public component2(): com.revenuecat.purchases.paywalls.PaywallData.Configuration;
          public getTemplateName(): string;
          public getLocalization$purchases_defaultsRelease(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>;
          public toString(): string;
          public component8(): string;
          public getAssetBaseURL(): java.net.URL;
          public getTieredLocalizedConfiguration(): any;
          public component4(): number;
          public configForLocale(localeKey: java.util.Locale): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration;
          public getZeroDecimalPlaceCountries(): java.util.List<string>;
          public hashCode(): number;
          public equals(other: any): boolean;
          public copy(templateName: string, config: com.revenuecat.purchases.paywalls.PaywallData.Configuration, assetBaseURL: java.net.URL, revision: number, localization: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>, localizationByTier: java.util.Map<string, any>, zeroDecimalPlaceCountries: java.util.List<string>, defaultLocale: string): com.revenuecat.purchases.paywalls.PaywallData;
          public localizedConfiguration(localizedConfiguration: java.util.List<java.util.Locale>): any;
          public component6$purchases_defaultsRelease(): java.util.Map<string, java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>>;
          public getConfig(): com.revenuecat.purchases.paywalls.PaywallData.Configuration;
          public component3(): java.net.URL;
          public component1(): string;
          public getLocalizationByTier$purchases_defaultsRelease(): java.util.Map<string, java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>>;
          public getLocalizedConfiguration(): any;
          public getDefaultLocale(): string;
          public tieredConfigForLocale(localeKey: java.util.Locale): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>;
        }
        export module PaywallData {
          export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData> {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.serializer>;
            public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.serializer;
            public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData): void;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData;
          }
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Companion>;
            public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData>;
          }
          export class Configuration {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration>;
            public copy(
              packageIds: java.util.List<string>,
              defaultPackage: string,
              imagesWebp: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images,
              legacyImages: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images,
              imagesByTier: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>,
              blurredBackgroundImage: boolean,
              displayRestorePurchases: boolean,
              termsOfServiceURL: java.net.URL,
              privacyURL: java.net.URL,
              colors: com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation,
              colorsByTier: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>,
              tiers: java.util.List<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>,
              defaultTier: string
            ): com.revenuecat.purchases.paywalls.PaywallData.Configuration;
            public equals(other: any): boolean;
            public getColorsByTier(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>;
            public getPrivacyURL(): java.net.URL;
            public component8(): java.net.URL;
            public component9(): java.net.URL;
            public hashCode(): number;
            public getImages(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
            public component10(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation;
            public getBlurredBackgroundImage(): boolean;
            public getImagesWebp$purchases_defaultsRelease(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
            public getDisplayRestorePurchases(): boolean;
            public component11(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>;
            public getPackageIds(): java.util.List<string>;
            public component1(): java.util.List<string>;
            public component4$purchases_defaultsRelease(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
            public getDefaultPackage(): string;
            public component13(): string;
            public getColors(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation;
            public component6(): boolean;
            public component3$purchases_defaultsRelease(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
            public getTiers(): java.util.List<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>;
            public getLegacyImages$purchases_defaultsRelease(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
            public toString(): string;
            public constructor(packageIds: java.util.List<string>, defaultPackage: string, images: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images, imagesByTier: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>, colors: com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation, colorsByTier: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>, tiers: java.util.List<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>, blurredBackgroundImage: boolean, displayRestorePurchases: boolean, termsOfServiceURL: java.net.URL, privacyURL: java.net.URL);
            public getTermsOfServiceURL(): java.net.URL;
            public component12(): java.util.List<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>;
            public constructor(packageIds: java.util.List<string>, defaultPackage: string, imagesWebp: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images, legacyImages: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images, imagesByTier: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>, blurredBackgroundImage: boolean, displayRestorePurchases: boolean, termsOfServiceURL: java.net.URL, privacyURL: java.net.URL, colors: com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation, colorsByTier: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>, tiers: java.util.List<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>, defaultTier: string);
            public component2(): string;
            public component5(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>;
            public component7(): boolean;
            public getDefaultTier(): string;
            public getImagesByTier(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>;
          }
          export module Configuration {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.Configuration.serializer;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.Configuration;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.Configuration): void;
            }
            export class ColorInformation {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>;
              public constructor(light: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors, dark: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors);
              public hashCode(): number;
              public component1(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors;
              public equals(other: any): boolean;
              public component2(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors;
              public getLight(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors;
              public toString(): string;
              public getDark(): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors;
              public copy(light: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors, dark: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors): com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation;
            }
            export module ColorInformation {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation.serializer;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation): void;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.ColorInformation>;
              }
            }
            export class Colors {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors>;
              public getAccent3(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component11(): com.revenuecat.purchases.paywalls.PaywallColor;
              public hashCode(): number;
              public getCloseButton(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getTierControlSelectedForeground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component8(): com.revenuecat.purchases.paywalls.PaywallColor;
              public toString(): string;
              public component12(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component2(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getText1(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getText2(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getCallToActionForeground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public equals(other: any): boolean;
              public component1(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component10(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getText3(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component9(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getTierControlSelectedBackground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getTierControlBackground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component4(): com.revenuecat.purchases.paywalls.PaywallColor;
              public constructor(
                background: com.revenuecat.purchases.paywalls.PaywallColor,
                text1: com.revenuecat.purchases.paywalls.PaywallColor,
                text2: com.revenuecat.purchases.paywalls.PaywallColor,
                text3: com.revenuecat.purchases.paywalls.PaywallColor,
                callToActionBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                callToActionForeground: com.revenuecat.purchases.paywalls.PaywallColor,
                callToActionSecondaryBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                accent1: com.revenuecat.purchases.paywalls.PaywallColor,
                accent2: com.revenuecat.purchases.paywalls.PaywallColor,
                accent3: com.revenuecat.purchases.paywalls.PaywallColor,
                closeButton: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlForeground: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlSelectedBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlSelectedForeground: com.revenuecat.purchases.paywalls.PaywallColor
              );
              public component15(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component3(): com.revenuecat.purchases.paywalls.PaywallColor;
              public copy(
                background: com.revenuecat.purchases.paywalls.PaywallColor,
                text1: com.revenuecat.purchases.paywalls.PaywallColor,
                text2: com.revenuecat.purchases.paywalls.PaywallColor,
                text3: com.revenuecat.purchases.paywalls.PaywallColor,
                callToActionBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                callToActionForeground: com.revenuecat.purchases.paywalls.PaywallColor,
                callToActionSecondaryBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                accent1: com.revenuecat.purchases.paywalls.PaywallColor,
                accent2: com.revenuecat.purchases.paywalls.PaywallColor,
                accent3: com.revenuecat.purchases.paywalls.PaywallColor,
                closeButton: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlForeground: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlSelectedBackground: com.revenuecat.purchases.paywalls.PaywallColor,
                tierControlSelectedForeground: com.revenuecat.purchases.paywalls.PaywallColor
              ): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors;
              public component7(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getCallToActionSecondaryBackground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getCallToActionBackground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getAccent1(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component13(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component14(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component6(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getAccent2(): com.revenuecat.purchases.paywalls.PaywallColor;
              public component5(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getBackground(): com.revenuecat.purchases.paywalls.PaywallColor;
              public getTierControlForeground(): com.revenuecat.purchases.paywalls.PaywallColor;
            }
            export module Colors {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors.serializer;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors): void;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Colors>;
              }
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration>;
            }
            export class Images {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>;
              public constructor();
              public component2(): string;
              public copy(header: string, background: string, icon: string): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
              public hashCode(): number;
              public getBackground(): string;
              public getAll$purchases_defaultsRelease(): java.util.List<string>;
              public toString(): string;
              public component3(): string;
              public component1(): string;
              public getHeader(): string;
              public constructor(header: string, background: string, icon: string);
              public equals(other: any): boolean;
              public getIcon(): string;
            }
            export module Images {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images.serializer;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images): void;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Images>;
              }
            }
            export class Tier {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>;
              public component2(): java.util.List<string>;
              public copy(id: string, packageIds: java.util.List<string>, defaultPackageId: string): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier;
              public getPackageIds(): java.util.List<string>;
              public getDefaultPackageId(): string;
              public constructor(id: string, packageIds: java.util.List<string>, defaultPackageId: string);
              public hashCode(): number;
              public getId(): string;
              public equals(other: any): boolean;
              public toString(): string;
              public component3(): string;
              public component1(): string;
            }
            export module Tier {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier.serializer;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier): void;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.Configuration.Tier>;
              }
            }
          }
          export class LocalizedConfiguration {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>;
            public equals(other: any): boolean;
            public component5(): string;
            public constructor(title: string, subtitle: string, callToAction: string, callToActionWithIntroOffer: string, callToActionWithMultipleIntroOffers: string, offerDetails: string, offerDetailsWithIntroOffer: string, offerDetailsWithMultipleIntroOffers: string, offerName: string, features: java.util.List<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature>, tierName: string, offerOverrides: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride>);
            public component1(): string;
            public hashCode(): number;
            public component11(): string;
            public component9(): string;
            public component4(): string;
            public getOfferName(): string;
            public getOfferDetails(): string;
            public getCallToActionWithIntroOffer(): string;
            public getCallToAction(): string;
            public getCallToActionWithMultipleIntroOffers(): string;
            public component8(): string;
            public getTierName(): string;
            public getSubtitle(): string;
            public getOfferDetailsWithMultipleIntroOffers(): string;
            public component12(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride>;
            public component3(): string;
            public copy(title: string, subtitle: string, callToAction: string, callToActionWithIntroOffer: string, callToActionWithMultipleIntroOffers: string, offerDetails: string, offerDetailsWithIntroOffer: string, offerDetailsWithMultipleIntroOffers: string, offerName: string, features: java.util.List<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature>, tierName: string, offerOverrides: java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride>): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration;
            public getOfferDetailsWithIntroOffer(): string;
            public component7(): string;
            public component10(): java.util.List<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature>;
            public toString(): string;
            public getTitle(): string;
            public component2(): string;
            public component6(): string;
            public getOfferOverrides(): java.util.Map<string, com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride>;
            public getFeatures(): java.util.List<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature>;
          }
          export module LocalizedConfiguration {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.serializer;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration): void;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration>;
            }
            export class Feature {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature>;
              public component2(): string;
              public getContent(): string;
              public hashCode(): number;
              public copy(title: string, content: string, iconID: string): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature;
              public constructor(title: string, content: string, iconID: string);
              public equals(other: any): boolean;
              public getTitle(): string;
              public getIconID(): string;
              public toString(): string;
              public component3(): string;
              public component1(): string;
            }
            export module Feature {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature.serializer;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature): void;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.Feature>;
              }
            }
            export class OfferOverride {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride>;
              public component2(): string;
              public getOfferDetailsWithMultipleIntroOffers(): string;
              public hashCode(): number;
              public toString(): string;
              public component5(): string;
              public getOfferDetails(): string;
              public component3(): string;
              public component1(): string;
              public constructor(offerName: string, offerDetails: string, offerDetailsWithIntroOffer: string, offerDetailsWithMultipleIntroOffers: string, offerBadge: string);
              public getOfferName(): string;
              public getOfferBadge(): string;
              public equals(other: any): boolean;
              public getOfferDetailsWithIntroOffer(): string;
              public component4(): string;
              public copy(offerName: string, offerDetails: string, offerDetailsWithIntroOffer: string, offerDetailsWithMultipleIntroOffers: string, offerBadge: string): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride;
            }
            export module OfferOverride {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride.serializer;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride): void;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.PaywallData.LocalizedConfiguration.OfferOverride>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export class PaywallPresentedCache {
          public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallPresentedCache>;
          public cachePresentedPaywall(paywallEvent: com.revenuecat.purchases.paywalls.events.PaywallEvent): void;
          public constructor();
          public receiveEvent(event: com.revenuecat.purchases.paywalls.events.PaywallEvent): void;
          public getAndRemovePresentedEvent(): com.revenuecat.purchases.paywalls.events.PaywallEvent;
        }
        export module PaywallPresentedCache {
          export class WhenMappings {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.PaywallPresentedCache.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallBackendEvent {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent>;
            public static PAYWALL_EVENT_SCHEMA_VERSION: number = 1;
            public getSessionID(): string;
            public equals(other: any): boolean;
            public component5(): string;
            public constructor(id: string, version: number, type: string, appUserID: string, sessionID: string, offeringID: string, paywallRevision: number, timestamp: number, displayMode: string, darkMode: boolean, localeIdentifier: string);
            public getType(): string;
            public component1(): string;
            public hashCode(): number;
            public component11(): string;
            public getDisplayMode(): string;
            public component9(): string;
            public component4(): string;
            public component2(): number;
            public getPaywallRevision(): number;
            public getTimestamp(): number;
            public getLocaleIdentifier(): string;
            public component10(): boolean;
            public getId(): string;
            public component8(): number;
            public component3(): string;
            public getAppUserID(): string;
            public getVersion(): number;
            public getDarkMode(): boolean;
            public getOfferingID(): string;
            public toString(): string;
            public copy(id: string, version: number, type: string, appUserID: string, sessionID: string, offeringID: string, paywallRevision: number, timestamp: number, displayMode: string, darkMode: boolean, localeIdentifier: string): com.revenuecat.purchases.paywalls.events.PaywallBackendEvent;
            public component6(): string;
            public component7(): number;
          }
          export module PaywallBackendEvent {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallBackendEvent.serializer;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallBackendEvent): void;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallBackendEvent;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallEvent {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent>;
            public toPaywallPostReceiptData$purchases_defaultsRelease(): com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData;
            public equals(other: any): boolean;
            public getData(): com.revenuecat.purchases.paywalls.events.PaywallEvent.Data;
            public component2(): com.revenuecat.purchases.paywalls.events.PaywallEvent.Data;
            public getType(): com.revenuecat.purchases.paywalls.events.PaywallEventType;
            public hashCode(): number;
            public constructor(creationData: com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData, data: com.revenuecat.purchases.paywalls.events.PaywallEvent.Data, type: com.revenuecat.purchases.paywalls.events.PaywallEventType);
            public copy(creationData: com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData, data: com.revenuecat.purchases.paywalls.events.PaywallEvent.Data, type: com.revenuecat.purchases.paywalls.events.PaywallEventType): com.revenuecat.purchases.paywalls.events.PaywallEvent;
            public component1(): com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData;
            public component3(): com.revenuecat.purchases.paywalls.events.PaywallEventType;
            public toString(): string;
            public getCreationData(): com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData;
          }
          export module PaywallEvent {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallEvent> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallEvent.serializer;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallEvent): void;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallEvent;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallEvent>;
            }
            export class CreationData {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData>;
              public hashCode(): number;
              public component1(): java.util.UUID;
              public equals(other: any): boolean;
              public getId(): java.util.UUID;
              public component2(): java.util.Date;
              public toString(): string;
              public copy(id: java.util.UUID, date: java.util.Date): com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData;
              public constructor(id: java.util.UUID, date: java.util.Date);
              public getDate(): java.util.Date;
            }
            export module CreationData {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData.serializer;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData): void;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallEvent.CreationData>;
              }
            }
            export class Data {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.Data>;
              public getSessionIdentifier(): java.util.UUID;
              public constructor(offeringIdentifier: string, paywallRevision: number, sessionIdentifier: java.util.UUID, displayMode: string, localeIdentifier: string, darkMode: boolean);
              public hashCode(): number;
              public getOfferingIdentifier(): string;
              public component2(): number;
              public copy(offeringIdentifier: string, paywallRevision: number, sessionIdentifier: java.util.UUID, displayMode: string, localeIdentifier: string, darkMode: boolean): com.revenuecat.purchases.paywalls.events.PaywallEvent.Data;
              public component6(): boolean;
              public toString(): string;
              public component5(): string;
              public component1(): string;
              public getPaywallRevision(): number;
              public component3(): java.util.UUID;
              public equals(other: any): boolean;
              public getDarkMode(): boolean;
              public component4(): string;
              public getDisplayMode(): string;
              public getLocaleIdentifier(): string;
            }
            export module Data {
              export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallEvent.Data> {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.Data.serializer>;
                public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallEvent.Data.serializer;
                public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
                public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallEvent.Data): void;
                public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallEvent.Data;
                public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
                public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              }
              export class Companion {
                public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEvent.Data.Companion>;
                public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallEvent.Data>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallEventRequest {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEventRequest>;
            public equals(other: any): boolean;
            public copy(events: java.util.List<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent>): com.revenuecat.purchases.paywalls.events.PaywallEventRequest;
            public constructor(events: java.util.List<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent>);
            public getCacheKey(): java.util.List<string>;
            public getEvents(): java.util.List<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent>;
            public hashCode(): number;
            public component1(): java.util.List<com.revenuecat.purchases.paywalls.events.PaywallBackendEvent>;
            public toString(): string;
          }
          export module PaywallEventRequest {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallEventRequest> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEventRequest.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallEventRequest.serializer;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallEventRequest): void;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallEventRequest;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEventRequest.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallEventRequest>;
              public getJson(): kotlinx.serialization.json.Json;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallEventType {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEventType>;
            public static IMPRESSION: com.revenuecat.purchases.paywalls.events.PaywallEventType;
            public static CANCEL: com.revenuecat.purchases.paywalls.events.PaywallEventType;
            public static CLOSE: com.revenuecat.purchases.paywalls.events.PaywallEventType;
            public static values(): androidNative.Array<com.revenuecat.purchases.paywalls.events.PaywallEventType>;
            public getValue(): string;
            public static valueOf(value: string): com.revenuecat.purchases.paywalls.events.PaywallEventType;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallEventsManager {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEventsManager>;
            public static PAYWALL_EVENTS_FILE_PATH: string = 'RevenueCat/paywall_event_store/paywall_event_store.jsonl';
            public constructor(fileHelper: com.revenuecat.purchases.utils.EventsFileHelper<com.revenuecat.purchases.paywalls.events.PaywallStoredEvent>, identityManager: com.revenuecat.purchases.identity.IdentityManager, paywallEventsDispatcher: com.revenuecat.purchases.common.Dispatcher, backend: com.revenuecat.purchases.common.Backend);
            public track(event: com.revenuecat.purchases.paywalls.events.PaywallEvent): void;
            public flushEvents(): void;
          }
          export module PaywallEventsManager {
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallEventsManager.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallPostReceiptData {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData>;
            public getSessionID(): string;
            public component4(): boolean;
            public component3(): string;
            public copy(sessionID: string, revision: number, displayMode: string, darkMode: boolean, localeIdentifier: string, offeringId: string): com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData;
            public equals(other: any): boolean;
            public component5(): string;
            public getOfferingId(): string;
            public component1(): string;
            public hashCode(): number;
            public getDarkMode(): boolean;
            public getDisplayMode(): string;
            public toString(): string;
            public component2(): number;
            public toMap(): java.util.Map<string, any>;
            public getLocaleIdentifier(): string;
            public getRevision(): number;
            public component6(): string;
            public constructor(sessionID: string, revision: number, displayMode: string, darkMode: boolean, localeIdentifier: string, offeringId: string);
          }
          export module PaywallPostReceiptData {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData.serializer;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData): void;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallPostReceiptData>;
              public getJson(): kotlinx.serialization.json.Json.Default;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module paywalls {
        export module events {
          export class PaywallStoredEvent extends com.revenuecat.purchases.utils.Event {
            public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallStoredEvent>;
            public getEvent(): com.revenuecat.purchases.paywalls.events.PaywallEvent;
            public equals(other: any): boolean;
            public getUserID(): string;
            public component2(): string;
            public copy(event: com.revenuecat.purchases.paywalls.events.PaywallEvent, userID: string): com.revenuecat.purchases.paywalls.events.PaywallStoredEvent;
            public hashCode(): number;
            public toPaywallBackendEvent(): com.revenuecat.purchases.paywalls.events.PaywallBackendEvent;
            public component1(): com.revenuecat.purchases.paywalls.events.PaywallEvent;
            public constructor(event: com.revenuecat.purchases.paywalls.events.PaywallEvent, userID: string);
            public toString(): string;
          }
          export module PaywallStoredEvent {
            export class serializer extends kotlinx.serialization.internal.GeneratedSerializer<com.revenuecat.purchases.paywalls.events.PaywallStoredEvent> {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallStoredEvent.serializer>;
              public static INSTANCE: com.revenuecat.purchases.paywalls.events.PaywallStoredEvent.serializer;
              public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.revenuecat.purchases.paywalls.events.PaywallStoredEvent;
              public childSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
              public typeParametersSerializers(): androidNative.Array<kotlinx.serialization.KSerializer<any>>;
              public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.revenuecat.purchases.paywalls.events.PaywallStoredEvent): void;
            }
            export class Companion {
              public static class: java.lang.Class<com.revenuecat.purchases.paywalls.events.PaywallStoredEvent.Companion>;
              public serializer(): kotlinx.serialization.KSerializer<com.revenuecat.purchases.paywalls.events.PaywallStoredEvent>;
              public getJson(): kotlinx.serialization.json.Json.Default;
              public fromString(thisTemp$iv: string): com.revenuecat.purchases.paywalls.events.PaywallStoredEvent;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class AttributionStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.AttributionStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.AttributionStrings;
          public static ATTRIBUTES_SYNC_ERROR: string = 'Error when syncing subscriber attributes. App User ID: %s, Error: %s';
          public static ATTRIBUTES_SYNC_SUCCESS: string = 'Subscriber attributes synced successfully for App User ID: %s';
          public static DELETING_ATTRIBUTES: string = 'Deleting subscriber attributes for %s from cache';
          public static DELETING_ATTRIBUTES_OTHER_USERS: string = "Deleting old synced subscriber attributes that don't belong to %s";
          public static COPYING_ATTRIBUTES_FROM_TO_USER: string = 'Copying unsynced subscriber attributes from user %s to user %s';
          public static GOOGLE_PLAY_SERVICES_NOT_INSTALLED_FETCHING_ADVERTISING_IDENTIFIER: string = "GooglePlayServices is not installed. Couldn't get advertising identifier. Message: %s";
          public static GOOGLE_PLAY_ADVERTISING_ID_NOT_AVAILABLE: string = "Google Advertising ID is all zeros, ignoring. Make sure you've added the 'com.google.android.gms.permission.AD_ID' permission in your AndroidManifest file.";
          public static GOOGLE_PLAY_SERVICES_REPAIRABLE_EXCEPTION_WHEN_FETCHING_ADVERTISING_IDENTIFIER: string = 'GooglePlayServicesRepairableException when getting advertising identifier. Message: %s';
          public static IO_EXCEPTION_WHEN_FETCHING_ADVERTISING_IDENTIFIER: string = 'IOException when getting advertising identifier. Message: %s';
          public static NULL_EXCEPTION_WHEN_FETCHING_ADVERTISING_IDENTIFIER: string = 'NullPointerException when getting advertising identifier. Message: %s';
          public static MARKING_ATTRIBUTES_SYNCED: string = 'Marking the following attributes as synced for App User ID: %s';
          public static METHOD_CALLED: string = '%s called';
          public static NO_SUBSCRIBER_ATTRIBUTES_TO_SYNCHRONIZE: string = 'No subscriber attributes to synchronize.';
          public static SUBSCRIBER_ATTRIBUTES_ERROR: string = 'There were some subscriber attributes errors: %s';
          public static TIMEOUT_EXCEPTION_WHEN_FETCHING_ADVERTISING_IDENTIFIER: string = 'TimeoutException when getting advertising identifier. Message: %s';
          public static UNSYNCED_ATTRIBUTES_COUNT: string = 'Found %d unsynced attributes for App User ID: %s';
          public static AMAZON_COULD_NOT_GET_ADID: string = "Couldn't get Amazon advertising identifier. Message: %s";
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class BillingStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.BillingStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.BillingStrings;
          public static BILLING_CLIENT_DISCONNECTED: string = "Billing is disconnected and purchase methods won't work. Stacktrace: %s";
          public static BILLING_CLIENT_ENDING: string = 'Ending connection for %s';
          public static BILLING_CLIENT_ERROR: string = 'Billing Service Setup finished with error code: %s';
          public static BILLING_CLIENT_STARTING: string = 'Starting connection for %s';
          public static BILLING_INTENT_FAILED: string = 'Failed to launch billing intent. %s';
          public static BILLING_SERVICE_DISCONNECTED: string = 'Billing Service disconnected';
          public static BILLING_SERVICE_DISCONNECTED_INSTANCE: string = 'Billing Service disconnected for %s';
          public static BILLING_SERVICE_SETUP_FINISHED: string = 'Billing Service Setup finished for %s';
          public static BILLING_UNAVAILABLE: string = 'Billing is not available in this device. %s';
          public static BILLING_UNAVAILABLE_LESS_THAN_3: string = "Billing is not available in this device. Make sure there's an account configured in Play Store. Reopen the Play Store or clean its caches if this keeps happening. Original error message: %s";
          public static BILLING_WRAPPER_PURCHASES_ERROR: string = 'BillingWrapper purchases failed to update: %s';
          public static BILLING_WRAPPER_PURCHASES_UPDATED: string = 'BillingWrapper purchases updated: %s';
          public static BILLING_PURCHASE_HISTORY_RECORD_MORE_THAN_ONE_SKU: string = "There's more than one sku in the PurchaseHistoryRecord, but only one will be used.";
          public static BILLING_PURCHASE_MORE_THAN_ONE_SKU: string = "There's more than one sku in the PurchaseHistoryRecord, but only one will be used.";
          public static CANNOT_CALL_CAN_MAKE_PAYMENTS: string = 'canMakePayments requires the Google Play Store. Skipping any checks and returning true.';
          public static NULL_ACTIVITY_INTENT: string = 'Activity passed into launchBillingFlow has a null intent, which may cause a crash. See https://github.com/RevenueCat/purchasesandroid/issues/381 for more information.';
          public static BILLING_CLIENT_RETRY: string = 'Retrying BillingClient connection after backoff of %s milliseconds.';
          public static ILLEGAL_STATE_EXCEPTION_WHEN_CONNECTING: string = 'There was an IllegalStateException when connecting to BillingClient. This has been reported to occur on Samsung devices on unknown circumstances.\nException: %s';
          public static BILLING_CONNECTION_ERROR_INAPP_MESSAGES: string = 'Error connecting to billing client to display inapp messages: %s';
          public static BILLING_CONNECTION_ERROR_STORE_COUNTRY: string = 'Error connecting to billing client to get store country: %s';
          public static BILLING_CONNECTION_ERROR_LWA_CONSENT_STATUS: string = 'Error connecting to billing client to get LWA consent status: %s';
          public static BILLING_AMAZON_ERROR_STOREFRONT: string = 'Error obtaining storefront in Amazon: %s';
          public static BILLING_AMAZON_ERROR_LWA_CONSENT_STATUS: string = 'Error obtaining LWA Consent Status in Amazon: %s';
          public static BILLING_CONFIG_NULL_ON_SUCCESS: string = 'Billing config is null even though Google return OK result';
          public static BILLING_INAPP_MESSAGE_NONE: string = 'No Google Play inapp message was available.';
          public static BILLING_INAPP_MESSAGE_UPDATE: string = 'Subscription status was updated from inapp message.';
          public static BILLING_INAPP_MESSAGE_UNEXPECTED_CODE: string = 'Unexpected billing code: %s';
          public static BILLING_UNSPECIFIED_INAPP_MESSAGE_TYPES: string = 'Tried to show inapp messages without specifying any types. Please add what types of inapp message you want to display.';
          public static BILLING_CLIENT_RETRY_ALREADY_SCHEDULED: string = 'BillingClient connection retry already scheduled. Ignoring';
          public static BILLING_INITIATE_GETTING_COUNTRY_CODE: string = 'Billing client: Initiating getting country code.';
          public static BILLING_COUNTRY_CODE: string = 'Billing connected with country code: %s';
          public static BILLING_STOREFRONT_CACHING: string = 'Setting storefront cache to %s';
          public static BILLING_STOREFRONT_NULL_FROM_CACHE: string = 'Getting storefront from cache was null.';
          public static BILLING_SERVICE_UNAVAILABLE: string = 'Billing is unavailable. Will retry with backoff. App is in background: %s';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class ConfigureStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.ConfigureStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.ConfigureStrings;
          public static APP_BACKGROUNDED: string = 'App backgrounded';
          public static APP_FOREGROUNDED: string = 'App foregrounded';
          public static CONFIGURING_PURCHASES_PROXY_URL_SET: string = 'Purchases is being configured using a proxy for RevenueCat';
          public static DEBUG_ENABLED: string = 'Debug logging enabled';
          public static INITIAL_APP_USER_ID: string = 'Initial App User ID  %s';
          public static VERIFICATION_MODE_SELECTED: string = 'Purchases configured with response verification: %s';
          public static LISTENER_SET: string = 'Listener set';
          public static NO_SINGLETON_INSTANCE: string = 'There is no singleton instance. Make sure you configure Purchases before trying to get the default instance. More info here: https://errors.rev.cat/configuringsdk';
          public static SDK_VERSION: string = 'SDK Version  %s';
          public static PACKAGE_NAME: string = 'Package name  %s';
          public static LEGACY_API_KEY: string = "Looks like you're using a legacy API key.\nThis is still supported, but it's recommended to migrate to using platformspecific API key, which should look like 'goog_1a2b3c4d5e6f7h' or 'amzn_1a2b3c4d5e6f7h'.\nSee https://rev.cat/auth for more details.";
          public static AMAZON_API_KEY_GOOGLE_STORE: string = "Looks like you're using an Amazon API key but have configured the SDK for the Google play store.\nEither use a Google API key which should look like 'goog_1a2b3c4d5e6f7h' or configure the SDK to use Amazon.\nSee https://rev.cat/auth for more details.";
          public static GOOGLE_API_KEY_AMAZON_STORE: string = "Looks like you're using a Google API key but have configured the SDK for the Amazon app store.\nEither use an Amazon API key which should look like 'amzn_1a2b3c4d5e6f7h' or configure the SDK to use Google.\nSee https://rev.cat/auth for more details.";
          public static INVALID_API_KEY: string = "The specified API Key is not recognized.\nEnsure that you are using the public appspecific API key, which should look like 'goog_1a2b3c4d5e6f7h' or 'amzn_1a2b3c4d5e6f7h'.\nSee https://rev.cat/auth for more details.";
          public static AUTO_SYNC_PURCHASES_DISABLED: string = 'Automatic syncing of purchases has been disabled. \nRevenueCat won’t observe the new purchases from the store, and it will not sync any purchase \nautomatically. Call syncPurchases whenever a new transaction is completed so the \nreceipt is sent to RevenueCat’s backend. Consumables disappear from the receipt \nafter the transaction is finished, so make sure purchases are synced before \nfinishing any consumable transaction, otherwise RevenueCat won’t register the \npurchase.';
          public static INSTANCE_ALREADY_EXISTS: string = 'Purchases instance already set. Did you mean to configure two Purchases objects?';
          public static INSTANCE_ALREADY_EXISTS_WITH_SAME_CONFIG: string = 'Purchases instance already set with the same configuration. Ignoring duplicate call.';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class CustomerInfoStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.CustomerInfoStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.CustomerInfoStrings;
          public static INVALIDATING_CUSTOMERINFO_CACHE: string = 'Invalidating CustomerInfo cache.';
          public static NO_CACHED_CUSTOMERINFO: string = 'No cached CustomerInfo, fetching from network.';
          public static CUSTOMERINFO_STALE_UPDATING_BACKGROUND: string = 'CustomerInfo cache is stale, updating from network in background.';
          public static CUSTOMERINFO_STALE_UPDATING_FOREGROUND: string = 'CustomerInfo cache is stale, updating from network in foreground.';
          public static CUSTOMERINFO_UPDATED_FROM_NETWORK: string = 'CustomerInfo updated from network.';
          public static CUSTOMERINFO_UPDATED_FROM_SYNCING_PENDING_PURCHASES: string = 'CustomerInfo updated from syncing pending purchases.';
          public static CUSTOMERINFO_UPDATED_NOTIFYING_LISTENER: string = 'CustomerInfo updated, sending to listener.';
          public static SENDING_LATEST_CUSTOMERINFO_TO_LISTENER: string = 'Sending latest CustomerInfo to listener.';
          public static VENDING_CACHE: string = 'Vending CustomerInfo from cache.';
          public static RETRIEVING_CUSTOMER_INFO: string = 'Retrieving customer info with policy: %s';
          public static MISSING_CACHED_CUSTOMER_INFO: string = "Requested a cached CustomerInfo but it's not available.";
          public static ERROR_FETCHING_CUSTOMER_INFO: string = 'Error fetching customer data: %s.';
          public static COMPUTING_OFFLINE_CUSTOMER_INFO_FAILED: string = 'Error computing offline CustomerInfo. Will return original error. Creation error: %s';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class Emojis {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.Emojis>;
          public static INSTANCE: com.revenuecat.purchases.strings.Emojis;
          public static DOUBLE_EXCLAMATION: string = '‼️';
          public static HEART_CAT_EYES: string = '😻';
          public static INFO: string = 'ℹ️';
          public static MONEY_BAG: string = '💰';
          public static ROBOT: string = '🤖';
          public static SAD_CAT_EYES: string = '😿';
          public static PERSON: string = '👤';
          public static WARNING: string = '⚠️';
          public static BOX: string = '📦';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class IdentityStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.IdentityStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.IdentityStrings;
          public static LOGGING_IN: string = 'Logging in from %s > %s';
          public static LOG_IN_SUCCESSFUL: string = 'Logged in successfully as %s. Created: %s';
          public static LOG_IN_ERROR_MISSING_APP_USER_ID: string = "Error logging in: appUserID can't be null, empty or blank";
          public static IDENTIFYING_APP_USER_ID: string = 'Identifying App User ID: %s';
          public static EMPTY_APP_USER_ID_WILL_BECOME_ANONYMOUS: string = 'Identifying with empty App User ID will be treated as anonymous.';
          public static SETTING_NEW_ANON_ID: string = 'Setting new anonymous App User ID  %s';
          public static LOG_OUT_CALLED_ON_ANONYMOUS_USER: string = 'Called logOut but the current user is anonymous';
          public static LOG_OUT_SUCCESSFUL: string = 'Logged out successfully';
          public static INVALIDATING_CACHED_CUSTOMER_INFO: string = 'Detected unverified cached CustomerInfo but verification is enabled. Invalidating cache.';
          public static SWITCHING_USER: string = 'Switching to user %s.';
          public static SWITCHING_USER_SAME_APP_USER_ID: string = 'switchUser called with the same appUserID as the current user %s. This has no effect.';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class NetworkStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.NetworkStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.NetworkStrings;
          public static API_REQUEST_COMPLETED: string = 'API request completed with status: %s %s %s';
          public static API_REQUEST_STARTED: string = 'API request started: %s %s';
          public static HTTP_RESPONSE_PAYLOAD_NULL: string = 'HTTP Response payload is null';
          public static ETAG_RETRYING_CALL: string = "We were expecting to be able to return a cached response, but we can't find it. Retrying call with a new ETag";
          public static ETAG_CALL_ALREADY_RETRIED: string = "We can't find the cached response, but call has already been retried. Returning result from backend: %s";
          public static SAME_CALL_SCHEDULED_WITHOUT_JITTER: string = 'Request already scheduled without jitter delay, adding callbacks to unjittered request with key: %s';
          public static SAME_CALL_SCHEDULED_WITH_JITTER: string = 'Request already scheduled with jitter delay, adding existing callbacks to unjittered request with key: %s';
          public static SAME_CALL_ALREADY_IN_PROGRESS: string = 'Same call already in progress, adding to callbacks map with key: %s';
          public static PROBLEM_CONNECTING: string = 'Unable to start a network connection due to a network configuration issue: %s';
          public static VERIFICATION_MISSING_SIGNATURE: string = "Verification: Request to '%s' requires a signature but none provided.";
          public static VERIFICATION_INTERMEDIATE_KEY_FAILED: string = "Verification: Request to '%s' provided an intermediate key that did not verify correctly. Reason %s";
          public static VERIFICATION_MISSING_REQUEST_TIME: string = "Verification: Request to '%s' requires a request time but none provided.";
          public static VERIFICATION_MISSING_BODY_OR_ETAG: string = "Verification: Request to '%s' requires a body or etag but none provided.";
          public static VERIFICATION_INVALID_SIZE: string = "Verification: Request to '%s' has signature with wrong size. '%s'";
          public static VERIFICATION_ERROR: string = "Verification: Request to '%s' failed verification.";
          public static VERIFICATION_SUCCESS: string = "Verification: Request to '%s' verified successfully.";
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class OfferingStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.OfferingStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.OfferingStrings;
          public static CANNOT_FIND_PRODUCT_CONFIGURATION_ERROR: string = 'Could not find ProductDetails for %s \nThere is a problem with your configuration in Play Store Developer Console. More info here: https://errors.rev.cat/configuringproducts';
          public static FETCHING_OFFERINGS_ERROR: string = 'Error fetching offerings  %s';
          public static FETCHING_PRODUCTS: string = 'Requesting products from the store with identifiers: %s';
          public static FETCHING_PRODUCTS_FINISHED: string = 'Products request finished for %s';
          public static BUILDING_OFFERINGS: string = 'Building offerings response with %d products';
          public static CREATED_OFFERINGS: string = 'Offerings object created: %s';
          public static JSON_EXCEPTION_ERROR: string = 'JSONException when building Offerings object. Message: %s';
          public static LIST_PRODUCTS: string = '%s  %s';
          public static EXTRA_QUERY_PRODUCT_DETAILS_RESPONSE: string = 'BillingClient queryProductDetails has returned more than once, with result: %s. More info here: https://rev.cat/googleduplicatedlistenertimeouts';
          public static EXTRA_QUERY_PURCHASES_RESPONSE: string = 'BillingClient queryPurchases has returned more than once, with result: %s.';
          public static EXTRA_GET_BILLING_CONFIG_RESPONSE: string = 'BillingClient getBillingConfigAsync has returned more than once, with result: %s.';
          public static NO_CACHED_OFFERINGS_FETCHING_NETWORK: string = 'No cached Offerings, fetching from network';
          public static FORCE_OFFERINGS_FETCHING_NETWORK: string = 'Latest Offerings requested, fetching from network';
          public static OFFERINGS_STALE_UPDATING_IN_BACKGROUND: string = 'Offerings cache is stale, updating from network in background';
          public static OFFERINGS_STALE_UPDATING_IN_FOREGROUND: string = 'Offerings cache is stale, updating from network in foreground';
          public static OFFERINGS_START_UPDATE_FROM_NETWORK: string = 'Start Offerings update from network.';
          public static RETRIEVED_PRODUCTS: string = 'Retrieved productDetailsList: %s';
          public static VENDING_OFFERINGS_CACHE: string = 'Vending Offerings from cache';
          public static EMPTY_PRODUCT_ID_LIST: string = 'productId list is empty, skipping queryProductDetailsAsync call';
          public static CONFIGURATION_ERROR_NO_PRODUCTS_FOR_OFFERINGS: string = "There are no products registered in the RevenueCat dashboard for your offerings. If you don't want to use the offerings system, you can safely ignore this message. To configure offerings and their products, follow the instructions in https://rev.cat/howtoconfigureofferings.\nMore information: https://rev.cat/whyareofferingsempty";
          public static CONFIGURATION_ERROR_PRODUCTS_NOT_FOUND: string = "There's a problem with your configuration. None of the products registered in the RevenueCat dashboard could be fetched from the Play Store.\nMore information: https://rev.cat/whyareofferingsempty";
          public static OFFERING_EMPTY: string = "There's a problem with your configuration. No packages could be found for offering with identifier %s. This could be due to Products not being configured correctly in the RevenueCat dashboard or Play Store.\nTo configure products, follow the instructions in https://rev.cat/howtoconfigureofferings.\nMore information: https://rev.cat/whyareofferingsempty";
          public static ERROR_FETCHING_OFFERINGS_USING_DISK_CACHE: string = 'Error fetching offerings. Using disk cache.';
          public static TARGETING_ERROR: string = 'Error while parsing targeting  skipping';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class OfflineEntitlementsStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.OfflineEntitlementsStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.OfflineEntitlementsStrings;
          public static UPDATING_PRODUCT_ENTITLEMENT_MAPPING: string = 'Product entitlement mappings are stale. Updating.';
          public static SUCCESSFULLY_UPDATED_PRODUCT_ENTITLEMENTS: string = 'Successfully updated product entitlement mappings.';
          public static ERROR_UPDATING_PRODUCT_ENTITLEMENTS: string = 'Error updating product entitlement mappings. Error: %s.';
          public static USING_OFFLINE_ENTITLEMENTS_CUSTOMER_INFO: string = "Using offline computed customer info. In this state EntitlementInfo's isSandbox will always be false. Additionally, the expiration date may be inaccurate. Once the transactions are synced with our backend, these values will be automatically corrected.";
          public static RESETTING_OFFLINE_CUSTOMER_INFO_CACHE: string = 'Resetting offline customer info cache.';
          public static OFFLINE_ENTITLEMENTS_NOT_ENABLED: string = 'Offline entitlements not enabled in this version.';
          public static ALREADY_CALCULATING_OFFLINE_CUSTOMER_INFO: string = 'Already calculating offline customer info for %s.';
          public static ERROR_PARSING_PRODUCT_ENTITLEMENT_MAPPING: string = 'Error parsing cached product entitlement mapping: %s';
          public static OFFLINE_ENTITLEMENTS_UNSUPPORTED_INAPP_PURCHASES: string = 'Offline entitlements are not supported for one time purchases. Found one time purchases. See for more info: https://rev.cat/offlineentitlements';
          public static PRODUCT_ENTITLEMENT_MAPPING_REQUIRED: string = 'Product entitlement mapping is required for offline entitlements. Skipping offline customer info calculation.';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class PurchaseStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.PurchaseStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.PurchaseStrings;
          public static ACKNOWLEDGING_PURCHASE: string = 'Acknowledging purchase with token %s';
          public static ACKNOWLEDGING_PURCHASE_ERROR: string = 'Error acknowledging purchase. Will retry next queryPurchases. %s';
          public static ACKNOWLEDGING_PURCHASE_ERROR_RESTORE: string = "Couldn't acknowledge purchase after restoring it, this most likely means the subscription has expired already or the product has already been acknowledged.";
          public static BILLING_CLIENT_NOT_CONNECTED: string = 'Skipping updating pending purchase queue since BillingClient is not connected yet.';
          public static CONSUMING_PURCHASE: string = 'Consuming purchase with token %s';
          public static CONSUMING_PURCHASE_ERROR: string = 'Error consuming purchase. Will retry next queryPurchases. %s';
          public static CONSUMING_PURCHASE_ERROR_RESTORE: string = "Couldn't consume purchase after restoring it, this most likely means the product has already been consumed.";
          public static NOT_CONSUMING_IN_APP_PURCHASE_ACCORDING_TO_BACKEND: string = "Not consuming inapp purchase according to server configuration. This is expected for nonconsumable products. The user won't be able to purchase this product again.";
          public static FOUND_EXISTING_PURCHASE: string = 'Found existing purchase for SKU: %s';
          public static NO_EXISTING_PURCHASE: string = "Couldn't find existing purchase for SKU: %s";
          public static ERROR_FINDING_PURCHASE: string = 'Error finding existing purchase for SKU: %s';
          public static OFFERING: string = '  offering: ';
          public static PRODUCT_CHANGE_STARTED: string = 'Product change started: %s';
          public static PURCHASE_FINISH_TRANSACTION_FALSE: string = 'finishTransactions is set to false and a purchase has been started. Are you sure you want to do this? More info here: https://errors.rev.cat/finishTransactions';
          public static PURCHASE_SYNCED: string = 'Purchase %s synced';
          public static PURCHASE_SYNCED_USER_ID: string = 'Purchase %s synced %s';
          public static PURCHASING_PRODUCT: string = 'Purchasing product: %s';
          public static PURCHASE_STARTED: string = 'Purchase started  product: %s';
          public static SYNCING_PURCHASES: string = 'Syncing purchases';
          public static SYNCING_PURCHASE_STORE_USER_ID: string = 'Syncing purchase with token %s, for store user ID %s';
          public static SYNCING_PURCHASES_ERROR: string = 'Error syncing purchases. Error: %s';
          public static SYNCING_PURCHASES_ERROR_DETAILS: string = 'Error syncing purchases %s. Error: %s';
          public static SYNCING_PURCHASE_ERROR_DETAILS_USER_ID: string = 'Error syncing purchase %s for store user ID %s. Error: %s';
          public static SYNCED_PURCHASES_SUCCESSFULLY: string = 'Synced purchases successfully';
          public static SYNCING_PURCHASE_SKIPPING: string = 'Skipping syncing purchase %s for store user ID %s. It has already been posted';
          public static UPDATING_PENDING_PURCHASE_QUEUE: string = 'Updating pending purchase queue';
          public static NO_PENDING_PURCHASES_TO_SYNC: string = 'No pending purchases to sync';
          public static UPGRADING_SKU: string = 'Moving from old SKU %s to sku %s';
          public static UPGRADING_INVALID_TYPE: string = 'UpgradeInfo passed to purchase for nonsub product type. No upgrade will occur. Consider using nonupgrade purchase flows for this product.';
          public static UPGRADING_SKU_ERROR: string = 'There was an error trying to upgrade. BillingResponseCode: %s';
          public static NOT_RECOGNIZED_PRODUCT_TYPE: string = 'Type of product not recognized.';
          public static SKIPPING_AUTOMATIC_SYNC: string = 'Skipping automatic synchronization.';
          public static INVALID_PRODUCT_TYPE: string = 'Invalid product type passed to %s.';
          public static INVALID_PURCHASE_TYPE: string = 'Purchase for a %s purchase must be a %s.';
          public static INVALID_STORE_PRODUCT_TYPE: string = 'StoreProduct for a %s purchase must be a %s.';
          public static INVALID_PRODUCT_NO_PRICE: string = 'Error finding a price for %s.';
          public static INVALID_CALLBACK_TYPE_INTERNAL_ERROR: string = 'Internal SDK error  invalid callback type passed to startProductChange.';
          public static ENTITLEMENT_EXPIRED_OUTSIDE_GRACE_PERIOD: string = "Entitlement %s is no longer active (expired %s) and it's outside grace period window (last updated %s)";
          public static EXTRA_CONNECTION_CANMAKEPAYMENTS: string = 'BillingClient has returned more than once when checking if device can make payments with result: %s.';
          public static EXTRA_CALLBACK_CANMAKEPAYMENTS: string = 'Callback has already been called when checking if device can make payments.';
          public static EXCEPTION_CANMAKEPAYMENTS: string = 'Exception received when checking if device can make payments: \n%s.';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class ReceiptStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.ReceiptStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.ReceiptStrings;
          public static CHECKING_IF_CACHE_STALE: string = 'Checking if cache is stale AppInBackground %s';
          public static CLEANING_PREV_SENT_HASHED_TOKEN: string = 'Cleaning previously sent tokens';
          public static TOKENS_IN_CACHE: string = 'Tokens in cache before saving %s';
          public static TOKENS_ALREADY_POSTED: string = 'Tokens already posted: %s';
          public static SAVING_TOKENS_WITH_HASH: string = 'Saving token %s with hash %s';
          public static SAVING_TOKENS: string = 'Saving tokens %s';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class RestoreStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.RestoreStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.RestoreStrings;
          public static PURCHASE_HISTORY_EMPTY: string = 'Purchase history is empty.';
          public static PURCHASE_HISTORY_RETRIEVED: string = 'Purchase history retrieved %s';
          public static EXTRA_QUERY_PURCHASE_HISTORY_RESPONSE: string = 'BillingClient queryPurchaseHistory has returned more than once, with result: %s. More info here: https://rev.cat/googleduplicatedlistenertimeouts';
          public static PURCHASE_RESTORED: string = 'Purchase %s restored';
          public static QUERYING_PURCHASE: string = 'Querying purchases';
          public static QUERYING_PURCHASE_WITH_HASH: string = 'Purchase of type %s with hash %s';
          public static QUERYING_PURCHASE_WITH_TYPE: string = 'Querying Purchase with %s and type %s';
          public static RESTORING_PURCHASE: string = 'Restoring purchases';
          public static RESTORING_PURCHASE_ERROR: string = 'Error restoring purchase: %s. Error: %s';
          public static SHARING_ACC_RESTORE_FALSE: string = "allowSharingPlayStoreAccount is set to false and restorePurchases has been called. This will 'alias' any app user id's sharing the same receipt. Are you sure you want to do this? More info here: https://errors.rev.cat/allowsSharingPlayStoreAccount";
          public static QUERYING_PURCHASE_HISTORY: string = 'Querying purchase history for type %s';
          public static QUERYING_SUBS_ERROR: string = 'Error when querying subscriptions. %s';
          public static QUERYING_INAPP_ERROR: string = 'Error when querying inapps. %s';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module strings {
        export class SyncAttributesAndOfferingsStrings {
          public static class: java.lang.Class<com.revenuecat.purchases.strings.SyncAttributesAndOfferingsStrings>;
          public static INSTANCE: com.revenuecat.purchases.strings.SyncAttributesAndOfferingsStrings;
          public static RATE_LIMIT_REACHED: string = 'Sync attributes and offerings rate limit reached: %d per %d seconds. Returning offerings from cache';
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module subscriberattributes {
        export class SubscriberAttribute {
          public static class: java.lang.Class<com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>;
          public component4(): java.util.Date;
          public toJSONObject(): org.json.JSONObject;
          public component2(): string;
          public getSetTime(): java.util.Date;
          public equals(other: any): boolean;
          public getKey(): com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey;
          public component5(): boolean;
          public constructor(key: string, value: string, dateProvider: com.revenuecat.purchases.common.DateProvider, setTime: java.util.Date, isSynced: boolean);
          public toBackendMap(): java.util.Map<string, any>;
          public getValue(): string;
          public toString(): string;
          public constructor(key: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey, value: string, dateProvider: com.revenuecat.purchases.common.DateProvider, setTime: java.util.Date, isSynced: boolean);
          public component3(): com.revenuecat.purchases.common.DateProvider;
          public isSynced(): boolean;
          public hashCode(): number;
          public component1(): com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey;
          public copy(key: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey, value: string, dateProvider: com.revenuecat.purchases.common.DateProvider, setTime: java.util.Date, isSynced: boolean): com.revenuecat.purchases.subscriberattributes.SubscriberAttribute;
          public constructor(jsonObject: org.json.JSONObject);
          public getDateProvider(): com.revenuecat.purchases.common.DateProvider;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module subscriberattributes {
        export class SubscriberAttributesManager {
          public static class: java.lang.Class<com.revenuecat.purchases.subscriberattributes.SubscriberAttributesManager>;
          public getUnsyncedSubscriberAttributes(appUserID: string, completion: any): void;
          public getDeviceCache(): com.revenuecat.purchases.subscriberattributes.caching.SubscriberAttributesCache;
          public getBackend(): com.revenuecat.purchases.subscriberattributes.SubscriberAttributesPoster;
          public collectDeviceIdentifiers(appUserID: string, applicationContext: globalAndroid.app.Application): void;
          public setAttributionID(attributionKey: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey.AttributionIds, value: string, appUserID: string, applicationContext: globalAndroid.app.Application): void;
          public synchronizeSubscriberAttributesForAllUsers(currentAppUserID: string, completion: any): void;
          public constructor(deviceCache: com.revenuecat.purchases.subscriberattributes.caching.SubscriberAttributesCache, backend: com.revenuecat.purchases.subscriberattributes.SubscriberAttributesPoster, deviceIdentifiersFetcher: com.revenuecat.purchases.common.subscriberattributes.DeviceIdentifiersFetcher);
          public setAttributes(key: java.util.Map<string, string>, value: string): void;
          public setAttribute(key: com.revenuecat.purchases.common.subscriberattributes.SubscriberAttributeKey, value: string, appUserID: string): void;
          public markAsSynced(it: string, $i$a$takeIfSubscriberAttributesManager$markAsSynced$1$2: java.util.Map<string, com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>, it: java.util.List<com.revenuecat.purchases.common.SubscriberAttributeError>): void;
          public copyUnsyncedSubscriberAttributes(thisTemp: string, originalAppUserId: string): void;
        }
        export module SubscriberAttributesManager {
          export class ObtainDeviceIdentifiersObservable {
            public static class: java.lang.Class<com.revenuecat.purchases.subscriberattributes.SubscriberAttributesManager.ObtainDeviceIdentifiersObservable>;
            public constructor();
            public setNumberOfProcesses(value: number): void;
            public waitUntilIdle(completion: any): void;
            public getNumberOfProcesses(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module subscriberattributes {
        export class SubscriberAttributesPoster {
          public static class: java.lang.Class<com.revenuecat.purchases.subscriberattributes.SubscriberAttributesPoster>;
          public postSubscriberAttributes(attributes: java.util.Map<string, any>, appUserID: string, onSuccessHandler: any, onErrorHandler: any): void;
          public constructor(backendHelper: com.revenuecat.purchases.common.BackendHelper);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module subscriberattributes {
        export module caching {
          export class SubscriberAttributesCache {
            public static class: java.lang.Class<com.revenuecat.purchases.subscriberattributes.caching.SubscriberAttributesCache>;
            public cleanUpSubscriberAttributeCache(currentAppUserID: string, cacheEditor: globalAndroid.content.SharedPreferences.Editor): void;
            public constructor(deviceCache: com.revenuecat.purchases.common.caching.DeviceCache);
            public getAllStoredSubscriberAttributes(appUserID: string): java.util.Map<string, com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>;
            public getDeviceCache$purchases_defaultsRelease(): com.revenuecat.purchases.common.caching.DeviceCache;
            public getSubscriberAttributesCacheKey$purchases_defaultsRelease(): string;
            public setAttributes(currentlyStoredAttributesForAppUserID: string, updatedAttributesForUser: java.util.Map<string, com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>): void;
            public getAllStoredSubscriberAttributes(): java.util.Map<string, java.util.Map<string, com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>>;
            public clearSubscriberAttributesIfSyncedForSubscriber(thisTemp: string): void;
            public clearAllSubscriberAttributesFromUser(it: string): void;
            public getUnsyncedSubscriberAttributes(appUserID: string): java.util.Map<string, com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>;
            public getUnsyncedSubscriberAttributes(): java.util.Map<string, java.util.Map<string, com.revenuecat.purchases.subscriberattributes.SubscriberAttribute>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class CoilImageDownloader {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.CoilImageDownloader>;
          public downloadImage(thisTemp: globalAndroid.net.Uri): void;
          public constructor(applicationContext: globalAndroid.content.Context);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class CustomActivityLifecycleHandler {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.CustomActivityLifecycleHandler>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.utils.CustomActivityLifecycleHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void; onActivityStarted(param0: globalAndroid.app.Activity): void; onActivityResumed(param0: globalAndroid.app.Activity): void; onActivityPaused(param0: globalAndroid.app.Activity): void; onActivityStopped(param0: globalAndroid.app.Activity): void; onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void; onActivityDestroyed(param0: globalAndroid.app.Activity): void });
          public constructor();
          public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStarted(param0: globalAndroid.app.Activity): void;
          public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStopped(param0: globalAndroid.app.Activity): void;
          public onActivityResumed(param0: globalAndroid.app.Activity): void;
          public onActivityPaused(param0: globalAndroid.app.Activity): void;
          public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        }
        export module CustomActivityLifecycleHandler {
          export class DefaultImpls {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.CustomActivityLifecycleHandler.DefaultImpls>;
            public static onActivityStarted($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity): void;
            public static onActivitySaveInstanceState($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
            public static onActivityDestroyed($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity): void;
            public static onActivityStopped($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity): void;
            public static onActivityCreated($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
            public static onActivityResumed($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity): void;
            public static onActivityPaused($this: com.revenuecat.purchases.utils.CustomActivityLifecycleHandler, activity: globalAndroid.app.Activity): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class DateActive {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.DateActive>;
          public isActive(): boolean;
          public toString(): string;
          public constructor(isActive: boolean, inGracePeriod: boolean);
          public getInGracePeriod(): boolean;
          public copy(isActive: boolean, inGracePeriod: boolean): com.revenuecat.purchases.utils.DateActive;
          public equals(other: any): boolean;
          public component1(): boolean;
          public hashCode(): number;
          public component2(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class DateHelper {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.DateHelper>;
        }
        export module DateHelper {
          export class Companion {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.DateHelper.Companion>;
            public isDateActiveSxA4cEA(referenceDate: java.util.Date, thisTemp: java.util.Date, expirationDate: number): com.revenuecat.purchases.utils.DateActive;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class DefaultTimestampProvider extends com.revenuecat.purchases.utils.TimestampProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.DefaultTimestampProvider>;
          public getCurrentTimeMillis(): number;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class Event {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.Event>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.utils.Event interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { toString(): string });
          public constructor();
          public toString(): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class EventsFileHelper<T> extends java.lang.Object {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.EventsFileHelper<any>>;
          public readFileAsJson(streamBlock: any): void;
          public clear(eventsToDeleteCount: number): void;
          public readFile(thisTemp: any): void;
          public deleteFile(): void;
          public appendEvent(event: T): void;
          public constructor(fileHelper: com.revenuecat.purchases.common.FileHelper, filePath: string, eventDeserializer: any);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class Iso8601Utils {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.Iso8601Utils>;
          public static parse(calendar: string): java.util.Date;
          public constructor();
          public static format(date: java.util.Date): string;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class JSONObjectParceler extends kotlinx.parcelize.Parceler<org.json.JSONObject> {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.JSONObjectParceler>;
          public static INSTANCE: com.revenuecat.purchases.utils.JSONObjectParceler;
          public write($this$write: org.json.JSONObject, parcel: globalAndroid.os.Parcel, flags: number): void;
          public newArray(size: number): androidNative.Array<org.json.JSONObject>;
          public create(parcel: globalAndroid.os.Parcel): org.json.JSONObject;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class OfferingImagePreDownloader {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.OfferingImagePreDownloader>;
          public preDownloadOfferingImages(it: com.revenuecat.purchases.Offering): void;
          public constructor(shouldPredownloadImages: boolean, coilImageDownloader: com.revenuecat.purchases.utils.CoilImageDownloader);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class RateLimiter {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.RateLimiter>;
          public getMaxCallsInPeriod(): number;
          public shouldProceed(): boolean;
          public getPeriodSecondsUwyO8pc(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export abstract class Result<A, B> extends java.lang.Object {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.Result>;
        }
        export module Result {
          export class Error<B> extends com.revenuecat.purchases.utils.Result {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.Result.Error<any>>;
            public getValue(): any;
            public constructor(value: any);
          }
          export class Success<A> extends com.revenuecat.purchases.utils.Result {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.Result.Success<any>>;
            public getValue(): any;
            public constructor(value: any);
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class SerializationException {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.SerializationException>;
          public constructor(message: string, cause: java.lang.Throwable);
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export class TimestampProvider {
          public static class: java.lang.Class<com.revenuecat.purchases.utils.TimestampProvider>;
          /**
           * Constructs a new instance of the com.revenuecat.purchases.utils.TimestampProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getCurrentTimeMillis(): number });
          public constructor();
          public getCurrentTimeMillis(): number;
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export module serializers {
          export class DateSerializer extends kotlinx.serialization.KSerializer<java.util.Date> {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.serializers.DateSerializer>;
            public static INSTANCE: com.revenuecat.purchases.utils.serializers.DateSerializer;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.util.Date): void;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): java.util.Date;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export module serializers {
          export class GoogleListSerializer extends kotlinx.serialization.KSerializer<java.util.List<any>> {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.serializers.GoogleListSerializer>;
            public static INSTANCE: com.revenuecat.purchases.utils.serializers.GoogleListSerializer;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.util.List<string>): void;
            public deserialize(it: kotlinx.serialization.encoding.Decoder): java.util.List<string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export module serializers {
          export class OptionalURLSerializer extends kotlinx.serialization.KSerializer<java.net.URL> {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.serializers.OptionalURLSerializer>;
            public static INSTANCE: com.revenuecat.purchases.utils.serializers.OptionalURLSerializer;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public deserialize(thisTemp: kotlinx.serialization.encoding.Decoder): java.net.URL;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.net.URL): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export module serializers {
          export class URLSerializer extends kotlinx.serialization.KSerializer<java.net.URL> {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.serializers.URLSerializer>;
            public static INSTANCE: com.revenuecat.purchases.utils.serializers.URLSerializer;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.net.URL): void;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): java.net.URL;
          }
        }
      }
    }
  }
}

declare module com {
  export module revenuecat {
    export module purchases {
      export module utils {
        export module serializers {
          export class UUIDSerializer extends kotlinx.serialization.KSerializer<java.util.UUID> {
            public static class: java.lang.Class<com.revenuecat.purchases.utils.serializers.UUIDSerializer>;
            public static INSTANCE: com.revenuecat.purchases.utils.serializers.UUIDSerializer;
            public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
            public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: java.util.UUID): void;
            public deserialize(decoder: kotlinx.serialization.encoding.Decoder): java.util.UUID;
          }
        }
      }
    }
  }
}

//Generics information:
//com.revenuecat.purchases.common.caching.InMemoryCachedObject:1
//com.revenuecat.purchases.google.usecase.BillingClientUseCase:1
//com.revenuecat.purchases.interfaces.Callback:1
//com.revenuecat.purchases.models.RawDataContainer:1
//com.revenuecat.purchases.utils.EventsFileHelper:1
//com.revenuecat.purchases.utils.Result:2
//com.revenuecat.purchases.utils.Result.Error:1
//com.revenuecat.purchases.utils.Result.Success:1
