import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private modalCtrl: ModalController) {}

  nombre = {
    nombre: "jose",
    apellido: "martiez"
  }

  deudas = [
    {
      nombre:"PAGOS ACREIMEX",
      cantidad : 250,
      fecha : 10
    },
    {
      nombre:"PAGOS COPPEL",
      cantidad : 100,
      fecha : 10
    },
    {
      nombre:"PAGOS ACREIMEX",
      cantidad : 1000,
      fecha : 10
    },
    {
      nombre:"PAGOS ACREIMEX",
      cantidad : 200,
      fecha : 10
    }
  ]

 /*
  contenido:Carrito[] = [];
  carro : Carrito = {
    nombre:'',
    descripcion:'',
    tallas:"",
    precio: 0,
    colores: '',
    rutaImagen:'',
    id:this.firestore.getId()
  };

  */
  isModalOpen = false;
  isModalItem =false;



  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setOpenItem(openItem : boolean){
    this.isModalItem = openItem;
  }

  name = true

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
