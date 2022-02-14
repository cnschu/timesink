import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V20DaSpotifyPlaylistComponent } from './v20-da-spotify-playlist.component';

describe('V20DaSpotifyPlaylistComponent', () => {
  let component: V20DaSpotifyPlaylistComponent;
  let fixture: ComponentFixture<V20DaSpotifyPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V20DaSpotifyPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V20DaSpotifyPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
