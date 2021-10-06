import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spideman','Ironman','Hulk','Thor','Dr.Strange'];

  heroDeleted: string = '';

  deleteHeroe() {
    this.heroDeleted = this.heroes.shift() || '';
  }
  
  

}
