import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptRevenuecat } from '@demo/shared';
import {} from '@mleleux/nativescript-revenuecat';

@Component({
  selector: 'demo-nativescript-revenuecat',
  templateUrl: 'nativescript-revenuecat.component.html',
})
export class NativescriptRevenuecatComponent {
  demoShared: DemoSharedNativescriptRevenuecat;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptRevenuecat();
  }
}
