import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bn2Component } from './bn2.component';

describe('Bn2Component', () => {
  let component: Bn2Component;
  let fixture: ComponentFixture<Bn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
