import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from './user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportsComponent,
    UserComponent,
    LayoutComponent,
    DetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
