import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { V20DaCharacterComponent } from './v20-da-character.component';

describe('V20DaCharacterComponent', () => {
  let component: V20DaCharacterComponent;
  let fixture: ComponentFixture<V20DaCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V20DaCharacterComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
