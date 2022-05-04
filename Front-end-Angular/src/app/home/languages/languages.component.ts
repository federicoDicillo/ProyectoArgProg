import { Component, OnInit } from '@angular/core';
import { Languages } from '../section.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  TituloSeccion="Idiomas"


  cuadroIdioma:string="";
  cuadroOral:string="";
  cuadroLeido:string="";
  cuadroEscrito:string="";

  eliminaridioma(indice:number){
    this.mylanguages.splice(indice,1);
    
    }
    

  agregarIdioma(){
    let nuevoIdioma=new Languages(this.cuadroIdioma,this.cuadroOral,this.cuadroLeido,this.cuadroEscrito);
    this.mylanguages.push(nuevoIdioma);}
  
    mylanguages: Languages[]=[
      new Languages("Inglés","Básico","Intermedio","Intermedio")
     ];
    
  constructor() { }

  ngOnInit(): void {
  }

  
  editPropiety=true;
  getHabilitarEdit(){
    this.editPropiety=false
  }
  getGuardarCambios(){
    this.editPropiety=true
  }
  
}


