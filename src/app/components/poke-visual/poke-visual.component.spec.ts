import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeVisualComponent } from './poke-visual.component';

describe('PokeVisualComponent', () => {
  let component: PokeVisualComponent;
  let fixture: ComponentFixture<PokeVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeVisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
