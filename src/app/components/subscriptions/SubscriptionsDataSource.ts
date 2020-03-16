import { AlertService } from './../../services/alert.service';
import { SubscriptionsData } from '../../models/subscription.data';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { SellerService } from 'src/app/services/seller.service';

export class SubscriptionsDataSource extends MatTableDataSource<SubscriptionsData> {

  constructor(private sellerService: SellerService, private alertService: AlertService) {
    super();
  }
  /*private subscriptionsData: SubscriptionsData[];
  connect(collectionViewer: CollectionViewer): Observable<SubscriptionsData[]> {
    return this.subscriptionsData.asObservable();

  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.subscriptionsData.complete();
  }*/

  loadSubscriptionsDetails(fileId: any) {
        this.sellerService.getSubscriptionsByFileId(fileId).pipe(first()).subscribe(res => {
        this.data = (res.result);
      },
      error => this.alertService.error(error));
  }
}
