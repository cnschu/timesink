import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaJournalComponent } from './v20-da-journal.component';

describe('V20DaJournalComponent', () => {
  let component: V20DaJournalComponent;
  let fixture: ComponentFixture<V20DaJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
