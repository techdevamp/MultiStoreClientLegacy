import { FileDetails } from './../../_models/file.details';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { DataService, AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploadType: string;
  fileToUpload: File;
  fileDetails: FileDetails;
  displayDetails: string;
  uploadDt: any;
  constructor(private dataService: DataService
    ,         private alertService: AlertService
    ,         private router: Router
    ,         private route: ActivatedRoute
    ,         private datePipe: DatePipe ) {}
  ngOnInit() {
      this.route.params.subscribe(params => {
        this.uploadType = params.id;
      });
      if (this.uploadType === 'items') {
        this.displayDetails = 'display-item-details';
      } else if (this.uploadType === 'subscriptions') {
        this.displayDetails = 'subscriptions';
      }
      this.getFileDetails();
  }

  public getFileDetails() {
    this.dataService.getFileDetails(this.uploadType).subscribe(res => {
      this.fileDetails = res.result;
      this.alertService.success(res.message, true);
  });
  }

  public setFile(event: any): void {
    this.fileToUpload = event.target.files.item(0);
  }

  public uploadData(): void {
    // get data from file upload
    const formData = new FormData();
    formData.append('uploadExcel', this.fileToUpload, this.fileToUpload.name);
    this.dataService.uploadFile(formData, this.uploadType).pipe(first()).subscribe(res => {
      this.alertService.success(res.message, true),
      this.fileDetails = res.result;
      this.getFileDetails();
    });
  }

  public getItemDetails(fileId: any): void {
    this.router.navigate([{outlets: {sidemenu: [this.displayDetails, fileId]}}],
      {relativeTo: this.route.parent});
  }
}

