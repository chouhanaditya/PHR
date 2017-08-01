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

  caregiversList: Caregiver[];
  activeScreen: string;
  subscriptionCaregiversList: Subscription;
  subscriptionActiveScreen: Subscription;

  constructor(private route: ActivatedRoute, public objCaregiver: CaregiverService ) { }

  ngOnInit() {
    this.subscriptionCaregiversList = this.objCaregiver.caregiversListChanged
      .subscribe(
        (caregiversList: Caregiver[]) => {
          this.caregiversList = caregiversList;
      }
      );

    this.subscriptionActiveScreen = this.objCaregiver.activeScreenChanged
      .subscribe(
        (activeScreen: string) => {
        this.activeScreen = activeScreen;
        }
      );

    this.caregiversList = this.objCaregiver.getCaregiversList();
    this.activeScreen = this.objCaregiver.getActiveScreen();
  }

  OnDetailsClick()  {
    this.objCaregiver.setActiveScreen('CaregiverDetails');
  }
  OnNewClick() {
    this.objCaregiver.setActiveScreen('CaregiverNew');
  }
  OnEditClick() {
    this.objCaregiver.setActiveScreen('CaregiverDetails');
  }
  OnDeleteClick() {
    this.objCaregiver.setActiveScreen('CaregiverDetails');
  }
    ngOnDestroy() {
    this.subscriptionCaregiversList.unsubscribe();
    this.subscriptionActiveScreen.unsubscribe();
  }
}
