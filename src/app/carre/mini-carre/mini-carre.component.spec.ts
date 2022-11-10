import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarreComponent } from './mini-carre.component';

describe('MiniCarreComponent', () => {
  let component: MiniCarreComponent;
  let fixture: ComponentFixture<MiniCarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCarreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
