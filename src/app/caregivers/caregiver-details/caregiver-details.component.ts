import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {caregiver} from '../caregiver.Model';
import {caregiverService} from '../caregiver.Service';

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


  Relationships : string [] = [ 'Son',
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

  SelectedCaregiverId: number;
  SelectedCaregiver: caregiver;

  constructor(private route: ActivatedRoute, public objCaregiverService : caregiverService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.SelectedCaregiverId = +params['id'];
        this.SelectedCaregiver = this.objCaregiverService.getCaregiverDetails(this.SelectedCaregiverId);
      }
    );

  }
  OnPersonalEditClick()
    {
      this.IsPersonalDetailsEditable = true;
    }

  OnPersonalSaveClick()
  {
    this.IsPersonalDetailsEditable = false;
    this.IsPersonalSaveDialog = true;
  }
  OnPrivelagesEditClick()
  {
    this.IsPrivelagesEditable = true;
  }
  OnPrivelagesSaveClick()
  {
    this.IsPrivelagesEditable = false;
    this.IsPrivelagesSaveDialog = true;
  }
  OnPrivelagesAlertClose()
  {
    this.IsPrivelagesSaveDialog = false;
  }
  OnPersonalAlertClose()
  {
    this.IsPersonalSaveDialog = false;
  }
}
