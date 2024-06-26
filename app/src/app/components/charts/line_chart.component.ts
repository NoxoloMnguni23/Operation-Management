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
  selector: 'bh-line_chart',
  templateUrl: './line_chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class line_chartComponent {
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
      this.sd_stIqQyTQKpMlT5xk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_stIqQyTQKpMlT5xk(bh) {
    try {
      bh = this.sd_Dk6e19F4ZFxtymyB(bh);
      //appendnew_next_sd_stIqQyTQKpMlT5xk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_stIqQyTQKpMlT5xk');
    }
  }

  //appendnew_flow_line_chartComponent_start

  sd_Dk6e19F4ZFxtymyB(bh) {
    try {
      this.page.lineChartData = this.page.lineChartData;
      bh = this.sd_61T0Ny18yQQm3DCq(bh);
      //appendnew_next_sd_Dk6e19F4ZFxtymyB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dk6e19F4ZFxtymyB');
    }
  }

  sd_61T0Ny18yQQm3DCq(bh) {
    try {
      const page = this.page;
      page.lineChartData = [
        {
          name: 'Monthly Expenditure',
          series: [
            { value: 6000, name: 'January' },
            { value: 8000, name: 'February' },
            { value: 2500, name: 'March' },
            { value: 2500, name: 'April' },
            { value: 2900, name: 'May' },
            { value: 20500, name: 'June' },
            { value: 700, name: 'July' },
            { value: 9500, name: 'August' },
            { value: 0, name: 'September' },
            { value: 15000, name: 'October' },
            { value: 14000, name: 'November' },
            { value: 10000, name: 'December' },
          ],
        },
      ];

      // {
      // "name": "USA",
      // "series": [
      // {"value": 5481,"name":2010},
      // {"value": 5881,"name":2011},
      // {"value": 3860,"name":2012},
      // ]}
      // ];

      //appendnew_next_sd_61T0Ny18yQQm3DCq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_61T0Ny18yQQm3DCq');
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
  //appendnew_flow_line_chartComponent_Catch
}
