import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasItemDetailComponent } from './has-item-detail.component';

describe('HasItemDetailComponent', () => {
  let component: HasItemDetailComponent;
  let fixture: ComponentFixture<HasItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasItemDetailComponent]
    });
    fixture = TestBed.createComponent(HasItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
