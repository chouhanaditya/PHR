import { Component, OnInit } from '@angular/core';
import {Caregiver} from '../caregiver.Model';
import {CaregiverService} from '../caregiver.Service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-caregiver',
  templateUrl: './add-caregiver.component.html',
  styleUrls: ['./add-caregiver.component.css']
})
export class AddCaregiverComponent implements OnInit {
  caregiverForm: FormGroup;
  IsFormSaved = false;
  IsError = false;
  AllErrors = [];

  relationships = [ 'Father', 'Mother', 'Brother', 'Sister', 'Child', 'Maternal Grandfather', 'Paternal Grandmother',
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
                          EmailAddress: new FormControl('', [Validators.required, Validators.email]),
                          PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[1-9]+[0-9]*$/)]),
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
   if (this.caregiverForm.valid) {
     this.objCaregiverService.addCaregiver(this.caregiverForm.value);
     this.caregiverForm.reset();
     this.IsError = false;
   } else {
     this.IsError = true;
   }
  }

  onCancel() {
      this.caregiverForm.reset();
      this.IsError = false;
  }

  OnSaveClick() {
    if (this.caregiverForm.valid) {
      this.IsFormSaved = true;
      this.IsError = false;
    } else {
      this.AllErrors = [];
      this.getFormValidationErrors();
      this.IsError = true;
    }
 }

  OnSuccessOkClick() {
    this.objCaregiverService.setActiveScreen('CaregiverHome');
    this.route.navigate(['/Caregivers']);
  }
  OnErrorOkClick() {
    this.IsError = false;
  }
  getFormValidationErrors() {
    Object.keys(this.caregiverForm.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.caregiverForm.get(key).errors;

      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          switch (keyError) {
            case 'email':
              keyError = ' format is invalid.';
              break;
            case 'required':
              keyError = '  is required.';
              break;
            case 'minlength':
              keyError = ' must have 10 digits.';
              break;
            case 'maxlength':
              keyError = ' must have 10 digits.';
              break;
            case 'pattern':
              keyError = '  must contain only numerals.';
              break;
          }
          this.AllErrors.push(key + keyError);
        });
      }
    });
  }
}

