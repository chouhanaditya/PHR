import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Caregiver} from '../caregiver.Model';
import {CaregiverService} from '../caregiver.Service';
import {Subscription} from 'rxjs/Subscription';
declare const jQuery;

@Component({
  selector: 'app-caregiver-details',
  templateUrl: './caregiver-details.component.html',
  styleUrls: ['./caregiver-details.component.css']
})
export class CaregiverDetailsComponent implements OnInit, OnDestroy {

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
                                'GrandMother',
                                'Other',
                                'Partner'
                              ];

  SelectedCaregiverId = 0;
  redirectCounter = 10;
  counterInterval: any;
  SelectedCaregiver: Caregiver;
  IsDeleteDialog = false;
  constructor(private route: ActivatedRoute, private route1: Router, public objCaregiverService: CaregiverService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.SelectedCaregiverId = params['id'];
        this.SelectedCaregiver = this.objCaregiverService.getCaregiverDetails(this.SelectedCaregiverId);
      }
    );
    this.route.queryParams.subscribe(
      () => {
        if (this.route.snapshot.queryParams['Delete']) {
          this.IsDeleteDialog = true;
        }
        if (this.route.snapshot.queryParams['Edit']) {
          this.IsDetailsEditable = true;
        }
      }
      );
  }
  OnSaveClick() {
      this.IsDetailsEditable = false;
      this.IsSaveDialog = true;
      window.scrollTo(0, 0);
      this.counterInterval = setInterval(() => {
      this.redirectCounter--;
    }, 1000);
      setTimeout(
        () => { this.IsSaveDialog = false;
      }, 10000);
      this.route1.navigate(['/Caregivers', this.SelectedCaregiverId]);
    }
    OnCancelClick() {
      this.objCaregiverService.setActiveScreen('CaregiverHome');
      this.route1.navigate(['/Caregivers']);

    }
    OnDeleteConfimedClick() {
      setTimeout(
        () => {  this.objCaregiverService.deleteCaregiver(this.SelectedCaregiverId);
        this.objCaregiverService.setActiveScreen('CaregiverHome');
          this.route1.navigate(['/Caregivers']);
        }, 1000);
    }

    OnDeletecancelledClick()    {
      this.IsDeleteDialog = false;
      this.objCaregiverService.setActiveScreen('CaregiverHome');
      this.route1.navigate(['/Caregivers']);
    }
    // OnAlertClose()  {
    //   this.IsSaveDialog = false;
    //   this.redirectCounter = 10;
    //   clearInterval(this.counterInterval);
    // }
  ngOnDestroy() {
    clearInterval(this.counterInterval);
  }
}
