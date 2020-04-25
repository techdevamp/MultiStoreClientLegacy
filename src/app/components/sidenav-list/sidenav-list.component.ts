import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterUser } from 'src/app/models/registerUser';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Roles } from 'src/app/models/roles';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  currentUser: RegisterUser;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }
  navigate(path: any, id: any) {
    this.router.navigate([{outlets: {sidemenu: [path, id]}}],
                            {relativeTo: this.route, skipLocationChange: true});
  }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Roles.Admin;
  }
  get isSeller() {
    return this.currentUser && this.currentUser.role === Roles.Seller;
  }

}
