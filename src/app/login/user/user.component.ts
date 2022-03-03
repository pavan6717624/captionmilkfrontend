import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginStatus } from 'src/app/user/home/home.component';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private router: Router, private msg: NzMessageService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getLoginDetails();
  }

  loading=false;
  loginStatus: LoginStatus = new LoginStatus();
  userType: string = '';
  
  getLoginDetails() {
    this.loading = true;
    this.loginService.getLoginDetails().subscribe(
      (res: any) => {
        this.loading = false;
        this.loginStatus = res;
        this.userType = this.loginStatus.userType;
        if(this.userType === 'Customer')
        {
          console.log("Customer Login found.")
          this.router.navigate(['customer']);
          return;
        }
        else
        {
          this.msg.error('Invalid Session Found.');
          this.router.navigate(['']);
          return;
        }
       
      },
      (err) => {
        this.loading = false; this.msg.create('error', 'Session Expired. Please Login...');
        this.router.navigate(['login']);
      }
    );
  }

}
