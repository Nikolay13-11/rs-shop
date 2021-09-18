import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatigoriesComponent } from './components/catigories/catigories.component';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { DetailComponent } from './components/detail/detail.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: ':categoriesId',
    component: CatigoriesComponent,
  },
  {
    path: ':categoriesId/:categoryId',
    component: CatigoryComponent,
  },
  {
    path: ':categoriesId/:categoryId/:goodId',
    component: DetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
