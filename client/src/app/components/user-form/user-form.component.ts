import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/user';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    id: '',
    nombre: '',
    apellido: '',
    fecha: ''
    
  };

  edit: boolean = false;

  constructor(private userService: UserService, private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.userService.getUser(params.id)
        .subscribe(
          res => {
            console.log(res);
            //this.user = res; 
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }
  buscar: any = [];
  
  

  saveNewUser(){
    var val =this.user.fecha.split("-");
    var ano = Number(val[0]);
    var hoy = new Date();
    var ano_hoy = hoy.getFullYear();
    var edad = ano_hoy - ano;
    this.userService.getUser(this.user.id).subscribe(
      res => {
        this.buscar = res;
        //console.log(res)
      },
      err => console.error(err)
    );
    if(this.user.id =='') {
      alert('Debe llenar el campo Cedula');
      return false;
    }else if(this.user.nombre ==''){
      alert('Debe llebar el campo Nombre ');
      return false;
    }else if(this.user.apellido ==''){
      alert('Debe llebar el campo Apellido ');
      return false;
    }else if(this.user.fecha ==''){
      alert('Debe llebar el campo fecha ');
      return false;
    }else if(!/^([0-9])*$/.test(this.user.id)){
      alert('El campo Cedula solo acepta numeros ');
      return false;
    }else if(edad<18){
      alert('Edad no permitida');
      return false;
    }else if(this.buscar==''){
      this.userService.saveUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          
          this.router.navigate(['/user/credito']);
        },
        err => console.log(err)
      )
    }else {

      alert('El usuario ya esta creado');
      
    }
    this.buscar=[];
  }

  updateUser(){
    this.userService.updateUser(this.user.id, this.user)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/user'])
      },
      err => console.log(err)
    )

  }
}
