import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService, AuthenticationService, AlertService } from 'src/app/services';
import { Router } from '@angular/router';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterSeller } from 'src/app/models/registerSeller';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.scss']
})
export class RegisterSellerComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  registerUserComp: RegisterUserComponent;
  loading = false;
  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
       // redirect to home if already logged in
       if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
    }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      bussinessNm: ['', Validators.required],
      address: this.formBuilder.group({
        
        addrLn1: ['', Validators.required],
        addrLn2: '',
        cityNm: ['', Validators.required],
        stateCd:['', Validators.required],
        zipCd: ['', Validators.required],
        phone: ''
      })
    },
    {
      validator: this.MustMatch('password', 'confirmPassword')
    });
}

MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
    } else {
        matchingControl.setErrors(null);
    }
  };
}


// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.dataService.registerSeller(this.registerForm.value).subscribe(res => {
      this.alertService.success(res.message, true);
      this.goToLoginPage();
      const artcl: RegisterSeller = res.result;
      console.log(artcl.userName);
    },
    error => {
      if(error instanceof HttpErrorResponse){
        if (error.error instanceof Error) {
          // A client-side or network error occurred.
          this.alertService.error(error.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          this.alertService.error('Backend returned status code: ' + error.status.toString());
          this.alertService.error('Response body:' + error.error);
        }
      }else{
      this.alertService.error(error);
      this.loading = false;
    }
    }
 );
  }
  goToLoginPage(): void {
    this.router.navigateByUrl('\login');
  }

}
