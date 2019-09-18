import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RegisterUser } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-sidenav-list-admin',
  templateUrl: './sidenav-list-admin.component.html',
  styleUrls: ['./sidenav-list-admin.component.scss']
})
export class SidenavListAdminComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  currentUser: RegisterUser;
  
  constructor(private router: Router, private route: ActivatedRoute,private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      
  }
  navigate(path: any, id: any) {
    this.router.navigate([{outlets: {sidemenu: [path, id]}}],
                            {relativeTo: this.route});
  }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
