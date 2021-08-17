import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertiesDetailsComponent } from './pages/properties-details/properties-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AgentsComponent } from './pages/agents/agents.component';

/** LIBRERIAS */

import { TooltipModule } from 'ng2-tooltip-directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { ComponentsModule } from './components/components.module';
import { LugaresComponent } from './pages/lugares/lugares.component';
import { PagesComponent } from './pages/pages.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { SaludYEmergenciaComponent } from './pages/salud-y-emergencia/salud-y-emergencia.component';
import { EntreganosTuPropiedadComponent } from './pages/entreganos-tu-propiedad/entreganos-tu-propiedad.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    EmpresaComponent,
    PropertiesComponent,
    PropertiesDetailsComponent,
    NotFoundComponent,
    AgentsComponent,
    LugaresComponent,
    PlanosComponent,
    TramitesComponent,
    SaludYEmergenciaComponent,
    PagesComponent,
    ProyectosComponent,
    EntreganosTuPropiedadComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    TooltipModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ComponentsModule,
    NgxGalleryModule,
    PinchZoomModule,
    NgSelectModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
