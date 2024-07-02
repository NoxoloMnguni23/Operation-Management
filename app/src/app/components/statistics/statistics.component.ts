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
  selector: 'bh-statistics',
  templateUrl: './statistics.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class statisticsComponent {
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
      this.sd_3m0sCIP8PgQqxbRf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3m0sCIP8PgQqxbRf(bh) {
    try {
      bh = this.sd_HmysSc28zLxg8P5S(bh);
      //appendnew_next_sd_3m0sCIP8PgQqxbRf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3m0sCIP8PgQqxbRf');
    }
  }

  mycharclick(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KCRuwyCtZy3brvWI(bh);
      //appendnew_next_mycharclick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_50DaZEwV8Ka1zbqm');
    }
  }
  //appendnew_flow_statisticsComponent_start

  sd_HmysSc28zLxg8P5S(bh) {
    try {
      const page = this.page;
      page.lineChartData = [
        { data: [, , , , , 55, 40, 10, 20, 30, 40, 50], label: 'Budget' },
        {
          data: [2, 2, 2, 2, 2, 25, 90, 11, 23, 31, 42, 51],
          label: 'Expenses',
        },
        { data: [, , , , , 26, 40, 12, 24, 32, 43, 52], label: 'Savings' },
        // { data: [15, 42, 76, 7, 105, 25, 40,12,24,32,43,52], label: 'Series D' },
        // { data: [19, 48, 77, 5, 103, 27, 40,12,24,32,43,52], label: 'Series E' },
        // { data: [28, 47, 40, 19, 86, 28, 90,11,23,31,42,51], label: 'Series F' },
        // { data: [25, 46, 42, 15, 85, 27, 90,11,23,31,42,51], label: 'Series G' },
      ];
      page.lineChartLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'nov',
        'dec',
      ];

      //Find the max number in expenses and the corresponding month
      const expensesData = page.lineChartData.find(
        (item) => item.label === 'Expenses'
      ).data;
      const { maxExpense, maxIndex } = expensesData.reduce(
        (acc, curr, index) => {
          if (curr > acc.maxExpense) {
            return { maxExpense: curr, maxIndex: index };
          }
          return acc;
        },
        { maxExpense: expensesData[0], maxIndex: 0 }
      );

      // Get the month corresponding to the max index
      const maxMonth = page.lineChartLabels[maxIndex];
      //console.log('The maximum number in Expenses is', maxExpense, 'at index', maxIndex, 'corresponding to the month of', maxMonth);

      page.maxExpense = maxExpense;
      page.maxIndex = maxIndex;
      page.maxMonth = maxMonth;

      page.barChartData = [
        { data: [65, 59], label: 'Monthly Budget' },
        { data: [28, 48], label: 'Expanses' },
        { data: [47, 40], label: 'Savings' },
      ];

      page.barChartLabels = ['May', 'June'];

      page.barChartBudget = [{ data: [65, 59], label: 'Monthly Budget' }];

      page.barChartExpenses = [{ data: [37, 48], label: 'Expenses' }];

      if (page.barChartExpenses[0].data[0] > page.barChartExpenses[0].data[1]) {
        console.log(
          'If statement, is greater:',
          page.barChartExpenses[0].data[0]
        );
      } else {
        console.log(
          'If statement, is greater:',
          page.barChartExpenses[0].data[1]
        );
        // console.log("Month:", page.barChartLabels[1]);
        page.insight =
          'You spent more in the month of ' +
          page.barChartLabels[0] +
          ' by spending ' +
          page.barChartExpenses[0].data[1];
        console.log('hhhhhh', page.insight);
      }

      page.diff = Math.abs(
        page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]
      );
      // page.twoMonthAvg = (page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]) / 2
      // page.perDiff = (page.diff / page.twoMonthAvg) * 100

      // page.perDiff = ((page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]) / page.barChartExpenses[0].data[0]) * 100
      page.perDiff = Math.abs(
        ((page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]) /
          page.barChartExpenses[0].data[0]) *
          100
      );

      // console.log(page.insight, page.diff, page.perDiff.toFixed(2) + "%" )

      page.barChartSavings = [{ data: [27, 40], label: 'Savings' }];

      page.budgetMinusExpense = Math.abs(
        page.barChartBudget[0].data[0] - page.barChartExpenses[0].data[0]
      );
      page.lessSpent =
        'Actual spending was less than budgeted amount by R ' +
        page.budgetMinusExpense;
      page.moreSpent =
        'Actual spending was more than budgeted amount by R ' +
        page.budgetMinusExpense +
        ' . You are advised to watch your savings to ensure that you do not go onto the negative side regularly';

      if (page.barChartExpenses[0].data[0] < page.barChartBudget[0].data[0]) {
        //        console.log(page.lessSpent)
        page.newAmount = page.lessSpent;
      } else {
        // console.log(page.moreSpent)
        page.newAmount = page.moreSpent;
      }

      page.savedMoreAmt = Math.abs(
        page.barChartSavings[0].data[0] - page.barChartSavings[0].data[1]
      );

      if (page.barChartSavings[0].data[0] > page.barChartSavings[0].data[1]) {
        page.savedMoreMonth =
          'You saved more last month by saving R ' +
          page.savedMoreAmt +
          ' more than you did this month';
        console.log(page.savedMoreMonth);
      } else {
        page.savedMoreMonth =
          'You saved more this month by saving R ' +
          page.savedMoreAmt +
          ' more than you did last month';
        console.log(page.savedMoreMonth);
      }
      bh = this.sd_sviPcC5dXzxeSL7w(bh);
      //appendnew_next_sd_HmysSc28zLxg8P5S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HmysSc28zLxg8P5S');
    }
  }

  sd_sviPcC5dXzxeSL7w(bh) {
    try {
      this.page.lineChartData = this.page.lineChartData;
      this.page.lineChartLabels = this.page.lineChartLabels;
      this.page.barChartData = this.page.barChartData;
      this.page.barChartLabels = this.page.barChartLabels;
      this.page.barChartBudget = this.page.barChartBudget;
      this.page.barChartSavings = this.page.barChartSavings;
      this.page.barChartExpenses = this.page.barChartExpenses;
      this.page.barChartOptions = this.page.barChartOptions;
      this.page.insight = this.page.insight;
      this.page.twoMonthAvg = this.page.twoMonthAvg;
      this.page.allYearMaxExpense = this.page.allYearMaxExpense;
      this.page.expensesData = this.page.expensesData;
      this.page.allYearMaxExpenseIndex = this.page.allYearMaxExpenseIndex;
      this.page.maxMonth = this.page.maxMonth;
      this.page.maxExpense = this.page.maxExpense;
      this.page.budgetMinusExpense = this.page.budgetMinusExpense;
      this.page.lessSpent = this.page.lessSpent;
      this.page.moreSpent = this.page.moreSpent;
      //appendnew_next_sd_sviPcC5dXzxeSL7w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sviPcC5dXzxeSL7w');
    }
  }

  sd_KCRuwyCtZy3brvWI(bh) {
    try {
      const page = this.page;
      alert('char clicked');
      //appendnew_next_sd_KCRuwyCtZy3brvWI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KCRuwyCtZy3brvWI');
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
  //appendnew_flow_statisticsComponent_Catch
}
