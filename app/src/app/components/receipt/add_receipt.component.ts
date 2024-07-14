// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_receipt',
  templateUrl: './add_receipt.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
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
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
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
      bh = this.sd_A5r0H5kDW6WM91jP(bh);
      //appendnew_next_sd_nRZRxWg6wQmHetCJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nRZRxWg6wQmHetCJ');
    }
  }

  fileUpload(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_Xn5Q5mBqtkhFarTu(bh);
      //appendnew_next_fileUpload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GOuc6EjJwfP1AfCW');
    }
  }

  addItem(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_at75G7Cz2S4ahDoN(bh);
      //appendnew_next_addItem
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FWcgYRbxKgB1kUrP');
    }
  }

  deleteItem(indx = 0, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { indx };
      bh.local = {};
      bh = this.sd_pdHiYhMVlbasLEU8(bh);
      //appendnew_next_deleteItem
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aARaqv8dakl0hEjs');
    }
  }

  submitButton(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9LGvU2NOvRTOlwrQ(bh);
      //appendnew_next_submitButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6leVIgrvohUJBulP');
    }
  }
  //appendnew_flow_add_receiptComponent_start

  sd_A5r0H5kDW6WM91jP(bh) {
    try {
      this.page._formBuilder = this.__page_injector__.get(FormBuilder);
      bh = this.sd_ahFKFHcLEcEikruI(bh);
      //appendnew_next_sd_A5r0H5kDW6WM91jP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A5r0H5kDW6WM91jP');
    }
  }

  sd_ahFKFHcLEcEikruI(bh) {
    try {
      this.page.yellow = true;
      this.page.green = true;
      this.page.orange = true;
      this.page.firstFormGroup = undefined;
      this.page.secondFormGroup = undefined;
      this.page.thirdFormGroup = undefined;
      this.page.file = undefined;
      this.page.userName = undefined;
      this.page.receiptDetails = {};
      this.page.item = undefined;
      this.page.submit = false;
      this.page.uploadFile = undefined;
      bh = this.sd_3aw5HhPzmUKV6P8y(bh);
      //appendnew_next_sd_ahFKFHcLEcEikruI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ahFKFHcLEcEikruI');
    }
  }

  sd_3aw5HhPzmUKV6P8y(bh) {
    try {
      const page = this.page;
      {
        page.firstFormGroup = page._formBuilder.group({
          firstCtrl: ['', Validators.required],
        });
        page.secondFormGroup = page._formBuilder.group({
          username: ['', Validators.required],
          shopName: ['', Validators.required],
          totalAmount: ['', Validators.required],
        });
        page.thirdFormGroup = page._formBuilder.group({
          items: page._formBuilder.array([]),
        });
      }

      page.item = page._formBuilder.group({
        itemName: ['', Validators.required],
        price: ['', Validators.required],
        category: ['', Validators.required],
      });

      console.log(page.thirdFormGroup);
      console.log('Items: ', page.item);

      // page.clientDetails = {fullName: '', email: '', idNum: '', remotePin: '', confirmRemotePin: '', ID_doc: '', proof_of_res: '', picture: ''}
      //appendnew_next_sd_3aw5HhPzmUKV6P8y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3aw5HhPzmUKV6P8y');
    }
  }

  sd_Xn5Q5mBqtkhFarTu(bh) {
    try {
      const page = this.page;
      page.fileAttached = true;
      page.file = bh.input.event.target.files[0];

      let file: File;
      if (bh.input.event) {
        page.file = bh.input.event.target.files[0];

        bh.fileType = page.file['type'].split('/')[0];
        console.log('file type: ', bh.fileType);
        bh.fileType = bh.fileType == 'image';
        console.log('file type: ', bh.fileType);
      } else {
        console.log('The is no file uploaded');
      }

      bh = this.sd_ni39tTX5ljnk0Dm3(bh);
      //appendnew_next_sd_Xn5Q5mBqtkhFarTu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xn5Q5mBqtkhFarTu');
    }
  }

  sd_ni39tTX5ljnk0Dm3(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.fileType,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zPXa5zK50mrXVXEX(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ni39tTX5ljnk0Dm3');
    }
  }

  sd_zPXa5zK50mrXVXEX(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('File is not an image', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_zPXa5zK50mrXVXEX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zPXa5zK50mrXVXEX');
    }
  }

  sd_at75G7Cz2S4ahDoN(bh) {
    try {
      const page = this.page; // page.item = page._formBuilder.group({
      //     itemName: ['', Validators.required],
      //     price: ['', Validators.required],
      //     category: ['', Validators.required]
      // })

      page.thirdFormGroup.controls.items.push(page.item);

      console.log(page.thirdFormGroup);
      //appendnew_next_sd_at75G7Cz2S4ahDoN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_at75G7Cz2S4ahDoN');
    }
  }

  sd_pdHiYhMVlbasLEU8(bh) {
    try {
      const page = this.page;
      page.thirdFormGroup.controls.items.removeAt(bh.input.indx);

      console.log(page.thirdFormGroup);
      //appendnew_next_sd_pdHiYhMVlbasLEU8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pdHiYhMVlbasLEU8');
    }
  }

  sd_9LGvU2NOvRTOlwrQ(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_s6dvhkZOu1LGykRK(bh);
      //appendnew_next_sd_9LGvU2NOvRTOlwrQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9LGvU2NOvRTOlwrQ');
    }
  }

  sd_s6dvhkZOu1LGykRK(bh) {
    try {
      const page = this.page;
      page.submit = true;
      bh.urlData = page.ssdURL + 'add-receipt-data';
      bh.urlFile = page.ssdURL + 'upload-receipt';

      console.log('BH URL FILE: ', bh.urlFile);

      page.uploadFile = new FormData();
      console.log('FILE: ', page.file);

      page.uploadFile.append('file', page.file);
      console.log(
        'File in formdata using file: ',
        page.uploadFile.getAll('file')
      );

      console.log('Fil to be upaloded: ', page.uploadFile);

      // Shop details
      page.receiptDetails.shopName = page.secondFormGroup.value.shopName;
      page.receiptDetails.username = page.secondFormGroup.value.username;
      page.receiptDetails.totalAmount = page.secondFormGroup.value.totalAmount;

      // Items
      page.receiptDetails.items = page.thirdFormGroup.value.items;

      // bh.headers = {fileId: `fileId-${new Date().getMilliseconds()}`}

      // page.receiptDetails.fileId =  bh.headers.fileId

      // console.log('Data to be uploaded: ', page.receiptDetails)

      // page.params = 'filleeee'

      bh = this.sd_s7tHHBChQebDhs7Y(bh);
      //appendnew_next_sd_s6dvhkZOu1LGykRK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s6dvhkZOu1LGykRK');
    }
  }

  async sd_s7tHHBChQebDhs7Y(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.receiptDetails,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.postReceiptDetails(bh);
        bh = this.postReceiptFile(bh);
      } else {
        bh = await this.sd_rSvxiyPkIn4Mlg68(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s7tHHBChQebDhs7Y');
    }
  }

  async postReceiptDetails(bh) {
    try {
      let requestOptions = {
        url: bh.urlData,
        method: 'post',
        responseType: 'json',
        headers: bh.headers,
        params: {},
        body: this.page.receiptDetails,
      };
      bh.resultsData = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_LqOhakaKQklXKd0v(bh);
      //appendnew_next_postReceiptDetails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhlukPp9b0HU2ZkA');
    }
  }

  sd_LqOhakaKQklXKd0v(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Receipt form has been submitted', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_F1vJDnUIRbscHmnX(bh);
      //appendnew_next_sd_LqOhakaKQklXKd0v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LqOhakaKQklXKd0v');
    }
  }

  async sd_F1vJDnUIRbscHmnX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/operations_dashboard/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_F1vJDnUIRbscHmnX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F1vJDnUIRbscHmnX');
    }
  }

  async postReceiptFile(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/upload-receipt',
        method: 'post',
        responseType: 'json',
        headers: bh.headers,
        params: this.page.params,
        body: this.page.uploadFile,
      };
      bh.resultsFile = await this.sdService.nHttpRequest(requestOptions);
      this.sd_nUPxJlgT43TeubxQ(bh);
      //appendnew_next_postReceiptFile
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_71LrZCbGNNuDRf1c');
    }
  }

  sd_nUPxJlgT43TeubxQ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.resultsFile);
      //appendnew_next_sd_nUPxJlgT43TeubxQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nUPxJlgT43TeubxQ');
    }
  }

  sd_rSvxiyPkIn4Mlg68(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('The form you are sending is empty!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_rSvxiyPkIn4Mlg68
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rSvxiyPkIn4Mlg68');
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
