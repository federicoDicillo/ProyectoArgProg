import { Component, OnInit } from '@angular/core';
import { Section } from '../section.model';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  TituloSeccion="Proyectos"
    
  cuadroTitulopuesto:string="";
  cuadroInstiempresa:string="";
  cuadroOtro:string="0";
  
  agregarTarjeta(){
  let nuevaSeccion=new Section(this.cuadroTitulopuesto, this.cuadroInstiempresa,this.cuadroOtro);
  this.secciones.push(nuevaSeccion);


  }
  eliminarSeccion(indice:number){
    this.secciones.splice(indice,1);
    
    }

  secciones: Section[]=[
   new Section("Portfolio Web","Proyecto integrador para Argentina programa, portfolio web full-stack estilo Linkedin, Front End basado en Angular, lenguaje TypeScript y técnologias como Bootstrap. Back End basado en Apache Tomcat con tecnología Spring Boot, y base de datos en MySQL.","0")
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
function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

