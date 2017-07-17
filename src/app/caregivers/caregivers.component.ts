import {Component, OnDestroy, OnInit} from '@angular/core';
import {Caregiver} from './caregiver.Model';
import {CaregiverService} from './caregiver.Service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-caregivers',
  templateUrl: './caregivers.component.html',
  styleUrls: ['./caregivers.component.css'],
})
export class CaregiversComponent implements OnInit, OnDestroy {

  caregiverGeneralDescription: string;
  caregiversList: Caregiver[];
  IsCaregiverHome: boolean = true;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, public objCaregiver: CaregiverService ) { }

  ngOnInit() {
    this.subscription = this.objCaregiver.caregiversListChanged
      .subscribe(
        (caregiversList: Caregiver[]) => {
          this.caregiversList = caregiversList;
      }
      );
    this.caregiversList = this.objCaregiver.getCaregiversList();
    this.caregiverGeneralDescription = this.objCaregiver.getCaregiverGeneralDescription();

  }

  OnDetailsClick()
  {
    this.IsCaregiverHome = false;
  }
  OnNewClick()
  {
    this.IsCaregiverHome = false;
  }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
