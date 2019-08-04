import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { AppSettings } from '../tools/app-settings';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        localStorage.setItem(AppSettings.LOGGED_IN_KEY, JSON.stringify(true));
      })
    );
  }

  isLoggedIn() {
    const isLoggedIn = localStorage.getItem(AppSettings.LOGGED_IN_KEY);
    return isLoggedIn == null ? false : isLoggedIn === 'true';
  }

  logout(): void {
    localStorage.removeItem(AppSettings.LOGGED_IN_KEY);
  }
}
