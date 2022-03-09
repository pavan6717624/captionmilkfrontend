import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginService } from 'src/app/login/login.service';
import { LoginStatus } from '../home/home.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  selectedMenu : number = 1;
  menuVisible=false;


  back()
  {
    this.location.back();
  }

  constructor( private location: Location, private route:ActivatedRoute, private router: Router, private msg: NzMessageService, private loginService: LoginService) {

 

    if(router.url.includes("/home"))
    {
      this.selectedMenu = 1;
    }
    else if(router.url.includes("/usercaption"))
    {
      this.selectedMenu = 2;
    }
    else if(router.url.includes("/usercustomer"))
    {
      this.selectedMenu = 3;
    }
    else if(router.url.includes("/reports"))
    {
      this.selectedMenu = 4;
    }
    else 
    {
      this.selectedMenu = 1;
    }

   }

  ngOnInit(): void {
    this.getLoginDetails();
  }


  loginStatus: LoginStatus = new LoginStatus();
  userType: string = '';
  

  loading=false;

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

  open(): void {
    this.menuVisible = true;
  }

  close(id: number): void {
    if(id!=0)
    this.selectedMenu = id;
    this.menuVisible = false;

    if(id==7)
    this.logout();
    
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  toHome()
  {
    this.router.navigate(['/customer/home']);
  }

}
