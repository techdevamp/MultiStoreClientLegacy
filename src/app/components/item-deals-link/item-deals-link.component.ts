import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Deals } from 'src/app/models/deals';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ItemDealsLinkDataSource } from './ItemDealsLinkDataSource';
import { DataDealCouponService } from 'src/app/services/data.deal.coupon.service';
import { AlertService } from 'src/app/services';


@Component({
  selector: 'app-item-deals-link',
  templateUrl: './item-deals-link.component.html',
  styleUrls: ['./item-deals-link.component.scss']
})
export class ItemDealsLinkComponent  implements OnInit, AfterViewInit {


  constructor(private dataService: DataDealCouponService,
              private route: ActivatedRoute
            , private router: Router
            , private alertService: AlertService) { }
itemDetails: Deals[];
displayedColumnsItems: string[];
dataSourceItems: ItemDealsLinkDataSource;
displayItemDetails: string;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.displayItemDetails = 'item-deals-link-detail';
    this.displayedColumnsItems = ['id', 'dealTypCd', 'dealTypDesc'];
    this.dataSourceItems = new ItemDealsLinkDataSource(this.dataService, this.alertService);
    this.dataSourceItems.loadDealDetails();

     }
     public getItemDetails(): void {
      this.router.navigate([{outlets: {sidemenu: [this.displayItemDetails]}}],
        {relativeTo: this.route.parent, skipLocationChange: true});
    }


     ngAfterViewInit() {
      this.dataSourceItems.paginator = this.paginator;
      this.dataSourceItems.sort = this.sort;
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSourceItems.filter = filterValue;
    }
}
