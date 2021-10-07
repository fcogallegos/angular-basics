import { Component } from '@angular/core';

interface Personage {
  name: string;
  power: number;
}


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

  new: Personage = {
    name: '',
    power: 0
  }

  add() {
    if( this.new.name.trim().length === 0 ) { return; }
    
    console.log( this.new );

    this.personages.push(this.new);

    this.new = {
      name: "",
      power: 0
    }
  }

  changeName(event: any) {
    console.log( event.target.value );
  }

}
