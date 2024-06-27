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
  selector: 'bh-categories',
  templateUrl: './categories.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class categoriesComponent {
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
      this.sd_ur9hkAgcy7ijyncx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ur9hkAgcy7ijyncx(bh) {
    try {
      bh = this.sd_XASJm5GtYmf3XfeR(bh);
      //appendnew_next_sd_ur9hkAgcy7ijyncx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ur9hkAgcy7ijyncx');
    }
  }

  //appendnew_flow_categoriesComponent_start

  sd_XASJm5GtYmf3XfeR(bh) {
    try {
      this.page.items = undefined;
      this.page.Groceries = [];
      this.page.Supplies = [];
      this.page.Maintenance = [];
      this.page.priceG = 0;
      this.page.priceM = 0;
      this.page.priceS = 0;
      bh = this.sd_MwRsJo4lV9LxxPCW(bh);
      //appendnew_next_sd_XASJm5GtYmf3XfeR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XASJm5GtYmf3XfeR');
    }
  }

  sd_MwRsJo4lV9LxxPCW(bh) {
    try {
      const page = this.page;
      page.items = [
        { category: 'Groceries', name: 'Eggs', price: 2.99 },
        { category: 'Groceries', name: 'Milk', price: 3.49 },
        { category: 'Groceries', name: 'Bread', price: 2.0 },
        { category: 'Groceries', name: 'Apples', price: 1.99 },
        { category: 'Groceries', name: 'Pasta', price: 1.5 },
        {
          category: 'Maintenance',
          name: 'Light bulbs (pack of 4)',
          price: 8.99,
        },
        {
          category: 'Maintenance',
          name: 'AA Batteries (pack of 12)',
          price: 6.49,
        },
        { category: 'Maintenance', name: 'Duct Tape', price: 4.99 },
        { category: 'Maintenance', name: 'Multi-purpose Cleaner', price: 3.79 },
        {
          category: 'Maintenance',
          name: 'Paper Towels (pack of 6 rolls)',
          price: 9.99,
        },
        {
          category: 'Supplies',
          name: 'Printer Paper (ream of 500 sheets)',
          price: 5.99,
        },
        { category: 'Supplies', name: 'Pens (pack of 10)', price: 3.49 },
        { category: 'Supplies', name: 'Scotch Tape', price: 2.99 },
        { category: 'Supplies', name: 'Envelopes (pack of 50)', price: 7.99 },
        {
          category: 'Supplies',
          name: 'Sticky Notes (pack of 100)',
          price: 4.29,
        },
      ];
      page.items.forEach((item) => {
        if (item.category === 'Groceries') {
          page.Groceries.push(item);
        }
        if (item.category === 'Supplies') {
          return page.Supplies.push(item);
        }
        if (item.category === 'Maintenance') {
          return page.Maintenance.push(item);
        }
      });
      console.log(page.Groceries);

      console.log(page.Supplies);
      console.log(page.Maintenance);
      bh = this.sd_SKCtHJkWA3Ww9vcJ(bh);
      //appendnew_next_sd_MwRsJo4lV9LxxPCW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MwRsJo4lV9LxxPCW');
    }
  }

  sd_SKCtHJkWA3Ww9vcJ(bh) {
    try {
      const page = this.page;
      page.Groceries.forEach((item) => {
        page.priceG = page.priceG + item.price;
      });
      page.Supplies.forEach((item) => {
        page.priceS = page.priceS + item.price;
      });
      page.Maintenance.forEach((item) => {
        page.priceM = page.priceM + item.price;
      });

      bh = this.sd_JYIOkH9NmgEaHeE6(bh);
      //appendnew_next_sd_SKCtHJkWA3Ww9vcJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SKCtHJkWA3Ww9vcJ');
    }
  }

  sd_JYIOkH9NmgEaHeE6(bh) {
    try {
      const page = this.page;
      page.doughnutChartData = [
        { data: [page.priceG, page.priceS, page.priceM], label: 'Series A' },
      ];

      page.doughnutChartLabels = ['Groceries', 'Supplies', 'Maintenance'];

      page.doughnutChartColor = [
        {
          backgroundColor: 'rgba(256, 123, 234, 0.1)',
          borderColor: '#230b76',
          color: '#080',
        },
      ];

      page.chartOptions = {
        legend: {
          position: 'right', // Position legend to the right of the chart
        },
      };
      //appendnew_next_sd_JYIOkH9NmgEaHeE6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JYIOkH9NmgEaHeE6');
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
  //appendnew_flow_categoriesComponent_Catch
}
