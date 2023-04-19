import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCrudComponent } from './phone-crud.component';

describe('PhoneCrudComponent', () => {
  let component: PhoneCrudComponent;
  let fixture: ComponentFixture<PhoneCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
