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
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_PG5aMe7N1BaiAMNc(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PG5aMe7N1BaiAMNc(bh) {
    try {
      bh = this.sd_9z36AQr1fte2OtQ1(bh);
      //appendnew_next_sd_PG5aMe7N1BaiAMNc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PG5aMe7N1BaiAMNc');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TcpEVFmLhVHrtnsd');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_adOvmBOSHQzLkxFH');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_9z36AQr1fte2OtQ1(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_9z36AQr1fte2OtQ1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9z36AQr1fte2OtQ1');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          position: 1,
          name: 'Hydrogen',
          weight: 1.0079,
          symbol: 'H',
        },
        {
          position: 2,
          name: 'Helium',
          weight: 4.0026,
          symbol: 'He',
        },
        {
          position: 3,
          name: 'Lithium',
          weight: 6.941,
          symbol: 'Li',
        },
        {
          position: 4,
          name: 'Beryllium',
          weight: 9.0122,
          symbol: 'Be',
        },
        {
          position: 5,
          name: 'Boron',
          weight: 10.811,
          symbol: 'B',
        },
        {
          position: 6,
          name: 'Carbon',
          weight: 12.0107,
          symbol: 'C',
        },
        {
          position: 7,
          name: 'Nitrogen',
          weight: 14.0067,
          symbol: 'N',
        },
        {
          position: 8,
          name: 'Oxygen',
          weight: 15.9994,
          symbol: 'O',
        },
        {
          position: 9,
          name: 'Fluorine',
          weight: 18.9984,
          symbol: 'F',
        },
        {
          position: 10,
          name: 'Neon',
          weight: 20.1797,
          symbol: 'Ne',
        },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_guYnU3kGwfXJ2Upw');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_cZTbTliooxQEmZva(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fzMYPQElq5d2IBqG');
    }
  }

  sd_cZTbTliooxQEmZva(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_NnspzZp9hDl35KZN(bh);
      //appendnew_next_sd_cZTbTliooxQEmZva
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cZTbTliooxQEmZva');
    }
  }

  sd_NnspzZp9hDl35KZN(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_K06IhtGGYLY1T8aV(bh);
      //appendnew_next_sd_NnspzZp9hDl35KZN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NnspzZp9hDl35KZN');
    }
  }

  sd_K06IhtGGYLY1T8aV(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-receipt-data';
      bh = this.getReceipts(bh);
      //appendnew_next_sd_K06IhtGGYLY1T8aV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K06IhtGGYLY1T8aV');
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
      bh = this.sd_8ougUSQ0VB24ZYvg(bh);
      //appendnew_next_getReceipts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tpNQaIaEDvxKME3M');
    }
  }

  sd_8ougUSQ0VB24ZYvg(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_RjtqOtUC3AKvIjvY(bh);
      //appendnew_next_sd_8ougUSQ0VB24ZYvg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ougUSQ0VB24ZYvg');
    }
  }

  sd_RjtqOtUC3AKvIjvY(bh) {
    try {
      const page = this.page;

      bh.local.dataSource = new MatTableDataSource(page.resultReceipts);
      console.log(page.resultReceipts);

      bh = this.sd_YArsXmdKRkOBbExv(bh);
      //appendnew_next_sd_RjtqOtUC3AKvIjvY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RjtqOtUC3AKvIjvY');
    }
  }

  sd_YArsXmdKRkOBbExv(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_YArsXmdKRkOBbExv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YArsXmdKRkOBbExv');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kdbTyXJHq1vVj97I');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      bh = this.sd_xKCCTWKzvgDN0rx7_3(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PqaCUfVlp6W0oJpn');
    }
  }

  sd_xKCCTWKzvgDN0rx7_3(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vMGq3mJsxptAqFPu');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tARZt0DRobSjBj9K');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Guxm8ekaFD3uuhdD');
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
  //appendnew_flow_landingComponent_Catch
}
