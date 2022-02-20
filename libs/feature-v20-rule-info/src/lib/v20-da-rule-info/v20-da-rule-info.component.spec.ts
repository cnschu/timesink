import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@timesink/ui';

import { V20DaRuleInfoComponent } from './v20-da-rule-info.component';

describe('V20DaRuleInfoComponent', () => {
  let component: V20DaRuleInfoComponent;
  let fixture: ComponentFixture<V20DaRuleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, UiModule],
      declarations: [V20DaRuleInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaRuleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
