import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std100mComponent } from './std100m.component';

describe('Std100mComponent', () => {
  let component: Std100mComponent;
  let fixture: ComponentFixture<Std100mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std100mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std100mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
