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
    return this.http.get<Comunas>('assets/data/CITIES.json');
  }

  getPropiedadesByFilter(idcomuna?, type?, estado?, preMin?, preMax?, supMin?, supMax?, pagina?, code?) {
    if (pagina === undefined) {
      pagina = 0;
    }

    idcomuna = this.validateTodas(idcomuna);
    type = this.validateTodas(type);
    estado = this.validateTodas(estado);
    preMin = this.validateValueNumberMin(preMin);
    preMax = this.validateValueNumberMax(preMax);
    supMin = this.validateValueNumberMin(supMin);
    supMax = this.validateValueNumberMax(supMax);
    code = this.validateTodas(code);
    // tslint:disable-next-line: max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}&propertyType=${type}&commune=${idcomuna}&operation=${estado}&page=${pagina}&priceMin=${preMin}&priceMax=${preMax}&totalAreaFrom=${supMin}&totalAreaTo=${supMax}&stringSearch=${code}&currency=CLP&limit=8`);
  }

  getPropiedadesDetail(id: string) {
    return this.http.get<Property>(`${this.URL}&propertyId=${id}`);
  }

  getProyectos() {
  }

  getFeatured(cantidad?: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<RespPropiedades>(`${this.URL}/propiedades/destacadas/${this.apiKey}&perpage=${this.cUltimasPropiedades}`);
  }

  validateTodas(value) {
    if (value === '' || value === 'all') {
      return '';
    } else {
      return value;
    }
  }

  getAgentes() {
    return this.http.get<RespuestaAgentes>(`${this.URL}/agentes/${this.apiKey}`);
  }

  validateValueNumberMin(value) {
    if (!value) {
      return 1;
    } else {
      return value;
    }
  }

  validateValueNumberMax(value) {
    if (!value) {
      return 999999999999;
    } else {
      return value;
    }
  }
}