import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private statePopUpLogin = new BehaviorSubject(false)
  private statePopUpRegistration = new BehaviorSubject(false)

  sharedStatePopUpLogin = this.statePopUpLogin.asObservable();
  sharedStatePopUpRegistration = this.statePopUpRegistration.asObservable();

  nextStatePopUpLogin(value:boolean) {
    this.statePopUpLogin.next(value)
  }
  nextStatePopUpRegistration(value:boolean) {
    this.statePopUpRegistration.next(value)
  }

}
