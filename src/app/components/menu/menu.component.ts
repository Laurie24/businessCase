import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "18.5rem";
    document.getElementById("main").style.marginLeft = "0";
  }


  closeNav() {
    document.getElementById("mySidebar").style.width = ".7rem";
    document.getElementById("main").style.marginLeft = "0";
  }

}
