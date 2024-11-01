import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptRevenuecat } from '@demo/shared';
import {} from '@mleleux/nativescript-revenuecat';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptRevenuecat {}
