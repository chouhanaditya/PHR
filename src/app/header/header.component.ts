import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
declare const jQuery;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  ShowLogoutDropDown= false;
  showLogout = false; loadHome = false; loginPage = false;
  toggleTabs = false;
  constructor(private el: ElementRef) { }


  ngOnInit() {
  }
  toggleShowLogout() {
    (this.showLogout === true) ? this.showLogout = false : this.showLogout = true;
  }
  // closeMenu() {
  //   if (window.innerWidth <= 991) {
  //     jQuery(this.el.nativeElement).find('#navBtn').click();
  //   }
  // }
  // dropConditions() {
  //   if (this.toggleTabs) {
  //     this.toggleTabs = false;
  //     setTimeout(() => {
  //       this.closeMenu();
  //     }, 1);
  //   }
  // }
  ngOnDestroy() {
    this.loadHome = false;
  }
}
