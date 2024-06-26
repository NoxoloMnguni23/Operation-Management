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
  selector: 'bh-signIn',
  templateUrl: './signIn.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class signInComponent {
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
      this.sd_ZWbgrLo5RCoZRp5A(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ZWbgrLo5RCoZRp5A(bh) {
    try {
      bh = this.sd_kyQIKe8WKryMkG6c(bh);
      //appendnew_next_sd_ZWbgrLo5RCoZRp5A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZWbgrLo5RCoZRp5A');
    }
  }

  //appendnew_flow_signInComponent_start

  sd_kyQIKe8WKryMkG6c(bh) {
    try {
      bh = this.sd_iG9OzR29o1W2QzI4(bh);
      //appendnew_next_sd_kyQIKe8WKryMkG6c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kyQIKe8WKryMkG6c');
    }
  }

  sd_iG9OzR29o1W2QzI4(bh) {
    try {
      const page = this.page;
      page.doughnutChartData = [
        { data: [50000, 23000, 27000], label: 'Series A' },
      ];

      page.doughnutChartLabels = ['Savings', 'Expenses', 'Available Balance'];

      page.doughnutChartColor = [
        {
          backgroundColor: 'rgba(256, 123, 234, 0.1)',
          borderColor: '#230b84',
          color: '#000',
        },
      ];

      page.chartOptions = {
        legend: {
          position: 'right', // Position legend to the right of the chart
        },
      };
      //appendnew_next_sd_iG9OzR29o1W2QzI4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iG9OzR29o1W2QzI4');
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
  //appendnew_flow_signInComponent_Catch
}
