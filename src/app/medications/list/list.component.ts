import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MedicationService} from '../Medication.Service';
import {Medication} from '../Medication.Model';
import {Subscription} from 'rxjs/Subscription';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
declare const jQuery: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
  activeScreen: string;
  activeScreenSubscription: Subscription;
  SelectedMedicine = true;
  ShowFilterPanel = false;
  MedicationList = [];
  ShowDetailedPanel = [];
  ShowInformationPanel = [];
  ShowPrecautionsPanel = [];
  ShowContraindicationsPanel = [];
  activeMedicationListTab = 'All';
  Refill_button_active = false;
  RefillSelected_Medicines = '';
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
    for (let x = 0; x < this.MedicationList.length; x++) {
      this.ShowDetailedPanel[x] = false;
      this.ShowInformationPanel[x] = false;
      this.ShowContraindicationsPanel[x] = false;
      this.ShowPrecautionsPanel[x] = false;
    }
  }
  ngAfterViewInit() {
    for (const medicine of this.MedicationList){
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
     this.MedicationList[index].RefillStatus = true;
    } else {
      this.MedicationList[index].RefillStatus = false;
    }
    for (const medicine of this.MedicationList){
      if (medicine.RefillStatus) {
        this.Refill_button_active = true;
        this.btnSubmit.nativeElement.title = 'Request refill for all above selected medicines';
        break;
      } else {
        this.Refill_button_active = false;
        this.btnSubmit.nativeElement.title = 'Please select atleast one medicine for refill.';
      }
    }
  }
  OnMedicineDetailsSelection(i: number) {
    (this.ShowDetailedPanel[i] === true) ? this.ShowDetailedPanel[i] = false : this.ShowDetailedPanel[i] = true;
    // Setting background color
    for (let x = 0; x < this.MedicationList.length; x++) {
      jQuery(this.el.nativeElement).find('#medicine_' + x).removeClass('activeMedicine');
    }
    jQuery(this.el.nativeElement).find('#medicine_' + i).addClass('activeMedicine');
  }
  OnMedicineInfoSelection(i: number) {
    (this.ShowInformationPanel[i] === true) ? this.ShowInformationPanel[i] = false : this.ShowInformationPanel[i] = true;
    // Setting background color
    for (let x = 0; x < this.MedicationList.length; x++) {
      jQuery(this.el.nativeElement).find('#medicine_' + x).removeClass('activeMedicine');
    }
    jQuery(this.el.nativeElement).find('#medicine_' + i).addClass('activeMedicine');
  }
  OnRequestRefillClick() {
    this.RefillSelected_Medicines = '';
    for (const medicine of this.MedicationList){
      if (medicine.RefillStatus) {
        this.RefillSelected_Medicines = this.RefillSelected_Medicines + medicine.Id + ',';
       }
    }
    this.objMedication.setActiveScreen('MedicationRefill');
    this.route.navigate(['/Medications/List', this.RefillSelected_Medicines]);
  }
  ngOnDestroy() {
    this.activeScreenSubscription.unsubscribe();
   }
}
