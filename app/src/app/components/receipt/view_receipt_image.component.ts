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
  selector: 'bh-view_receipt_image',
  templateUrl: './view_receipt_image.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_receipt_imageComponent {
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
      this.sd_IjtHzzPUBEHRsfCx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IjtHzzPUBEHRsfCx(bh) {
    try {
      bh = this.sd_i4rQVDm2mSdEwVRw(bh);
      //appendnew_next_sd_IjtHzzPUBEHRsfCx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IjtHzzPUBEHRsfCx');
    }
  }

  //appendnew_flow_view_receipt_imageComponent_start

  sd_i4rQVDm2mSdEwVRw(bh) {
    try {
      this.page.image = undefined;
      bh = this.sd_jUudG01HtZOREdWi(bh);
      //appendnew_next_sd_i4rQVDm2mSdEwVRw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i4rQVDm2mSdEwVRw');
    }
  }

  sd_jUudG01HtZOREdWi(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('imgData'));
      bh = this.sd_KYKuH3G7m1PCNNwg(bh);
      //appendnew_next_sd_jUudG01HtZOREdWi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jUudG01HtZOREdWi');
    }
  }

  sd_KYKuH3G7m1PCNNwg(bh) {
    try {
      const page = this.page; // page.image = page.url

      console.log('buff', page.result[0].data);

      //document.getElementById("ItemPreview").src = "data:image/png;base64," + page.result[0].data;
      page.image = `data:image/png;base64,${page.result[0].data}`;

      //appendnew_next_sd_KYKuH3G7m1PCNNwg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KYKuH3G7m1PCNNwg');
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
  //appendnew_flow_view_receipt_imageComponent_Catch
}
