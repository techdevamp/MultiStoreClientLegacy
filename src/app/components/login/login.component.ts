import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService, DataTransferService } from './../../services';
import { Roles } from 'src/app/models/roles';
import { RegisterUser } from 'src/app/models';

@Component({templateUrl: 'login.component.html',
selector: 'app-login',
styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    invalidLogin = false;
    currentUser: RegisterUser;
    @Input()
    error: string | null;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private dataTransferService: DataTransferService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
          //  this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
      window.localStorage.removeItem('token');
      this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['add-userDetails'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    register() {
      this.router.navigate(['register-user']);
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        const loginPayload = {
          username: this.f.userName.value,
          password: this.f.password.value
        };
        this.loading = true;
        this.authenticationService.login(loginPayload)
            .pipe(first())
            .subscribe(
                data => {
                  if (data.status === 200) {
                    window.localStorage.setItem('token', data.result.token);
                    this.dataTransferService.setApiResponse(data);
                  //  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
                    if (data.result.role === Roles.Seller ) {
                    this.router.navigate(['seller/side-nav-list'], {skipLocationChange: true});
                   } else if (data.result.role === Roles.Admin) {
                    this.router.navigate(['admin/side-nav-list'], {skipLocationChange: true});
                   } else {
                    this.router.navigate(['buyer/home']);
                   }

                  } else {
                    this.invalidLogin = true;
                    this.alertService.error(data.message);
                  }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                   // return this.loginForm.controls;
                  //  this.router.navigate(['login']);
                });
    }
}
