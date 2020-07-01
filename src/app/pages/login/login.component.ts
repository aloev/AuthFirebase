import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginModel;   //creo instancia

  constructor() { }

  ngOnInit() {

    this.login = new LoginModel   //inicializo
  }

  onlogin(form: NgForm) {
    
    if (form.invalid) { return; }
    console.log("Formulario enviado");
    console.log(this.login);
    console.log(form);

  }

}
