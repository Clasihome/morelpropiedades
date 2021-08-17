import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private status = new BehaviorSubject<string>('');
  currentStatus = this.status.asObservable();

  private type = new BehaviorSubject<string>('');
  currentType = this.type.asObservable();

  private idComune = new BehaviorSubject<string>('');
  currentIdComune = this.idComune.asObservable();

  constructor() { }

  updateStatus( status: string) {
    this.status.next(status);
  }

  updateType( type: string) {
    this.type.next(type);
  }

  updateIdComune( idComune: string) {
    this.idComune.next(idComune);
  }
}
