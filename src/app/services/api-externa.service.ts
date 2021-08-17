import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  RespuestaSbifUF,
  RespuestaSbifDolar,
  RespuestaSbifUTMs,
  ValorSbif
} from "../interfaces/interfaces";

@Injectable({
  providedIn: "root"
})
export class ApiExternaService {
  apiSbif = "c2a893fd3d6dc2dfd43a9a8db191bee790a1342d";

  uf;
  dolar;
  utm;
  headers;

  constructor(private http: HttpClient) {
    this.getHeaders();
  }

  getUF() {
    console.log("paso por la api");
    // tslint:disable-next-line: max-line-length
    const responseUf = this.http.get<any>(`https://mindicador.cl/api/uf`);
    responseUf.subscribe(
      resp => {
        this.uf = resp.serie[0].valor;
        localStorage.setItem("uf", this.uf);
        return this.uf;
      },
      err => {
        console.log("erroruf");
        if (localStorage.getItem("uf")) {
          return localStorage.getItem("uf");
        } else {
          return " 00.0";
        }
      }
    );
  }

  getDolar() {
    // tslint:disable-next-line: max-line-length
    const responseDolar = this.http.get<any>(`https://mindicador.cl/api/dolar`);
    responseDolar.subscribe(
      resp => {
        this.dolar = resp.serie[0].valor;
        localStorage.setItem("dolar", this.dolar);
        return this.dolar;
      },
      err => {
        console.log("errorDolar");
        if (localStorage.getItem("dolar")) {
          return localStorage.getItem("dolar");
        } else {
          return " 00.0";
        }
      }
    );
  }

  getUtm() {
    // tslint:disable-next-line: max-line-length
    const responseUtm = this.http.get<any>(`https://mindicador.cl/api/utm`);
    responseUtm.subscribe(
      resp => {
        this.utm = resp.serie[0].valor;
        localStorage.setItem("utm", this.utm);
        return this.utm;
      },
      err => {
        console.log("errorutm");
        if (localStorage.getItem("utm")) {
          return localStorage.getItem("utm");
        } else {
          return " 00.0";
        }
      }
    );
  }

  getHeaders() {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    });
  }
}
