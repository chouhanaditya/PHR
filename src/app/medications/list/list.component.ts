import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {MedicationService} from '../Medication.Service';
import {Medication} from '../Medication.Model';
import {Subscription} from 'rxjs/Subscription';
import {forEach} from "@angular/router/src/utils/collection";
declare const jQuery: any;


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
  ShowDetailedPanel_All = [];
  ShowDetailedPanel_Prescribed = [];
  ShowDetailedPanel_OTC = [];
  Refill_button_active = false;

  constructor(public objMedication: MedicationService, private el: ElementRef) { }

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
    for (let x = 0; x < this.MedicationList.length; x++) {
      this.ShowDetailedPanel_All[x] = false;
      this.ShowDetailedPanel_Prescribed[x] = false;
      this.ShowDetailedPanel_OTC[x] = false;
    }
    for (const medicine of this.MedicationList){
      if (medicine.RefillStatus) {
        this.Refill_button_active = true;
      }
    }
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
  MedicineDetails_All_Click(i: number) {
    this.ShowDetailedPanel_All[i] = (this.ShowDetailedPanel_All[i] === true) ? false : true;
  }
  MedicineDetails_Prescribed_Click(i: number) {
    this.ShowDetailedPanel_Prescribed[i] = (this.ShowDetailedPanel_Prescribed[i] === true) ? false : true;
  }
  MedicineDetails_OTC_Click(i: number) {
    this.ShowDetailedPanel_OTC[i] = (this.ShowDetailedPanel_OTC[i] === true) ? false : true;
  }
  OnRefillClick() {

  }
  ngOnDestroy() {
    this.activeScreenSubscription.unsubscribe();
    this.activeMedicationListTabSub.unsubscribe();
  }
}
