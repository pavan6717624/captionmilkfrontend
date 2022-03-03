import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginService } from 'src/app/login/login.service';

export class LoginStatus
{
  contact : number =0;
	userType : string ='NONE';
	status : boolean = false;
	jwt : string = '';
	message : string = '';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        if(this.userType!='Customer')
        {
          this.msg.create('info', 'Logging in...');
          this.router.navigate(['login']);
          return;
        }
        else
        {
          //this.msg.success("Successful Login as User");
        }
       
      },
      (err) => {
        this.loading = false; this.msg.create('error', 'Session Expired. Please Login...');
        this.router.navigate(['login']);
      }
    );
  }

}
