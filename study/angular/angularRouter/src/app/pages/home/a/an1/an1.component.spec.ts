import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An1Component } from './an1.component';

describe('An1Component', () => {
  let component: An1Component;
  let fixture: ComponentFixture<An1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(An1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
