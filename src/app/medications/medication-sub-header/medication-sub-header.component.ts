import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MedicationService} from '../Medication.Service';

@Component({
  selector: 'app-medication-sub-header',
  templateUrl: './medication-sub-header.component.html',
  styleUrls: ['./medication-sub-header.component.css']
})
export class MedicationSubHeaderComponent implements OnInit {

  activeScreen = 'MedicationList';

  constructor(private route: Router, public objMedication: MedicationService) { }

  ngOnInit() {
  }
  OnMainHomeClick() {

    this.route.navigate(['/Home']);
  }
  // OnMedicationsHomeClick() {
  //   this.route.navigate(['/Medications']);
  // }
}
