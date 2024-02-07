import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";

const HORARIO_KEY = "horario"


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page  {
  @ViewChild(IonModal) modal: IonModal | undefined;


  constructor() {

  }
  items: any[] = []
  name:String = ""

  nuevoNombre = ""
  nuevoAlias = ""
  nuevaCantidad: number = 0
  nuevaFechaMensual = ""
  nuevaFechaInicio = ""
  sumaTotal: number = 0

  // @ts-ignore
  nuevoDato = { }

  agregarMateria(){
 /*
    this.items.push({
      alias: this.nuevoDato.alias,
      nombre: this.nuevoDato.nombre,
      cantidad: this.nuevoDato.cantidad,
      fechaMensual: this.nuevoDato.fechaMensual,
      fechaInicio: this.nuevoDato.fechaInicio
    });
    localStorage.setItem(TOTAL_KEY, JSON.stringify(this.sumaTotal));

    localStorage.setItem(DEUDAS_KEY, JSON.stringify(this.deudas));
    this.setOpen(false);
    this.nuevoDato = {};

  */
  }



  cancel() {
    // @ts-ignore
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    // @ts-ignore
    this.modal.dismiss(this.name, 'confirm');
  }



}
