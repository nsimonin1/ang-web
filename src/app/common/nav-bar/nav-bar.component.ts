import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { AppSettings } from 'src/app/tools/app-settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
