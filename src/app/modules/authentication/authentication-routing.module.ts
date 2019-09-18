import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from 'src/app/components/list-user/list-user.component';
import { EditUserComponent } from 'src/app/components/edit-user/edit-user.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { SidenavListAdminComponent } from 'src/app/components/sidenav-list-admin/sidenav-list-admin.component';
import { SellersListComponent } from 'src/app/components/sellers-list/sellers-list.component';

const routes: Routes = [
{
  path: 'side-nav-list',
  component: SidenavListAdminComponent,
  children: [
    {
    path: 'sellers-list/:id',
    outlet: 'sidemenu',
    component: SellersListComponent
  }
]
}
,

{
  path: 'list-user',
  component: ListUserComponent
},
{
  path: 'edit-user',
  component: EditUserComponent
},
{
  path: 'add-userDetails',
  component: UserDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
