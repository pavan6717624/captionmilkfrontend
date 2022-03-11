import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Category } from '../products/products.component';
import { UserService } from '../user.service';
import { LoginStatus } from '../home/home.component';
import { LoginService } from 'src/app/login/login.service';
import { Users } from '../user/user.component';
import { DeviceDetectorService } from 'ngx-device-detector';

export class Product
{
  id:number = 0;
  bid:number = 0;
	cid:number = 0;
	qid:number = 0;
	rid:number = 0;

  reportDate: string = '';
	
	brand: number = 0;
	
	category: number = 0;
	
	quantity : number = 0;
	
	repeatDays: number = 0;

	amount:number = 0;
		
  morning : Boolean = true;
  
  afternoon : Boolean = true;

  evening : Boolean = true;
	
	fromDate : string = '';
	
  toDate: string = '';
  
  todayAmount: number = 0;
  netAmount : number = 0;
  monthAmount : number = 0;
	
	serviceAvailed : Boolean = false;
	
  outOfHome : Boolean  = false;

  contact: number = 0;

  type: string = '';

  created: Boolean = false;

  name: string = '';

  
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

user: Users=new Users();
isMobile=false;

  constructor(private deviceService: DeviceDetectorService,private userService: UserService, private loginService: LoginService,private route: ActivatedRoute,private router: Router,private msg: NzMessageService,private notification: NzNotificationService) { 
    this.isMobile = this.deviceService.isMobile();
    const navigation = this.router.getCurrentNavigation();
    this.user = (navigation?.extras?.state?.userDetails);

    if(!this.user)
    {
      this.router.navigate(["customer"]);
    }
    
    else
    this.startLoading()
    

  }

  

  dates : Date [] = [];

  categoryAll: Category[]=[];
  brandAll: Category[]=[];
  quantityAll: Category[]=[];
  repeat: Category[]=[];
  type: string ='ADD'

  color = ['white','white','white','white','white','white','white'];

  count: number = 0;
  id:number = -1;

  today: Date = new Date();

  product: Product[]=[];

	brand: number=0;
	
	category: number = 0;
	
	quantity : number =0;
	
	repeatDays: number =0;

  amount:number = 0;
  
  sumAmount : number = 0;
		

	
	fromDate : string = '';
	
	toDate: string = '';
	
	serviceAvailed : Boolean = false;
	
	outOfHome : Boolean  = false;

  morning : Boolean = true;
  afternoon : Boolean = true;
  evening : Boolean = true;




  ngOnInit(): void {

    var header = window.document.getElementById("header");

    if (header) {
      header.innerHTML = 'Product Details';
    }

    //this.getLoginDetails();

  



   
  }
  getRepeatDays()
  {

    this.loading=true;
    this.userService.getRepeats().subscribe(
      (res : any) => { console.log(res);   this.repeat = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  getCategories()
  {

    this.loading=true;
    this.userService.getCategories().subscribe(
      (res : any) => { console.log(res);   this.categoryAll = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

sum()
{
  this.sumAmount = 0;
  for(var i=0;i<this.product.length;i++)
  this.sumAmount+=this.product[i].amount;
}

  getProducts()
  {

    
    var formData=new FormData();
    var datePipe = new DatePipe('en-US');
  
    formData.set("selectedDate",datePipe.transform(this.selectedDate, 'yyyy-MM-dd')+"");
    formData.set("contact",this.user.contact+"");
    formData.set("type",this.user.type);
    this.loading=true;
    this.userService.getProducts(formData).subscribe(
      (res : any) => { console.log(res);   this.product = res; this.sum(); this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  getBrands()
  {

    this.loading=true;
    this.userService.getBrands().subscribe(
      (res : any) => { console.log(res);   this.brandAll = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  getQuantities()
  {

    this.loading=true;
    this.userService.getQuantities().subscribe(
      (res : any) => { console.log(res);   this.quantityAll = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }


 getDates()
 {
  var curr = new Date(); // get current date

  curr=new Date(curr.setDate(curr.getDate()+this.count));

  var first = curr.getDate() - curr.getDay()-1; // First day is the day of the month - the day of the week
  
  
  var firstday = new Date(curr.setDate(first));
  

  for(var i=0;i<=6;i++)
  {
   this.dates[i]=new Date(curr.setDate(curr.getDate()+1));
   if(this.dates[i].toLocaleDateString()==this.today.toLocaleDateString())
   this.color[i]='orange';
   else
   this.color[i]='white';
  }

  

 }

 selectedDate = new Date();
 captureDate(date: Date,id : number)
 {
 this.selectedDate = date;

 for(var i=0;i<7;i++)
 this.color[i]='white';

 if(this.selectedDate.toLocaleDateString()==this.today.toLocaleDateString())
 this.color[id]='orange';
 else
 this.color[id]='lightblue';

 this.getProducts();
   
 }

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
       this.startLoading();
       }
       else
       {
         this.msg.error('Invalid Session Found.');
         this.router.navigate(['']);
         return;
       }
      
     },
     (err) => {
       console.log(err);
       //this.loading = false; this.msg.create('error', 'Session Expired. Please Login...');
       this.router.navigate(['login']);
     }
   );
 }

 startLoading()
 {
  this.getDates();
  this.getCategories();
  this.getBrands();
  this.getQuantities();
  this.getRepeatDays();
  this.getProducts();
 }

 
minus()
{
  this.count-=7;
  this.getDates();
}

plus()
{
  this.count+=7;
   this.getDates();
}

loading = false;
addProduct()
{
  this.loading=true;
  let product : Product=new Product();
 
  product.id=this.id;

  product.brand = this.brand;
  product.category=this.category;
  	
	product.quantity=this.quantity;
	
	product.repeatDays=this.repeatDays;

	product.amount=this.amount;
		
  product.morning=this.morning;
  
  product.evening=this.evening;
  
  product.afternoon=this.afternoon;

  product.contact=this.user.contact;

  product.type=this.user.type;

  product.created=this.user.created;
  
	

  var datePipe = new DatePipe('en-US');
  product.fromDate = datePipe.transform(this.selectedDate, 'yyyy-MM-dd')+"";


  console.log(product.toDate+" "+product.fromDate);
	
	
	product.serviceAvailed =this.serviceAvailed;
	
	product.outOfHome =this.outOfHome;
  

   this.userService.addProduct(product).subscribe(
     (res : any) => { console.log(res);  this.closeVisible(); this.getProducts(); this.loading=false;},
     (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
    
      );
}

visible=false;
closeVisible()
{
  this.visible=false;
  this.type='ADD';
  this.brand=-1;

  this.id=-1;
	
	this.category =-1;
	
	this.quantity = -1;
	
	this.repeatDays= -1;

	this.amount= 0;
		
  this.morning = true;
  
  this.afternoon = true;

  this.evening = true;
	
	this.fromDate = '';
	
	this.toDate= '';
	
	this.serviceAvailed  = false;
	
	this.outOfHome  = false;

}

edit(product:Product)
{
 
console.log(product);

this.type='EDIT';

this.id=product.id;

  this.brand=product.bid;
	
	this.category = product.cid;
	
	this.quantity =product.qid;
	
	this.repeatDays= product.rid;

	this.amount= product.amount;
		
  this.morning = product.morning;
  
  this.afternoon = product.afternoon;

  this.evening = product.evening ;
	this.fromDate = product.fromDate ;
	
	this.toDate= product.toDate;
	this.serviceAvailed  = product.serviceAvailed ;
	
  this.outOfHome  = product.outOfHome;
  
  this.visible=true;
}

statusChanging=false;

statusChange()
{
  this.statusChanging=true;

  var formData=new FormData();
  var datePipe = new DatePipe('en-US');
  
  formData.set("selectedDate",datePipe.transform(this.selectedDate, 'yyyy-MM-dd')+"");
  formData.set("contact",this.user.contact+"");
  formData.set("type",this.user.type);

  this.userService.statusChange(formData).subscribe(
    (res : any) => { console.log(res); this.statusChanging=false; this.getProducts();},
    (err) => { console.log(err);this.statusChanging=false; this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
   
     );


}
toProducts()
{
  this.router.navigate(["/customer/categories"]);
}
}
