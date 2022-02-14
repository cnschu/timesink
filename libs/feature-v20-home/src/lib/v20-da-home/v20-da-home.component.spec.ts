import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaHomeComponent } from './v20-da-home.component';

describe('V20DaHomeComponent', () => {
  let component: V20DaHomeComponent;
  let fixture: ComponentFixture<V20DaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
