import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `]
})
export class TemplateComponent implements OnInit {

  usuario:Object={
    nombre:null,
    apellido:null,
    email:null,
    pais:"",
    sexo:"Hombre"
  };
  paises=[
    {
      codigo:"GT",
      nombre:"Guatemala"
    },
    {
      codigo:"MX",
      nombre:"Mexico"
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log("template init");

  }

  guardar(forma:NgForm){
    console.log("formulario posteado");
    console.log("forma:",forma);
    console.log(this.usuario);
  }

}
