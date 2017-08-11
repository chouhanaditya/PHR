import {Medication} from './Medication.Model';
import {Subject} from 'rxjs/Subject';

export class MedicationService {

  activeScreenChanged = new Subject<string>();
  activeScreen = 'MedicationHome';

  activeMedicationListTab = 'All';
  activeMedicationListTabChanged = new Subject<string>();

  private MedicationList: Medication[] = [
    new Medication(1, 'Carvedilol (COREG)', '', false, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(2, 'Hydralazine', '', false, 'Three times in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(3, 'Isosorbide)', '', false, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(4, 'Metroprolol', '', true, 'One time in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(5, 'Torsemide', '', false, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(6, 'Warfarin', '', false, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(7, 'Carvedilol (COREG)', '', false, 'One time in a day', '25 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(8, 'Aspirin', '', false, 'Three times in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(9, 'Isosorbide)', '', false, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(10, 'Lisinopril', '', false, 'One time in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(11, 'nitroGlycerin', '', false, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(12, 'Warfarin', '', false, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(13, 'Carvedilol (COREG)', '', false, 'Three times in a day', '25 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(14, 'Aspirin', '', false, 'Three times in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(15, 'Isosorbide)', '', false, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(16, 'Lisinopril', '', false, 'One time in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(17, 'nitroGlycerin', '', false, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(18, 'Warfarin', '', false, 'Three times in a day', '5 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
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
