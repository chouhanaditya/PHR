import { Component, OnInit } from '@angular/core';
import {Medication} from '../../Medication.Model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MedicationService} from '../../Medication.Service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  SelectedMedicineId = 0;
  SelectedMedicine: Medication;

  constructor(private route: ActivatedRoute, private route1: Router, public objMedication: MedicationService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.SelectedMedicineId = params['id'];
        this.SelectedMedicine = this.objMedication.getMedicineDetails(this.SelectedMedicineId);
      }
    );
  }

}
