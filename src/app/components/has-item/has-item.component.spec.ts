import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasItemComponent } from './has-item.component';

describe('HasItemComponent', () => {
  let component: HasItemComponent;
  let fixture: ComponentFixture<HasItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasItemComponent]
    });
    fixture = TestBed.createComponent(HasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
