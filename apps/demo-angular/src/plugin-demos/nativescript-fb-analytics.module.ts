import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFbAnalyticsComponent } from './nativescript-fb-analytics.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFbAnalyticsComponent }])],
  declarations: [NativescriptFbAnalyticsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFbAnalyticsModule {}
