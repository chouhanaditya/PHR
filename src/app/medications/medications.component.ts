import { Component, OnInit } from '@angular/core';
import {MedicationService} from './Medication.Service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit {
  activeScreen: string;
  constructor(public objMedication: MedicationService) { }

  ngOnInit() {
    this.activeScreen = 'MedicationList';
  }
  OnRefillClick()  {
    this.activeScreen = 'MedicationRefill';
  }
  OnHistoryClick() {
    this.activeScreen = 'MedicationHistory';
  }
}
