import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionInfoTowComponent } from './division-info-tow.component';

describe('DivisionInfoTowComponent', () => {
  let component: DivisionInfoTowComponent;
  let fixture: ComponentFixture<DivisionInfoTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionInfoTowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionInfoTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
