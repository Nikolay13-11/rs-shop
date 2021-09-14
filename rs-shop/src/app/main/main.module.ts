import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MainComponent } from './components/main.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';
import { MainRoutingModule } from './main-routing.module';
// import { NgbdRatingBasic } from './rating-basic';



@NgModule({
  declarations: [
    MainComponent,
    CatigoryComponent,
    DetailComponent,
    FavoritesComponent,
    WaitListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    SharedModule,
    // NgbdRatingBasic
  ]
})
export class MainModule { }
