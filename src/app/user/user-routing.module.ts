import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  { path:'',component: LayoutComponent,

  children: [
   

  { path:'',component: HomeComponent},
  { path:'home',component: HomeComponent},
  { path:'reports',component: ReportsComponent},
  { path:'usercaption',component: UserComponent , data : {user : 'Caption'}, },
  { path:'usercustomer',component: UserComponent , data : {user : 'Customer'}, },
  { path:'usercustomer',component: UserComponent , data : {user : 'Customer'}, },
  { path:'details',component: DetailsComponent},
   { path:'products',component: ProductsComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
