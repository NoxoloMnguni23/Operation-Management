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
  selector: 'bh-donut_chart',
  templateUrl: './donut_chart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class donut_chartComponent {
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
      this.sd_EXWXWGYu6Arm7abk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EXWXWGYu6Arm7abk(bh) {
    try {
      bh = this.sd_wriQccPkIfeEtZo6(bh);
      //appendnew_next_sd_EXWXWGYu6Arm7abk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EXWXWGYu6Arm7abk');
    }
  }

  sd_HydO33Nqx4PFt96G(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_MCz9QOdKbmqEwbUO(bh);
      //appendnew_next_sd_HydO33Nqx4PFt96G
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HydO33Nqx4PFt96G');
    }
  }
  //appendnew_flow_donut_chartComponent_start

  sd_wriQccPkIfeEtZo6(bh) {
    try {
      this.page.doughnutChartColor = this.page.doughnutChartColor;
      this.page.chartOptions = this.page.chartOptions;
      bh = this.sd_ZOpv5oYTlxoT6aiJ(bh);
      //appendnew_next_sd_wriQccPkIfeEtZo6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wriQccPkIfeEtZo6');
    }
  }

  sd_ZOpv5oYTlxoT6aiJ(bh) {
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

      //appendnew_next_sd_ZOpv5oYTlxoT6aiJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZOpv5oYTlxoT6aiJ');
    }
  }

  sd_MCz9QOdKbmqEwbUO(bh) {
    try {
      const page = this.page;
      page.chartOptions = {
        legend: {
          position: 'right', // Position legend to the right of the chart
        },
      };
      //appendnew_next_sd_MCz9QOdKbmqEwbUO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MCz9QOdKbmqEwbUO');
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
  //appendnew_flow_donut_chartComponent_Catch
}
