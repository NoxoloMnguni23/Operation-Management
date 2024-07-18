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
      this.page.Groceries = [];
      this.page.Supplies = [];
      this.page.Maintenance = [];
      this.page.priceG = 0;
      this.page.priceM = 0;
      this.page.priceS = 0;
      this.page.Suppliesfinal = [];
      this.page.Maintenancefinal = [];
      this.page.Groceriesfinal = [];
      this.page.priceg = 0;
      this.page.prices = 0;
      this.page.pricem = 0;
      this.page._data = [];
      this.page.items = [];
      this.page.price1 = 0;
      this.page.selecteditems = [];
      this.page.data = [];
      bh = this.sd_BwADdgS5bjBPArMC(bh);
      //appendnew_next_sd_XASJm5GtYmf3XfeR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XASJm5GtYmf3XfeR');
    }
  }

  sd_BwADdgS5bjBPArMC(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.url(bh);
      //appendnew_next_sd_BwADdgS5bjBPArMC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BwADdgS5bjBPArMC');
    }
  }

  url(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-receipt-data';
      bh = this.getReceipts(bh);
      //appendnew_next_url
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_33O4LGTB5VW8oAbd');
    }
  }

  async getReceipts(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.resultItems = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getdataofthismonth(bh);
      //appendnew_next_getReceipts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3NPMdpIYttPiURrO');
    }
  }

  getdataofthismonth(bh) {
    try {
      const page = this.page;
      // console.log("Main datata", page.resultItems)

      let dateToCompare = new Date().toLocaleDateString().substr(0, 1);

      let dateFromMongo = page.resultItems.map((item) => {
        return item['Date-Uploaded'];
      });

      // console.log('date uploaded:', dateFromMongo)
      page.monthToCompare;
      for (let i = 0; i < dateFromMongo.length; i++) {
        page.monthToCompare = dateFromMongo[i].substr(6, 1);
        // console.log("date items",page.monthToCompare)
        if (page.monthToCompare == dateToCompare) {
          page.selecteditems.push(page.resultItems[i]);
        }
      }
      // console.log("datauptodate", page.selecteditems)

      bh = this.turnItToANArray(bh);
      //appendnew_next_getdataofthismonth
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YxUr7NgnHss76QvQ');
    }
  }

  turnItToANArray(bh) {
    try {
      const page = this.page; // page.page._data
      //  page.selecteditems.filter((item,i) =>{
      //     console.log("Item",item.items);

      // } )

      // let items = []

      // console.log("Main data", page.selecteditems)

      for (let i = 0; i < page.selecteditems.length; i++) {
        page._data.push(page.selecteditems[i].items);
      }

      for (let i = 0; i < page._data.length; i++) {
        for (let j = 0; j < page._data[i].length; j++) {
          page.data.push(page._data[i][j]);
        }
      }

      // console.log("Final data", page.data)
      // console.log("data", page._data)
      // page.items.forEach(item => {
      //   console.log("items ",item)
      //   })
      bh = this.sd_1IobYtlsatlI64fh(bh);
      //appendnew_next_turnItToANArray
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cjPeEs7jJtuVZkh2');
    }
  }

  sd_1IobYtlsatlI64fh(bh) {
    try {
      const page = this.page;
      page.items = page.data.map((item) => {
        let newitem = {};
        for (let key in item) {
          let newKey = key.replace(/[0-9]/g, '');
          newitem[newKey] = item[key];
        }
        return newitem;
      });
      // console.log(page.items)
      bh = this.separateTheCategories(bh);
      //appendnew_next_sd_1IobYtlsatlI64fh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1IobYtlsatlI64fh');
    }
  }

  separateTheCategories(bh) {
    try {
      const page = this.page;

      page.items.forEach((item) => {
        if (item.category === 'Groceries' || item.category === 'groceries') {
          page.Groceries.push(item);
        }
        if (item.category === 'Supplies' || item.category === 'supplies') {
          return page.Supplies.push(item);
        }
        if (
          item.category === 'Maintenance' ||
          item.category === 'maintenance'
        ) {
          return page.Maintenance.push(item);
        }
      });

      // page.Milk = page.items.filter(arr => arr.name == "Milk")

      // page.milkItems = page.items.filter(item => item.name === "Milk");
      // page.milkCount = page.milkItems.length;
      // page.milkTotalPrice = page.milkItems.reduce((total, item) => total + item.price, 0);

      // console.log(`Number of "Milk" items: ${page.milkCount}`);
      // console.log(`Total price of "Milk" items: R${page.milkTotalPrice.toFixed(2)}`);

      //  console.log( page.Groceries)

      // console.log( page.Supplies)
      //  console.log( page.Maintenance)
      //  console.log( page.Milk)
      bh = this.getTheTotalAmount(bh);
      //appendnew_next_separateTheCategories
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MwRsJo4lV9LxxPCW');
    }
  }

  getTheTotalAmount(bh) {
    try {
      const page = this.page;
      page.Groceries.forEach((item) => {
        // console.log(item.price)
        page.priceg = page.priceg + item.price;
        page.priceG = page.priceg.toFixed(2);
      });
      page.Supplies.forEach((item) => {
        page.prices = page.prices + item.price;
        page.priceS = page.prices.toFixed(2);
      });
      page.Maintenance.forEach((item) => {
        page.pricem = page.pricem + item.price;
        page.priceM = page.pricem.toFixed(2);
      });
      // console.log("page.priceG",page.priceG)
      // console.log("page.priceS",page.priceS)
      // console.log("page.priceM",page.priceM)
      bh = this.informationOnTheDonut(bh);
      //appendnew_next_getTheTotalAmount
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SKCtHJkWA3Ww9vcJ');
    }
  }

  informationOnTheDonut(bh) {
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
      bh = this.supplies(bh);
      //appendnew_next_informationOnTheDonut
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JYIOkH9NmgEaHeE6');
    }
  }

  supplies(bh) {
    try {
      const page = this.page; // console.log(page.Supplies)
      page.Supplies.forEach((item) => {
        if (
          !page.Suppliesfinal.find(
            (__item) => __item.itemName === item.itemName
          )
        ) {
          item['itemsCount'] = 1;
          page.Suppliesfinal.push(item);
        } else {
          page.Suppliesfinal.forEach((_item, indx) => {
            if (_item.itemName === item.itemName) {
              page.Suppliesfinal[indx].price =
                Math.round(
                  (page.Suppliesfinal[indx].price + item.price) * 100
                ) / 100;
              page.Suppliesfinal[indx].itemsCount += 1;
            }
          });
        }
      });
      // console.log("page.Suppliesfinal", page.Suppliesfinal)
      bh = this.maintenance(bh);
      //appendnew_next_supplies
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bDJi4ASAW2RU4LOe');
    }
  }

  maintenance(bh) {
    try {
      const page = this.page;
      page.Maintenance.forEach((item) => {
        if (
          !page.Maintenancefinal.find(
            (__item) => __item.itemName === item.itemName
          )
        ) {
          item['itemsCount'] = 1;
          page.Maintenancefinal.push(item);
        } else {
          page.Maintenancefinal.forEach((_item, indx) => {
            if (_item.itemName === item.itemName) {
              page.Maintenancefinal[indx].price =
                Math.round(
                  (page.Maintenancefinal[indx].price + item.price) * 100
                ) / 100;
              page.Maintenancefinal[indx].itemsCount += 1;
            }
          });
        }
      });
      bh = this.groceries(bh);
      //appendnew_next_maintenance
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fq6qiHNJvpwKvu5c');
    }
  }

  groceries(bh) {
    try {
      const page = this.page;
      page.Groceries.forEach((item) => {
        if (
          !page.Groceriesfinal.find(
            (__item) => __item.itemName === item.itemName
          )
        ) {
          item['itemsCount'] = 1;
          page.Groceriesfinal.push(item);
        } else {
          page.Groceriesfinal.forEach((_item, indx) => {
            if (_item.itemName === item.itemName) {
              page.Groceriesfinal[indx].price =
                Math.round(
                  (page.Groceriesfinal[indx].price + item.price) * 100
                ) / 100;
              page.Groceriesfinal[indx].itemsCount += 1;
            }
          });
        }
      });
      //appendnew_next_groceries
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ysYTNzvv6mWUJoXn');
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
