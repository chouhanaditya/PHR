import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Caregiver} from '../caregiver.Model';
import {CaregiverService} from '../caregiver.Service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MdButtonModule, MdInputModule} from '@angular/material';
declare const jQuery: any;

@Component({
  selector: 'app-add-caregiver',
  templateUrl: './add-caregiver.component.html',
  styleUrls: ['./add-caregiver.component.css']
})
export class AddCaregiverComponent implements OnInit, OnDestroy, AfterViewInit {
  caregiverForm: FormGroup;
  redirectCounter = 7;
  counterInterval: any;
  IsFormSaved = false;
  IsError = false;
  AllErrors = [];

  relationships = [ 'Father', 'Mother', 'Brother', 'Sister', 'Child', 'Maternal Grandfather', 'Paternal Grandmother',
    'Paternal Grandfather', 'Maternal Grandmother', 'Friend',
    'GrandSon', 'Husband', 'Wife', 'Spouse', 'GrandDaughter', 'Partner', 'Other'];

 Newcaregiver: Caregiver;

 constructor(public objCaregiverService: CaregiverService, private route: Router, private el: ElementRef) {
 }

  ngOnInit() {
     this.caregiverForm = new FormGroup({
                          Id: new FormControl(''),
                          Name: new FormControl('', Validators.required),
                          ImageURL: new FormControl(''),
                          EmailAddress: new FormControl('', [Validators.required, Validators.email]),
                          PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[1-9]+[0-9]*$/)]),
                          Relationship:  new FormControl('', Validators.required),
                          IsPowerofAttorney: new FormControl(false),
                          ViewMessages: new FormControl(false),
                          SendMessages: new FormControl(false),
                          ViewAppointments: new FormControl(false),
                          ScheduleAppointments: new FormControl(false),
                          ViewMedications: new FormControl(false),
                          RefillMedication: new FormControl(false),
                          ViewReports: new FormControl(false),
                          SaveReports: new FormControl(false),
                          ViewPatientGoals: new FormControl(false),
                          EditPatientGoals: new FormControl(false),
                          ViewHistory: new FormControl(false),
                          SaveHistory: new FormControl(false),
                          FillQuestionnaire: new FormControl(false),
                          SaveQuestionnaire: new FormControl(false),
                          ViewAVS: new FormControl(false),
                          SaveAVS: new FormControl(false),
                          ViewProviders: new FormControl(false),
                          ManageProviders: new FormControl(false),
                          ViewBills: new FormControl(false),
                          PayBills: new FormControl(false)});
  }

  onSubmit() {
   if (this.caregiverForm.valid) {
     this.caregiverForm.controls['Id'].setValue(this.objCaregiverService.getNextCaregiverID());
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
      this.caregiverForm.controls['IsPowerofAttorney'].setValue(false);
      this.caregiverForm.controls['ViewMessages'].setValue(false);
      this.caregiverForm.controls['SendMessages'].setValue(false);
      this.caregiverForm.controls['ViewMessages'].setValue(false);
      this.caregiverForm.controls['ViewAppointments'].setValue(false);
      this.caregiverForm.controls['ScheduleAppointments'].setValue(false);
      this.caregiverForm.controls['ViewMedications'].setValue(false);
      this.caregiverForm.controls['RefillMedication'].setValue(false);
      this.caregiverForm.controls['ViewReports'].setValue(false);
      this.caregiverForm.controls['SaveReports'].setValue(false);
      this.caregiverForm.controls['ViewPatientGoals'].setValue(false);
      this.caregiverForm.controls['EditPatientGoals'].setValue(false);
      this.caregiverForm.controls['ViewHistory'].setValue(false);
      this.caregiverForm.controls['SaveHistory'].setValue(false);
      this.caregiverForm.controls['FillQuestionnaire'].setValue(false);
      this.caregiverForm.controls['SaveQuestionnaire'].setValue(false);
      this.caregiverForm.controls['ViewAVS'].setValue(false);
      this.caregiverForm.controls['SaveAVS'].setValue(false);
      this.caregiverForm.controls['ViewProviders'].setValue(false);
      this.caregiverForm.controls['ManageProviders'].setValue(false);
      this.caregiverForm.controls['ViewBills'].setValue(false);
      this.caregiverForm.controls['PayBills'].setValue(false);
  }

  OnSaveClick() {
    if (this.caregiverForm.valid) {
      this.IsFormSaved = true;
      this.IsError = false;
      window.scrollTo(0, 0);
      this.counterInterval = setInterval(() => {
        this.redirectCounter--;
      }, 1000);
      setTimeout(
        () => { this.IsFormSaved = false;
          this.objCaregiverService.setActiveScreen('CaregiverHome');
          this.route.navigate(['/Caregivers']);
        }, 7000);
      } else {
      this.AllErrors = [];
      this.getFormValidationErrors();
      this.IsError = true;
    }
 }
  OnErrorOkClick() {
    window.scrollTo(0, 0);
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
  ngOnDestroy() {
    clearInterval(this.counterInterval);
  }
  ngAfterViewInit()  {
    // jQuery(this.el.nativeElement).find('#PhoneNumber').mask('(999) 999-9999');
  }
}

