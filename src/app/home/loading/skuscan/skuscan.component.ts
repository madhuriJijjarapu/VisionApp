import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skuscan',
  templateUrl: './skuscan.component.html',
  styleUrls: ['./skuscan.component.scss']
})
export class SkuscanComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  scanData() {
    this.router.navigate(['home/loading/loadingview'])
  }
}
