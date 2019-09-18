import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListAdminComponent } from './sidenav-list-admin.component';

describe('SidenavListAdminComponent', () => {
  let component: SidenavListAdminComponent;
  let fixture: ComponentFixture<SidenavListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
