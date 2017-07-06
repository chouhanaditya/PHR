import { Component, OnInit } from '@angular/core';
import {caregiver} from "./caregiver.Model";
import {caregiverService} from "./caregiver.Service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-caregivers',
  templateUrl: './caregivers.component.html',
  styleUrls: ['./caregivers.component.css'],
})
export class CaregiversComponent implements OnInit {

  IsCaregiverSelected : boolean = false;
  caregiverGeneralDescription : string;
  caregiversList : caregiver[];

  constructor(private route : ActivatedRoute, public objCaregiver : caregiverService ) { }

  ngOnInit() {
    this.caregiversList = this.objCaregiver.getCaregiversList();
    this.caregiverGeneralDescription = this.objCaregiver.getCaregiverGeneralDescription();


  }
  OnClick()
  {
    this.IsCaregiverSelected=true;

  }

}
