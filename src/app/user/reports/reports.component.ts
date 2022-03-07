import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from '../details/details.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  onChange1(result: Date): void {
    this.toDate = result;
    

    console.log('onChange: ', result);
  }

  onChange2(result: Date): void {
  
    console.log('onChange: ', result);
  }

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.fromDate) {
      return false;
    }
   
    return startValue  < this.fromDate;
  };

  fromDate: Date = new Date();
  toDate: Date = new Date();
  pageNumber: number=0;

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router,private msg: NzMessageService,private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getProductReport();
    var header = window.document.getElementById("header");

    if (header) {
      header.innerHTML = 'Reports';
    }
  }
loading=true;
product: Product[]=[];
  getProductReport()
  {
    var formData=new FormData();
    var datePipe = new DatePipe('en-US');
    formData.set("fromDate",datePipe.transform(this.fromDate, 'yyyy-MM-dd')+"");
    formData.set("toDate",datePipe.transform(this.toDate, 'yyyy-MM-dd')+"");
    this.loading=true;
    this.userService.getProductReport(formData).subscribe(
      (res : any) => { console.log(res);   this.product = res;  this.loading=false;},
      (err) => { console.log(err); this.msg.error('Error Occured at Server. Please try again.'); this.loading=false;}
     
       );

  }

}
