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
import {NguiAutoCompleteModule} from '@ngui/auto-complete';


const appRoutes: Routes = [
  {  path: '', redirectTo: '/Home', pathMatch : 'full'},
  { path: 'Home', component: MainComponent},
  { path : 'Caregivers', component : CaregiversComponent,
    children: [
      { path : 'new', component : AddCaregiverComponent },
      { path : ':id', component : CaregiverDetailsComponent }
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NguiAutoCompleteModule,
    UiSwitchModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CaregiverService],
  bootstrap: [AppComponent]
})

export class AppModule {


}
