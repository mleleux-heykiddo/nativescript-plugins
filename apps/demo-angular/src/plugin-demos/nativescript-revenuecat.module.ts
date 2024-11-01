import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptRevenuecatComponent } from './nativescript-revenuecat.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptRevenuecatComponent }])],
  declarations: [NativescriptRevenuecatComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptRevenuecatModule {}
