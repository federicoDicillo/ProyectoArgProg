import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email ="Usuario";
  password ="Contraseña";

  //constructor(public authService: AuthService) { }

 // LogIn(){
    //el servicio authservice.login ya redirecciona
    //en caso de inicio de sesion positivo
  //  this.authService.login(this.email, this.password)}

  ngOnInit(): void {
  }

}
