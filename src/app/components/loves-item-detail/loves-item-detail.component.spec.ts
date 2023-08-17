import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovesItemDetailComponent } from './loves-item-detail.component';

describe('LovesItemDetailComponent', () => {
  let component: LovesItemDetailComponent;
  let fixture: ComponentFixture<LovesItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovesItemDetailComponent]
    });
    fixture = TestBed.createComponent(LovesItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
