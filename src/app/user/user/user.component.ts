import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from '../user.service';

export class Users
{
   name: string ='';
	 contact: number =0 ;
	 address: string ='';
	 regularAmount:number =0;
	 type: string ='';
   created: Boolean = false;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userType: string = '';
  name: string = '';
  mobile: string = '';
  address : string = '';
  amount: string = '0';
  showAddUserVisible=false;

  usersList: Users[]=[];

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router,private msg: NzMessageService,private notification: NzNotificationService) { 


    this.route.data.subscribe(v => this.userType = v.user);

    console.log(this.userType);
   }

   ngOnInit(): void {

    this.getUserDetails();

    var header = window.document.getElementById("header");

    if (header) {
      header.innerHTML = this.userType+' Dashboard';
    }

  }

  loading = false;

  toProducts(contact:number, created: Boolean)
  {
    let user: Users=new Users();
    user.contact = contact;
    user.type=this.userType;
    user.created=created;
    this.router.navigate(["/customer/products"], { state: {userDetails:  user}});
  }

  getUserDetails()
  {
    var formData = new FormData();
    formData.set("type",this.userType);
    this.loading=true;
    this.userService.getUsersList(formData).subscribe(
      (res : any) => { console.log(res);   this.usersList = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

 downloading=false;

  download()
  {
    // this.downloading=true;
    // this.userService.downloadGST(this.usersList).subscribe((res : any) => {
    //   const link = document.createElement('a');
    //   link.href = window.URL.createObjectURL(new Blob([res], { type: 'text/csv' }));
    //   link.download = this.userType + ' List.csv';
    //   link.click();
    //   link.remove();
    //   this.downloading=false;
    // });
  }

  addUser()
  {
    if (this.name.trim().length == 0) {
      this.msg.error("Please provide Valid Name");
      return;
    }
    
    else if (this.mobile.trim().length == 0 || !this.checkMobile()) {
      this.msg.error("Please provide Valid Mobile Number");
      return;
    }
    else if (this.address.trim().length == 0) {
      this.msg.error("Please provide Valid Address");
      return;
    }
    else if (this.amount.trim().length == 0 || !this.checkAmount()) {
      this.msg.error("Please provide Valid Amount");
      return;
    }

    var formData = new FormData();
    formData.set("name",this.name);
    formData.set("address",this.address);
    formData.set("mobile",this.mobile);
    formData.set("type",this.userType);
    formData.set("amount",this.amount);

    this.loading=true;
    this.userService.addUser(formData).subscribe(
      (res : any) => { console.log(res);  if(res.status){this.msg.success(res.message); this.ngOnInit(); this.showAddUserClose();this.usersList = res.users; } else {this.msg.error(res.message); } this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
    

  }

  checkMobile() {
    let isnum = /^\d+$/.test(this.mobile);
    return isnum && this.mobile.length == 10;
  }

  checkAmount() {
    let isnum = /^\d+$/.test(this.amount.replace(".",""));
    return isnum;
  }

  showAddUserClose()
  {
    this.showAddUserVisible=false;
    this.name = '';
  this.mobile= '';
  this.address  = '';
  this.amount= '';
  }

}
