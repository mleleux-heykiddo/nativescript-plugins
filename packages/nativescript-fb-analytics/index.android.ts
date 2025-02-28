import { FBAnalyticsCommon } from './common';
import { Utils } from '@nativescript/core';

export class FBAnalytics extends FBAnalyticsCommon {
  static setAutoInitEnabled(enabled: boolean) {
    com.facebook.FacebookSdk.setAutoInitEnabled(enabled);
  }

  static logEvent(name: string, properties?: any) {
    if (name === undefined) {
      throw "Argument 'name' is missing";
    }

    if (properties !== undefined) {
      const bundle = new android.os.Bundle();
      // const propValues = Utils.dataSerialize(properties);
      // console.log(propValues);
      for (const p in properties) {
        const param = properties[p];
        if (param !== undefined) {
          bundle.putString(p, param);
        }
      }
      com.facebook.appevents.AppEventsLogger.newLogger(Utils.android.getApplicationContext()).logEvent(name, bundle);
    } else {
      com.facebook.appevents.AppEventsLogger.newLogger(Utils.android.getApplicationContext()).logEvent(name);
    }
  }
}
