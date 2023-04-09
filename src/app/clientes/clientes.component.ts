import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  // nome: string = 'Rodrigo'
  clientes: Cliente[]
  // test: any


  constructor(){

    // this.test= "Generica"

    let fulano = new Cliente('Fulano', 30);
    let cicrano = new Cliente('Cicrano', 25);


    this.clientes = [fulano, cicrano]
  }
}

class Cliente {

  constructor(public nome: String, public idade:number){}

}
