import { resolve } from 'url';
import { promise } from 'protractor';

export class AuthService {
    isLoggedIn = false;

    isAuthenticated() {
      const promise = new Promise(
        (resolve, reject)=>{
          resolve(this.isLoggedIn)
        }
      );
      return promise;
  }

    login() {
        this.isLoggedIn = true;
      }
    
      logout() {
        this.isLoggedIn = false;
      }
}