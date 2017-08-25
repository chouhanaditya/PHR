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
  activeTab = 'Last 1 month';
  SortCriteria = 'StartDateAsc'; // 'StartDateAsc', 'StartDateDesc', 'StopDateAsc', 'StopDateDesc'
  MedicationList = [];
  // FilteredList = [];
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
    this.MedicationList = this.MedicationList.filter((Medicine: Medication) => {
      return Medicine.StopDate !== '';
    }).slice();
    //Sorting by Start Date Ascending
    this.SortMedicationList(this.MedicationList, this.SortCriteria);

    for (let x = 0; x < this.MedicationList.length; x++) {
      this.ShowDetailedPanel[x] = false;
      this.ShowInformationPanel[x] = false;
      this.ShowContraindicationsPanel[x] = false;
      this.ShowPrecautionsPanel[x] = false;
    }
    console.log(this.MedicationList);

  }
  OnLast1MonthClick() {
    this.activeTab = 'Last 1 month';
  }
  OnLast3MonthsClick() {
    this.activeTab = 'Last 3 months';
  }
  OnLast6MonthsClick() {
    this.activeTab = 'Last 6 months';
  }
  OnLast1YearClick() {
    this.activeTab = 'Last 1 Year';
  }
  OnDateRangeClick() {
    this.activeTab = 'Select Date range';
    (this.ShowDateRange === true) ? this.ShowDateRange = false : this.ShowDateRange = true;
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
        return new Date(a.StopDate).getTime() - new Date(b.StopDate).getTime()
      });
    }
    if (SortCriteria === 'StopDateAsc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(b.StopDate).getTime() - new Date(a.StopDate).getTime()
      });
    }
    if (SortCriteria === 'StartDateDesc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime()
      });
    }
    if (SortCriteria === 'StartDateAsc') {
      this.MedicationList = this.MedicationList.sort(function (a, b) {
        return new Date(b.StartDate).getTime() - new Date(a.StartDate).getTime()
      });
    }
  }
}
