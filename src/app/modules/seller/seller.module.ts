import { ImageManagerComponent } from './../../components/image-manager/image-manager.component';
import { AlertModule } from './../alert/alert.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { UploadFileComponent } from 'src/app/components/upload-file/upload-file.component';
import { DisplayItemDetailsComponent } from 'src/app/components/display-item-details/display-item-details.component';
import { SidenavListComponent } from 'src/app/components/sidenav-list/sidenav-list.component';
import { SubscriptionsComponent } from 'src/app/components/subscriptions/subscriptions.component';
import { ItemDealsLinkComponent } from 'src/app/components/item-deals-link/item-deals-link.component';
import { ItemDealsLinkDetailComponent } from 'src/app/components/item-deals-link-detail/item-deals-link-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditItemDetailsComponent } from 'src/app/components/edit-item-details/edit-item-details.component';
import { AdBannerManagerComponent } from 'src/app/components/ad-banner-manager/ad-banner-manager.component';
// search module
import { FilterPipe } from 'src/app/filter.pipe';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    UploadFileComponent,
    DisplayItemDetailsComponent,
    SidenavListComponent,
    SubscriptionsComponent,
    ItemDealsLinkComponent,
    ItemDealsLinkDetailComponent,
    EditItemDetailsComponent,
    ImageManagerComponent,
    AdBannerManagerComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
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
    AlertModule,
    MatSelectModule
  ]
})
export class SellerModule { }
