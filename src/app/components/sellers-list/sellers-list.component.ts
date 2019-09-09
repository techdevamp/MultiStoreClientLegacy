import { Component, OnInit, ViewChild } from '@angular/core';
import { DataAdminService } from 'src/app/services/data.admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services';
import { MatPaginator, MatSort } from '@angular/material';
import { SellerListDataSource } from './SellerListDataSource';

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.scss']
})
export class SellersListComponent implements OnInit {

  constructor(private dataService: DataAdminService,
    private route: ActivatedRoute
    , private alertService: AlertService) { }

  displayedColumnsItems: string[];
  dataSourceItems: SellerListDataSource;
  displayItemDetails: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    //this.displayItemDetails = 'item-deals-link-detail';
    this.displayedColumnsItems = ['userName', 'businessNm', 'email','approvedInd', 'approvedBy'];
    this.dataSourceItems = new SellerListDataSource(this.dataService, this.alertService);
    this.dataSourceItems.loadSellersList();

  }

  approveSeller(id: any) {
    this.dataService.approveSeller(id).subscribe(res => {
      this.dataSourceItems.loadSellersList();
        this.alertService.success(res.message, false);
      },
      error => this.alertService.error(error)
    );
  }
  /*public getItemDetails(): void {
    this.router.navigate([{ outlets: { sidemenu: [this.displayItemDetails] } }],
      { relativeTo: this.route.parent });
  }*/


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
