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

  new: Personage = {
    name: 'Trucks',
    power: 14000
  }

  add() {
    console.log( this.new );
  }

  changeName(event: any) {
    console.log( event.target.value );
  }

}
