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
  selector: 'bh-add_claims_form',
  templateUrl: './add_claims_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_claims_formComponent {
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
      this.sd_wPo9wUao3PJQcCU4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wPo9wUao3PJQcCU4(bh) {
    try {
      bh = this.sd_6OP7gafQVDyLy7vJ(bh);
      //appendnew_next_sd_wPo9wUao3PJQcCU4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wPo9wUao3PJQcCU4');
    }
  }

  //appendnew_flow_add_claims_formComponent_start

  sd_6OP7gafQVDyLy7vJ(bh) {
    try {
      //appendnew_next_sd_6OP7gafQVDyLy7vJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6OP7gafQVDyLy7vJ');
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
  //appendnew_flow_add_claims_formComponent_Catch
}
