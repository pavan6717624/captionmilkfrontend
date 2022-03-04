import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  selectedMenu : number = 1;
  menuVisible=false;
  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.menuVisible = true;
  }

  close(id: number): void {
    if(id!=0)
    this.selectedMenu = id;
    this.menuVisible = false;
    
  }

}
