/**
 * @type {com.revenuecat.purchases.PeriodType}
 * @description * RevenueCat Android SDK Entitlement period types.
 *
 * Native Enum value mapping:
 * - NORMAL: "NORMAL"
 * - INTRO: "INTRO"
 * - TRIAL: "TRIAL"
 */
export const EntitlementPeriodType: com.revenuecat.purchases.PeriodType = Object.keys(com.revenuecat.purchases.PeriodType).reduce((acc, key) => {
  acc[key] = key; // Ensure the PeriodType value is a string instead of the native object
  return acc;
}, {});
