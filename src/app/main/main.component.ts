import { Component, OnInit } from '@angular/core';
import {Module} from "./Module.Model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  modulesRow1: Module[];
  modulesRow2: Module[];
  modulesRow3: Module[];
  modulesRow4: Module[];

  constructor() { }

  ngOnInit() {

    this.modulesRow1 = [
      {"ModuleName":"Contact my Doctor","IconUrl":"http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/128/Mail-icon.png"},
      {"ModuleName":"Messages","IconUrl":"http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/128/message-already-read-icon.png"},
      {"ModuleName":"Schedule Appointment","IconUrl":"http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Actions-appointment-new-icon.png"},
      {"ModuleName":"My Appointments","IconUrl":"http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/128/Apps-Calendar-Metro-icon.png"},
     ];

    this.modulesRow2 = [

      {"ModuleName":"Request a Refill","IconUrl":"http://icons.iconarchive.com/icons/dapino/medical/128/pills-pot-icon.png"},
      {"ModuleName":"Medications","IconUrl":"http://icons.iconarchive.com/icons/medicalwp/medical/128/Pills-blue-icon.png"},
      {"ModuleName":"Test Results","IconUrl":"http://icons.iconarchive.com/icons/dapino/medical/128/medical-report-icon.png"},
      {"ModuleName":"Education","IconUrl":"http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Actions-document-find-icon.png"},
    ];

    this.modulesRow3 = [
      {"ModuleName":"My Goals","IconUrl":"http://icons.iconarchive.com/icons/icojam/blue-bits/128/document-write-icon.png"},
      {"ModuleName":"My History","IconUrl":"http://icons.iconarchive.com/icons/mcdo-design/smooth-leopard/128/History-Folder-Lavender-icon.png"},
      // {"ModuleName":"Patient Health Questionaire","IconUrl":"http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/128/Tests-icon.png"},
      // {"ModuleName":"After Visit Summary","IconUrl":"http://icons.iconarchive.com/icons/umut-pulat/tulliana-2/128/korganizer-icon.png"},
    ];

    this.modulesRow4 = [
      {"ModuleName":"Caregivers","IconUrl":"http://icons.iconarchive.com/icons/aha-soft/software/128/user-group-icon.png"},
      {"ModuleName":"My Providers","IconUrl":"http://icons.iconarchive.com/icons/icons-land/vista-people/128/Medical-Nurse-Male-Light-icon.png"},
      {"ModuleName":"Billing","IconUrl":"http://icons.iconarchive.com/icons/webiconset/application/128/Invoice-icon.png"},
      {"ModuleName":"Settings","IconUrl":"http://icons.iconarchive.com/icons/ampeross/qetto-2/128/settings-icon.png"},
    ];

  }

}
