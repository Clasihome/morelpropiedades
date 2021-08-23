import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PropertiesComponent } from "./pages/properties/properties.component";
import { PropertiesDetailsComponent } from "./pages/properties-details/properties-details.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { EmpresaComponent } from "./pages/empresa/empresa.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { AgentsComponent } from "./pages/agents/agents.component";
import { LugaresComponent } from "./pages/lugares/lugares.component";
import { PlanosComponent } from "./pages/planos/planos.component";
import { TramitesComponent } from "./pages/tramites/tramites.component";
import { SaludYEmergenciaComponent } from "./pages/salud-y-emergencia/salud-y-emergencia.component";
import { EntreganosTuPropiedadComponent } from "./pages/entreganos-tu-propiedad/entreganos-tu-propiedad.component";
import { ProyectosComponent } from "./pages/proyectos/proyectos.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path:
      "properties/:idcomune/:type/:status/:sectorId/:condominio/:currency/:pre_min/:pre_max/:solo_condominio/:proyecto/:code/:order_by/:order/:page",
    component: PropertiesComponent,
  },
  { path: "property-detail/:id", component: PropertiesDetailsComponent },
  { path: "contacto", component: ContactUsComponent },
  { path: "empresa", component: EmpresaComponent },
  { path: "agentes", component: AgentsComponent },
  { path: "datos-de-la-zona", component: LugaresComponent },
  { path: "planos", component: PlanosComponent },
  { path: "tramites", component: TramitesComponent },
  { path: "salud-y-emergencia", component: SaludYEmergenciaComponent },
  {
    path: "entreganos-tu-propiedad",
    component: EntreganosTuPropiedadComponent,
  },
  { path: "proyectos/:page", component: ProyectosComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
