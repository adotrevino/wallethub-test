import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  login:FormGroup;
  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }
  onSubmit(loginForm:NgForm) {
    if(loginForm.valid){
     this.authService.login();
     this.router.navigate(['/main']);
    }
  }

}
