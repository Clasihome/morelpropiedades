import { Component, OnInit } from '@angular/core';
import { Comunas, Property } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { PropiedadesService } from '../../services/propiedades.service';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  searchVisible = 'advance_search';
  code = '';
  public LINK = environment.LINK;
  type = 'todas';
  status = 'todas';
  sectorId = null;
  idComune: string;
  selectedItems = null;

  /**advance search */

  currency = 'UF';
  pre_min = null;
  pre_max = null;
  habitaciones = null;
  banios = null;
  sup_min = null;
  condominios_check = false;

  featuredProperties: Property[] = [];
  dataComunas$: Observable<Comunas>;
  comunaSelected: any = 'todas';
  nombreComunaSelected: any = 'todas';
  condominio = null;

  constructor(
    private propiedadesService: PropiedadesService,
    private _searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getComunas();
    this.loadFeatured();
  }

  async loadFeatured() {
    await this.propiedadesService.getFeatured(12).subscribe((resp) => {
      console.log(resp.properties);
      this.featuredProperties = resp.properties;
    });
  }

  getComunas() {
    this.dataComunas$ = this.propiedadesService.getComunasByJson();
  }

  searchProperties() {
    if (this.type === undefined) {
      this.type = 'todas';
    }

    if (this.sectorId === undefined) {
      this.sectorId = null;
    }

    if (this.condominios_check) {
      this.condominio = 'todos';
    } else {
      if (this.condominio === '') {
        this.condominio = null;
      }
    }

    this.router.navigate([
      // tslint:disable-next-line:max-line-length
      `/properties/todas/${this.type}/${this.status}/${this.sectorId}/${this.condominio}/${this.currency}/${this.pre_min}/${this.pre_max}/${this.habitaciones}/${this.banios}/${this.sup_min}/precio/DESC/1`,
    ]);
  }

  searchPropertiesByCodigo() {
    this.router.navigate([`/property-detail/${this.code}`]);
  }

  selectEvent(item) {
    this.condominio = item.condominio;
    this.sectorId = item.sector_id;
  }

  changeStatus(event) {
    this.status = event.target.value;
  }

  changeType(event) {
    this.type = event.target.value;
  }

  changeCurrency(event) {
    this.currency = event.target.value;
  }

  changeHabitaciones(event) {
    this.habitaciones = event.target.value;
  }

  changeBanios(event) {
    this.banios = event.target.value;
  }

  changeCondominios() {
    this.condominios_check = !this.condominios_check;
  }
}
