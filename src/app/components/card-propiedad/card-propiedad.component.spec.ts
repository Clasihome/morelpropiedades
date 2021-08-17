import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPropiedadComponent } from './card-propiedad.component';

describe('CardPropiedadComponent', () => {
  let component: CardPropiedadComponent;
  let fixture: ComponentFixture<CardPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
