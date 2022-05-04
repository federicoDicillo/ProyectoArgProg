import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri ='http://localhost:4200/api';
 

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    this.http.post(this.uri + '/authenticate', {email: email, password: password})
      .subscribe((resp:any)=>{
        //redireccionamos al usuario a home
      //  this.router.navigate(['home']);
        //guardamos el token en localStorage
        localStorage.setItem('auth_token', resp.token);

      })
  }
    //para cecrrar sesion eliminamos token de localstorage
  logout(){
    localStorage.removeItem('token');
  }

  //servicio para verificar si existe la sesion
  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }

}
