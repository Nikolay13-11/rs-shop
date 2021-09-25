import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import {
    ContactsBlockComponent
} from './components/footer/components/contacts-block/contacts-block.component';
import { SocialComponent } from './components/footer/components/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoBlockComponent } from './components/header/components/info-block/info-block.component';
import {
    NavigateBlockComponent
} from './components/header/components/navigate-block/navigate-block.component';
import {
    NavigateByCatigoryComponent
} from './components/header/components/navigate-block/navigate-by-catigory/navigate-by-catigory.component';
import {
    ProfileComponent
} from './components/header/components/navigate-block/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InfoBlockComponent,
    NavigateBlockComponent,
    ProfileComponent,
    NavigateByCatigoryComponent,
    ContactsBlockComponent,
    SocialComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
