import {Medication} from './Medication.Model';
import {Subject} from 'rxjs/Subject';

export class MedicationService {

  activeScreenChanged = new Subject<string>();
  activeScreen = 'MedicationHome';

  activeMedicationListTab = 'All';
  activeMedicationListTabChanged = new Subject<string>();

  private MedicationList: Medication[] = [
    new Medication(1,'Carvedilol (COREG)','',true,'Two times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(2,'Hydralazine','',true,'Three times in a day','50 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(3,'Isosorbide)','',true,'Two times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(4,'Metroprolol','',true,'One time in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(5,'Torsemide','',true,'Two times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(6,'Warfarin','',true,'Three times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(7,'Carvedilol (COREG)','',true,'One time in a day','25 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(8,'Aspirin','',true,'Three times in a day','50 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(9,'Isosorbide)','',true,'Two times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(10,'Lisinopril','',true,'One time in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(11,'nitroGlycerin','',true,'Two times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(12,'Warfarin','',true,'Three times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(13,'Carvedilol (COREG)','',true,'Three times in a day','25 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(14,'Aspirin','',true,'Three times in a day','50 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(15,'Isosorbide)','',true,'Two times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(16,'Lisinopril','',true,'One time in a day','50 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
    new Medication(17,'nitroGlycerin','',true,'Three times in a day','3.125 mg capsules per dose','Oral','01/15/2017','05/27/2017',false),
    new Medication(18,'Warfarin','',true,'Three times in a day','5 mg capsules per dose','Oral','01/15/2017','05/27/2017',true),
  ];

  getMedicationList() {
    return this.MedicationList.slice();
  }
  getActiveScreen() {
    return this.activeScreen;
  }
  setActiveScreen(activeScreen: string) {
    this.activeScreen = activeScreen;
    this.activeScreenChanged.next(this.activeScreen);
  }
  getActiveMedicationTab() {
    return this.activeMedicationListTab;
  }
  setActiveMedicationTab(activeTab: string) {
    this.activeMedicationListTab = activeTab;
    this.activeMedicationListTabChanged.next(this.activeMedicationListTab);
  }
  getMedicineDetails(index: number) {
    return this.MedicationList[index];
  }

}
