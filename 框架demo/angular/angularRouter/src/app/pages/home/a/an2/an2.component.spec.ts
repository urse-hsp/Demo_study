import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An2Component } from './an2.component';

describe('An2Component', () => {
  let component: An2Component;
  let fixture: ComponentFixture<An2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(An2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
