import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  dates : Date [] = [];

  count: number = 0;


  ngOnInit(): void {

   this. getDates();

   
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
  }

  

 }

 captureDate(date: Date)
 {
   alert(date);
   
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

}
