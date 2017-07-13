import { Component, OnInit } from '@angular/core';
import {Caregiver} from '../caregiver.Model';
import {CaregiverService} from '../caregiver.Service';

@Component({
  selector: 'app-add-caregiver',
  templateUrl: './add-caregiver.component.html',
  styleUrls: ['./add-caregiver.component.css']
})
export class AddCaregiverComponent implements OnInit {
  relationships: string [] = [ 'Father', 'Mother', 'Brother', 'Sister', 'Child', 'Maternal Grandfather', 'Paternal Grandmother',
    'Paternal Grandfather', 'Maternal Grandmother', 'Friend',
    'GrandSon', 'Husband', 'Wife', 'Spouse', 'GrandDaughter' ];

 Newcaregiver: Caregiver;

 constructor(public objCaregiverService: CaregiverService) {

 }

  ngOnInit() {
   // this.Newcaregiver = ( 4, "", "","","","",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
  }

  OnSaveClick() {
   //this.objCaregiverService.newCaregiver(this.Newcaregiver);
  }
}
