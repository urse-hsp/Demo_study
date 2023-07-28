import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // 同步
  get() {
    return 'this is a seriver';
  }
  getCallbackData() {
    setTimeout(() => {}, 1000);
  }

  getRxjsData() {
    return new Observable((observer) => {
      let username = '张三- Observable';
      observer.next(username);
    });
  }
}
