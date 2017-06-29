import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregivers',
  templateUrl: './caregivers.component.html',
  styleUrls: ['./caregivers.component.css']
})
export class CaregiversComponent implements OnInit {

  caregiversList : {id:number, name:string, ImageURL:string}[];
  constructor() { }

  ngOnInit() {
    this.caregiversList = [
      {        "id" : 1,"name":"Tom","ImageURL" :"" },
      {        "id" : 2,"name":"Yves","ImageURL" :"" },
      {        "id" : 3,"name":"Adi","ImageURL" :"" },
    ];
  }

}
