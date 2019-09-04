import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule,MatSelectModule
  , MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatSidenavModule, MatIconModule, MatMenuModule,
  MatDialogModule, MatCheckboxModule, MatGridListModule, MatAutocompleteModule} from '@angular/material';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LoginComponent } from './components/login/login.component';
import { AlertModule } from './modules/alert/alert.module';
import { SearchComponent } from './components/search/search.component';
import { RegisterSellerComponent } from './components/register-seller/register-seller.component';
import { SellMyGroceryComponent } from './components/sell-my-grocery/sell-my-grocery.component';
import { AddressComponent } from './components/address/address.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    RegisterUserComponent,
    RegisterSellerComponent,
    SellMyGroceryComponent,
    AddressComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    NgbModule,
    SwiperModule,
    AlertModule,
    MatAutocompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
