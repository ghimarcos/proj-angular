import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private localStorage: LocalStorageService) { }

  save(contato: Contato) {
    this.localStorage.set(contato.id, contato);
  }

}