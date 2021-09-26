import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private render:Renderer2,
    private loginService: LoginService
  ) { }
  form!: FormGroup;
  userName: string = '';
  password: string = '';
  SubName: string = '';
  Name: string = '';


  ngOnInit() {
    // this.render.addClass(document.body,'not-Scrl')
    // this.render.removeClass(document.getElementById('cover'),'hidden')
    console.log()
      this.form = new FormGroup({
        Name: new FormControl('', Validators.required),
        SubName: new FormControl('', Validators.required),
        userName: new FormControl('', Validators.required),
        password: new FormControl(null, Validators.required),
      })
  }

  closeRegistration() {
    this.loginService.nextStatePopUpLogin(true)
    this.loginService.nextStatePopUpRegistration(false)
  }

  submitRegistrationForm(){

 }
}

