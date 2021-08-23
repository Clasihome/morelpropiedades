import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespPropiedades, Comunas, Property, RespuestaAgentes } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  cUltimasPropiedades = 0;

  URL = environment.URL;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getLastProperties(cantidad?: number) {

    this.cUltimasPropiedades = 10;

    // tslint:disable-next-line:max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}&limit=${this.cUltimasPropiedades}`);
  }

  getComunasByJson() {
    return this.http.get<Comunas>('assets/data/comunas2.json');
  }

  getPropiedadesByFilter(idcomune?,type?, estado?, preMin?, preMax?, supMin?, supMax?, sector?, condominium?, condominiumName?, proyecto?, pagina?, code?, order?) {
    if (pagina === undefined) {
      pagina = 0;
    }

    console.log(idcomune, sector, condominium, condominiumName)

    idcomune = this.validateQuery(idcomune, '&comunne=');
    type = this.validateQuery(type, '&propertyType=');
    estado = this.validateQuery(estado, '&operation=');
    preMin = this.validateQuery(preMin, '&priceMin=');
    preMax = this.validateQuery(preMax, '&priceMax=');
    supMin = this.validateQuery(supMin, '&totalAreaFrom=');
    supMax = this.validateQuery(supMax, '&totalAreaTo=');
    sector = this.validateQuery(sector, '&sector=');
    condominium = this.validateQuery(condominium, '&condominium=');
    condominiumName = this.validateQuery(condominiumName, '&condominiumName=');
    proyecto = this.validateQuery(proyecto, '&proyecto=');
    code = this.validateQuery(code, '&stringSearch=');
    order = this.validateQuery(order, '&sortOrder=');
 
    // tslint:disable-next-line: max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}${idcomune}${type}${estado}&page=${pagina}${preMin}${preMax}${supMin}${supMax}${sector}${condominium}${condominiumName}${proyecto}${code}${order}&sortBy=uf&currency=UF&limit=8`);
  }

  getPropiedadesDetail(id: string) {
    return this.http.get<Property>(`${this.URL}&propertyId=${id}`);
  }

  getProyectos(pagina) {
    if (pagina === undefined) {
      pagina = 0;
    }
    return this.http.get<RespPropiedades>(`${this.URL}&page=${pagina}&proyecto=true&limit=8`);
  }

  getFeatured(cantidad?: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}/propiedades/destacadas/${this.apiKey}&perpage=${this.cUltimasPropiedades}`);
  }

  validateQuery(value, query) {
    if (value === '' || value === 'all' || value === 'null' || value === 'todas' || typeof value === 'undefined' || value === 'undefined') {
      return '';
    } else {
      return `${query}${value}`;
    }
  }

  getAgentes() {
    return this.http.get<RespuestaAgentes>(`${this.URL}/agentes/${this.apiKey}`);
  }

}