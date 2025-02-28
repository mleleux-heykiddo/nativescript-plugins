import { FBAnalyticsCommon } from './common';

export class FBAnalytics extends FBAnalyticsCommon {
  static setAutoInitEnabled(enabled: boolean) {
    if (enabled) {
      FBSDKAppEvents.activateApp();
    }
  }

  static logEvent(name: string, properties?: any) {
    if (name === undefined) {
      throw "Argument 'name' is missing";
    }

    if (properties === undefined) {
      FBSDKAppEvents.logEvent(name);
    } else {
      FBSDKAppEvents.logEventParameters(name, properties);
    }
  }
}
