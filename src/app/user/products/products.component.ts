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
  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router,private msg: NzMessageService,private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  loading=false;

  addCategory()
  {
    this.loading=true;
   let category : Category=new Category();
   category.id=-1;
   category.name=this.name;
   category.description=this.name;

    this.userService.addCategory(category).subscribe(
      (res : any) => { console.log(res);  this.visible=false; this.ngOnInit(); this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );
  }

onChange(cat: Category)
{
  cat.description=cat.name;
  this.userService.addCategory(cat).subscribe(
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

}
