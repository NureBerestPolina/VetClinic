import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminalsComponent } from './aminals.component';

describe('AminalsComponent', () => {
  let component: AminalsComponent;
  let fixture: ComponentFixture<AminalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AminalsComponent]
    });
    fixture = TestBed.createComponent(AminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
