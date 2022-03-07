import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  selectedMenu : number = 1;
  menuVisible=false;

  constructor(private route:ActivatedRoute, private router: Router) {

 

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
