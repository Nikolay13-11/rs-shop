import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MainComponent } from './components/main.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';



@NgModule({
  declarations: [
    MainComponent,
    CatigoryComponent,
    DetailComponent,
    FavoritesComponent,
    WaitListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
