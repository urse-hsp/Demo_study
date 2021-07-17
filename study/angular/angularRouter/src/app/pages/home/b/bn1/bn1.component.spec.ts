import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bn1Component } from './bn1.component';

describe('Bn1Component', () => {
  let component: Bn1Component;
  let fixture: ComponentFixture<Bn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bn1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
