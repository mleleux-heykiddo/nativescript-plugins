import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nativescript-fb-analytics', loadChildren: () => import('./plugin-demos/nativescript-fb-analytics.module').then((m) => m.NativescriptFbAnalyticsModule) },
  { path: 'nativescript-revenuecat', loadChildren: () => import('./plugin-demos/nativescript-revenuecat.module').then((m) => m.NativescriptRevenuecatModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
