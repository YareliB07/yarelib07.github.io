import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let education1 = {
      fecha:"2014-2017",
      grado:"Secundaria",
      institucion:"Instituto Bilingüe Alejandría"
    };

    let education2 = {
      fecha:"2017-2020",
      grado:"Preparatoria",
      institucion:"Colegio Preparatorio de Orizaba"
    };

    let education3 = {
      fecha:"2020-2022",
      grado:"Licenciatura",
      institucion:"Universidad Veracruzana"
    };

    this.education.push(education1);
    this.education.push(education2);
    this.education.push(education3);
  }

}
