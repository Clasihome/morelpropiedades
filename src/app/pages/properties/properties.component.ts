import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropiedadesService } from 'src/app/services/propiedades.service';
import { SearchService } from 'src/app/services/search.service';
import { RespPropiedades, Propiedad } from 'src/app/interfaces/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass'],
})
export class PropertiesComponent implements OnInit, OnDestroy {
  properties: Propiedad[] = [];
  status = 'todas';
  type = 'todas';
  idComune = 'todas';
  sectorId = 'todas';
  condominio = '';
  order = 'desc';
  order_by = 'precio';

  /**advance search */

  currency = '';
  pre_min = '';
  pre_max = '';
  habitaciones = '';
  banios = '';
  sup_min = '';

  lastPage;
  previousPage;
  currentPage;
  loadingProperties = false;
  nextPage;
  results: string;

  constructor(
    private _propiedadesServices: PropiedadesService,
    private _searchService: SearchService,
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private spinner: NgxSpinnerService
  ) {}

  async ngOnInit() {
    await this.getStatus();
    await this.getType();
    await this.getIdComune();
    await this.getPropiedadByUrl();
  }

  async getStatus() {
    await this._searchService.currentStatus.subscribe((status) => {
      this.status = status ? status : 'todas';
    });
  }

  async getType() {
    await this._searchService.currentType.subscribe((type) => {
      this.type = type ? type : 'todas';
    });
  }

  async getIdComune() {
    await this._searchService.currentIdComune.subscribe((idComune) => {
      this.idComune = idComune ? idComune : 'todas';
    });
  }

  changeOrder(event) {
    this.order = event.target.value;
    this.getPage(1);
  }

  getPropiedadByUrl() {
   /*  this._activateRoute.params.subscribe((params) => {
      this.spinner.show();
      this.loadingProperties = true;
      if (params.idcomuna === 'todas') {
        this.idComune = 'todas';
      } else {
        this.idComune = params.idcomune;
      }
      this.type = params.type;
      this.status = params.status;
      this.sectorId = params.sectorId;
      this.condominio = params.condominio;

      this.currency = params.currency;
      this.pre_min = params.pre_min;
      this.pre_max = params.pre_max;
      this.currency = params.currency;
      this.habitaciones = params.habitaciones;
      this.banios = params.banios;
      this.sup_min = params.sup_min;
      this.order = params.order;

      this._propiedadesServices
        .getPropiedadesByFilter(
          this.idComune,
          this.type,
          this.status,
          this.currency,
          this.pre_min,
          this.pre_max,
          this.sup_min,
          null,
          this.habitaciones,
          this.banios,
          this.sectorId,
          this.condominio,
          'precio',
          this.order,
          params.page
        )
        .subscribe((data) => {
          this.properties = data['propiedades'];

          if (data.pagination.currentpage - 1 <= 0) {
            this.previousPage = 1;
          } else {
            this.previousPage = data.pagination.currentpage - 1;
          }

          this.currentPage = data.pagination.currentpage;
          if (data.results === 1) {
            this.results = `1 propiedad encontrada`;
          } else {
            this.results = `${data.results} propiedades encontradas`;
          }

          if (this.currentPage + 1 > data.pagination.lastpage) {
            this.nextPage = data.pagination.lastpage;
          } else {
            this.nextPage = this.currentPage + 1;
          }
          this.lastPage = data.pagination.lastpage;
          this.spinner.hide();
          this.loadingProperties = false;
        });
    }); */
  }

  getPage(page) {
    this._router.navigate([
      `/properties/${this.idComune}/${this.type}/${this.status}/${this.sectorId}/${this.condominio}/${this.currency}/${this.pre_min}/${this.pre_max}/${this.habitaciones}/${this.banios}/${this.sup_min}/${this.order_by}/${this.order}/${page}`,
    ]);
  }

  ngOnDestroy() {}
}
