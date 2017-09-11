import {Component, OnDestroy, OnInit} from '@angular/core';
import {MedicationService} from './Medication.Service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit, OnDestroy {
  activeScreen: string;
  activeScreenSubscription: Subscription;

  constructor(public objMedication: MedicationService) { }

  ngOnInit() {
    this.activeScreenSubscription = this.objMedication.activeScreenChanged.
    subscribe(
      (activeScreen: string) => {
        this.activeScreen = activeScreen;
      }
    );
    this.activeScreen = this.objMedication.getActiveScreen();
    }

  OnListClick() {
    this.objMedication.setActiveScreen('MedicationList');
  }
  OnReconciliationClick()  {
    this.objMedication.setActiveScreen('MedicationReconciliation');
  }
  OnHistoryClick() {
    this.objMedication.setActiveScreen('MedicationHistory');
  }
  ngOnDestroy() {
    this.activeScreenSubscription.unsubscribe();
  }
}
