import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregivers',
  templateUrl: './caregivers.component.html',
  styleUrls: ['./caregivers.component.css']
})
export class CaregiversComponent implements OnInit {

  caregiversList : {name:string, ImageURL:string}[];
  constructor() { }

  ngOnInit() {
    this.caregiversList = [
      {        "name":"Tom","ImageURL" :"" },
      {        "name":"Yves","ImageURL" :"" },
      {        "name":"Adi","ImageURL" :"" },
    ];
  }

}
