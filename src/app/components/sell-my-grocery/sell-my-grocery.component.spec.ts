import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellMyGroceryComponent } from './sell-my-grocery.component';

describe('SellMyGroceryComponent', () => {
  let component: SellMyGroceryComponent;
  let fixture: ComponentFixture<SellMyGroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellMyGroceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellMyGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
