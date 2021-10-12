import { Component, Input } from '@angular/core';
import { Personage } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html'
})
export class PersonagesComponent {

  //@Input() personages: Personage[] = [];
  get personages() {
    return this.dbzService.personages;
  }

  constructor(private dbzService: DbzService) { }
}
