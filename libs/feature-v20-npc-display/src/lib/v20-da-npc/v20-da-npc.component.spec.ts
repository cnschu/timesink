import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureV20EntityPageModule } from '@timesink/feature-v20-entity-page';
import { V20DaNpcComponent } from './v20-da-npc.component';

describe('V20DaNpcComponent', () => {
  let component: V20DaNpcComponent;
  let fixture: ComponentFixture<V20DaNpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V20DaNpcComponent],
      imports: [RouterTestingModule.withRoutes([]), FeatureV20EntityPageModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
