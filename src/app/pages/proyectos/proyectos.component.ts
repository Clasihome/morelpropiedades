import { Component, OnInit } from "@angular/core";
import { PropiedadesService } from "src/app/services/propiedades.service";
import { Propiedad } from "src/app/interfaces/interfaces";

@Component({
  selector: "app-proyectos",
  templateUrl: "./proyectos.component.html",
  styleUrls: ["./proyectos.component.sass"],
})
export class ProyectosComponent implements OnInit {
  proyectos: Propiedad[] = [];
  loading = true;
  constructor(private _propertyService: PropiedadesService) {}

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
   /*  this._propertyService.getProyectos().subscribe((resp) => {
      this.proyectos = resp.propiedades;
      this.loading = false;
    }); */
  }
}
