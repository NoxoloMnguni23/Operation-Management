// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_K3h7HRdB7cUCiRWX from 'app/sd-services/getData'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_K3h7HRdB7cUCiRWX: sd_K3h7HRdB7cUCiRWX.getData) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
