import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactsBlockComponent } from './components/footer/components/contacts-block/contacts-block.component';
import { SocialComponent } from './components/footer/components/social/social.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoBlockComponent } from './components/header/components/info-block/info-block.component';
import { NavigateBlockComponent } from './components/header/components/navigate-block/navigate-block.component';
import { NavigateByCatigoryComponent } from './components/header/components/navigate-block/navigate-by-catigory/navigate-by-catigory.component';
import { ProfileComponent } from './components/header/components/navigate-block/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';



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
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
