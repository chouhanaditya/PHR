import { Component, OnInit } from '@angular/core';
import {Module} from "./Module.Model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  SubHeading : Module[];
  modules1 : Module[];
  modules2 : Module[];
  modules3 : Module[];

  constructor() { }

  ngOnInit() {

    this.SubHeading =[
      // {"ModuleName":"Settings","IconUrl":"http://icons.iconarchive.com/icons/ampeross/qetto-2/128/settings-icon.png"},
      {"ModuleName":"Request an Appointment","IconUrl":"http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Actions-appointment-new-icon.png"},
      {"ModuleName":"Request for Refill","IconUrl":"http://icons.iconarchive.com/icons/dapino/medical/128/pills-pot-icon.png"}
     ];

    this.modules1 = [
      {"ModuleName":"Appointments","IconUrl":"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Actions-appointment-new-icon.png"},
      {"ModuleName":"Contact My Doctor","IconUrl":"http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/128/Mail-icon.png"},
      {"ModuleName":"Test Results","IconUrl":"http://icons.iconarchive.com/icons/dapino/medical/128/medical-report-icon.png"},
      {"ModuleName":"Medications","IconUrl":"http://icons.iconarchive.com/icons/medicalwp/medical/128/Pills-blue-icon.png"}
    ];

    this.modules2 = [
       {"ModuleName":"Health at a Glance","IconUrl":"http://icons.iconarchive.com/icons/mcdo-design/smooth-leopard/128/History-Folder-Lavender-icon.png"},
       {"ModuleName":"Patient Health Questionaire","IconUrl":"http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/128/Tests-icon.png"},
       {"ModuleName":"After Visit Summary","IconUrl":"http://icons.iconarchive.com/icons/umut-pulat/tulliana-2/128/korganizer-icon.png"},
       {"ModuleName":"Patient Plan","IconUrl":"http://icons.iconarchive.com/icons/icojam/blue-bits/128/document-write-icon.png"}
    ];

    this.modules3 = [
      {"ModuleName":"Caregivers","IconUrl":"http://icons.iconarchive.com/icons/aha-soft/software/128/user-group-icon.png"},
      {"ModuleName":"Providers","IconUrl":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Medical-Nurse-Male-Light-icon.png"},
      {"ModuleName":"Billing","IconUrl":"http://icons.iconarchive.com/icons/webiconset/application/128/Invoice-icon.png"},
      {"ModuleName":"Education","IconUrl":"http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Actions-document-find-icon.png"}
    ];

  }

}
