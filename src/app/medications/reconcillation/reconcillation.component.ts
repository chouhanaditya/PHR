import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reconcillation',
  templateUrl: './reconcillation.component.html',
  styleUrls: ['./reconcillation.component.css']
})
export class ReconcillationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
