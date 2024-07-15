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

  getLineGraphData(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3gS4TAs4TXKmYr0X(bh);
      //appendnew_next_getLineGraphData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QGbU2ySh6kGREEO6');
    }
  }
  //appendnew_flow_statisticsComponent_start

  sd_HmysSc28zLxg8P5S(bh) {
    try {
      const page = this.page; // page.lineChartData = [
      //         { data: page.newData2 , label: 'Expenses'},
      //     ];
      // page.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sep','Oct','nov','dec',];

      //Find the max number in expenses and the corresponding month
      // const expensesData = page.lineChartData.find(item => item.label === 'Expenses').data;
      // const { maxExpense, maxIndex } = expensesData.reduce((acc, curr, index) => {
      //     if (curr > acc.maxExpense) {
      //         return { maxExpense: curr, maxIndex: index };
      //     }
      //     return acc;
      // }, { maxExpense: expensesData[0], maxIndex: 0 });

      // Get the month corresponding to the max index
      // const maxMonth = page.lineChartLabels[maxIndex];
      //console.log('The maximum number in Expenses is', maxExpense, 'at index', maxIndex, 'corresponding to the month of', maxMonth);

      // page.maxExpense = maxExpense
      // page.maxIndex = maxIndex
      // page.maxMonth = maxMonth

      // page.barChartData = [
      //         { data: [65, 59], label: 'Monthly Budget' },
      //         { data: [28, 48], label: 'Expanses' },
      //         { data: [47, 40,], label: 'Savings' }
      //     ];

      // page.barChartLabels = ['May', 'June'];

      // page.barChartBudget = [
      //         { data: [65, 59], label: 'Monthly Budget' }
      // ]

      // page.barChartExpenses = [
      //        { data: [37, 48], label: 'Expenses' }
      // ]

      // if(page.barChartExpenses[0].data[0] > page.barChartExpenses[0].data[1]){
      //         console.log("If statement, is greater:", page.barChartExpenses[0].data[0])
      // } else {
      //         console.log("If statement, is greater:", page.barChartExpenses[0].data[1]);
      //         // console.log("Month:", page.barChartLabels[1]);
      //         page.insight = "You spent more in the month of " + page.barChartLabels[0] + " by spending " + page.barChartExpenses[0].data[1]
      //         console.log("hhhhhh",page.insight)
      // }

      // page.diff =  Math.abs(page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0] )
      // // page.twoMonthAvg = (page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]) / 2
      // // page.perDiff = (page.diff / page.twoMonthAvg) * 100

      // // page.perDiff = ((page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]) / page.barChartExpenses[0].data[0]) * 100
      // page.perDiff = Math.abs(((page.barChartExpenses[0].data[1] - page.barChartExpenses[0].data[0]) / page.barChartExpenses[0].data[0]) * 100)

      // // console.log(page.insight, page.diff, page.perDiff.toFixed(2) + "%" )

      // page.barChartSavings = [
      //         { data: [27, 40,], label: 'Savings' }
      // ]

      // page.budgetMinusExpense = Math.abs(page.barChartBudget[0].data[0] - page.barChartExpenses[0].data[0])
      // page.lessSpent = "Actual spending was less than budgeted amount by R " + page.budgetMinusExpense
      // page.moreSpent = "Actual spending was more than budgeted amount by R " + page.budgetMinusExpense + " . You are advised to watch your savings to ensure that you do not go onto the negative side regularly"

      // if(page.barChartExpenses[0].data[0] < page.barChartBudget[0].data[0]){
      // //        console.log(page.lessSpent)
      //        page.newAmount = page.lessSpent
      // } else {
      //         // console.log(page.moreSpent)
      //        page.newAmount = page.moreSpent

      // }

      // page.savedMoreAmt = Math.abs(page.barChartSavings[0].data[0] - page.barChartSavings[0].data[1])

      // if(page.barChartSavings[0].data[0] > page.barChartSavings[0].data[1]){
      //         page.savedMoreMonth = "You saved more last month by saving R " + page.savedMoreAmt + " more than you did this month"
      //         console.log(page.savedMoreMonth)
      // } else {
      //         page.savedMoreMonth = "You saved more this month by saving R " + page.savedMoreAmt + " more than you did last month"
      //         console.log( page.savedMoreMonth)

      // }
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
      this.page.newData2 = [];
      this.page.dataSet = undefined;
      bh = this.sd_GdH0SWDSbz47NoRv(bh);
      //appendnew_next_sd_sviPcC5dXzxeSL7w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sviPcC5dXzxeSL7w');
    }
  }

  sd_GdH0SWDSbz47NoRv(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_qqm3czit2D7anmB3(bh);
      //appendnew_next_sd_GdH0SWDSbz47NoRv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GdH0SWDSbz47NoRv');
    }
  }

  sd_qqm3czit2D7anmB3(bh) {
    try {
      const page = this.page;
      bh.url1 = bh.ssdURL + 'get-budget';
      bh.url2 = bh.ssdURL + 'get-receipt';

      bh = this.sd_SEZAeyvG1j9ff0w8(bh);
      //appendnew_next_sd_qqm3czit2D7anmB3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qqm3czit2D7anmB3');
    }
  }

  async sd_SEZAeyvG1j9ff0w8(bh) {
    try {
      let requestOptions = {
        url: bh.url1,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.allYearBudget = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_FbCEXSfe41G7Z3fa(bh);
      //appendnew_next_sd_SEZAeyvG1j9ff0w8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SEZAeyvG1j9ff0w8');
    }
  }

  async sd_FbCEXSfe41G7Z3fa(bh) {
    try {
      let requestOptions = {
        url: bh.url2,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.receiptData = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_JVGzVah92BWUgJxM(bh);
      bh = this.sd_8aE0PlTSd1RAOH6q(bh);
      bh = this.sd_dzcNy0FhCjlim4tN(bh);
      bh = this.thirdChart(bh);
      //appendnew_next_sd_FbCEXSfe41G7Z3fa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FbCEXSfe41G7Z3fa');
    }
  }

  sd_JVGzVah92BWUgJxM(bh) {
    try {
      const page = this.page;
      // Function to parse the month and year from the date
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

      bh = this.sd_8aE0PlTSd1RAOH6q(bh);
      //appendnew_next_sd_JVGzVah92BWUgJxM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JVGzVah92BWUgJxM');
    }
  }

  sd_8aE0PlTSd1RAOH6q(bh) {
    try {
      const page = this.page;
      page.months = [];
      page.amounts = [];

      let data = page.allYearBudget[0];

      data.budget.forEach((item) => {
        page.months.push(item.month);
        page.amounts.push(item.amount);
      });

      bh = this.sd_WePnd0dH4lkTVFEH(bh);
      //appendnew_next_sd_8aE0PlTSd1RAOH6q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8aE0PlTSd1RAOH6q');
    }
  }

  sd_WePnd0dH4lkTVFEH(bh) {
    try {
      const page = this.page;
      page.dataSet = [
        { data: page.amounts, label: 'Budget' },
        { data: page.monthlyExpenses, label: 'Expenses' },
      ];

      page.barChartLabels = [{ data: page.months }];

      page.barChartLabels = page.barChartLabels[0].data;

      bh = this.calculateSavingsWithNonNegativeValues(bh);
      //appendnew_next_sd_WePnd0dH4lkTVFEH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WePnd0dH4lkTVFEH');
    }
  }

  calculateSavingsWithNonNegativeValues(bh) {
    try {
      const page = this.page;
      let data = page.dataSet;
      const budget = data[0].data;
      const expenses = data[1].data;

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

      page.dataSet = [
        { data: page.amounts, label: 'Budget' },
        { data: page.monthlyExpenses, label: 'Expenses' },
        { data: page.monthlySavings, label: 'Savings' },
      ];

      bh = this.fifthChartData(bh);
      //appendnew_next_calculateSavingsWithNonNegativeValues
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vOYHrSZmp7T0yTx2');
    }
  }

  fifthChartData(bh) {
    try {
      const page = this.page;
      const currentMonth = new Date().getMonth();

      // Calculate the previous month (handling the wrap-around from January to December)
      const previousMonth = (currentMonth - 1 + 12) % 12;

      let responseData = page.dataSet;
      const savingsData = responseData.find(
        (item) => item.label === 'Savings'
      ).data;

      const currentMonthSavings = savingsData[currentMonth];
      const previousMonthSavings = savingsData[previousMonth];

      // console.log(`Savings for the current month (month index ${currentMonth}): ${currentMonthSavings}`);
      // console.log(`Savings for the previous month (month index ${previousMonth}): ${previousMonthSavings}`);

      page.fifthChartData = [
        { data: [currentMonthSavings, previousMonthSavings], label: 'Savings' },
      ];

      //appendnew_next_fifthChartData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s3ee5RmIpTy3BDxe');
    }
  }

  sd_dzcNy0FhCjlim4tN(bh) {
    try {
      const page = this.page;
      const currentDate = new Date();

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

      const currentMonthIndex = currentDate.getMonth();
      const previousMonthIndex = (currentMonthIndex - 1 + 12) % 12;

      page.currentMonth = monthNames[currentMonthIndex];
      page.previousMonth = monthNames[previousMonthIndex];

      let data = page.allYearBudget[0].budget;

      // Find the budget for the current and previous months
      const currentBudget = data.find(
        (item) => item.month === page.currentMonth
      );

      const previousBudget = data.find(
        (item) => item.month === page.previousMonth
      );

      // Store the budgets and corresponding months in separate arrays
      const budgetAmounts = [previousBudget.amount, currentBudget.amount];
      const budgetMonths = [previousBudget.month, currentBudget.month];

      page.barChartDataTwo = [{ data: budgetAmounts, label: 'Budget' }];

      page.barChartDataTwoLabels = [{ data: budgetMonths }];

      page.barChartDataTwoLabels = page.barChartDataTwoLabels[0].data;

      //appendnew_next_sd_dzcNy0FhCjlim4tN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dzcNy0FhCjlim4tN');
    }
  }

  thirdChart(bh) {
    try {
      const page = this.page;
      let data = page.receiptData;

      function getCategoryWithMostExpenditure(data) {
        const categorySumsByMonth = {};
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

        // Helper function to format month and year
        const formatMonthYear = (date) =>
          `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

        // Calculate sums by category for each month
        data.forEach((entry) => {
          const uploadedDate = new Date(entry['Date-Uploaded']);
          const monthYear = formatMonthYear(uploadedDate);

          if (!categorySumsByMonth[monthYear]) {
            categorySumsByMonth[monthYear] = {
              Groceries: 0,
              Maintenance: 0,
              Supplies: 0,
            };
          }

          entry.items.forEach((item) => {
            if (categorySumsByMonth[monthYear][item.category] !== undefined) {
              categorySumsByMonth[monthYear][item.category] += item.price;
            }
          });
        });

        // Get the current and previous month
        const currentDate = new Date();
        const currentMonthYear = formatMonthYear(currentDate);
        const previousMonthDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );
        const previousMonthYear = formatMonthYear(previousMonthDate);

        // Helper function to get category with the most expenditure
        const getMaxCategory = (sums) => {
          let maxCategory = null;
          let maxAmount = -1;
          for (let category in sums) {
            if (sums[category] > maxAmount) {
              maxAmount = sums[category];
              maxCategory = category;
            }
          }
          return { category: maxCategory, amount: maxAmount };
        };

        const currentMonthMax = categorySumsByMonth[currentMonthYear]
          ? getMaxCategory(categorySumsByMonth[currentMonthYear])
          : null;

        const previousMonthMax = categorySumsByMonth[previousMonthYear]
          ? getMaxCategory(categorySumsByMonth[previousMonthYear])
          : null;

        return { currentMonthMax, previousMonthMax };
      }

      console.log(
        'getCategoryWithMostExpenditure',
        getCategoryWithMostExpenditure(data)
      );

      page.prevMonthMostCategory =
        getCategoryWithMostExpenditure(data).previousMonthMax.category;
      page.currMonthMostCategory =
        getCategoryWithMostExpenditure(data).currentMonthMax.category;

      let currentMonthCat = page.currMonthMostCategory;
      let prevMonthCat = page.prevMonthMostCategory;

      page.fourthChartData = [
        {
          data: [
            getCategoryWithMostExpenditure(data).previousMonthMax.amount,
            getCategoryWithMostExpenditure(data).currentMonthMax.amount,
          ],
          label: prevMonthCat,
          currentMonthCat,
        },
      ];

      page.fourthChartLabels = [page.previousMonth, page.currentMonth];
      // page.fourthChartLabels = [ page.currentMonth, getCategoryWithMostExpenditure(data).currentMonthMax.category];

      console.log('fourthChartData', page.fourthChartData);
      bh = this.fourth(bh);
      //appendnew_next_thirdChart
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e9YVHgGXBH6NP9Mk');
    }
  }

  fourth(bh) {
    try {
      const page = this.page;
      let data = page.receiptData;

      function getCategoryWithMostExpenditure(data) {
        const categorySumsByMonth = {};
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

        // Helper function to format month and year
        const formatMonthYear = (date) =>
          `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

        // Calculate sums by category for each month
        data.forEach((entry) => {
          const uploadedDate = new Date(entry['Date-Uploaded']);
          const monthYear = formatMonthYear(uploadedDate);

          if (!categorySumsByMonth[monthYear]) {
            categorySumsByMonth[monthYear] = {
              Groceries: 0,
              Maintenance: 0,
              Supplies: 0,
            };
          }

          entry.items.forEach((item) => {
            if (categorySumsByMonth[monthYear][item.category] !== undefined) {
              categorySumsByMonth[monthYear][item.category] += item.price;
            }
          });
        });

        // Get the current and previous month
        const currentDate = new Date();
        const currentMonthYear = formatMonthYear(currentDate);
        const previousMonthDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );
        const previousMonthYear = formatMonthYear(previousMonthDate);

        // Helper function to get category with the most expenditure
        const getMaxCategory = (sums) => {
          let maxCategory = null;
          let maxAmount = -1;
          for (let category in sums) {
            if (sums[category] > maxAmount) {
              maxAmount = sums[category];
              maxCategory = category;
            }
          }
          return { category: maxCategory, amount: maxAmount };
        };

        const currentMonthMax = categorySumsByMonth[currentMonthYear]
          ? getMaxCategory(categorySumsByMonth[currentMonthYear])
          : null;

        const previousMonthMax = categorySumsByMonth[previousMonthYear]
          ? getMaxCategory(categorySumsByMonth[previousMonthYear])
          : null;

        return { currentMonthMax, previousMonthMax };
      }

      page.fifthDataChart = [
        {
          data: getCategoryWithMostExpenditure(data).previousMonthMax.amount,
          label: getCategoryWithMostExpenditure(data).previousMonthMax.category,
        },
      ];

      console.log('Fifth graph data', page.fifthDataChart);
      //appendnew_next_fourth
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_93qcqkrPGMtTfP6B');
    }
  }

  sd_3gS4TAs4TXKmYr0X(bh) {
    try {
      const page = this.page;
      // page.lineChartData = [
      //         { data: page.newData2 , label: 'Expenses'},
      //     ];
      // page.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sep','Oct','nov','dec',];
      // console.log("line data",page.lineChartData[0].data)
      // page.lineDataFinal = page.lineChartData[0].data

      page.lineChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40, 10, 20, 30, 40, 50] },
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
      page.lineChartData = page.lineChartData[0].data;

      //appendnew_next_sd_3gS4TAs4TXKmYr0X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3gS4TAs4TXKmYr0X');
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
