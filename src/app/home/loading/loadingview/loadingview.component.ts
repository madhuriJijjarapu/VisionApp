import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingview',
  templateUrl: './loadingview.component.html',
  styleUrls: ['./loadingview.component.scss']
})
export class LoadingviewComponent implements OnInit {
  @ViewChild('tnt') tnt: any;
  hide = true;
  in = false;
  store: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  confirm() {
    this.router.navigate(['home/loading/palletloadstatus'])
  }
  edit() {
    //   this.ip = !this.ip;
    // this.show = !this.show;
    // this.one = this.val;
    this.in = !this.in;
    this.hide = !this.hide;







  }
}
