import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ListUserComponent } from 'src/app/components/list-user/list-user.component';
import { EditUserComponent } from 'src/app/components/edit-user/edit-user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatInputModule
  , MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSidenavModule
  , MatIconModule, MatDialogModule, MatMenuModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AlertModule } from '../alert/alert.module';
import { SellersListComponent } from 'src/app/components/sellers-list/sellers-list.component';
import { SidenavListAdminComponent } from 'src/app/components/sidenav-list-admin/sidenav-list-admin.component';

@NgModule({
  declarations: [
    ListUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    SellersListComponent,
    SidenavListAdminComponent
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    NgbModule,
    SwiperModule,
    AlertModule
  ]
})
export class AuthenticationModule { }
