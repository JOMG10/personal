import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private modalCtrl: ModalController) {}
  deudas:any[] = []
  nuevoDato: any ={}
  isModalOpen = false;
  isModalItem =false;
  name= true


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setOpenItem(openItem : boolean){
    this.isModalItem = openItem;
  }
  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
  agregarPago() {
    this.deudas.push( {
      nombre:this.nuevoDato.nombre,
      cantidad:this.nuevoDato.cantidad,
      fecha:this.nuevoDato.fecha
    })
    this.setOpen(false)
    this.nuevoDato = {}
  }

  eliminar() {
    console.log("boton precionado")
  }
}
