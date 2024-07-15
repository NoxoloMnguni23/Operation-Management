// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_table_of_receipt',
  templateUrl: './view_table_of_receipt.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_table_of_receiptComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
  @ViewChild(MatSort)
  public MatSort: any = null;
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
      this.sd_6O8tKNbGl02kCN3l(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6O8tKNbGl02kCN3l(bh) {
    try {
      bh = this.sd_lkXtOAkx1t3liJdt(bh);
      //appendnew_next_sd_6O8tKNbGl02kCN3l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6O8tKNbGl02kCN3l');
    }
  }

  onFilter_1(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_1(bh);
      //appendnew_next_onFilter_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T0BbfQcoOwupG32S');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_3(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zfOEljQEdUYfZ95X');
    }
  }

  selected(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_yhUPIkxL5GISAA7A(bh);
      //appendnew_next_selected
      return bh.input.row;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LPpzec9McQsWn2OI');
    }
  }
  //appendnew_flow_view_table_of_receiptComponent_start

  sd_lkXtOAkx1t3liJdt(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_XWnrzpDujDrKTFX5(bh);
      //appendnew_next_sd_lkXtOAkx1t3liJdt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lkXtOAkx1t3liJdt');
    }
  }

  sd_XWnrzpDujDrKTFX5(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_4Vf2IKcFehdqpqlz(bh);
      //appendnew_next_sd_XWnrzpDujDrKTFX5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XWnrzpDujDrKTFX5');
    }
  }

  sd_4Vf2IKcFehdqpqlz(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-receipt-data';
      bh = this.getReceipts(bh);
      //appendnew_next_sd_4Vf2IKcFehdqpqlz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Vf2IKcFehdqpqlz');
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
      this.page.resultReceipts = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_9aWkPj07I2WaYudo(bh);
      //appendnew_next_getReceipts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WuZPasacS9rk2wjU');
    }
  }

  sd_9aWkPj07I2WaYudo(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_ayQcTc5ezfm8IeZV(bh);
      //appendnew_next_sd_9aWkPj07I2WaYudo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9aWkPj07I2WaYudo');
    }
  }

  sd_ayQcTc5ezfm8IeZV(bh) {
    try {
      const page = this.page;

      bh.local.dataSource = new MatTableDataSource(page.resultReceipts);
      console.log(page.resultReceipts);

      bh.items = page.resultReceipts.items;

      // console.log("next",bh.items);

      bh = this.sd_MVjJdjj6fxMsPKnE(bh);
      //appendnew_next_sd_ayQcTc5ezfm8IeZV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ayQcTc5ezfm8IeZV');
    }
  }

  sd_MVjJdjj6fxMsPKnE(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_MVjJdjj6fxMsPKnE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVjJdjj6fxMsPKnE');
    }
  }

  sd_iBlFYTlpoczCmWts_1(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKxEW5tMPqq58rrp');
    }
  }

  sd_xKCCTWKzvgDN0rx7_3(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
        MatSort: this.MatSort,
      });
      bh = this.sd_cA1EQXXO6kwc8Trh(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wjPFEZ0PrZEjPYh2');
    }
  }

  sd_cA1EQXXO6kwc8Trh(bh) {
    try {
      this.page.tableData.sort = bh.pageViews.MatSort;
      this.page.tableData.paginator = bh.pageViews.MatPaginator;
      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_sd_cA1EQXXO6kwc8Trh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cA1EQXXO6kwc8Trh');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fsDpw6K92JfXYn9S');
    }
  }

  sd_yhUPIkxL5GISAA7A(bh) {
    try {
      const page = this.page;
      page.user = bh.input.row;
      page.router.navigate(['/selected_receipt_form']);
      bh = this.sd_LGhlzLP6xUWOykXK(bh);
      //appendnew_next_sd_yhUPIkxL5GISAA7A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yhUPIkxL5GISAA7A');
    }
  }

  sd_LGhlzLP6xUWOykXK(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.user));
      //appendnew_next_sd_LGhlzLP6xUWOykXK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LGhlzLP6xUWOykXK');
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
  //appendnew_flow_view_table_of_receiptComponent_Catch
}
