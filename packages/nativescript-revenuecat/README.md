# @mleleux/nativescript-revenuecat

[RevenueCat](https://www.revenuecat.com/docs/welcome/overview) SDk for NativeScript

A powerful and reliable in-app purchase server that makes it easy to build, analyze, and grow your subscriber base whether you're just starting out or already have millions of customers.

```javascript
npm install @mleleux/nativescript-revenuecat
```

## Usage

Initialize the SDK with your api key before the app boots:

```
Application.on(Application.launchEvent, () => {
  RevenueCat.configure('<api-key>');
});
```

OR

Initialize the SDK with your api key and unique userId before purchasing or restoring previous purchases is required:

```
RevenueCat.configure('<api-key>', '<userId>');
```

## Testing

- Make sure to update the `nativescript.config.ts -> id` value so that it matches your setup in RevenueCat before testing this plugin.

- If you are using the `getProducts` method to test, be sure to update the product id's within `tools -> demo -> nativescript-revenuecat -> index.ts`

## API

- `RevenueCat.configure(apiKey: string, appUserId?: string)`: Initialize the SDK with your api key and optional appUserId
- `RevenueCat.setSimulatesAskToBuyInSandbox- (simulatesAskToBuyInSandbox: boolean)`: Set this property to `true` to enable simulating the Ask-To-Buy
- `RevenueCat.getProducts(productIdentifiers: string[], type?: ProductCategory)`: Fetch the products for the given identifiers
- `RevenueCat.getCurrentOffering()`: Fetch the current offering
- `RevenueCat.getAllOfferings()`: Fetch all offerings
- `RevenueCat.getEntitlementInfos()`: Fetch the entitlements for the user
- `RevenueCat.purchaseProduct(product: Product)`: Purchase a product
- `RevenueCat.restorePurchases()`: Restore purchases
- `RevenueCat.getAppUserID()`: Get the current app user id
- `RevenueCat.logIn(appUserID: string)`: Log in with the given app user id
- `RevenueCat.logOut()`: Log out the current user
- `RevenueCat.setDebugLogsEnabled(enabled: boolean)`: Enable debug logs
- `RevenueCat.setLogLevel(level: number)`: Set the log level
- `RevenueCat.getCustomerInfo()`: Fetch the customer info
- `RevenueCat.setAttributes(attributes: { [key: string]: - string })`: Set the attributes for the user
- `RevenueCat.setEmail(email: string)`: Set the email for the user
- `RevenueCat.setPhoneNumber(phoneNumber: string)`: Set the phone number for the user
- `RevenueCat.setDisplayName(displayName: string)`: Set the display name for the user
- `RevenueCat.setFirebaseAppInstanceID(firebaseAppInstanceID: - string)`: Set the firebase app instance id
- `RevenueCat.setKeyword(keyword: string)`: Set the keyword
- `RevenueCat.canMakePayments()`: Check if the user can make payments
- `RevenueCat.isConfigured()`: Check if the SDK is configured
