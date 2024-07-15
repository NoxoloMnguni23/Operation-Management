// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class getData {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_getData

  async getBudget(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_tUqxx9njMkvDDdLf(bh);
      //appendnew_next_getBudget
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dzZyPPm5dqP7j4HZ');
    }
  }

  async getReceiptData(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_pOpGVdzUrFILkbtk(bh);
      //appendnew_next_getReceiptData
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7i7nlkHrsMyU1EGm');
    }
  }
  //appendnew_flow_getData_start

  async sd_tUqxx9njMkvDDdLf(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_OuqPDlqkX2kdQaQP(bh);
      //appendnew_next_sd_tUqxx9njMkvDDdLf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tUqxx9njMkvDDdLf');
    }
  }

  async sd_OuqPDlqkX2kdQaQP(bh) {
    try {
      bh.url = bh.url + 'get-budget';
      bh = await this.sd_OgS6zkmyDzeOh11S(bh);
      //appendnew_next_sd_OuqPDlqkX2kdQaQP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OuqPDlqkX2kdQaQP');
    }
  }

  async sd_OgS6zkmyDzeOh11S(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.budgetResult = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_sJMw0sN6wXkrPsrA(bh);
      //appendnew_next_sd_OgS6zkmyDzeOh11S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OgS6zkmyDzeOh11S');
    }
  }

  async sd_sJMw0sN6wXkrPsrA(bh) {
    try {
      console.log('sserv', bh.budgetResult[0].budget);

      bh.arr1 = bh.budgetResult[0].budget;
      bh.arr2 = [];
      bh.arr1.forEach((item) => {
        bh.arr2.push(item.amount);
      });

      console.log(bh.arr2);
      //appendnew_next_sd_sJMw0sN6wXkrPsrA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sJMw0sN6wXkrPsrA');
    }
  }

  async sd_pOpGVdzUrFILkbtk(bh) {
    try {
      bh.url2 = bh.system.environment.properties.ssdURL;
      bh = await this.sd_sgo9Pg5P1HlceAxU(bh);
      //appendnew_next_sd_pOpGVdzUrFILkbtk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pOpGVdzUrFILkbtk');
    }
  }

  async sd_sgo9Pg5P1HlceAxU(bh) {
    try {
      bh.url2 = bh.url2 + 'get-receipt';
      bh = await this.sd_s8YUDyyXGxPospxi(bh);
      //appendnew_next_sd_sgo9Pg5P1HlceAxU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sgo9Pg5P1HlceAxU');
    }
  }

  async sd_s8YUDyyXGxPospxi(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.receiptDataServ = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_y2PapmBm5zyfBDfi(bh);
      //appendnew_next_sd_s8YUDyyXGxPospxi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s8YUDyyXGxPospxi');
    }
  }

  async sd_y2PapmBm5zyfBDfi(bh) {
    try {
      console.log('Receipt data from serv', bh.receiptDataServ);

      // bh.arr1 = bh.budgetResult[0].budget
      // bh.arr2 = []
      // bh.arr1.forEach(item => {
      //   bh.arr2.push(item.amount)
      // });

      // console.log(bh.arr2)

      //appendnew_next_sd_y2PapmBm5zyfBDfi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y2PapmBm5zyfBDfi');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_getData_Catch
}
