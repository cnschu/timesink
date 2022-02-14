import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaExpHistoryComponent } from './v20-da-exp-history.component';

describe('V20DaExpHistoryComponent', () => {
  let component: V20DaExpHistoryComponent;
  let fixture: ComponentFixture<V20DaExpHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaExpHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaExpHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
