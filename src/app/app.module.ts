import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UiSwitchModule} from 'ngx-ui-switch/src';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CaregiversComponent } from './caregivers/caregivers.component';
import { RouterModule, Routes} from '@angular/router';
import { SubHeaderComponent } from './caregivers/sub-header/sub-header.component';

import { CaregiverDetailsComponent } from './caregivers/caregiver-details/caregiver-details.component';
import {CaregiverService} from './caregivers/caregiver.Service';
import { AddCaregiverComponent } from './caregivers/add-caregiver/add-caregiver.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NguiAutoCompleteModule} from '@ngui/auto-complete';
import { MedicationSubHeaderComponent } from './medications/medication-sub-header/medication-sub-header.component';
import { MedicationsComponent } from './medications/medications.component';
import { ListComponent } from './medications/list/list.component';
import { HistoryComponent } from './medications/history/history.component';
import { ReconcillationComponent } from './medications/reconcillation/reconcillation.component';
import { RefillComponent } from './medications/list/refill/refill.component';
import {MedicationService} from './medications/Medication.Service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule} from '@angular/material';
import { RequestRefillComponent } from './request-refill/request-refill.component';
import { RefillSummaryComponent } from './request-refill/refill-summary/refill-summary.component';



const appRoutes: Routes = [
  {  path: '', redirectTo: '/Home', pathMatch : 'full'},
  { path: 'Home', component: MainComponent},
  { path : 'Caregivers', component : CaregiversComponent,
    children: [
      { path : 'new', component : AddCaregiverComponent },
      { path : ':id', component : CaregiverDetailsComponent }
    ]},
  { path : 'Medications', component : MedicationsComponent,
    children: [
      { path : 'List', component : ListComponent,
        children: [
          { path: ':id', component: RefillComponent },
        ]},
      { path : 'Reconcillation', component : ReconcillationComponent },
      { path : 'History', component : HistoryComponent }
    ]},
  { path : 'RequestRefill', component : RequestRefillComponent,
    children: [
      { path: ':id', component: RefillSummaryComponent },
    ]},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }

  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CaregiversComponent,
    SubHeaderComponent,
    CaregiverDetailsComponent,
    AddCaregiverComponent,
    NotFoundComponent,
    MedicationSubHeaderComponent,
    MedicationsComponent,
    ListComponent,
    RefillComponent,
    HistoryComponent,
    ReconcillationComponent,
    RequestRefillComponent,
    RefillSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    NguiAutoCompleteModule,
    UiSwitchModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CaregiverService, MedicationService],
  bootstrap: [AppComponent]
})

export class AppModule {


}
