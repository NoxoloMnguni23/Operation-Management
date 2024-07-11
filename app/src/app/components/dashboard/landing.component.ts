// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector } from '@angular/core'; //_splitter_
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
      this.sd_g8anwqOVxkl7dnK1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_g8anwqOVxkl7dnK1(bh) {
    try {
      bh = this.sd_oVwRlrUvGw6hhxZi(bh);
      //appendnew_next_sd_g8anwqOVxkl7dnK1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g8anwqOVxkl7dnK1');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3NNfV54q3dEqyXcq');
    }
  }

  openForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TetSjqbxmzLs0g9j(bh);
      //appendnew_next_openForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IFPuG9EBlYn7BebM');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_oVwRlrUvGw6hhxZi(bh) {
    try {
      bh = this.sd_2l8EVQOKmVRV14Om(bh);
      //appendnew_next_sd_oVwRlrUvGw6hhxZi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oVwRlrUvGw6hhxZi');
    }
  }

  sd_2l8EVQOKmVRV14Om(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_HqphZUawWwBmzlQe(bh);
      //appendnew_next_sd_2l8EVQOKmVRV14Om
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2l8EVQOKmVRV14Om');
    }
  }

  sd_HqphZUawWwBmzlQe(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_RDN6unfHnk0O5Kfz(bh);
      //appendnew_next_sd_HqphZUawWwBmzlQe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HqphZUawWwBmzlQe');
    }
  }

  sd_RDN6unfHnk0O5Kfz(bh) {
    try {
      const page = this.page;
      bh.url = bh.url + 'get-receipt-data';
      bh = this.getReceipts(bh);
      //appendnew_next_sd_RDN6unfHnk0O5Kfz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RDN6unfHnk0O5Kfz');
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
      bh = this.sd_qzr4I51Z7TShqyIx(bh);
      //appendnew_next_getReceipts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F2ZToH6C34R0qqKu');
    }
  }

  sd_qzr4I51Z7TShqyIx(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_I8cgmZAyUMYw2KLe(bh);
      //appendnew_next_sd_qzr4I51Z7TShqyIx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qzr4I51Z7TShqyIx');
    }
  }

  sd_I8cgmZAyUMYw2KLe(bh) {
    try {
      const page = this.page;

      bh.local.dataSource = new MatTableDataSource(page.resultReceipts);
      console.log(page.resultReceipts);

      bh = this.sd_VjJErNp31zBqY8tJ(bh);
      //appendnew_next_sd_I8cgmZAyUMYw2KLe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I8cgmZAyUMYw2KLe');
    }
  }

  sd_VjJErNp31zBqY8tJ(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_VjJErNp31zBqY8tJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VjJErNp31zBqY8tJ');
    }
  }

  async sd_TetSjqbxmzLs0g9j(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(
          '/operations_dashboard/add_receipt'
        );
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_TetSjqbxmzLs0g9j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TetSjqbxmzLs0g9j');
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
