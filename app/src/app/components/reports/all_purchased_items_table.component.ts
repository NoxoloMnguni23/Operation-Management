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

  onFilter_4(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_4(bh);
      //appendnew_next_onFilter_4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yBFg68DzW7wmFcdh');
    }
  }

  correctDate(date = '', correctDate = '', ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { date, correctDate };
      bh.local = {};
      bh = this.sd_Wz0oU0zwClzNifPc(bh);
      //appendnew_next_correctDate
      return bh.input.correctDate;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uErfSK70yE4LVoI4');
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
      this.page.dateUploaded = undefined;
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
      bh = this.sd_IfBYKhthQTu4bbdH(bh);
      //appendnew_next_getReceipts
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wjQBMwrERrqb5smV');
    }
  }

  sd_IfBYKhthQTu4bbdH(bh) {
    try {
      const page = this.page;
      page.items = {};
      bh.items = [];
      //  console.log('ALL FROM MONGO; ', page.resultItems.items)
      bh.date = page.resultItems.filter((item: any, indx: number) => {
        // console.log(`data source index:${indx} `, page.items.dataSource)
        // bh.items.push(page.items.dataSource)
        // page.items.push(item.dateUploaded)
        let _item = {};
        page.items['Date-Uploaded'] = page.resultItems[0]['Date-Uploaded'];
        //  console.log("Date plus one",page.items['Date-Uploaded'])
        page.dateUploaded = this.correctDate(page.items['Date-Uploaded']);
        //console.log("newdate",  page.dateUploaded)
        page.items['dataSource'] = item.items;
        // page.items.push(_item)
        return page.items.dataSource;
      });

      // console.log('all data with date: ', bh.date)
      // console.log('all items: ', bh.items)

      let newIs = [];

      page.resultItems.forEach((item) => {
        if (item.items?.constructor != Array) {
          return newIs.push(item);
        }
        item.items?.forEach((value) => {
          newIs.push(value);
        });
      });

      // console.log('New Ins:', newIs)

      let newData = [];
      const transformedData = newIs.map((obj, indx) => {
        // console.log('Obj: ', obj)
        const newObj = { date: '' };
        newObj.date = bh.date[0]['Date-Uploaded'];
        Object.keys(obj).forEach((key, i) => {
          const newKey = key.replace(/[0-9]/g, ''); // Remove any digits from the key
          newObj[newKey] = obj[key];
          // console.log(newObj)
          if (i === 2) {
            newData.push(newObj);
          }
        });
        // return newObj;
      });

      newIs = newData;

      let newItems = [];
      bh.items = bh.items.filter((item) => {
        let _item;
        if (item?.constructor != Array) {
          return newItems.push(item);
        }
        item.forEach((value) => {
          newItems.push(value);
        });
      });

      // console.log('New Items: ', bh.items)

      //Pushing in the date
      bh.date = page.resultItems.forEach((item: any) => {
        item.items.forEach((x: any) => {
          x.date = page.dateUploaded;
        });
        // console.log("item", item)
        //page.items.push(item.dateUploaded)
        page.items['dataSource'] = item.items;
        // console.log("Date plus one",page.items['Date-Uploaded'])
      });

      //getting all items from different slips
      // console.log('Page items: ', page.items)
      for (let i = 0; i < page.items.length; i++) {
        page.totalItems.push(page.items[i].dataSource);
      }
      // console.log("get", page.totalItems)

      // for(let i=0;i<page._data.length;i++){
      //     for(let j = 0;j<page._data[i].length; j++){
      //       page.items.push(page._data[i][j])
      //     }
      //}
      // console.log("Final data ==>", page.items)

      // console.log("Table ==>",page.total)

      //assigning the backend data the table
      page.dataSource = new MatTableDataSource(newIs);

      // page.dataSource = new MatTableDataSource( page.items.dataSource.forEach((item:any) => {
      // item.date = page.dateUploaded
      // return item

      // }))
      // console.log("sate",page.items.dataSource )
      // console.log("backendData =>>", page.items)

      //page.tableDataBackup = new  MatTableDataSource( page.items.dataSource)

      // //converting the object to an Array
      page.arrayData = page.dataSource.data;

      // //adding the total to the spreadsheet and table
      // page.arrayData.forEach((item,indx) => {
      //   if(page.arrayData.length - 1 === indx){
      //     return;
      //   }
      //  page.arrayData[page.arrayData.length - 1].price = page.arrayData[page.arrayData.length - 1].price + item.price
      // })

      page.arrayData = page.dataSource.data;

      let arr = [];
      page.arrayData.forEach((item) => {
        arr.push(item.price);
        // return page.total = Number(page.total) + Number(item.price)
      });
      // console.log("Pricesssss", arr)

      // console.log(page.arrayData[page.arrayData.length - 1])
      // console.log("newArray", page.arrayData);

      //Adding the total to the total outside the table

      page.arrayData.forEach((item) => {
        return (page.totalA = page.totalA + item.price);
      });

      page.total = page.totalA.toFixed(2);
      bh.total = {
        category: 'Total',
        price: page.total,
      };

      newIs.push(bh.total);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_IfBYKhthQTu4bbdH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IfBYKhthQTu4bbdH');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = this.page.dataSource;
      this.page.fileName = this.page.excelsheet;
      this.page.price = 0;
      this.page.month = this.page.month;
      this.page.filterTotal = undefined;
      this.page.selectForm = { month: '' };
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
        console.log('Prices', item.price);
        // return page.total = Number(page.total) + Number(item.price)
      });
      // console.log("price", page.arrayData)
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

      page.tableData.filteredData = page.tableDataBackup.filteredData;

      page.total = page.tableData.filteredData.reduce(
        (total: any, item: any) => {
          return total + item.price, 0;
        }
      );

      console.log('Totals', page.total);

      bh.totalItem = page.dataSource._data._value.filter((item: any) => {
        return item.category == 'TOTAL';
      });

      console.log('total item==>', bh.totalItem);

      bh.totalItem.price = page.tableData.filteredData.reduce(
        (total: any, item: any) => {
          return total + item.price, 0;
        }
      );
      // console.log("Tot data data", bh.totalItem)
      // bh.totalItem[0].price = page.total

      // bh.newTable = page.tableData.filteredData.push(bh.totalItem[0])

      // page.tableData = new MatTableDataSource (page.tableData.filteredData)

      // console.log("filtered with Total ==>", page.tableData.filteredData);
      // console.log("new table ==>", bh.newTable);

      //appendnew_next_selected
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sZyFeQRfrOBuDMhn');
    }
  }

  sd_iBlFYTlpoczCmWts_4(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      page.dataSource.filter = filterValue.trim().toLowerCase();
      console.log('Filter ==>', page.dataSource);
      //appendnew_next_sd_iBlFYTlpoczCmWts_4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pFe0J3J5sbAUK40h');
    }
  }

  sd_Wz0oU0zwClzNifPc(bh) {
    try {
      const page = this.page; // console.log('page.items: ', page.items)

      let parts = page.items['Date-Uploaded'].split('/');
      let year = parts[0];
      let month = parseInt(parts[1]);
      let day = parts[2];
      let monthNames = [
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

      month++;
      bh.input.correctDate = `${day} ${monthNames[month - 2]} ${year}`;
      //appendnew_next_sd_Wz0oU0zwClzNifPc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wz0oU0zwClzNifPc');
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
