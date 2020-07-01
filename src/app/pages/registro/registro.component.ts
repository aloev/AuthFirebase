import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;


  constructor( private auth: AuthService) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();

    //this.usuario.email = 'mpico602@unab.edu.co';
    //this.usuario.nombre = 'Aonix';
    //this.usuario.password = 'blaba';

  }

  onSubmit(form: NgForm) {
    
    if (form.invalid) { return;}
    
    this.auth.nuevoUsuario(this.usuario).
      subscribe(resp => {
      console.log(resp)
    })
  }


}
