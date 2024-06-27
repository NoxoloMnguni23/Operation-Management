// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-operations_dashboard',
  templateUrl: './operations_dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class operations_dashboardComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_7yx73swzCgSQ89eB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7yx73swzCgSQ89eB(bh) {
    try {
      bh = this.sd_O2uh2oOCq9Gzz9zw(bh);
      //appendnew_next_sd_7yx73swzCgSQ89eB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7yx73swzCgSQ89eB');
    }
  }

  sidenavToggles(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_30pcqYf701ywgBPP(bh);
      //appendnew_next_sidenavToggles
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o1OdsJdaSOvBrQpX');
    }
  }

  index(label: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { label };
      bh.local = {};
      bh = this.sd_R9E4FPsD1A4haZLZ(bh);
      //appendnew_next_index
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xeM9wambVxpp5VLA');
    }
  }
  //appendnew_flow_operations_dashboardComponent_start

  sd_O2uh2oOCq9Gzz9zw(bh) {
    try {
      const page = this.page;
      bh.menuItems = [
        {
          label: 'Dashboard',
          icon: 'dashboard',
          route: 'operations_dashboard',
        },
        { label: 'Categories', icon: 'category', route: 'categories' },
        { label: 'Receipts', icon: 'receipt', route: 'view_table_of_receipt' },
        {
          label: 'Reports',
          icon: 'table_view',
          route: 'all_purchased_items_table',
        },
        { label: 'Statistics', icon: 'trending_up', route: 'statistics' },
        { label: 'Logout', icon: 'logout', route: '/signIn' },
      ];
      bh = this.sd_oILf1PmiKBS7wYCG(bh);
      //appendnew_next_sd_O2uh2oOCq9Gzz9zw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O2uh2oOCq9Gzz9zw');
    }
  }

  sd_oILf1PmiKBS7wYCG(bh) {
    try {
      this.page.collapsed = true;
      this.page.menuItems = bh.menuItems;
      this.page.selectedItem = 0;
      bh = this.sd_5X1HLpopsEG2VXgY(bh);
      //appendnew_next_sd_oILf1PmiKBS7wYCG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oILf1PmiKBS7wYCG');
    }
  }

  sd_5X1HLpopsEG2VXgY(bh) {
    try {
      const page = this.page;
      page.collapsed = !page.collapsed;

      bh.firstItem = page.menuItems[0];

      bh = this.sd_0C6WjPKpUZdNPt2d(bh);
      //appendnew_next_sd_5X1HLpopsEG2VXgY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5X1HLpopsEG2VXgY');
    }
  }

  sd_0C6WjPKpUZdNPt2d(bh) {
    try {
      sessionStorage.setItem('menuLabels', JSON.stringify(bh.firstItem));
      bh = this.sd_YhA3OA5xsjzvr8dG(bh);
      //appendnew_next_sd_0C6WjPKpUZdNPt2d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0C6WjPKpUZdNPt2d');
    }
  }

  sd_YhA3OA5xsjzvr8dG(bh) {
    try {
      this.page.label = JSON.parse(sessionStorage.getItem('menuLabels'));
      //appendnew_next_sd_YhA3OA5xsjzvr8dG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YhA3OA5xsjzvr8dG');
    }
  }

  sd_30pcqYf701ywgBPP(bh) {
    try {
      const page = this.page;
      page.collapsed = !page.collapsed;
      //appendnew_next_sd_30pcqYf701ywgBPP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_30pcqYf701ywgBPP');
    }
  }

  sd_R9E4FPsD1A4haZLZ(bh) {
    try {
      const page = this.page;
      bh.menuLabel = bh.input.label;
      bh = this.sd_L81aWNgSsYcQyLt2(bh);
      //appendnew_next_sd_R9E4FPsD1A4haZLZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R9E4FPsD1A4haZLZ');
    }
  }

  sd_L81aWNgSsYcQyLt2(bh) {
    try {
      sessionStorage.setItem('menuLabels', JSON.stringify(bh.menuLabel));
      bh = this.sd_ESkOTLP0Ll1LnYvR(bh);
      //appendnew_next_sd_L81aWNgSsYcQyLt2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L81aWNgSsYcQyLt2');
    }
  }

  sd_ESkOTLP0Ll1LnYvR(bh) {
    try {
      this.page.label = JSON.parse(sessionStorage.getItem('menuLabels'));
      //appendnew_next_sd_ESkOTLP0Ll1LnYvR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ESkOTLP0Ll1LnYvR');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_operations_dashboardComponent_Catch
}
