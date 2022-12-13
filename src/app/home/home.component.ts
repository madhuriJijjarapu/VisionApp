import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { menuItems } from '../sidemenu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuOptions: any = JSON.parse(JSON.stringify(menuItems));
  isMenuOpen: boolean = false;
  loggedInMailId: any;
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  username: any;
  profile: any;
  breadcrum: any;
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {



  }

  ngOnInit() {
    // let name: any = localStorage.getItem('currentUser');
    // this.username = name.toLowerCase().split(' ').map((s: any) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    // // this.breadcrums();
    // if (this.username !== "") {
    //   const match = this.username.match(/\b(\w)/g);
    //   this.profile = match.join('').toUpperCase();

    // }
    // this.activatedRoute.data.subscribe(data => {
    //   this.breadcrum = data;
    //   console.log("this....", this.breadcrum)
    // })
  }

  // toggle menu handler
  toggleMenu(isOpened?: boolean) {
    if (isOpened) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = !this.isMenuOpen;

    }
  }

  // Make side menu item active when route changes
  applyActiveLinkBasedOnRoute(menuItem: any) {
    return this.router.url.includes(menuItem.routerLink);
  }
  //logout
  loggedout() {
    alert("Are you want to Logout?")
    this.router.navigate(['/login']);

  }

}
