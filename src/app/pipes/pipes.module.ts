import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlPipe } from './html.pipe';
import { LimpiarTelCaptadorPipe } from './limpiar-tel-captador.pipe';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { CaracteristicasCardPipe } from './caracteristicas-card.pipe';
import { FormatStatusPipe } from './format-status.pipe';


@NgModule({
  declarations: [HtmlPipe, LimpiarTelCaptadorPipe, FormatCurrencyPipe, CaracteristicasCardPipe, FormatStatusPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HtmlPipe,
    LimpiarTelCaptadorPipe,
    FormatCurrencyPipe,
    CaracteristicasCardPipe,
    FormatStatusPipe
  ]
})
export class PipesModule { }
