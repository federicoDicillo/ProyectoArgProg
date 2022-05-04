import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

 


  constructor() { }


  editPropiety=true;
  
  getHabilitarEdit(){
    this.editPropiety=false
  }
  getGuardarTexto(){
    this.editPropiety=true
  }
  
  ngOnInit(): void {
  }

}
