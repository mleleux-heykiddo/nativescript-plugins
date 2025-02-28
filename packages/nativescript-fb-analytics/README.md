# Nativescript: Facebook Analytics

Adds _only_ Facebook Analytics to your Nativescript app _not_ the full Facebook SDK.

## Installation

```
npm install @mleleux/nativescript-fb-analytics
```

## Configuration

The following configuration is needed in order to get started with Facebook Analytics. In order to obtain a Facebook App-ID please refer to the official [documentation](https://developers.facebook.com/docs/apps/).

Initialize the plugin before calling `app.run`:

```js
import { ApplicationEventData, Application } from '@nativescript/core';
import { FBAnalytics } from '@mleleux/nativescript-fb-analytics';

Application.on(Application.launchEvent, async (args: ApplicationEventData) => {
  FBAnalytics.setAutoInitEnabled(true);
});
```

Additional configs needed for **Android**:

```xml
<!--your-project/app/App_Resources/Android/src/main/res/values/strings.xml-->
<string name="facebook_app_id">YOUR_APP_ID</string>
<string name="facebook_client_token">YOUR_CLIENT_TOKEN</string>


<!--your-project/app/App_Resources/Android/src/main/res/AndroidManifest.xml-->
<application
	android:name="com.tns.NativeScriptApplication"
	android:allowBackup="true"
	android:icon="@drawable/icon"
	android:label="@string/app_name"
	android:theme="@style/AppTheme">

    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
	...
</application>
```

Additional configs needed for **iOS**:

```xml
<!--your-project/app/App_Resources/iOS/Info.plist-->
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
      <array>
        <string>fbYOUR_APP_ID</string>
      </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>YOUR_APP_ID</string>
<key>FacebookClientToken</key>
<string>YOUR_CLIENT_TOKEN</string>
<key>FacebookDisplayName</key>
<string>YOUR_APP_NAME</string>
```

## Usage

You can log events from anywhere you want by importing

```js
import { FBAnalytics } from '@mleleux/nativescript-fb-analytics';
```

and calling

```js
FBAnalytics.logEvent('Lead');
```

You may also add parameters to your event logging:

```js
const value = 5;
const property = {
  key: 'value',
  value: value.toString(),
};

FBAnalytics.logEvent('FundsAdded', property);
```
