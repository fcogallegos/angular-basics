import { Component, Input } from '@angular/core';
import { Personage } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html'
})
export class PersonagesComponent {

  @Input() personages: Personage[] = [];

}
