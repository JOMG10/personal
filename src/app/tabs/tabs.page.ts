import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  constructor() {}

  Inicio = "INICIO"

  opcion = this.Inicio
  cambiaEvento() {

  }
}
