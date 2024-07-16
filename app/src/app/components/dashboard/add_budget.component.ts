// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_budget',
  templateUrl: './add_budget.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_budgetComponent {
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
      this.sd_nMnY0EpCBAnvOIvy(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nMnY0EpCBAnvOIvy(bh) {
    try {
      bh = this.sd_4NMMyKYttXzCYfTI(bh);
      //appendnew_next_sd_nMnY0EpCBAnvOIvy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nMnY0EpCBAnvOIvy');
    }
  }

  budget(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_o9P7UGqQFl5NZ9nj(bh);
      //appendnew_next_budget
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_00SfmvxpC6jofZsD');
    }
  }

  getThisMonthBudget(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_J4osXHviYMo4i4Bd(bh);
      //appendnew_next_getThisMonthBudget
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bQfhj38MTqPFNcH4');
    }
  }

  closeDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rCBigoAhcQDq8Wo8(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cM8edAtvzfaM4wZM');
    }
  }
  //appendnew_flow_add_budgetComponent_start

  sd_4NMMyKYttXzCYfTI(bh) {
    try {
      this.page.newBudget = this.page.newBudget;
      bh = this.sd_5IWiZjaWsZBDcD1E(bh);
      //appendnew_next_sd_4NMMyKYttXzCYfTI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NMMyKYttXzCYfTI');
    }
  }

  sd_5IWiZjaWsZBDcD1E(bh) {
    try {
      bh = this.sd_DAugc1hrhkQvskVE(bh);
      //appendnew_next_sd_5IWiZjaWsZBDcD1E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5IWiZjaWsZBDcD1E');
    }
  }

  sd_DAugc1hrhkQvskVE(bh) {
    try {
      const page = this.page;
      page.newBudgetForm = new FormGroup({
        amount: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_DAugc1hrhkQvskVE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DAugc1hrhkQvskVE');
    }
  }

  sd_o9P7UGqQFl5NZ9nj(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_MRYcnV8k2xKPeckz(bh);
      //appendnew_next_sd_o9P7UGqQFl5NZ9nj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o9P7UGqQFl5NZ9nj');
    }
  }

  sd_MRYcnV8k2xKPeckz(bh) {
    try {
      const page = this.page;
      bh.url1 = bh.ssdURL + 'add-budget';
      bh.url2 = bh.ssdURL + 'get-budget';

      bh.body = {
        amount: bh.input.form.get('amount').value,
        month: new Date().getMonth(),
      };

      bh = this.sd_8IzWj48KOmX4zbBc(bh);
      //appendnew_next_sd_MRYcnV8k2xKPeckz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MRYcnV8k2xKPeckz');
    }
  }

  async sd_8IzWj48KOmX4zbBc(bh) {
    try {
      let requestOptions = {
        url: bh.url1,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Q5wCg4ycU1ukvX2d(bh);
      //appendnew_next_sd_8IzWj48KOmX4zbBc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8IzWj48KOmX4zbBc');
    }
  }

  async sd_Q5wCg4ycU1ukvX2d(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.budgetResults = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_F2vxo8hJsDF5Qmyf(bh);
      //appendnew_next_sd_Q5wCg4ycU1ukvX2d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q5wCg4ycU1ukvX2d');
    }
  }

  sd_F2vxo8hJsDF5Qmyf(bh) {
    try {
      const page = this.page;
      console.log('After hitting get API ', page.budgetResults[0].budget);

      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      page.currentMonthBugetAmt;

      page.findCurrBudget = page.budgetResults[0].budget.filter((budget) => {
        if (budget.month == months[new Date().getMonth()]) {
          page.currentMonthBugetAmt = budget.amount;
        }
      });

      console.log('Current month budget from pop: ', page.currentMonthBugetAmt);
      bh = this.sd_tc6w6ehMPsQtyJta(bh);
      //appendnew_next_sd_F2vxo8hJsDF5Qmyf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F2vxo8hJsDF5Qmyf');
    }
  }

  sd_tc6w6ehMPsQtyJta(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.currentMonthBugetAmt);

      bh = this.sd_e1IXYcZ7xBPDtuKZ(bh);
      //appendnew_next_sd_tc6w6ehMPsQtyJta
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tc6w6ehMPsQtyJta');
    }
  }

  async sd_e1IXYcZ7xBPDtuKZ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/line_chart');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_5zbk2lP6OBk1etNV(bh);
      //appendnew_next_sd_e1IXYcZ7xBPDtuKZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e1IXYcZ7xBPDtuKZ');
    }
  }

  async sd_5zbk2lP6OBk1etNV(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/operations_dashboard/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_5zbk2lP6OBk1etNV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5zbk2lP6OBk1etNV');
    }
  }

  sd_J4osXHviYMo4i4Bd(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_qvblgH4wi5OyQxm0(bh);
      //appendnew_next_sd_J4osXHviYMo4i4Bd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J4osXHviYMo4i4Bd');
    }
  }

  sd_qvblgH4wi5OyQxm0(bh) {
    try {
      const page = this.page;
      bh.ssdURL = bh.ssdURL + 'get-budget';
      bh = this.sd_e4H1wcZboGM8kDOn(bh);
      //appendnew_next_sd_qvblgH4wi5OyQxm0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qvblgH4wi5OyQxm0');
    }
  }

  async sd_e4H1wcZboGM8kDOn(bh) {
    try {
      let requestOptions = {
        url: bh.ssdURL,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.gettingCurrentMonthBudgetThatWasJustEntered(bh);
      //appendnew_next_sd_e4H1wcZboGM8kDOn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e4H1wcZboGM8kDOn');
    }
  }

  gettingCurrentMonthBudgetThatWasJustEntered(bh) {
    try {
      const page = this.page;
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      console.log('Year budget: ', page?.result[0]);
      page.currentMonthBugetAmt;

      page.findCurrBudget = page.result[0].budget.filter((budget) => {
        if (budget.month == months[new Date().getMonth()]) {
          page.currentMonthBugetAmt = budget.amount;
        }
      });

      console.log('Current month budget: ', page.currentMonthBugetAmt);
      //appendnew_next_gettingCurrentMonthBudgetThatWasJustEntered
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DnLGACPTy26ZyFga');
    }
  }

  sd_rCBigoAhcQDq8Wo8(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.nothing);

      //appendnew_next_sd_rCBigoAhcQDq8Wo8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rCBigoAhcQDq8Wo8');
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
  //appendnew_flow_add_budgetComponent_Catch
}
