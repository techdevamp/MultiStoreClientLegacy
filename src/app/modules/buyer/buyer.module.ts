import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { HomeScreenComponent } from 'src/app/components/home-screen/home-screen.component';
import { HomeDetailsComponent } from 'src/app/components/home-details/home-details.component';
import { AdBannerComponent } from 'src/app/components/ad-banner/ad-banner.component';
import { HotDealsComponent } from 'src/app/components/hot-deals/hot-deals.component';
import { EmailSubscriptionComponent } from 'src/app/components/email-subscription/email-subscription.component';
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
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AlertModule } from '../alert/alert.module';
import { UnsubscribeComponent } from 'src/app/components/unsubscribe/unsubscribe.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    HomeScreenComponent,
    HomeDetailsComponent,
    AdBannerComponent,
    HotDealsComponent,
    EmailSubscriptionComponent,
    UnsubscribeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
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
    SwiperModule,
    AlertModule,
    MatAutocompleteModule
  ]
})
export class BuyerModule { }
