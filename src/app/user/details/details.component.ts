import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Category } from '../products/products.component';
import { UserService } from '../user.service';

export class Product
{
  id:number = 0;
  bid:number = 0;
	cid:number = 0;
	qid:number = 0;
	rid:number = 0;

	
	brand: string='';
	
	category: string = '';
	
	quantity : string = '';
	
	repeatDays: string = '';

	amount:number = 0;
		
	daySchedule:number = 0;
	
	fromDate : string = '';
	
	toDate: string = '';
	
	serviceAvailed : Boolean = false;
	
	outOfHome : Boolean  = false;

}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router,private msg: NzMessageService,private notification: NzNotificationService) { }

  dates : Date [] = [];

  categoryAll: Category[]=[];
  brandAll: Category[]=[];
  quantityAll: Category[]=[];
  repeat: Category[]=[];

  color = ['white','white','white','white','white','white','white'];

  count: number = 0;

  today: Date = new Date();

  product: Product[]=[];

	brand: string='';
	
	category: string = '';
	
	quantity : string = '';
	
	repeatDays: string = '';

	amount:number = 0;
		
	daySchedule:number = 0;
	
	fromDate : string = '';
	
	toDate: string = '';
	
	serviceAvailed : Boolean = false;
	
	outOfHome : Boolean  = false;

  morning : Boolean = true;
  afternoon : Boolean = true;
  evening : Boolean = true;




  ngOnInit(): void {

   this. getDates();
  this.getCategories();
  this.getBrands();
  this.getQuantities();
  this.getRepeatDays();


   
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
  product.id=-1;
  product.brand = this.brand;
  product.category=this.category;
  	
	product.quantity=this.quantity;
	
	product.repeatDays=this.repeatDays;

	product.amount=this.amount;
		
	product.daySchedule=this.daySchedule;
	

  var datePipe = new DatePipe('en-US');
  product.fromDate = datePipe.transform(this.fromDate, 'yyyy-MM-dd')+"";
  product.toDate = datePipe.transform(this.toDate, 'yyyy-MM-dd')+"";

  console.log(product.toDate+" "+product.fromDate);
	
	
	product.serviceAvailed =this.serviceAvailed;
	
	product.outOfHome =this.outOfHome;
  

   this.userService.addProduct(product).subscribe(
     (res : any) => { console.log(res);  this.closeVisible(); this.ngOnInit(); this.loading=false;},
     (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
    
      );
}

visible=false;
closeVisible()
{
  this.visible=false;
  this.brand='';
	
	this.category = '';
	
	this.quantity = '';
	
	this.repeatDays= '';

	this.amount= 0;
		
	this.daySchedule = 0;
	
	this.fromDate = '';
	
	this.toDate= '';
	
	this.serviceAvailed  = false;
	
	this.outOfHome  = false;

}
}
