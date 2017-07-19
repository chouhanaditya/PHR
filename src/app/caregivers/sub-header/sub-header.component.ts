import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CaregiverService} from '../caregiver.Service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  activeScreen: string;
  subscriptionActiveScreen: Subscription;

  constructor(private route: Router, private objcaregiver: CaregiverService) { }

  ngOnInit() {
    this.subscriptionActiveScreen = this.objcaregiver.activeScreenChanged
      .subscribe(
        (activeScreen: string) => {
          this.activeScreen = activeScreen;
        }
      );

    this.activeScreen = this.objcaregiver.getActiveScreen();
  }
  OnMainHomeClick() {
    this.objcaregiver.setActiveScreen('CaregiverHome');
    this.route.navigate(['/Home']);
  }
  OnCaregiverHomeClick() {
    this.objcaregiver.setActiveScreen('CaregiverHome');
    this.route.navigate(['/Caregivers']);
  }
}
