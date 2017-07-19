import { Component, OnInit } from '@angular/core';
import {Caregiver} from '../caregiver.Model';
import {CaregiverService} from '../caregiver.Service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-caregiver',
  templateUrl: './add-caregiver.component.html',
  styleUrls: ['./add-caregiver.component.css']
})
export class AddCaregiverComponent implements OnInit {
  caregiverForm: FormGroup;
  IsFormSaved: boolean = false;

  relationships: string [] = [ 'Father', 'Mother', 'Brother', 'Sister', 'Child', 'Maternal Grandfather', 'Paternal Grandmother',
    'Paternal Grandfather', 'Maternal Grandmother', 'Friend',
    'GrandSon', 'Husband', 'Wife', 'Spouse', 'GrandDaughter' ];

 Newcaregiver: Caregiver;

 constructor(public objCaregiverService: CaregiverService, private route: Router) {
 }

  ngOnInit() {
   this.caregiverForm = new FormGroup({
                          Id: new FormControl(('4')),
                          Name: new FormControl('', Validators.required),
                          ImageURL: new FormControl(''),
                          EmailId: new FormControl('', [Validators.required, Validators.email]),
                          PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^[1-9]+[0-9]*$/)]),
                          Relationship:  new FormControl('', Validators.required),
                          IsPowerofAttorney: new FormControl(false),
                          ViewReports: new FormControl(false),
                          ViewAVS: new FormControl(false),
                          ViewHealthGlance: new FormControl(false),
                          EditHealthGlance: new FormControl(false),
                          ViewProviders: new FormControl(false),
                          ManageProviders: new FormControl(false),
                          ViewMessages: new FormControl(false),
                          SendMessages: new FormControl(false),
                          ViewMedications: new FormControl(false),
                          RefillMedication: new FormControl(false),
                          ViewBills: new FormControl(false),
                          PayBills: new FormControl(false),
                          ViewAppointments: new FormControl(false),
                          ScheduleAppointments: new FormControl(false),
                          FillQuestionnaire: new FormControl(false),
                          ViewPatientPlan: new FormControl(false),
                          EditPatientPlan: new FormControl(false)});
  }

  onSubmit() {
      this.objCaregiverService.addCaregiver(this.caregiverForm.value);
      this.caregiverForm.reset();
  }
  onCancel() {
      this.caregiverForm.reset();
  }
  OnSaveClick() {
      this.IsFormSaved = true;
  }
  OnOkClick() {
    this.objCaregiverService.setActiveScreen('CaregiverHome');
    this.route.navigate(['/Caregivers']);
  }
}

