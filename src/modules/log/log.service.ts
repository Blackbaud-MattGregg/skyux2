import { Injectable } from '@angular/core';

@Injectable()
export class SkyLogService {
  public warn(message?: any, ...optionalParams: any[]) {
    /*istanbul ignore else */
    if (window.console) {
      window.console.warn.apply(window.console, arguments);
    }
  }
}
