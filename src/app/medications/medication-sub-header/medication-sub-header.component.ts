import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MedicationService} from '../Medication.Service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-medication-sub-header',
  templateUrl: './medication-sub-header.component.html',
  styleUrls: ['./medication-sub-header.component.css']
})
export class MedicationSubHeaderComponent implements OnInit {

  activeScreen: string;
  activeScreenSubscription: Subscription;

  constructor(private route: Router, public objMedication: MedicationService) { }

  ngOnInit() {
    this.activeScreenSubscription = this.objMedication.activeScreenChanged.
    subscribe(
      (activeScreen: string) => {
        this.activeScreen = activeScreen;
      }
    );
    this.activeScreen = this.objMedication.getActiveScreen();
  }
  ToMainHome() {
    this.route.navigate(['/Home']);
    this.objMedication.setActiveScreen('MedicationHome');
  }
  ToMedicationsHome() {
    this.route.navigate(['/Medications']);
    this.objMedication.setActiveScreen('MedicationHome');
  }
  ToMedicationsList() {
    this.route.navigate(['/Medications/List']);
    this.objMedication.setActiveScreen('MedicationList');
  }
  ToMedicationsRefillHome() {
    this.route.navigate(['/RequestRefill']);
    this.objMedication.setActiveScreen('MedicationHome');
  }
}
