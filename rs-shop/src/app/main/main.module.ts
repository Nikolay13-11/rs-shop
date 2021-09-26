import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BreadcrumbModule } from 'xng-breadcrumb';

import { SharedModule } from '../shared/shared.module';
import { CatigoriesComponent } from './components/categories/catigories.component';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MainComponent } from './components/main.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';
import { ChangeAvailabilityStateDirective } from './directives/change-availability-state.directive';
import { MainRoutingModule } from './main-routing.module';
import { SortByCostPipe } from './pipes/sort-by-cost.pipe';
import { SortByPopularityPipe } from './pipes/sort-by-popularity.pipe';
import { ChangeFavoriteStateDirective } from './directives/change-favorite-state.directive';

// import { NgbdRatingBasic } from './rating-basic';



@NgModule({
  declarations: [
    MainComponent,
    CatigoryComponent,
    DetailComponent,
    FavoritesComponent,
    WaitListComponent,
    StartPageComponent,
    CatigoriesComponent,
    OrdersComponent,
    ChangeAvailabilityStateDirective,
    SortByPopularityPipe,
    SortByCostPipe,
    ChangeFavoriteStateDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    SharedModule,
    BreadcrumbModule
    // NgbdRatingBasic
  ]
})
export class MainModule { }
