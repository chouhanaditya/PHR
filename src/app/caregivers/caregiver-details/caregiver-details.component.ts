import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregiver-details',
  templateUrl: './caregiver-details.component.html',
  styleUrls: ['./caregiver-details.component.css']
})
export class CaregiverDetailsComponent implements OnInit {
  IsPersonalDetailsEditable : boolean = false;
  IsPrivelagesEditable :boolean = false;
  Relationships:string[];

  constructor() { }

  ngOnInit() {
    this.Relationships=[
      'Son',
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
  }
  OnPersonalEditClick(){
    this.IsPersonalDetailsEditable = true;
}

  OnPersonalSaveClick()
  {
    this.IsPersonalDetailsEditable = false;
  }
  OnPrivelagesEditClick()
  {
    this.IsPrivelagesEditable = true;
  }
  OnPrivelagesSaveClick(){
    this.IsPrivelagesEditable = false;
  }
}
