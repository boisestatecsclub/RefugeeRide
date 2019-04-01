import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingBCheckComponent } from './admin-pending-b-check.component';

describe('AdminPendingBCheckComponent', () => {
  let component: AdminPendingBCheckComponent;
  let fixture: ComponentFixture<AdminPendingBCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPendingBCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingBCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
