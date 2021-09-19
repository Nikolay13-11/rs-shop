import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatigoriesComponent } from './components/categories/catigories.component';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'wait',
    component: WaitListComponent,
  },
  {
    path: '',
    data: {
      breadcrumb: null
    },
    component: StartPageComponent
  },
  {
    path: ':categoriesId',
    data: {
      breadcrumb: null
    },
    component: CatigoriesComponent,
  },
  {
    path: ':categoriesId/:categoryId',
    component: CatigoryComponent,
  },
  {
    path: ':categoriesId/:categoryId/:goodId',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
