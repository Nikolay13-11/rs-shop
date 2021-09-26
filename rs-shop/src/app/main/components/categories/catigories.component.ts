import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

import { DataFromHttpService } from '../../services/data-from-http.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss'],
})
export class CatigoriesComponent  implements OnInit{
  subCategories$?: Observable<any>
  cat?:string;
  // public breadcrumbs: IBreadCrumb[]

  constructor(
    private dateService:DataFromHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    ) {
      // this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
     }

  updateCategories() {
    const  { categoriesId }  = this.activatedRoute.snapshot.params;
    this.cat = categoriesId
    this.dateService.nextCategoryById(categoriesId)
    this.subCategories$ = this.dateService.sharedSubCategoryById
    console.log(this.subCategories$)
  }

  breadcrumb() {
    const  { categoriesId }  = this.activatedRoute.snapshot.params;
    let a = this.dateService.getCatName(categoriesId);
    // this.breadcrumbService.set('@ChildOne', a);
  }

  ngOnInit() {
    this.updateCategories()
    this.breadcrumb()



    //
  //   this.router.events.pipe(
  //     filter((event: any) => event instanceof NavigationEnd),
  //     distinctUntilChanged(),
  // ).subscribe(() => {
  //     this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  // })
  }

  // buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
  //   let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
  //   let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

  //   // If the route is dynamic route such as ':id', remove it
  //   const lastRoutePart = path?.split('/').pop();
  //   const isDynamicRoute = lastRoutePart?.startsWith(':');
  //   if(isDynamicRoute && !!route.snapshot) {
  //     const paramName = lastRoutePart?.split(':')[1];
  //     path = path?.replace(lastRoutePart!, route.snapshot.params[paramName!]);
  //     label = route.snapshot.params[paramName!];
  //   }

  //   //In the routeConfig the complete path is not available,
  //   //so we rebuild it each time
  //   const nextUrl = path ? `${url}/${path}` : url;

  //   const breadcrumb: IBreadCrumb = {
  //       label: label,
  //       url: nextUrl,
  //   };
  //   // Only adding route with non-empty label
  //   const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
  //   if (route.firstChild) {
  //       //If we are not on our current path yet,
  //       //there will be more children to look after, to build our breadcumb
  //       return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
  //   }
  //   return newBreadcrumbs;
  // }

}
