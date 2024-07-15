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

  login(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Z91ui4Gdef4Ab0Py(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_945gHDBbunxj8TJd');
    }
  }

  loginNeutrinos(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PQUICE1LkppWKEQB(bh);
      //appendnew_next_loginNeutrinos
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8I1Fe4jb82mxtlST');
    }
  }
  //appendnew_flow_signInComponent_start

  sd_kyQIKe8WKryMkG6c(bh) {
    try {
      //appendnew_next_sd_kyQIKe8WKryMkG6c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kyQIKe8WKryMkG6c');
    }
  }

  sd_Z91ui4Gdef4Ab0Py(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_6eWyC9ffqVBNPvw6(bh);
      //appendnew_next_sd_Z91ui4Gdef4Ab0Py
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z91ui4Gdef4Ab0Py');
    }
  }

  sd_6eWyC9ffqVBNPvw6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'login';

      bh = this.sd_H7ox6dAhzfQt9ojA(bh);
      //appendnew_next_sd_6eWyC9ffqVBNPvw6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6eWyC9ffqVBNPvw6');
    }
  }

  async sd_H7ox6dAhzfQt9ojA(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_H7ox6dAhzfQt9ojA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H7ox6dAhzfQt9ojA');
    }
  }

  sd_PQUICE1LkppWKEQB(bh) {
    try {
      const page = this.page;
      bh.system.oauthService.login('operations_dashboard/landing');
      //appendnew_next_sd_PQUICE1LkppWKEQB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PQUICE1LkppWKEQB');
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
