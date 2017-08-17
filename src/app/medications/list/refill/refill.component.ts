import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicationService} from '../../Medication.Service';
import {Medication} from '../../Medication.Model';

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.css']
})
export class RefillComponent implements OnInit, OnDestroy {
  Refill_Medicines_Ids = [];
  Refill_Medicines = [];
  Refill_Ids = '';
  SendPrescription = false;
  IsSaveDialog = false;
  redirectCounter = 7;
  counterInterval: any;

  constructor(private route: ActivatedRoute, public objMedicineService: MedicationService, private route1: Router) { }

  ngOnInit() {
    this.Refill_Ids = this.route.snapshot.params['id'];
    this.Refill_Medicines_Ids = this.Refill_Ids.split(',');
    this.Refill_Medicines_Ids.pop();
    this.Refill_Medicines = [];
    for (let x = 0; x < this.Refill_Medicines_Ids.length; x++) {
      this.Refill_Medicines[x] = this.objMedicineService.getMedicineDetails(this.Refill_Medicines_Ids[x]);
    }
  }
  OnSaveClick() {
      this.IsSaveDialog = true;
      window.scrollTo(0, 0);
      this.counterInterval = setInterval(() => {
        this.redirectCounter--;
      }, 1000);
      setTimeout(
        () => { this.IsSaveDialog = false;
          this.objMedicineService.setActiveScreen('MedicationHome');
          this.route1.navigate(['/Medications']);
        }, 7000);
      }
  ngOnDestroy() {
    clearInterval(this.counterInterval);
  }
}
