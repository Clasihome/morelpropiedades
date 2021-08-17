import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { ApiExternaService } from '../services/api-externa.service';
import { RespuestaSbifUF } from '../interfaces/interfaces';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  public LINK = environment.LINK;
  public uf: any;
  dayNow;
  dayLocal;

  constructor(
    private _router: Router,
    private apiExternaService: ApiExternaService
  ) {}

  ngOnInit() {
    const date = new Date();
    this.dayNow = date.getDay();
    this.dayLocal = localStorage.getItem('dayLocal');
    // tslint:disable-next-line: radix
    if (String(this.dayNow) === this.dayLocal && localStorage.getItem('uf')) {
      this.initiUf();
    } else {
      localStorage.setItem('dayLocal', JSON.stringify(this.dayNow));
      this.uf = this.apiExternaService.getUF();
    }
  }

  initiUf() {
    this.uf = localStorage.getItem('uf');
  }

  closeMenu() {
    console.log('object');
  }
  searchProperties(type, sectorId?, condominio?) {
    this._router.navigate([
      `/properties/todas/${type}/todas/${sectorId}/${condominio}/null/null/null/null/null/null/1`,
    ]);
  }
}
