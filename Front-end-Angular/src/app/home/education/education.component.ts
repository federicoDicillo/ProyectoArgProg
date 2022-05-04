import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Section } from '../section.model';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
TituloSeccion="Estudios"
    
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
    new Section("Técnico en industria del proceso",'E.E.T. nro. 449 "Pago de los Arroyos"',"2009 - 2014"),
    new Section("Técnico universitario en sistemas electrónicos","Instituto Politécnico Gral. San Martin - UNR","2017 - 2022")
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
