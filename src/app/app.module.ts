import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UiSwitchModule} from "angular2-ui-switch";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CaregiversComponent } from './caregivers/caregivers.component';
import { RouterModule, Routes} from "@angular/router";
import { SubHeaderComponent } from './caregivers/sub-header/sub-header.component';
import { CaregiverDetailsComponent } from './caregivers/caregiver-details/caregiver-details.component';
import {caregiverService} from "./caregivers/caregiver.Service";
import { AddCaregiverComponent } from './caregivers/add-caregiver/add-caregiver.component';
import {UiSwitchComponent} from "angular2-ui-switch/dist/ui-switch.component";


const appRoutes: Routes =[
  {  path: '', redirectTo: '/Home', pathMatch :'full'},
  { path: 'Home', component: MainComponent},
  { path : 'Caregivers', component : CaregiversComponent,
    children:[
      { path : 'new', component : AddCaregiverComponent },
      { path : ':id', component : CaregiverDetailsComponent }
    ]},
  ];

@NgModule({
  declarations: [
    AppComponent,
    UiSwitchComponent,
    HeaderComponent,
    MainComponent,
    CaregiversComponent,
    SubHeaderComponent,
    CaregiverDetailsComponent,
    AddCaregiverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [caregiverService],
  bootstrap: [AppComponent]
})

export class AppModule {


}
