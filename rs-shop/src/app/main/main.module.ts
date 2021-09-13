import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MainComponent } from './components/main.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';
import { MainRoutingModule } from './main-routing.module';



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
    NgbModule
  ]
})
export class MainModule { }
