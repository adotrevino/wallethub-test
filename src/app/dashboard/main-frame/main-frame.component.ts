import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss']
})
export class MainFrameComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);

  }


}
