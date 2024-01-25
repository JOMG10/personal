import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  constructor() {}

  Inicio = "INICIO"
  OPCION2= "opcion2"
  OPCION3= "opcion3"

  opcion = this.Inicio

  cambiaEvento() {

  }
}
