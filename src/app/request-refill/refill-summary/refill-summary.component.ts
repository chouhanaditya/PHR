import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicationService} from '../../medications/Medication.Service';
import {Medication} from '../../medications/Medication.Model';

@Component({
  selector: 'app-refill-summary',
  templateUrl: './refill-summary.component.html',
  styleUrls: ['./refill-summary.component.css']
})
export class RefillSummaryComponent implements OnInit, OnDestroy {
  Refill_Medicines_Ids = [];
  Refill_Medicines = [];
  Refill_Ids = '';
  MedicineDetails: Medication;
  SendPrescription = false;
  IsSaveDialog = false;
  redirectCounter = 7;
  counterInterval: any;
  TodayDate = '';
  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();

  constructor(private route: ActivatedRoute, public objMedicineService: MedicationService, private route1: Router) { }

  ngOnInit() {
    this.TodayDate = this.day + '/' + this.month + '/' + this.year;
    this.Refill_Ids = this.route.snapshot.params['id'];
    this.Refill_Medicines_Ids = this.Refill_Ids.split(',');
    this.Refill_Medicines_Ids.pop();
    this.Refill_Medicines = [];
    for (let x = 0; x < this.Refill_Medicines_Ids.length; x++) {
      this.Refill_Medicines[x] = this.objMedicineService.getMedicineDetails(this.Refill_Medicines_Ids[x]);
    }
  }
  OnRefillSwitchClick(id: number) {
    this.MedicineDetails = this.objMedicineService.getMedicineDetails(id);

    if (this.MedicineDetails.RefillStatus === false) {
      this.MedicineDetails.RefillStatus = true;
      this.MedicineDetails.LastRefillDate = this.TodayDate;
    } else {
      this.MedicineDetails.RefillStatus = false;
    }
  }
  OnSaveClick() {
    for (let x = 0; x < this.Refill_Medicines.length; x++) {
      this.MedicineDetails = this.objMedicineService.getMedicineDetails(this.Refill_Medicines[x].Id);
      this.MedicineDetails.RefillStatus = true;
      this.MedicineDetails.LastRefillDate = this.TodayDate;
    }
    this.IsSaveDialog = true;
    window.scrollTo(0, 0);
    this.counterInterval = setInterval(() => {
      this.redirectCounter--;
    }, 1000);
    setTimeout(
      () => { this.IsSaveDialog = false;
        this.route1.navigate(['/RequestRefill']);
        this.objMedicineService.setActiveScreen('MedicationHome');
      }, 7000);
  }
  ngOnDestroy() {
    clearInterval(this.counterInterval);
  }

}
