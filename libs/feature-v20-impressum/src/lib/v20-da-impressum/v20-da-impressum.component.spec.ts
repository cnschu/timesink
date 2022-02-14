import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaImpressumComponent } from './v20-da-impressum.component';

describe('V20DaImpressumComponent', () => {
  let component: V20DaImpressumComponent;
  let fixture: ComponentFixture<V20DaImpressumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaImpressumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
