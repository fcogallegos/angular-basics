import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonagesComponent } from './personages/personages.component';
import { AddComponent } from './add/add.component';

//service
import { DbzService } from './services/dbz.services';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonagesComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
