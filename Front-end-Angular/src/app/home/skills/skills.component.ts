import { Component, OnInit } from '@angular/core';
import { Skills } from '../section.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  TituloSeccion="Hard & Soft skills"


  cuadroSkill:string="";
 

 eliminarSkill(indice:number){
this.mySkills.splice(indice,1);

}


  agregarSkill(){
    let nuevaSkill=new Skills(this.cuadroSkill);
    this.mySkills.push(nuevaSkill);}
  
    mySkills: Skills[]=[
      new Skills("una skill")
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
