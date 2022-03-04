import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SuccessComponent } from './success/success.component';
import { UserComponent } from './user/user.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  declarations: [
    LoginComponent,
    SuccessComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    NzLayoutModule
  ]
})
export class LoginModule { }
