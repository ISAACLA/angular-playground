import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsShellComponent } from './albums-shell.component';

describe('AlbumsShellComponent', () => {
  let component: AlbumsShellComponent;
  let fixture: ComponentFixture<AlbumsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
