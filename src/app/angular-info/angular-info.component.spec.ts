import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInfoComponent } from './angular-info.component';

describe('AngularInfoComponent', () => {
  let component: AngularInfoComponent;
  let fixture: ComponentFixture<AngularInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularInfoComponent]
    });
    fixture = TestBed.createComponent(AngularInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
