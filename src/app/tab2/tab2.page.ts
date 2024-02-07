import { Component } from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';

const DEUDAS_KEY = 'deudas';
const TOTAL_KEY = 'totalDeudas'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController) {
    const storedDeudas = localStorage.getItem(DEUDAS_KEY);
    this.deudas = storedDeudas ? JSON.parse(storedDeudas) : [];

    //cargar el total
    const storedTotal = localStorage.getItem(TOTAL_KEY)
    this.sumaTotal = storedTotal ? JSON.parse(storedTotal) : []

  }

  deudas: any[] = []
  nuevoDato: any = {}
  isModalOpen = false;
  isModalItem = false;

  name = true

  nuevoNombre = ""
  nuevoAlias = ""
  nuevaCantidad: number = 0
  nuevaFechaMensual = ""
  nuevaFechaInicio = ""
  sumaTotal: number = 0

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenItem(openItem: boolean) {
    this.isModalItem = openItem;
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  agregarPago() {

    if (this.nuevoDato.alias.trim() === "" || this.nuevoDato.nombre.trim() === "") {
      console.log("El campo es vacío");
    } else {

      const cantidadNumerica = parseFloat(this.nuevoDato.cantidad);

      this.sumaTotal += cantidadNumerica

      this.deudas.push({
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

    }
  }


  eliminarDeuda(index: number) {
    this.deudas.splice(index, 1); // Elimina el elemento en la posición 'index' del array
    localStorage.setItem(DEUDAS_KEY, JSON.stringify(this.deudas));
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


  editar(i: number) {
    const item = this.deudas[i];
    if (item) {
      this.nuevoAlias = item.alias;
      this.nuevoNombre = item.nombre;
      this.nuevaCantidad = item.cantidad;
      this.nuevaFechaMensual = item.fechaMensual;
      this.nuevaFechaInicio = item.fechaInicio;
    }
  }

  actualizarDatos(alias: string) {

    this.deudas.forEach((nom, index) => {
      if (alias === nom.alias) {
        console.log(this.nuevoAlias, this.nuevoNombre)
        this.nuevoDato.nombre = this.nuevoNombre

      }

    })
  }

}
