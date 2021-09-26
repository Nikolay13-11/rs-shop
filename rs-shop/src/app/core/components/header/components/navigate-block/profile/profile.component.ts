import { Component, Renderer2 } from '@angular/core';

import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  constructor(private loginService: LoginService, private render:Renderer2,) { }

  changeLoginState() {
    this.loginService.nextStatePopUpLogin(true);
    this.render.addClass(document.body,'not-Scrl')
    this.render.removeClass(document.getElementById('cover'),'hidden')
  }
}
