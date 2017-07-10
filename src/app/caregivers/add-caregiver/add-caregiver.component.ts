import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-caregiver',
  templateUrl: './add-caregiver.component.html',
  styleUrls: ['./add-caregiver.component.css']
})
export class AddCaregiverComponent implements OnInit {
  relationships : string [] = [ 'Father', 'Mother', 'Brother','Sister','Child','Maternal Grandfather','Paternal Grandmother','Paternal Grandfather','Maternal Grandmother','Friend',
    'GrandSon','Husband','Wife','Spouse','GrandDaughter' ];

  constructor() { }

  ngOnInit() {
  }

}
