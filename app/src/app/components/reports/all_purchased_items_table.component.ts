// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { saveAs } from 'file-saver'; //_splitter_
import { utils, WorkBook, WorkSheet, write } from 'xlsx'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-all_purchased_items_table',
  templateUrl: './all_purchased_items_table.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class all_purchased_items_tableComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
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
      this.sd_HFeIU67l0MyY2xoO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_HFeIU67l0MyY2xoO(bh) {
    try {
      bh = this.sd_7NyJWrMmj6Xj60dl(bh);
      //appendnew_next_sd_HFeIU67l0MyY2xoO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HFeIU67l0MyY2xoO');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yYUanaL5c8MbRvcE');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1LOy9i89nURhTynD');
    }
  }

  convert(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_convert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVizDoI525jCG00k');
    }
  }

  totalAmount(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SROyLdDiPneI4O4E(bh);
      //appendnew_next_totalAmount
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wHr6YuVKPRrX2kMN');
    }
  }

  sd_yFWEhKeLq7SiKCiL(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.selected(bh);
      //appendnew_next_sd_yFWEhKeLq7SiKCiL
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yFWEhKeLq7SiKCiL');
    }
  }
  //appendnew_flow_all_purchased_items_tableComponent_start

  sd_7NyJWrMmj6Xj60dl(bh) {
    try {
      this.page.total = 0;
      this.page.datas = undefined;
      this.page.arrayData = undefined;
      this.page.tableDataBackup = undefined;
      this.page.totalA = 0;
      this.page.tableData = this.page.dataSource;
      bh = this.sd_1yjEmPi5wUo4o0Do(bh);
      //appendnew_next_sd_7NyJWrMmj6Xj60dl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7NyJWrMmj6Xj60dl');
    }
  }

  sd_1yjEmPi5wUo4o0Do(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_6lNqubBSj5hlxHb1(bh);
      //appendnew_next_sd_1yjEmPi5wUo4o0Do
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1yjEmPi5wUo4o0Do');
    }
  }

  sd_6lNqubBSj5hlxHb1(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdURL + 'get-receipt-data';
      bh = this.getReceipts(bh);
      //appendnew_next_sd_6lNqubBSj5hlxHb1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6lNqubBSj5hlxHb1');
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
      this.page.resultItems = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_A8gRLs4029yZ1E6F(bh);
      //appendnew_next_getReceipts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wjQBMwrERrqb5smV');
    }
  }

  sd_A8gRLs4029yZ1E6F(bh) {
    try {
      const page = this.page;
      console.log('Main data', page.resultItems);

      page.items = page.resultItems[0].items;

      console.log('obj', page.items);

      for (let i = 0; i < page.items.length; i++) {
        console.log(page.items[i]);
      }

      // for(let i=0;i<page._data.length;i++){
      //     for(let j = 0;j<page._data[i].length; j++){
      //       page.items.push(page._data[i][j])
      //     }
      // }
      // console.log("Final data ==>", page.items)

      page.dataSource = new MatTableDataSource(page.items);
      console.log('backendData =>>', page.items);

      // //converting the object to an Array
      page.arrayData = page.dataSource.data;

      // //adding the total to the spreadsheet and table
      page.arrayData.forEach((item, indx) => {
        if (page.arrayData.length - 1 === indx) {
          return;
        }
        page.arrayData[page.arrayData.length - 1].price =
          page.arrayData[page.arrayData.length - 1].price + item.price;
      });

      // console.log(page.arrayData[page.arrayData.length - 1])
      // console.log("newArray", page.arrayData);

      //Adding the total to the total outside the table

      page.arrayData.forEach((item) => {
        return (page.totalA = page.totalA + item.price / 2);
      });

      page.total = page.totalA.toFixed(2);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      bh = this.sd_LOQZQmlbaciIhz7W(bh);
      //appendnew_next_sd_A8gRLs4029yZ1E6F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A8gRLs4029yZ1E6F');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      this.page.fileName = this.page.excelsheet;
      this.page.price = 0;
      this.page.month = this.page.month;
      this.page.selectForm = { month: '' };
      this.page.filterTotal = undefined;
      bh = this.sd_ivaTji8kiYYwm6z7(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B79Ed5PwcUVtN8Md');
    }
  }

  sd_ivaTji8kiYYwm6z7(bh) {
    try {
      bh = this.sd_amwwovLCcmHfVQy1(bh);
      //appendnew_next_sd_ivaTji8kiYYwm6z7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ivaTji8kiYYwm6z7');
    }
  }

  sd_amwwovLCcmHfVQy1(bh) {
    try {
      bh = this.sd_4CbgeVTcji4sjsBa(bh);
      //appendnew_next_sd_amwwovLCcmHfVQy1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_amwwovLCcmHfVQy1');
    }
  }

  sd_4CbgeVTcji4sjsBa(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      //appendnew_next_sd_4CbgeVTcji4sjsBa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4CbgeVTcji4sjsBa');
    }
  }

  sd_LOQZQmlbaciIhz7W(bh) {
    try {
      const page = this.page;
      switch (new Date().getMonth()) {
        case 0:
          page.month = 'January';
          break;
        case 1:
          page.month = 'February';
          break;
        case 2:
          page.month = 'March';
          break;
        case 3:
          page.month = 'April';
          break;
        case 4:
          page.month = 'May';
          break;
        case 5:
          page.month = 'June';
          break;
        case 6:
          page.month = 'July';
          break;
        case 7:
          page.month = 'August';
          break;
        case 8:
          page.month = 'September';
          break;
        case 9:
          page.month = 'October';
          break;
        case 10:
          page.month = 'November';
          break;
        case 11:
          page.month = 'December';
          break;
      }

      console.log('month', page.month);
      //appendnew_next_sd_LOQZQmlbaciIhz7W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LOQZQmlbaciIhz7W');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_0locXHJjaZ9Tl6FV(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GlXZ98dwA2ZRnDmX');
    }
  }

  sd_0locXHJjaZ9Tl6FV(bh) {
    try {
      this.page.tableData.sort = bh.pageViews.MatSort;
      this.page.tableData.paginator = bh.pageViews.MatPaginator;
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_0locXHJjaZ9Tl6FV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0locXHJjaZ9Tl6FV');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e0TccouieBQO4qSB');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();

      page.total = page.tableData.filteredData.reduce(
        (total: any, item: any) => total + item.price,
        0
      );

      bh.totalItem = page.dataSource._data._value.filter((item: any) => {
        return item.category == 'TOTAL';
      });

      page.tableData.filteredData.push(bh.totalItem[0]);

      // page.dataSource = page.tableData.filteredData

      console.log('filtered with Total ==>', page.tableData.filteredData);

      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hdhS3ro8xt00s7ac');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      //convert to an Array
      //try getting the array not the table
      page.arrayData = page.tableData.filteredData;

      //get the table data
      //  let datas = document.getElementById('table-table')

      //converting
      //trying new one
      let data = document.getElementById('table-table');
      const ws: WorkSheet = utils.json_to_sheet(page.arrayData);

      // const ws:  WorkSheet = utils.table_to_sheet(data);
      //  const workbook: WorkBook = { Sheets: { 'datas': ws }, SheetNames: ['datas'] };

      const workbook: WorkBook = utils.book_new();
      utils.book_append_sheet(workbook, ws, 'Sheet1');
      //saving
      // page.saveAs.writeFile(workbook, page.fileName)

      const excelBuffer: any = write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      const dataBlob: Blob = new Blob([excelBuffer], {
        type: 'application/octet-stream',
      });
      saveAs(dataBlob, 'table_data.xlsx');
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PbjQ2z5pylux6pBD');
    }
  }

  sd_SROyLdDiPneI4O4E(bh) {
    try {
      const page = this.page;
      page.arrayData = page.dataSource.data;

      page.arrayData.forEach((item) => {
        return (page.total = page.total + item.price);
      });
      console.log('price', page.arrayData);
      //appendnew_next_sd_SROyLdDiPneI4O4E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SROyLdDiPneI4O4E');
    }
  }

  selected(bh) {
    try {
      const page = this.page;
      page.tableDataBackup.filter = page.selectForm.month.trim().toLowerCase();
      // console.log("page.tableDataBackup",page.tableDataBackup)
      page.tableData.filteredData = page.tableDataBackup.filteredData;

      page.total = page.tableData.filteredData.reduce(
        (total: any, item: any) => total + item.price,
        0
      );

      bh.totalItem = page.dataSource._data._value.filter((item: any) => {
        return item.category == 'TOTAL';
      });

      bh.totalItem.price = page.tableData.filteredData.reduce(
        (total: any, item: any) => total + item.price,
        0
      );
      console.log('total ==>', bh.totalItem[0].price);
      bh.totalItem[0].price = page.total;

      bh.newTable = page.tableData.filteredData.push(bh.totalItem[0]);

      page.tableData = new MatTableDataSource(page.tableData.filteredData);

      console.log('filtered with Total ==>', page.tableData.filteredData);
      console.log('new table ==>', bh.newTable);

      //appendnew_next_selected
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sZyFeQRfrOBuDMhn');
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
  //appendnew_flow_all_purchased_items_tableComponent_Catch
}
