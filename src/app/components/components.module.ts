import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaReferenceComponent } from './mapa-reference/mapa-reference.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardPropiedadComponent } from './card-propiedad/card-propiedad.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [MapaReferenceComponent, FormContactoComponent, CardPropiedadComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, PipesModule],
  exports: [MapaReferenceComponent, FormContactoComponent, CardPropiedadComponent ],
})
export class ComponentsModule {}
