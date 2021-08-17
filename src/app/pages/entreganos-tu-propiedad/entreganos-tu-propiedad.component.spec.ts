import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreganosTuPropiedadComponent } from './entreganos-tu-propiedad.component';

describe('EntreganosTuPropiedadComponent', () => {
  let component: EntreganosTuPropiedadComponent;
  let fixture: ComponentFixture<EntreganosTuPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreganosTuPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreganosTuPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
