import { DemoSharedBase } from '../utils';
import { FBAnalytics } from '@mleleux/nativescript-fb-analytics';

export class DemoSharedNativescriptFbAnalytics extends DemoSharedBase {
  initApp() {
    FBAnalytics.setAutoInitEnabled(true);
    console.log('App initialized');
  }

  logEvent() {
    FBAnalytics.logEvent('test_event', { key: 'value' });
    console.log('Event logged');
  }
}
