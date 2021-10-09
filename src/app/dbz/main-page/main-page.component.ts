import { Component } from '@angular/core';
import { Personage } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personages: Personage[] = [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: "Vegeta",
      power: 9000
    }
  ];

  changeName(event: any) {
    console.log( event.target.value );
  }

  new: Personage = {
    name: "Rochi Teacher",
    power: 1200
  }

}
