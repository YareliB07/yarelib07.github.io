import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let certificate1 = {
      certificado:"Nota Laudatoria 2do Semestre",
      fecha:"(2021)",
      
    };

    let certificate2 = {
      certificado:"Nota Laudatoria 3er Semestre",
      fecha:"(2022)",

    };

    let certificate3 = {
      certificado:"Nota Laudatoria 4to Semestre",
      fecha:"(2022)",
      
    };

    this.certificates.push(certificate1);
    this.certificates.push(certificate2);
    this.certificates.push(certificate3);
  }

}
