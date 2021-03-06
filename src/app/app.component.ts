import { DataTransferService } from './services/data-transfer.service';
import { Component } from '@angular/core';
import { AuthenticationService } from './services';
import { RegisterUser } from './models';
import { Router } from '@angular/router';
import { Roles } from './models/roles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: RegisterUser;
  itemsCount: number;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private dataTransferService: DataTransferService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.dataTransferService
        .getItemsInCart()
        .subscribe((itemCount: any) => (this.itemsCount = itemCount));
    }

    logout() {
        this.authenticationService.logout();
        this.loginScreen();
    }

    home(path: any) {
     /*if (!this.currentUser ) {
        this.logout();
      }*/
      this.router.navigate([path]);
    }
    sellMyGrocery(path: any) {
      
       this.router.navigate([path]);
     }

    loginScreen() {
      this.router.navigate(['login']);
    }

    get isSeller() {
      return this.currentUser && (this.currentUser.role === Roles.Seller || this.currentUser.role === Roles.Admin);
    }
    get isAdmin() {
      return this.currentUser && this.currentUser.role === Roles.Admin;
    }

    adminScreen() {
      if (!this.currentUser) {
        this.logout();
      }
      if (this.currentUser.role  === Roles.Seller ) {
        this.router.navigate(['seller/side-nav-list']);
       } else if (this.currentUser.role  === Roles.Admin) {
        this.router.navigate(['admin/side-nav-list']);
       } 
       else {
        this.router.navigate(['buyer/home']);
       }
    }
}
