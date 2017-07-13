import { Component, OnInit } from '@angular/core';
import {Caregiver} from './caregiver.Model';
import {CaregiverService} from './caregiver.Service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-caregivers',
  templateUrl: './caregivers.component.html',
  styleUrls: ['./caregivers.component.css'],
})
export class CaregiversComponent implements OnInit {

  caregiverGeneralDescription: string;
  caregiversList: Caregiver[];
  IsCaregiverHome: boolean = true;

  constructor(private route: ActivatedRoute, public objCaregiver: CaregiverService ) { }

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
