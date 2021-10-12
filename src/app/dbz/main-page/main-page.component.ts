import { Component } from '@angular/core';
import { Personage } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  /*
  personages: Personage[] = [];
  
  changeName(event: any) {
    console.log( event.target.value );
  }
  */
  new: Personage = {
    name: "Rochi Teacher",
    power: 1200
  }
  /*
  addNewPersonage( arg: Personage ) {
    this.personages.push( arg );
  }
  */
  constructor() {}

}
