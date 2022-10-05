import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizMenuComponent } from './matriz-menu.component';

describe('MatrizMenuComponent', () => {
  let component: MatrizMenuComponent;
  let fixture: ComponentFixture<MatrizMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
