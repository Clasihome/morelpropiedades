import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropiedadesService } from 'src/app/services/propiedades.service';
import { SearchService } from 'src/app/services/search.service';
import { RespPropiedades, Propiedad, Property } from 'src/app/interfaces/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass'],
})
export class PropertiesComponent implements OnInit, OnDestroy {
  properties: Property[] = [];
  status = 'todas';
  type = 'todas';
  idComune = 'todas';
  sectorId = 'todas';
  condominio = '';
  code = '';
  order = 'desc';
  order_by = 'precio';

  /**advance search */

  currency = '';
  pre_min = '';
  pre_max = '';
  habitaciones = '';
  banios = '';
  sup_min = '';
  soloCondominio = '';
  proyecto = '';

  lastPage;
  previousPage;
  currentPage;
  currentPageLegend;
  lastPageLegend;
  loadingProperties = false;
  nextPage;
  results: number;

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
    this.getPage(0);
  }

  getPropiedadByUrl() {
    
    //"properties/:idcomune/:type/:status/:sectorId/:condominio/:currency/:pre_min/:pre_max/:solo_condominio/:order_by/:order/:page",
    this._activateRoute.params.subscribe((params) => {
   
      this.loadingProperties = true;
      
      const {
        idcomune, 
        type, 
        status, 
        sectorId, 
        condominio, 
        currency, 
        pre_min, 
        pre_max, 
        solo_condominio, 
        proyecto,
        order_by, 
        order,
        page, 
        code
      } = params;

      this.idComune = idcomune;
      this.type = type;
      this.status = status;
      this.sectorId = sectorId;
      this.condominio = condominio;
      this.currency = currency;
      this.pre_min = pre_min;
      this.pre_max = pre_max;
      this.soloCondominio = solo_condominio;
      this.proyecto = proyecto;
     
      this.code = code;

      this.order = order;
      this.order_by = order_by;
      this.currentPage = page;
      this.properties = [];

      this._propiedadesServices
      .getPropiedadesByFilter(this.idComune, this.type, this.status, this.pre_min, this.pre_max, this.sup_min, '9999999999', this.sectorId, this.soloCondominio, this.condominio, this.proyecto, this.currentPage, this.code, this.order)
      .subscribe(async resp => {
        this.currentPage = resp.page;
        this.lastPage = Math.trunc(resp.totalRegistersQuery / resp.perPage);
        this.results = resp.totalRegistersQuery;
        this.previousPage = this.currentPage == "0" ? 0 : parseInt(this.currentPage) - 1;
        this.nextPage = resp.hasMore >  0 ? parseInt(this.currentPage) + 1 : parseInt(this.currentPage);
        this.properties = resp.properties;
        this.currentPageLegend = parseInt(this.currentPage) + 1;
        this.lastPageLegend = parseInt(this.lastPage) + 1;
        this.loadingProperties = false;
      });
    });
  }

  getPage(page) {
    this._router.navigate([
      `/properties/${this.idComune}/${this.type}/${this.status}/${this.sectorId}/${this.condominio}/${this.currency}/${this.pre_min}/${this.pre_max}/${this.soloCondominio}/${this.proyecto}/${this.code}/${this.order_by}/${this.order}/${page}`,
    ]);
  }

  ngOnDestroy() {}
}
