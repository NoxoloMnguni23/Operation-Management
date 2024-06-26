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
  selector: 'bh-add_receipt',
  templateUrl: './add_receipt.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_receiptComponent {
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
      this.sd_nRZRxWg6wQmHetCJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nRZRxWg6wQmHetCJ(bh) {
    try {
      bh = this.sd_ahkmXkQ9ZOV7VZEC(bh);
      //appendnew_next_sd_nRZRxWg6wQmHetCJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nRZRxWg6wQmHetCJ');
    }
  }

  green(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_4Qmf5jrH3OWs83SD(bh);
      //appendnew_next_green
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jivlYmkKZSJdA57I');
    }
  }

  orange(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lgXb5YjOyVDpQYIA(bh);
      //appendnew_next_orange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GtKqUJdNZHTNSC93');
    }
  }

  yellow(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PEuW2A95AfnPt6Ad(bh);
      //appendnew_next_yellow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kPblvcC67pkTdzTZ');
    }
  }

  picked(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Efhy3iIWo3WByxX4(bh);
      //appendnew_next_picked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WqpKewWxNZbCN1c0');
    }
  }
  //appendnew_flow_add_receiptComponent_start

  sd_ahkmXkQ9ZOV7VZEC(bh) {
    try {
      this.page.yellow = true;
      this.page.green = true;
      this.page.orange = true;
      //appendnew_next_sd_ahkmXkQ9ZOV7VZEC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ahkmXkQ9ZOV7VZEC');
    }
  }

  sd_4Qmf5jrH3OWs83SD(bh) {
    try {
      const page = this.page;
      page.orange = !page.orange;
      page.yellow = false;
      //appendnew_next_sd_4Qmf5jrH3OWs83SD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Qmf5jrH3OWs83SD');
    }
  }

  sd_lgXb5YjOyVDpQYIA(bh) {
    try {
      const page = this.page;
      page.green = false;
      page.yellow = false;
      //appendnew_next_sd_lgXb5YjOyVDpQYIA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lgXb5YjOyVDpQYIA');
    }
  }

  sd_PEuW2A95AfnPt6Ad(bh) {
    try {
      const page = this.page;
      page.orange = false;
      page.green = false;
      //appendnew_next_sd_PEuW2A95AfnPt6Ad
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PEuW2A95AfnPt6Ad');
    }
  }

  sd_Efhy3iIWo3WByxX4(bh) {
    try {
      const page = this.page;
      page.orange = false;
      page.yellow = false;
      page.green = false;

      if ((page.orange = true)) {
        page.yellow = false;
        page.green = false;
      }
      //appendnew_next_sd_Efhy3iIWo3WByxX4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Efhy3iIWo3WByxX4');
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
  //appendnew_flow_add_receiptComponent_Catch
}
