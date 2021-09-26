import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  constructor(
    private render:Renderer2,
    private loginService: LoginService
    ) { }
  form!: FormGroup;
  userName: string = '';
  password: string = '';
  statePopUp$?: Observable<boolean>
  statePopUpRegistration$?: Observable<boolean>

  ngOnInit() {
    // this.render.addClass(document.body,'not-Scrl')
    // this.render.removeClass(document.getElementById('cover'),'hidden')
    this.statePopUp$ = this.loginService.sharedStatePopUpLogin;
    this. statePopUpRegistration$ = this.loginService.sharedStatePopUpRegistration;
    console.log(this.statePopUpRegistration$)
      this.form = new FormGroup({
          userName: new FormControl('', Validators.required),
          password: new FormControl(null, Validators.required)
      })
  }

  submitLoginForm() {

  }

  closePopUp() {
    this.render.removeClass(document.body,'not-Scrl')
    this.render.addClass(document.getElementById('cover'),'hidden')
    this.loginService.nextStatePopUpLogin(false)
  }

  openRegistration() {
    this.loginService.nextStatePopUpLogin(false)
    this.loginService.nextStatePopUpRegistration(true)
  }


}
