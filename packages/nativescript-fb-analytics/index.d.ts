import { FBAnalyticsCommon } from './common';

export declare class FBAnalytics extends FBAnalyticsCommon {
  /**
   * Enable or disable auto initialization of the Facebook SDK.
   */
  static setAutoInitEnabled(enabled: boolean): void;

  static logEvent(name: string, properties: any): void;
}
