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
  //appendnew_flow_all_purchased_items_tableComponent_start

  sd_7NyJWrMmj6Xj60dl(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_7NyJWrMmj6Xj60dl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7NyJWrMmj6Xj60dl');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        { category: 'Groceries', name: 'Eggs', price: 2.99 },
        { category: 'Groceries', name: 'Milk', price: 3.49 },
        { category: 'Groceries', name: 'Bread', price: 2.0 },
        { category: 'Groceries', name: 'Apples', price: 1.99 },
        { category: 'Groceries', name: 'Pasta', price: 1.5 },
        {
          category: 'Maintenance',
          name: 'Light bulbs (pack of 4)',
          price: 8.99,
        },
        {
          category: 'Maintenance',
          name: 'AA Batteries (pack of 12)',
          price: 6.49,
        },
        { category: 'Maintenance', name: 'Duct Tape', price: 4.99 },
        { category: 'Maintenance', name: 'Multi-purpose Cleaner', price: 3.79 },
        {
          category: 'Maintenance',
          name: 'Paper Towels (pack of 6 rolls)',
          price: 9.99,
        },
        {
          category: 'Supplies',
          name: 'Printer Paper (ream of 500 sheets)',
          price: 5.99,
        },
        { category: 'Supplies', name: 'Pens (pack of 10)', price: 3.49 },
        { category: 'Supplies', name: 'Scotch Tape', price: 2.99 },
        { category: 'Supplies', name: 'Envelopes (pack of 50)', price: 7.99 },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R1PRW9sFGl6VSlzx');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.fileName = this.page.excelsheet;
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
      //appendnew_next_sd_amwwovLCcmHfVQy1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_amwwovLCcmHfVQy1');
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
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hdhS3ro8xt00s7ac');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        { category: 'Groceries', name: 'Eggs', price: 2.99 },
        { category: 'Groceries', name: 'Milk', price: 3.49 },
        { category: 'Groceries', name: 'Bread', price: 2.0 },
        { category: 'Groceries', name: 'Apples', price: 1.99 },
        { category: 'Groceries', name: 'Pasta', price: 1.5 },
        {
          category: 'Maintenance',
          name: 'Light bulbs (pack of 4)',
          price: 8.99,
        },
        {
          category: 'Maintenance',
          name: 'AA Batteries (pack of 12)',
          price: 6.49,
        },
        { category: 'Maintenance', name: 'Duct Tape', price: 4.99 },
        { category: 'Maintenance', name: 'Multi-purpose Cleaner', price: 3.79 },
        {
          category: 'Maintenance',
          name: 'Paper Towels (pack of 6 rolls)',
          price: 9.99,
        },
        {
          category: 'Supplies',
          name: 'Printer Paper (ream of 500 sheets)',
          price: 5.99,
        },
        { category: 'Supplies', name: 'Pens (pack of 10)', price: 3.49 },
        { category: 'Supplies', name: 'Scotch Tape', price: 2.99 },
        { category: 'Supplies', name: 'Envelopes (pack of 50)', price: 7.99 },
      ]);

      //storing in name tableData
      bh.local.tableData = bh.local.dataSource;
      console.log(bh.local.tableData);

      //converting

      // const worksheet: WorkSheet = utils.table_to_sheet(bh.local.tableData);

      // Create a new workbook and add the worksheet to it
      // const workbook: WorkBook = utils.book_new();
      // utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      // Convert the workbook to a binary string
      // const excelBuffer: any = write(workbook, { bookType: 'xlsx', type: 'array' });

      // Create a Blob from the binary string and save it using FileSaver
      // const dataBlob: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      // saveAs(dataBlob, 'table_data.xlsx');

      //trying new one

      // fileName = "excelsheet.xlsx"

      let data = document.getElementById('table-table');

      const ws: WorkSheet = utils.table_to_sheet(data);
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
