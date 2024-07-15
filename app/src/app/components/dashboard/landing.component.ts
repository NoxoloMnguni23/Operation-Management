// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
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
      bh = this.sd_xW4Pjtkb5SQe5Fy6(bh);
      //appendnew_next_sd_g8anwqOVxkl7dnK1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g8anwqOVxkl7dnK1');
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
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_7(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lxjKQIQOrizxa17u');
    }
  }

  viewReceipt(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_65wKzXS9Ws6GZAKR(bh);
      //appendnew_next_viewReceipt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f0M9zu2oEC7UL4PN');
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
      bh = this.sd_QBsrjh36mJG7EFMY(bh);
      //appendnew_next_selected
      return bh.input.row;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gwfbYYgTgPPU5vRK');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_xW4Pjtkb5SQe5Fy6(bh) {
    try {
      this.page.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_oVwRlrUvGw6hhxZi(bh);
      //appendnew_next_sd_xW4Pjtkb5SQe5Fy6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xW4Pjtkb5SQe5Fy6');
    }
  }

  sd_oVwRlrUvGw6hhxZi(bh) {
    try {
      this.page.showImage = this.page.false;
      this.page.image = undefined;
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

      console.log(bh.url);
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
      this.sd_vSgbhGeWJWC21z49(bh);
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
      console.log(bh.url);

      bh.local.dataSource = new MatTableDataSource(page.resultReceipts);
      console.log(page.resultReceipts);
      // console.log(bh.local.MatPaginator)

      page.resultReceipts.forEach((res) => console.log(res['Date-Uploaded']));

      bh = this.sd_2JXWvVyCSaWUOSSi(bh);
      //appendnew_next_sd_I8cgmZAyUMYw2KLe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I8cgmZAyUMYw2KLe');
    }
  }

  sd_2JXWvVyCSaWUOSSi(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_2JXWvVyCSaWUOSSi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2JXWvVyCSaWUOSSi');
    }
  }

  sd_vSgbhGeWJWC21z49(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.resultReceipts);
      //appendnew_next_sd_vSgbhGeWJWC21z49
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vSgbhGeWJWC21z49');
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

  sd_xKCCTWKzvgDN0rx7_7(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_7(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YunV0YBBxiCkT3rq');
    }
  }

  sd_2VNGqvcKee34lvOz_7(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7EXZYpVdzpz0TAgw');
    }
  }

  sd_65wKzXS9Ws6GZAKR(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = this.sd_kaZQB0oEeQCKBan3(bh);
      //appendnew_next_sd_65wKzXS9Ws6GZAKR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_65wKzXS9Ws6GZAKR');
    }
  }

  sd_kaZQB0oEeQCKBan3(bh) {
    try {
      const page = this.page; // bh.urlSdd = bh.url + 'download-file/:filename'
      bh.url = page.ssdUrl + `download-file/${page.user.fileid}`;
      page.image = page.sanitizer.bypassSecurityTrustHtml(bh.url);
      page.showImage = true;

      window.open('/file', '_blank');
      bh = this.view(bh);
      //appendnew_next_sd_kaZQB0oEeQCKBan3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kaZQB0oEeQCKBan3');
    }
  }

  async view(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.filename,
      };
      this.page.Receipt = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_view
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_evBTOr3PDTWQ4GjU');
    }
  }

  sd_QBsrjh36mJG7EFMY(bh) {
    try {
      const page = this.page;
      page.user = bh.input.row;
      page.router.navigate(['/selected_receipt_form']);
      bh = this.sd_K0NrFIERzJXKe8GP(bh);
      //appendnew_next_sd_QBsrjh36mJG7EFMY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QBsrjh36mJG7EFMY');
    }
  }

  sd_K0NrFIERzJXKe8GP(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(this.page.user));
      //appendnew_next_sd_K0NrFIERzJXKe8GP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K0NrFIERzJXKe8GP');
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
