import { Component, OnInit } from "@angular/core";
import { PropiedadesService } from "src/app/services/propiedades.service";
import { Property, Propiedad } from "src/app/interfaces/interfaces";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-proyectos",
  templateUrl: "./proyectos.component.html",
  styleUrls: ["./proyectos.component.sass"],
})
export class ProyectosComponent implements OnInit {
  proyectos: Property[] = [];
  lastPage;
  previousPage;
  currentPage;
  loadingProperties = false;
  nextPage;
  results: number;

  loading = true;
  constructor(private _propertyService: PropiedadesService, private _router: Router, private _activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getPropiedadByUrl();
  }

  getPropiedadByUrl() {
    
    //"properties/:idcomune/:type/:status/:sectorId/:condominio/:currency/:pre_min/:pre_max/:solo_condominio/:order_by/:order/:page",
    this._activateRoute.params.subscribe((params) => {
      this.loadingProperties = true;
      
      const {
        page
      } = params;

      this._propertyService.getProyectos(page).subscribe((resp) => {
        this.proyectos = resp.properties;
        this.currentPage = resp.page;
        this.lastPage = Math.trunc(resp.totalRegistersQuery / resp.perPage);
        this.results = resp.totalRegistersQuery;
        this.previousPage = this.currentPage == "0" ? 0 : parseInt(this.currentPage) - 1;
        this.nextPage = resp.hasMore >  0 ? parseInt(this.currentPage) + 1 : parseInt(this.currentPage);
        this.loading = false;
        window.scrollTo(0, 600);
      });

   
    });
  }

  getPage(page) {
    
    this._router.navigate([
      `/proyectos/${page}`,
    ]);
   
  }


}
