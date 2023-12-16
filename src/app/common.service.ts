import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public countSub: BehaviorSubject<any> = new BehaviorSubject(0);
  public count:number = 0;

  getValue(){
    return this.countSub.asObservable();
  }

  setValue(){
    this.count++;
    this.countSub.next(this.count);
  }

}
