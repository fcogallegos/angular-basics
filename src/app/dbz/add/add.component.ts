import { Component, Input } from '@angular/core';
import { Personage } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() personages: Personage[] = [];

  @Input() new: Personage = {
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
    
    console.log(this.personages);
  }

}
