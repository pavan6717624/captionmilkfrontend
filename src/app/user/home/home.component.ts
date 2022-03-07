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
    var header = window.document.getElementById("header");

    if (header) {
      header.innerHTML = 'Caption Milk';
    }
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
              
      },
      (err) => {
        
        this.router.navigate(['login']);
      }
    );
  }

  toUser(id:number)
  {
    if(id==0)
    this.router.navigate(['customer/usercaption']);	
    else if(id==1)
    this.router.navigate(['customer/usercustomer']);	
    else if(id==2)
    this.router.navigate(['customer/products']);	
    else if(id==3)
    this.router.navigate(['customer/categories']);	
    else if(id==4)
    this.router.navigate(['customer/reports']);	
  }

}
