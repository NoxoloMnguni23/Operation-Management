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

  sd_945gHDBbunxj8TJd(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_sd_945gHDBbunxj8TJd
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_945gHDBbunxj8TJd');
    }
  }
  //appendnew_flow_signInComponent_start

  sd_kyQIKe8WKryMkG6c(bh) {
    try {
      bh = this.sd_wK4hpUOjNf1DK5i7(bh);
      //appendnew_next_sd_kyQIKe8WKryMkG6c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kyQIKe8WKryMkG6c');
    }
  }

  sd_wK4hpUOjNf1DK5i7(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_gyTRKnMUMOeFk8UO(bh);
      //appendnew_next_sd_wK4hpUOjNf1DK5i7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wK4hpUOjNf1DK5i7');
    }
  }

  sd_gyTRKnMUMOeFk8UO(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdURL + 'user/info';

      console.log(bh.url);
      bh = this.sd_NxxxiG3oHj8uZJgi(bh);
      //appendnew_next_sd_gyTRKnMUMOeFk8UO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gyTRKnMUMOeFk8UO');
    }
  }

  async sd_NxxxiG3oHj8uZJgi(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.userInfor = await this.sdService.nHttpRequest(requestOptions);
      this.sd_fc7FH9T9PL4f0rxm(bh);
      //appendnew_next_sd_NxxxiG3oHj8uZJgi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NxxxiG3oHj8uZJgi');
    }
  }

  sd_fc7FH9T9PL4f0rxm(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.userInfor);
      //appendnew_next_sd_fc7FH9T9PL4f0rxm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fc7FH9T9PL4f0rxm');
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
