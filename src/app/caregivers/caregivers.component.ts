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

  caregiverGeneralDescription : string;
  caregiversList : caregiver[];
  IsCaregiverHome : boolean = true;

  constructor(private route : ActivatedRoute, public objCaregiver : caregiverService ) { }

  ngOnInit() {
    this.caregiversList = this.objCaregiver.getCaregiversList();
    this.caregiverGeneralDescription = this.objCaregiver.getCaregiverGeneralDescription();
  }

  OnDetailsClick()
  {
    this.IsCaregiverHome = false;
  }
  OnNewClick()
  {
    this.IsCaregiverHome = false;
  }
}
