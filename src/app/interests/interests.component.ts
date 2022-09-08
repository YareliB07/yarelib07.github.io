import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let interests1 = {
      interes:"Música"
      
    };

    let interests2 = {
      interes:"Flora"

    };

    let interests3 = {
      interes:"Lectura"
      
    };

    let interests4 = {
      interes:"Ingeniería en Software"

    };
    let interests5 = {
      interes:"Cine"
      
    };

    this.interests.push(interests1);
    this.interests.push(interests2);
    this.interests.push(interests3);
    this.interests.push(interests4);
    this.interests.push(interests5);
  }

}
