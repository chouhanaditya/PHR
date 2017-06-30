import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregivers',
  templateUrl: './caregivers.component.html',
  styleUrls: ['./caregivers.component.css']
})
export class CaregiversComponent implements OnInit {

  CaregiverSelected :boolean = false;
  CaregiverDescription :string;

  caregiversList : {id:number, name:string, ImageURL:string}[];
  constructor() { }

  ngOnInit() {
       this.caregiversList = [
      {        "id" : 1,"name":"Tom","ImageURL" :"" },
      {        "id" : 2,"name":"Yves","ImageURL" :"" },
      {        "id" : 3,"name":"Adi","ImageURL" :"" },
    ];

       this.CaregiverDescription=  "Caregivers are the individuals which help patients with the basic life functions, manage medical care, help people  maintain health and remain in their home or community. " +
         "Caregivers are the individuals which help patients with the basic life functions, manage medical care, help people  maintain health and remain in their home or community";
  }
  OnClick()
  {
    this.CaregiverSelected=true;
  }

}
