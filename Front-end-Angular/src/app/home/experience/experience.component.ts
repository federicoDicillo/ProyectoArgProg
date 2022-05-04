import { Component, OnInit } from '@angular/core';
import { Section } from '../section.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  TituloSeccion="Experiencia"

  cuadroTitulopuesto:string="";
  cuadroInstiempresa:string="";
  cuadroOtro:string="";
  
  agregarTarjeta(){
  let nuevaSeccion=new Section(this.cuadroTitulopuesto, this.cuadroInstiempresa,this.cuadroOtro);
  this.secciones.push(nuevaSeccion);
  }
  eliminarSeccion(indice:number){
    this.secciones.splice(indice,1);
    
    }

  secciones: Section[]=[
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

