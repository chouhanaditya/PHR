import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Caregiver} from '../caregiver.Model';
import {CaregiverService} from '../caregiver.Service';

@Component({
  selector: 'app-caregiver-details',
  templateUrl: './caregiver-details.component.html',
  styleUrls: ['./caregiver-details.component.css']
})
export class CaregiverDetailsComponent implements OnInit {

  IsDetailsEditable = false;

  IsSaveDialog = false;
  Relationships = [ 'Son',
                                'Daughter',
                                'Brother',
                                'Sister',
                                'Friend',
                                'Father',
                                'Mother',
                                'Husband',
                                'Wife',
                                'GrandSon',
                                'GrandDaughter',
                                'GrandFather',
                                'GrandMother'
                              ];

  SelectedCaregiverId = 0;
  SelectedCaregiver: Caregiver;
  IsDeleteDialog = false;
  ShowDropDown = false;
  constructor(private route: ActivatedRoute, private route1: Router, public objCaregiverService: CaregiverService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.SelectedCaregiverId = params['id'];
        this.SelectedCaregiver = this.objCaregiverService.getCaregiverDetails(this.SelectedCaregiverId);
      }
    );

  }
  OnEdit() {
      this.IsDeleteDialog = false;
      this.IsDetailsEditable = true;
      this.ShowDropDown = false;
    }

  OnSaveClick() {
    this.IsDetailsEditable = false;
    this.IsSaveDialog = true;
  }
  OnCancelClick(){
    this.IsDetailsEditable = false;
  }
  OnDelete()  {
    this.IsDeleteDialog = true;
    this.IsDetailsEditable = false;
    this.ShowDropDown = false;
  }

  OnDeleteConfimedClick()  {
    this.IsDeleteDialog = false;
    this.objCaregiverService.deleteCaregiver(this.SelectedCaregiverId);
    this.objCaregiverService.setActiveScreen('CaregiverHome');
    this.route1.navigate(['/Caregivers']);
  }

  OnDeletecancelledClick()    {
    this.IsDeleteDialog = false;
  }
  OnAlertClose()  {
    this.IsSaveDialog = false;
  }
}
