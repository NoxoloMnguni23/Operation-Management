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
  selector: 'bh-selected_receipt_form',
  templateUrl: './selected_receipt_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class selected_receipt_formComponent {
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
      this.sd_uX0UIxISFMwosX18(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uX0UIxISFMwosX18(bh) {
    try {
      bh = this.sd_XyfbDazfYKEzilS2(bh);
      //appendnew_next_sd_uX0UIxISFMwosX18
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uX0UIxISFMwosX18');
    }
  }

  //appendnew_flow_selected_receipt_formComponent_start

  sd_XyfbDazfYKEzilS2(bh) {
    try {
      bh = this.sd_49ZekZ6zNblKYnYe(bh);
      //appendnew_next_sd_XyfbDazfYKEzilS2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XyfbDazfYKEzilS2');
    }
  }

  sd_49ZekZ6zNblKYnYe(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_q1lHTwDbml4pIrPz(bh);
      //appendnew_next_sd_49ZekZ6zNblKYnYe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_49ZekZ6zNblKYnYe');
    }
  }

  sd_q1lHTwDbml4pIrPz(bh) {
    try {
      const page = this.page;

      console.log('recived', page.userData);
      //appendnew_next_sd_q1lHTwDbml4pIrPz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q1lHTwDbml4pIrPz');
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
  //appendnew_flow_selected_receipt_formComponent_Catch
}
