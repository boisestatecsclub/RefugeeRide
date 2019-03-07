import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreationComponent } from './account-creation.component';

describe('AccountCreationComponent', () => {
  let component: AccountCreationComponent;
  let fixture: ComponentFixture<AccountCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
