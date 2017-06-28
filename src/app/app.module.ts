import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CaregiversComponent } from './caregivers/caregivers.component';
import {RouterModule, Routes} from "@angular/router";
import { SubHeaderComponent } from './caregivers/sub-header/sub-header.component';
import { CaregiverDetailsComponent } from './caregivers/caregiver-details/caregiver-details.component';

const appRoutes: Routes =[
  {  path: '', redirectTo: '/Home', pathMatch :'full'},
  { path: 'Home', component: MainComponent},
  { path : 'Caregivers', component : CaregiversComponent},
  { path : 'Caregivers/Details', component : CaregiverDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CaregiversComponent,
    SubHeaderComponent,
    CaregiverDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


}
