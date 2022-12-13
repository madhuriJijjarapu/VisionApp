import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = ['Admin', 'Loading Operator', 'Vision Operator', 'Pallet Operator'];
  currentOperator: any;
  loginForm: FormGroup | any;
  showPassword: boolean = false;
  constructor(public router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pw: ['', Validators.required],
      operator: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  loginuser() {
    this.currentOperator = this.loginForm.get('operator').value;
    this.authService.login(this.currentOperator).subscribe(res => {
      console.log(res, "essssssssss")
      if (res.role == 'Pallet Operator') {
        this.router.navigate(['home/pallet/palletconfiramation'])
      }
      else if (res.role == 'Loading Operator') {
        this.router.navigate(['home/loading/skuscan']);
      }
      else if (res.role == 'Vision Operator') {
        this.router.navigate(['home/vision/bigscreen']);
      }
      // else if (res.role == 'Admin') {
      //   this.router.navigate(['/home'])
      // }
    })
  }
  // loginuser() {
  //   this.currentOperator = this.loginForm.get('operator').value;
  //   console.log(this.currentOperator, "ooooooooo")
  //   if (this.currentOperator == 'Pallet Operator') {
  //     this.router.navigate(['home/pallet/palletconfiramation'])
  //   }
  //   else if (this.currentOperator == 'Loading Operator') {
  //     this.router.navigate(['home/loading/skuscan']);
  //   }
  //   else if (this.currentOperator == 'Vision Operator') {
  //     this.router.navigate(['home/vision/bigscreen']);
  //   }
  //   else {
  //     this.router.navigate(['/home'])

  //   }
  // }
}
