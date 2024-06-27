// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-statisticsComponent
import { statisticsComponent } from '../components/statistics/statistics.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/dashboard/landing.component';
//CORE_REFERENCE_IMPORT-donut_chartComponent
import { donut_chartComponent } from '../components/charts/donut_chart.component';
//CORE_REFERENCE_IMPORT-line_chartComponent
import { line_chartComponent } from '../components/charts/line_chart.component';
//CORE_REFERENCE_IMPORT-login_guidelinesComponent
import { login_guidelinesComponent } from '../components/dashboard/login_guidelines.component';
//CORE_REFERENCE_IMPORT-categoriesComponent
import { categoriesComponent } from '../components/categories/categories.component';
//CORE_REFERENCE_IMPORT-all_purchased_items_tableComponent
import { all_purchased_items_tableComponent } from '../components/reports/all_purchased_items_table.component';
//CORE_REFERENCE_IMPORT-signInComponent
import { signInComponent } from '../components/sign_In/signIn.component';
//CORE_REFERENCE_IMPORT-add_receiptComponent
import { add_receiptComponent } from '../components/receipt/add_receipt.component';
//CORE_REFERENCE_IMPORT-view_table_of_claimsComponent
import { view_table_of_claimsComponent } from '../components/claims/view_table_of_claims.component';
//CORE_REFERENCE_IMPORT-view_table_of_receiptComponent
import { view_table_of_receiptComponent } from '../components/receipt/view_table_of_receipt.component';
//CORE_REFERENCE_IMPORT-selected_claims_formComponent
import { selected_claims_formComponent } from '../components/claims/selected_claims_form.component';
//CORE_REFERENCE_IMPORT-add_claims_formComponent
import { add_claims_formComponent } from '../components/claims/add_claims_form.component';
//CORE_REFERENCE_IMPORT-selected_receipt_formComponent
import { selected_receipt_formComponent } from '../components/receipt/selected_receipt_form.component';
//CORE_REFERENCE_IMPORT-user_dashboardComponent
import { user_dashboardComponent } from '../components/dashboard/user_dashboard.component';
//CORE_REFERENCE_IMPORT-operations_dashboardComponent
import { operations_dashboardComponent } from '../components/dashboard/operations_dashboard.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-statisticsComponent
  statisticsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-donut_chartComponent
  donut_chartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-line_chartComponent
  line_chartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-login_guidelinesComponent
  login_guidelinesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-categoriesComponent
  categoriesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-all_purchased_items_tableComponent
  all_purchased_items_tableComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-signInComponent
  signInComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_receiptComponent
  add_receiptComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_table_of_claimsComponent
  view_table_of_claimsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_table_of_receiptComponent
  view_table_of_receiptComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selected_claims_formComponent
  selected_claims_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_claims_formComponent
  add_claims_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-selected_receipt_formComponent
  selected_receipt_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-user_dashboardComponent
  user_dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-operations_dashboardComponent
  operations_dashboardComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'signIn', component: signInComponent },
  {
    path: 'operations_dashboard',
    component: operations_dashboardComponent,
    children: [
      {
        path: 'view_table_of_receipt',
        component: view_table_of_receiptComponent,
      },
      { path: 'categories', component: categoriesComponent },
      {
        path: 'all_purchased_items_table',
        component: all_purchased_items_tableComponent,
      },
      { path: 'statistics', component: statisticsComponent },
    ],
  },
  { path: 'operations_dashboard', component: operations_dashboardComponent },
  { path: 'user_dashboard', component: user_dashboardComponent },
  { path: 'add_receipt', component: add_receiptComponent },
  { path: 'selected_receipt_form', component: selected_receipt_formComponent },
  { path: 'view_table_of_receipt', component: view_table_of_receiptComponent },
  {
    path: 'all_purchased_items_table',
    component: all_purchased_items_tableComponent,
  },
  { path: 'login_guidelines', component: login_guidelinesComponent },
  { path: 'line_chart', component: line_chartComponent },
  { path: 'donut_chart', component: donut_chartComponent },
  { path: 'landing', component: landingComponent },
  { path: '', redirectTo: '/operations_dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
