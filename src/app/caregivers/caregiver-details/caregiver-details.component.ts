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

  IsPersonalDetailsEditable: boolean = false;
  IsPrivelagesEditable: boolean = false;
  IsPersonalSaveDialog: boolean = false;
  IsPrivelagesSaveDialog: boolean = false;


  Relationships: string [] = [ 'Son',
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

  SelectedCaregiverId: number = 0;
  SelectedCaregiver: Caregiver;
  IsDeleteDialog: boolean = false;

  constructor(private route: ActivatedRoute, private route1: Router, public objCaregiverService: CaregiverService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.SelectedCaregiverId = +params['id'];
        this.SelectedCaregiver = this.objCaregiverService.getCaregiverDetails(this.SelectedCaregiverId);
      }
    );

  }
  OnPersonalEditClick() {
      this.IsPersonalDetailsEditable = true;
    }

  OnPersonalSaveClick() {
    this.IsPersonalDetailsEditable = false;
    this.IsPersonalSaveDialog = true;
  }
  OnPrivelagesEditClick()  {
    this.IsPrivelagesEditable = true;
  }
  OnPrivelagesSaveClick()  {
    this.IsPrivelagesEditable = false;
    this.IsPrivelagesSaveDialog = true;
  }

  OnDelete()  {
    this.IsDeleteDialog = true; }

  OnDeleteConfimedClick()  {
    this.IsDeleteDialog = false;
    this.objCaregiverService.deleteCaregiver(this.SelectedCaregiverId);
    this.objCaregiverService.setActiveScreen('CaregiverHome');
    this.route1.navigate(['/Caregivers']);

  }

  OnDeletecancelledClick()    {
    this.IsDeleteDialog = false;
  }

  OnPrivelagesAlertClose()  {
    this.IsPrivelagesSaveDialog = false;
  }

  OnPersonalAlertClose()  {
    this.IsPersonalSaveDialog = false;
  }
}
