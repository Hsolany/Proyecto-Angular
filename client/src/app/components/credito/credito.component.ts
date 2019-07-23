import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  credito: any = {
    nit: '',
    nombre: '',
    salario: '',
    fecha: ''
  };


  constructor() { }

  ngOnInit() {
  }

  validarCredito(){
    if(this.credito.nit =='') {
      alert('Debe llenar el campo Nit');
      return false;
    }else if(this.credito.nombre =='') {
      alert('Debe llenar el campo Nombre');
      return false;
    }else if(this.credito.salario =='') {
      alert('Debe llenar el campo Salario');
      return false;
    }else if(this.credito.fecha =='') {
      alert('Debe llenar el campo fecha');
      return false;
    }else if(!/^([0-9])*$/.test(this.credito.nit)){
      alert('El campo Cedula solo acepta numeros ');
      return false;
    }else if(this.credito.salario<100000000 || this.credito.salario<0 || this.credito.salario % 1 != 0){
      alert('La cantidad salarial es invalida');
      return false;
    }
  }

}
