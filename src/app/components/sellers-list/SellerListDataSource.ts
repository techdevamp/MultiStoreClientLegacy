import { MatTableDataSource } from '@angular/material';
import { Deals } from 'src/app/models/deals';
import { AlertService } from 'src/app/services';
import { DataAdminService } from 'src/app/services/data.admin.service';
import { RegisterSeller } from 'src/app/models/registerSeller';
export class SellerListDataSource extends MatTableDataSource<RegisterSeller> {
  constructor(private dataService: DataAdminService, private alertService: AlertService) {
    super();
  }

  public loadSellersList() {
    this.dataService.getSellerList().subscribe(res => {
      this.data = res.result;
    }
    , error => this.alertService.error(error));
  }
}
