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
  selector: 'bh-selected_claims_form',
  templateUrl: './selected_claims_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class selected_claims_formComponent {
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
      this.sd_ufvki9FByCmm6HF9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ufvki9FByCmm6HF9(bh) {
    try {
      bh = this.sd_eNoIDFSepvvsLVI9(bh);
      //appendnew_next_sd_ufvki9FByCmm6HF9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ufvki9FByCmm6HF9');
    }
  }

  //appendnew_flow_selected_claims_formComponent_start

  sd_eNoIDFSepvvsLVI9(bh) {
    try {
      //appendnew_next_sd_eNoIDFSepvvsLVI9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eNoIDFSepvvsLVI9');
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
  //appendnew_flow_selected_claims_formComponent_Catch
}
