import { ComponentFixture, TestBed } from '@angular/core/testing';
import { V20EntityPageComponent } from './v20-entity-page.component';

describe('V20EntityPageComponent', () => {
  let component: V20EntityPageComponent;
  let fixture: ComponentFixture<V20EntityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V20EntityPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20EntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
