import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MedicationService} from "../medications/Medication.Service";
import {Router} from "@angular/router";
import {Medication} from "../medications/Medication.Model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-request-refill',
  templateUrl: './request-refill.component.html',
  styleUrls: ['./request-refill.component.css']
})
export class RequestRefillComponent implements OnInit {
  activeScreen: string;
  activeMedicationListTab = 'All';
  activeScreenSubscription: Subscription;
  MedicationList = [];
  Refill_button_active = false;
  RefillSelected_Medicines = '';
  ShowFilterPanel = false;
  @ViewChild('btnSubmit') btnSubmit: ElementRef;
  constructor(public objMedication: MedicationService, private el: ElementRef, private route: Router) { }

  ngOnInit() {
    this.activeScreenSubscription = this.objMedication.activeScreenChanged.
    subscribe(
      (activeScreen: string) => {
        this.activeScreen = activeScreen;
      }
    );
    this.activeScreen = this.objMedication.getActiveScreen();
    this.MedicationList = this.objMedication.getActiveMedicationList();
    for (const medicine of this.MedicationList) {
      if (medicine.RefillStatus) {
        this.Refill_button_active = true;
        this.btnSubmit.nativeElement.title = 'Request refill for all above selected medicines';
      }
    }
  }
  PrescribedClick()  {
    this.MedicationList = this.objMedication.getActiveMedicationList();
    this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
      return Medicine.IsPrescribed === true;
    }).slice();
    this.activeMedicationListTab = 'Prescribed';
  }
  OTCClick()  {
    this.MedicationList = this.objMedication.getActiveMedicationList();
    this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
      return Medicine.IsPrescribed === false;
    }).slice();
    this.activeMedicationListTab = 'Over the Counter';
  }
  AllClick()  {
    this.MedicationList = this.objMedication.getActiveMedicationList();
    this.activeMedicationListTab = 'All';
  }

  OnRefillSwitchClick(index: number) {
      if (this.MedicationList[index].RefillStatus === false) {
        this.Refill_button_active = true;
        this.btnSubmit.nativeElement.title = 'Request refill for all above selected medicines';
        this.MedicationList[index].RefillStatus = true;
      } else {
        this.Refill_button_active = false;
        this.btnSubmit.nativeElement.title = 'Please select atleast one medicine for refill.';
      }
    }

  OnRequestRefillClick() {
    this.RefillSelected_Medicines = '';
    for (const medicine of this.MedicationList){
      if (medicine.RefillStatus) {
        this.RefillSelected_Medicines = this.RefillSelected_Medicines + medicine.Id + ',';
      }
    }
    this.objMedication.setActiveScreen('RefillSummary');
    this.route.navigate(['/RequestRefill', this.RefillSelected_Medicines]);

  }
}
