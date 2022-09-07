import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let skills1 = {
      competencia:"Resiliencia",
      porcentaje:"70%",
      
    };

    let skills2 = {
      competencia:"Creatividad",
      porcentaje:"80%",
      
    };

    let skills3 = {
      competencia:"Pensamiento crítico",
      porcentaje:"70%",
      
    };

    let skills4 = {
      competencia:"Comunicación verbal",
      porcentaje:"70%",
      
    };

    let skills5 = {
      competencia:"Liderazgo",
      porcentaje:"90%",
      
    };


    this.skills.push(skills1);
    this.skills.push(skills2);
    this.skills.push(skills3);
    this.skills.push(skills4);
    this.skills.push(skills5);
  }

}
