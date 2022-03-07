import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export class Category
{
  id: number = 0;
  name: string = '';
  description: string = '';
  repeatDays: number = 0;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  editStr = 'This is an editable text.';
  visible=false;
  name: string = '';

  category: Category[]=[];
  brand: Category[]=[];
  quantity: Category[]=[];
  repeat: Category[]=[];
  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router,private msg: NzMessageService,private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getBrands();
    this.getQuantities();

    var header = window.document.getElementById("header");

    if (header) {
      header.innerHTML = 'Category Dashboard';
    }
  }

loading=false;
type: string = '';

  add()
  {

if(this.type==='Category')
this.addCategory();
else if(this.type === 'Brand')
this.addBrand();
else if(this.type === 'Quantity')
this.addQuantity();
else if(this.type === 'Repeat Days')
this.addRepeat();
  }

  addCategory()
  {
    const id = this.msg.loading('Creating Brand...', { nzDuration: 0 }).messageId;
   let category : Category=new Category();
   category.id=-1;
   category.name=this.name;
   category.description=this.name;

    this.userService.addCategory(category).subscribe(
      (res : any) => { console.log(res);  this.closeVisible();  this.ngOnInit(); this.msg.remove(id);},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.msg.remove(id);}
     
       );
  }

  addRepeat()
  {
    const id = this.msg.loading('Creating Brand...', { nzDuration: 0 }).messageId;
     let category : Category=new Category();
   category.id=-1;
   category.name=this.name;
   category.description=this.name;

    this.userService.addRepeat(category).subscribe(
      (res : any) => { console.log(res);  this.closeVisible();  this.ngOnInit(); this.msg.remove(id);},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.msg.remove(id);}
     
     
       );
  }

  addBrand()
  {
    const id = this.msg.loading('Creating Brand...', { nzDuration: 0 }).messageId;
   let category : Category=new Category();
   category.id=-1;
   category.name=this.name;
   category.description=this.name;

    this.userService.addBrand(category).subscribe(
      (res : any) => { console.log(res);  this.closeVisible();  this.ngOnInit(); this.msg.remove(id);},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.msg.remove(id);}
     
       );
  }

  addQuantity()
  {
    const id = this.msg.loading('Creating Quantity...', { nzDuration: 0 }).messageId;
   let category : Category=new Category();
   category.id=-1;
   category.name=this.name;
   category.description=this.name;

    this.userService.addQuantity(category).subscribe(
      (res : any) => { console.log(res);  this.closeVisible();  this.ngOnInit(); this.msg.remove(id);},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.msg.remove(id);}
     
     
       );
  }


onChangeCategory(cat: Category)
{
  cat.description=cat.name;
  this.userService.addCategory(cat).subscribe(
    (res : any) => { console.log(res);   this.ngOnInit(); this.loading=false;},
    (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
   
     );
}

onChangeBrand(cat: Category)
{
  cat.description=cat.name;
  this.userService.addBrand(cat).subscribe(
    (res : any) => { console.log(res);   this.ngOnInit(); this.loading=false;},
    (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
   
     );
}

onChangeQuantity(cat: Category)
{
  cat.description=cat.name;
  this.userService.addQuantity(cat).subscribe(
    (res : any) => { console.log(res);   this.ngOnInit(); this.loading=false;},
    (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
   
     );
}

onChangeRepeat(cat: Category)
{
  cat.description=cat.name;
  this.userService.addRepeat(cat).subscribe(
    (res : any) => { console.log(res);   this.ngOnInit(); this.loading=false;},
    (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
   
     );
}

  getCategories()
  {

    this.loading=true;
    this.userService.getCategories().subscribe(
      (res : any) => { console.log(res);   this.category = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  getBrands()
  {

    this.loading=true;
    this.userService.getBrands().subscribe(
      (res : any) => { console.log(res);   this.brand = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  getQuantities()
  {

    this.loading=true;
    this.userService.getQuantities().subscribe(
      (res : any) => { console.log(res);   this.quantity = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  getRepeats()
  {

    this.loading=true;
    this.userService.getRepeats().subscribe(
      (res : any) => { console.log(res);   this.repeat = res; this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

  closeVisible()
  {
    this.name='';
    this.type='';
    this.visible=false;
  }

}
