import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmetrosComponent } from './emmetros.component';

describe('EmmetrosComponent', () => {
  let component: EmmetrosComponent;
  let fixture: ComponentFixture<EmmetrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmmetrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmetrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
