// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { add_budgetComponent } from 'app/components/dashboard/add_budget.component'; //_splitter_
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

  openDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kgGzbCuR6F9t3uGt(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A27nuw79xKmoRPh6');
    }
  }

  getReceiptData(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_iHHgiJl1FT8ENppO(bh);
      //appendnew_next_getReceiptData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aUrDhh0olpySfMuW');
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
      bh = this.sd_vUvXw8Y3lnhbpYIv(bh);
      //appendnew_next_getThisMonthBudget
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PtcKuhrJBxCvGj2j');
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
      this.page.lineChartData = this.page.lineChartData;
      this.page.lineChartLabels = this.page.lineChartLabels;
      this.page.pieChartLabels = this.page.pieChartLabels;
      this.page.pieChartOptions = this.page.pieChartOptions;
      this.page.pieChartData = this.page.pieChartData;
      this.page.currentDate = this.page.currentDate;
      this.page.currentMonth = this.page.currentMonth;
      this.page.currentYear = this.page.currentYear;
      this.page.startDate = this.page.startDate;
      this.page.endDate = this.page.endDate;
      this.page.monthNames = [
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
      this.page.monthName = this.page.monthName;
      this.page.newLineData = this.page.newLineData;
      bh = this.sd_2l8EVQOKmVRV14Om(bh);
      bh = this.getMonthlyDate(bh);
      bh = this.getReceiptD(bh);
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

  getMonthlyDate(bh) {
    try {
      const page = this.page;
      page.currentDate = new Date();
      page.currentMonth = page.currentDate.getMonth();
      page.currentYear = page.currentDate.getFullYear();

      // Get the start and end date of the current month
      page.startDate = new Date(page.currentYear, page.currentMonth, 1);
      page.endDate = new Date(page.currentYear, page.currentMonth + 1, 0);

      page.monthNames = [
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

      page.monthName = page.monthNames[page.currentMonth];

      page.thisMonthRangeDate = `${
        page.monthName
      } ${page.startDate.getDate()} - ${
        page.monthName
      } ${page.endDate.getDate()} , ${page.currentYear}`;

      //appendnew_next_getMonthlyDate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zgDzU2ECixcC1ak6');
    }
  }

  getReceiptD(bh) {
    try {
      let outputVariables = this.getReceiptData();

      bh = this.getThisMonthB(bh);
      //appendnew_next_getReceiptD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F27d4EoalWd068UB');
    }
  }

  getThisMonthB(bh) {
    try {
      let outputVariables = this.getThisMonthBudget();

      //appendnew_next_getThisMonthB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mvbmnglvGhpSeZzR');
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

  sd_kgGzbCuR6F9t3uGt(bh) {
    try {
      const add_budgetDialog = this.__page_injector__.get(MatDialog);
      const add_budgetDialogRef = add_budgetDialog.open(
        add_budgetComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kgGzbCuR6F9t3uGt');
    }
  }

  sd_iHHgiJl1FT8ENppO(bh) {
    try {
      bh.url3 = bh.system.environment.properties.ssdURL;
      bh.url4 = bh.system.environment.properties.ssdURL;
      bh = this.sd_P2pfUhNMAOXpl7us(bh);
      //appendnew_next_sd_iHHgiJl1FT8ENppO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iHHgiJl1FT8ENppO');
    }
  }

  sd_P2pfUhNMAOXpl7us(bh) {
    try {
      const page = this.page;
      bh.url3 = bh.url3 + 'get-receipt-data';
      bh.url4 = bh.url4 + 'get-budget';

      bh = this.sd_d1wEqhb2I0Az2Gig(bh);
      //appendnew_next_sd_P2pfUhNMAOXpl7us
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P2pfUhNMAOXpl7us');
    }
  }

  async sd_d1wEqhb2I0Az2Gig(bh) {
    try {
      let requestOptions = {
        url: bh.url4,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.allYearBudget = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_hd1tYEWeV3FFJDsW(bh);
      //appendnew_next_sd_d1wEqhb2I0Az2Gig
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d1wEqhb2I0Az2Gig');
    }
  }

  async sd_hd1tYEWeV3FFJDsW(bh) {
    try {
      let requestOptions = {
        url: bh.url3,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.receiptData = await this.sdService.nHttpRequest(requestOptions);
      bh = this.findExpensesSpentByMonth(bh);
      bh = this.findingExpensesForAnotherChart(bh);
      //appendnew_next_sd_hd1tYEWeV3FFJDsW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hd1tYEWeV3FFJDsW');
    }
  }

  findExpensesSpentByMonth(bh) {
    try {
      const page = this.page;
      page.annualAccumulatedExpenses = 0;

      let nData = page.receiptData;
      nData.forEach((entry) => {
        page.annualAccumulatedExpenses += entry.total;
      });

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      // Initialize the sum for totals
      page.sumTotal = 0;

      let data = page.receiptData;
      // Loop through the data array and calculate the sum of totals for the current month
      data.forEach((item) => {
        // Extract the month and year from the Date-Uploaded field
        const uploadedDate = new Date(item['Date-Uploaded']);
        const uploadedMonth = uploadedDate.getMonth();
        const uploadedYear = uploadedDate.getFullYear();

        // Check if the month and year match the current month and year
        if (uploadedMonth === currentMonth && uploadedYear === currentYear) {
          page.sumTotal += item.total;
        }
      });

      // console.log(`Sum of totals for ${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}: ${page.sumTotal.toFixed(2)}`);

      page.savings = Math.abs(page.sumTotal - page.currentMonthBugetAmt);

      page.doughnutChartData = [
        {
          data: [page.currentMonthBugetAmt, page.savings, page.sumTotal],
          label: 'Budget; Savings; Expenses',
        },
      ];

      page.doughnutChartLabels = ['Budget', 'Savings', 'Expenses'];

      //appendnew_next_findExpensesSpentByMonth
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cC8X4aU4RlF9xXxn');
    }
  }

  findingExpensesForAnotherChart(bh) {
    try {
      const page = this.page; // Function to parse the month and year from the date
      function parseMonth(dateStr) {
        const date = new Date(dateStr);
        const month = date.getMonth();
        const monthNames = [
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
        return monthNames[month];
      }

      // Create a map to store the totals for each month
      const monthlyTotalsMap = {};
      let nData = page.receiptData;

      // Iterate through the data and update the map
      nData.forEach((entry) => {
        const month = parseMonth(entry['Date-Uploaded']);
        if (!monthlyTotalsMap[month]) {
          monthlyTotalsMap[month] = 0;
        }
        monthlyTotalsMap[month] += entry.total;
      });

      // Separate the keys and values into two arrays
      const months = Object.keys(monthlyTotalsMap);
      page.monthlyExpenses = Object.values(monthlyTotalsMap);

      bh = this.removeScript(bh);
      //appendnew_next_findingExpensesForAnotherChart
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NDGNkGNOMv3LdRki');
    }
  }

  removeScript(bh) {
    try {
      const page = this.page;
      page.months = [];
      page.amounts = [];

      let data = page.allYearBudget[0];

      data.budget.forEach((item) => {
        page.months.push(item.month);
        page.amounts.push(item.amount);
      });

      bh = this.chartData(bh);
      //appendnew_next_removeScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S0K4PVYTwA5CWVJR');
    }
  }

  chartData(bh) {
    try {
      const page = this.page;
      page.dataSet = [{ data: page.monthlyExpenses, label: 'Expenses' }];

      page.barChartLabels = [{ data: page.months }];

      page.barChartLabels = page.barChartLabels[0].data;

      bh = this.adjustingDataForAnotherChart(bh);
      //appendnew_next_chartData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TJlWfc1iU8Kw4uHL');
    }
  }

  adjustingDataForAnotherChart(bh) {
    try {
      const page = this.page;
      page.dataSet1 = [
        { data: page.amounts, label: 'Budget' },
        { data: page.monthlyExpenses, label: 'Expenses' },
      ];

      let data = page.dataSet1;

      const budget = data[0].data;
      const expenses = data[1].data;

      // Calculate savings with non-negative values
      const savings = budget.map((budgetAmount, index) => {
        const expenseAmount = expenses[index] || 0; // Handle case if expenses have fewer elements
        return Math.abs(budgetAmount - expenseAmount);
      });

      // Create the savings object
      const savingsObject = {
        data: savings,
        label: 'Savings',
      };

      page.monthlySavings = savingsObject.data;

      page.donoughtDataSet = [
        { data: page.amounts, label: 'Budget' },
        { data: page.monthlyExpenses, label: 'Expenses' },
        { data: page.monthlySavings, label: 'Savings' },
      ];

      //appendnew_next_adjustingDataForAnotherChart
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UawrgOePVwDuGaja');
    }
  }

  sd_vUvXw8Y3lnhbpYIv(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_9jVuoDurVkeCshlO(bh);
      //appendnew_next_sd_vUvXw8Y3lnhbpYIv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vUvXw8Y3lnhbpYIv');
    }
  }

  sd_9jVuoDurVkeCshlO(bh) {
    try {
      const page = this.page;
      bh.ssdURL = bh.ssdURL + 'get-budget';
      bh = this.sd_dBpXjBZ3VAm2xzVs(bh);
      //appendnew_next_sd_9jVuoDurVkeCshlO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9jVuoDurVkeCshlO');
    }
  }

  async sd_dBpXjBZ3VAm2xzVs(bh) {
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
      bh = this.gettingCurrentMonthBudget(bh);
      //appendnew_next_sd_dBpXjBZ3VAm2xzVs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dBpXjBZ3VAm2xzVs');
    }
  }

  gettingCurrentMonthBudget(bh) {
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

      page.currentMonthBugetAmt;

      page.findCurrBudget = page.result[0].budget.filter((budget) => {
        if (budget.month == months[new Date().getMonth()]) {
          page.currentMonthBugetAmt = budget.amount;
        }
      });

      bh = this.gettingAccumulatedAnnual(bh);
      bh = this.findExpensesSpentByMonth(bh);
      //appendnew_next_gettingCurrentMonthBudget
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CgrszF5ITUXVawZm');
    }
  }

  gettingAccumulatedAnnual(bh) {
    try {
      const page = this.page;
      page.data = page.result[0].budget;
      page.budgetAmount = [];
      page.data.forEach((item) => {
        page.budgetAmount.push(item.amount);
      });

      page.accumulatedAnnual = page.budgetAmount.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      //appendnew_next_gettingAccumulatedAnnual
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fuoLcsRnYFq7cDyH');
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
