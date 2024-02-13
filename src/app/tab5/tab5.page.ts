import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController, IonModal} from "@ionic/angular";

const HORARIO_KEY = "horario"


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page  {
  @ViewChild(IonModal) modal: IonModal | undefined;


  constructor(private actionSheetCtrl: ActionSheetController) {
    const storageHorario = localStorage.getItem(HORARIO_KEY)
    this.items = storageHorario ? JSON.parse(storageHorario): []
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
  nuevoDato:any = {

  }

  agregarMateria(){

    this.items.push({
      nombre: this.nuevoDato.nombre,
      lunes:this.nuevoDato.lunes,
      martes:this.nuevoDato.martes,
      miercoles:this.nuevoDato.miercoles,
      horaInicio: this.nuevoDato.horaInicio,
      horaTermino: this.nuevoDato.horaTermino,

    });
    localStorage.setItem(HORARIO_KEY, JSON.stringify(this.items));
    this.nuevoDato = {};
  }

  opcion=""

  lunes = "lunes"
  martes="martes"
  miercoles="miercoles"
  jueves="jueves"
  viernes="viernes"
  sabado="sabado"
  domingo="domingo"


  handleChange(e: { detail: { value: string; }; }) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }



  cancel() {
    // @ts-ignore
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    // @ts-ignore
    this.modal.dismiss(this.name, 'confirm');
  }


  eliminarDeuda(index: number) {
    this.items.splice(index, 1); // Elimina el elemento en la posición 'index' del array
    localStorage.setItem(HORARIO_KEY, JSON.stringify(this.items));
  }

  // @ts-ignore
  async presentActionSheet(i) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Accion',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.eliminarDeuda(i)
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }



}
