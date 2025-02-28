import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFbAnalytics } from '@demo/shared';
import {} from '@mleleux/nativescript-fb-analytics';

@Component({
  selector: 'demo-nativescript-fb-analytics',
  templateUrl: 'nativescript-fb-analytics.component.html',
})
export class NativescriptFbAnalyticsComponent {
  demoShared: DemoSharedNativescriptFbAnalytics;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptFbAnalytics();
  }
}
