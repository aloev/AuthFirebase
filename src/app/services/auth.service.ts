import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyBhw05jSaKXxky_u_a7yyQlWraj0XJUgEc';

  //crear nuevo usuario

  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor(private http: HttpClient) { }
  
  logout() {
    
  }

  login(usuario: UsuarioModel) {
    
  }

  nuevoUsuario(usuario: UsuarioModel) {
    
  }
}

