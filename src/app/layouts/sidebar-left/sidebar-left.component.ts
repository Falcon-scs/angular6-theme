import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  private href: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

  gotoPage(url: string) {
    this.href = url;
   this.router.navigate([this.href]);
    // window.location.href = this.href;
  }

}
