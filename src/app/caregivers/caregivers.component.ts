import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Caregiver} from './caregiver.Model';
import {CaregiverService} from './caregiver.Service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
declare const jQuery: any;

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

  constructor(private route: ActivatedRoute, public objCaregiver: CaregiverService, private el: ElementRef ) { }

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

  OnDetailsClick(i)  {
    this.objCaregiver.setActiveScreen('CaregiverDetails');
    for (let x = 0; x < this.caregiversList.length; x++) {
      jQuery(this.el.nativeElement).find('#caregiver_' + x).removeClass('custom-bg');
    }
    jQuery(this.el.nativeElement).find('#caregiver_' + i).addClass('custom-bg');
  }
  OnNewClick() {
    for (let x = 0; x < this.caregiversList.length; x++) {
      jQuery(this.el.nativeElement).find('#caregiver_' + x).removeClass('custom-bg');
    }
    jQuery(this.el.nativeElement).find('#newCaregiver').addClass('custom-bg');
    this.objCaregiver.setActiveScreen('CaregiverNew');
  }
  OnEditClick(i) {
    for (let x = 0; x < this.caregiversList.length; x++) {
      jQuery(this.el.nativeElement).find('#caregiver_' + x).removeClass('custom-bg');
    }
    jQuery(this.el.nativeElement).find('#caregiver_' + i).addClass('custom-bg');
    this.objCaregiver.setActiveScreen('CaregiverDetails');
  }
  OnDeleteClick(i) {
    for (let x = 0; x < this.caregiversList.length; x++) {
      jQuery(this.el.nativeElement).find('#caregiver_' + x).removeClass('custom-bg');
    }
    jQuery(this.el.nativeElement).find('#caregiver_' + i).addClass('custom-bg');
    this.objCaregiver.setActiveScreen('CaregiverDetails');
  }
    ngOnDestroy() {
    this.subscriptionCaregiversList.unsubscribe();
    this.subscriptionActiveScreen.unsubscribe();
  }
}
