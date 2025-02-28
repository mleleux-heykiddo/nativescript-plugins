import { EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFbAnalytics } from '@demo/shared';
import {} from '@mleleux/nativescript-fb-analytics';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFbAnalytics {}
