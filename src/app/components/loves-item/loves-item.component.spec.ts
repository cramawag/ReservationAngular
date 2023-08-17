import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovesItemComponent } from './loves-item.component';

describe('LovesItemComponent', () => {
  let component: LovesItemComponent;
  let fixture: ComponentFixture<LovesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovesItemComponent]
    });
    fixture = TestBed.createComponent(LovesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
