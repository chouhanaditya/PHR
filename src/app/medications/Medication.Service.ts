import {Medication} from './Medication.Model';
import {Subject} from 'rxjs/Subject';

export class MedicationService {

  activeScreenChanged = new Subject<string>();
  activeScreen = 'MedicationHome';

  private MedicationList: Medication[] = [
    new Medication(1, 'Carvedilol (COREG)', '', false, 60, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(2, 'Hydralazine', '', false, 70, 'Three times in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(3, 'Isosorbide', '', false, 50, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(4, 'Metroprolol', '', false, 60, 'One time in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(5, 'Torsemide', '', false, 45, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(6, 'Warfarin', '', false, 90, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(7, 'Carvedilol (COREG)', '', false, 60, 'One time in a day', '25 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(8, 'Aspirin', '', false, 30, 'Three times in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(9, 'Isosorbide', '', false, 50, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(10, 'Lisinopril', '', false, 60, 'One time in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(11, 'nitroGlycerin', '', false, 45, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(12, 'Warfarin', '', false, 40, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(13, 'Carvedilol (COREG)', '', false, 70, 'Three times in a day', '25 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(14, 'Aspirin', '', false, 30, 'Three times in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(15, 'Isosorbide', '', false, 20, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(16, 'Lisinopril', '', false, 60, 'One time in a day', '50 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(17, 'nitroGlycerin', '', false, 50, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(18, 'Warfarin', '', false, 120, 'Three times in a day', '5 mg capsules per dose', 'Oral', '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
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
  getMedicineDetails(index: number) {
    return this.MedicationList.filter(x => x.Id === +index)[0];
  }
}
