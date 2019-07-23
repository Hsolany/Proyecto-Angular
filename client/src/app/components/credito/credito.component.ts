import { Component, OnInit, HostBinding } from '@angular/core';
import { strictEqual } from 'assert';

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
    var val =this.credito.fecha.split("-");
    var ano = Number(val[0]);
    var mes = Number(val[1]);
    var dia = Number(val[2]);
    var hoy = new Date();
  
    var ano_hoy = hoy.getFullYear();
    var mes_hoy= hoy.getMonth()+1;
    var dia_hoy=hoy.getDay();
    console.log('');
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
    }else if(this.credito.salario>100000000 || this.credito.salario<0 || this.credito.salario % 1 != 0){
      alert('La cantidad salarial es invalida');
      return false;
    }else if(ano==ano_hoy && mes==mes_hoy && dia==dia_hoy){
      alert('No puede acceder al credito, no cumple los requitos');
      return false;
    }
  }

}
