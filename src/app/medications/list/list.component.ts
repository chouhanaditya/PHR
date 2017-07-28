import {Component, OnDestroy, OnInit} from '@angular/core';
import {MedicationService} from '../Medication.Service';
import {Medication} from '../Medication.Model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  activeScreen: string;
  activeScreenSubscription: Subscription;
  activeMedicationListTab: string;
  activeMedicationListTabSub: Subscription;
  MedicationList = [];
  MedicationListPrescribed = [];
  MedicationListOTC = [];

  constructor(public objMedication: MedicationService) { }

  ngOnInit() {
    this.activeScreenSubscription = this.objMedication.activeScreenChanged.
    subscribe(
      (activeScreen: string) => {
        this.activeScreen = activeScreen;
      }
    );
    this.activeScreen = this.objMedication.getActiveScreen();
    this.MedicationList = this.objMedication.getMedicationList();

    this.MedicationListOTC = this.MedicationList.filter((Medicine: Medication) => {
       return Medicine.IsPrescribed === false;
    }).slice();

    this.MedicationListPrescribed = this.MedicationList.filter((Medicine: Medication) => {
      return Medicine.IsPrescribed === true;
    }).slice();

    this.activeMedicationListTabSub = this.objMedication.activeMedicationListTabChanged
      .subscribe(
        (activeTab: string) => {
          this.activeMedicationListTab = activeTab;
        }
      );
    this.activeMedicationListTab = this.objMedication.getActiveMedicationTab();
  }
  PrescribedClick()  {
    this.objMedication.setActiveMedicationTab('Prescribed');
  }
  OTCClick()  {
    this.objMedication.setActiveMedicationTab('Over the Counter');
  }
  AllClick()  {
    this.objMedication.setActiveMedicationTab('All');
  }
  OnMedicineDetailsClick() {
    this.objMedication.setActiveScreen('MedicationDetails');
  }
  ngOnDestroy() {
    this.activeScreenSubscription.unsubscribe();
    this.activeMedicationListTabSub.unsubscribe();
  }
}
