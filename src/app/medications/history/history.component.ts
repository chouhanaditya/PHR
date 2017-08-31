import {Component, ElementRef, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MedicationService} from '../Medication.Service';
import {Medication} from '../Medication.Model';
declare const jQuery: any;


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  activeScreen: string;
  activeScreenSubscription: Subscription;
  ShowDateRange = false;
  FilterCriteria = 'All';
  SortCriteria = 'StopDateAsc'; // 'NameAsc','NameDesc','StartDateAsc', 'StartDateDesc', 'StopDateAsc', 'StopDateDesc'
  ShowSortPanel = false;
  ShowFilterPanel = false;
  MedicationList = [];
  ShowDetailedPanel = [];
  ShowInformationPanel = [];
  ShowPrecautionsPanel = [];
  ShowContraindicationsPanel = [];
  constructor(public objMedication: MedicationService, private el: ElementRef) { }

  ngOnInit() {
    this.activeScreenSubscription = this.objMedication.activeScreenChanged.
    subscribe(
      (activeScreen: string) => {
        this.activeScreen = activeScreen;
      }
    );
    this.activeScreen = this.objMedication.getActiveScreen();
    this.MedicationList = this.objMedication.getStoppedMedicationList();
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
    for (let x = 0; x < this.MedicationList.length; x++) {
      this.ShowDetailedPanel[x] = false;
      this.ShowInformationPanel[x] = false;
      this.ShowContraindicationsPanel[x] = false;
      this.ShowPrecautionsPanel[x] = false;
    }
  }
  OnNoFilterClick() {
    this.ShowDateRange = false;
    this.FilterCriteria = 'All';
    this.MedicationList = this.objMedication.getStoppedMedicationList();
  }
  OnLast1MonthClick() {
    this.ShowDateRange = false;
    this.FilterCriteria = 'Last 1 month';
    this.MedicationList = this.objMedication.getStoppedMedicationList();
    this.FilterMedicationList(this.MedicationList, this.FilterCriteria);
  }
  OnLast3MonthsClick() {
    this.ShowDateRange = false;
    this.FilterCriteria = 'Last 3 months';
    this.MedicationList = this.objMedication.getStoppedMedicationList();
    this.FilterMedicationList(this.MedicationList, this.FilterCriteria);
  }
  OnLast6MonthsClick() {
    this.ShowDateRange = false;
    this.FilterCriteria = 'Last 6 months';
    this.MedicationList = this.objMedication.getStoppedMedicationList();
    this.FilterMedicationList(this.MedicationList, this.FilterCriteria);
  }
  OnLast1YearClick() {
    this.ShowDateRange = false;
    this.FilterCriteria = 'Last 1 Year';
    this.MedicationList = this.objMedication.getStoppedMedicationList();
    this.FilterMedicationList(this.MedicationList, this.FilterCriteria);
  }
  OnLast3YearsClick() {
    this.ShowDateRange = false;
    this.FilterCriteria = 'Last 3 Years';
    this.MedicationList = this.objMedication.getStoppedMedicationList();
    this.FilterMedicationList(this.MedicationList, this.FilterCriteria);
  }
  // OnDateRangeClick() {
  //   (this.ShowDateRange === true) ? this.ShowDateRange = false : this.ShowDateRange = true;
  //   this.FilterCriteria = 'Select Date range';
  //   this.MedicationList = this.objMedication.getStoppedMedicationList();
  //   this.FilterMedicationList(this.MedicationList, this.FilterCriteria);
  // }
  OnNameAsc() {
    this.SortCriteria = 'NameAsc';
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
  }
  OnNameDesc() {
    this.SortCriteria = 'NameDesc';
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
  }
  OnStartDateAsc() {
    this.SortCriteria = 'StartDateAsc';
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
  }
  OnStartDateDesc() {
    this.SortCriteria = 'StartDateDesc';
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
  }
  OnStopDateAsc() {
    this.SortCriteria = 'StopDateAsc';
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
  }
  OnStopDateDesc() {
    this.SortCriteria = 'StopDateDesc';
    this.SortMedicationList(this.MedicationList, this.SortCriteria);
  }
  OnDetailsClick(i: number) {
    (this.ShowDetailedPanel[i] === true) ? this.ShowDetailedPanel[i] = false : this.ShowDetailedPanel[i] = true;
    // Setting background color
    for (let x = 0; x < this.MedicationList.length; x++) {
      jQuery(this.el.nativeElement).find('#medicine_' + x).removeClass('activeMedicine');
    }
    jQuery(this.el.nativeElement).find('#medicine_' + i).addClass('activeMedicine');
  }
  SortMedicationList(MedicationList: Medication[], SortCriteria: string) {
    if (SortCriteria === 'StopDateDesc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(b.StopDate).getTime() - new Date(a.StopDate).getTime()
      });
    }
    if (SortCriteria === 'StopDateAsc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(a.StopDate).getTime() - new Date(b.StopDate).getTime()
      });
    }
    if (SortCriteria === 'StartDateDesc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(b.StartDate).getTime() - new Date(a.StartDate).getTime()
      });
    }
    if (SortCriteria === 'StartDateAsc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime()
      });
    }
    if (SortCriteria === 'NameAsc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return a.Name.localeCompare(b.Name);
      });
    }
    if (SortCriteria === 'NameDesc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return b.Name.localeCompare(a.Name);
      });
    }
  }
  FilterMedicationList(MedicationList: Medication[], FilterCriteria: string) {
    if (FilterCriteria === 'Last 1 month') {
        this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
        const compareDate = new Date().setDate(new Date().getDate() - 30);
        const StopDate = new Date(Medicine.StopDate);
        return StopDate >= new Date(compareDate);
      }).slice();
      }
    if (FilterCriteria === 'Last 3 months') {
        this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
        const compareDate = new Date().setDate(new Date().getDate() - 91);
        const StopDate = new Date(Medicine.StopDate);
        return StopDate >= new Date(compareDate);
      }).slice();
    }
    if (FilterCriteria === 'Last 6 months') {
        this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
        const compareDate = new Date().setDate(new Date().getDate() - 183);
        const StopDate = new Date(Medicine.StopDate);
        return StopDate >= new Date(compareDate);
      }).slice();
    }
    if (FilterCriteria === 'Last 1 Year') {
        this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
        const compareDate = new Date().setDate(new Date().getDate() - 365);
        const StopDate = new Date(Medicine.StopDate);
        return StopDate >= new Date(compareDate);
      }).slice();
    }
    if (FilterCriteria === 'Last 3 Years') {
      this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
        const compareDate = new Date().setDate(new Date().getDate() - 1095);
        const StopDate = new Date(Medicine.StopDate);
        return StopDate >= new Date(compareDate);
      }).slice();
    }
  }
}
