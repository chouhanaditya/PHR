import {Medication} from './Medication.Model';
import {Subject} from 'rxjs/Subject';

export class MedicationService {

  activeScreenChanged = new Subject<string>();
  activeScreen = 'MedicationHome';

  private MedicationList: Medication[] = [
    new Medication(1, 'Carvedilol (COREG)', '', false, '06/15/2017', 60, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(2, 'Hydralazine', '', false, '07/02/2017', 70, 'Three times in a day', '50 mg capsules per dose', 'Oral', true, '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(3, 'Isosorbide', '', false, '08/11/2017', 50, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(4, 'Metroprolol', '', false, '07/28/2017', 60, 'One time in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(5, 'Torsemide', '', false, '06/15/2017', 45, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(6, 'Warfarin', '', false, '04/08/2017', 90, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(7, 'Carvedilol (COREG)', '', false, '06/15/2017', 60, 'One time in a day', '25 mg capsules per dose', 'Oral', true, '01/15/2017', '', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(8, 'Aspirin', '', false, '07/15/2017', 30, 'Three times in a day', '50 mg capsules per dose', 'Oral', true, '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(9, 'Isosorbide', '', false, '05/19/2017', 50, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(10, 'Lisinopril', '', false, '02/13/2017', 60, 'One time in a day', '3.125 mg capsules per dose', 'Oral', true, '01/15/2017', '', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(11, 'nitroGlycerin', '', false, '01/28/2017', 45, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', false, '01/17/2016', '03/25/2017', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(12, 'Warfarin', '', false, '01/31/2017', 40, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', false, '08/15/2015', '07/11/2017', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(13, 'Carvedilol (COREG)', '', false, '07/15/2017', 70, 'Three times in a day', '25 mg capsules per dose', 'Oral', false, '01/07/2014', '05/04/2015', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(14, 'Aspirin', '', false, '06/23/2017', 30, 'Three times in a day', '50 mg capsules per dose', 'Oral', false, '01/15/2017', '08/26/2016', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(15, 'Isosorbide', '', false, '04/13/2017', 20, 'Two times in a day', '3.125 mg capsules per dose', 'Oral', false, '01/15/2013', '08/15/2015', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(16, 'Lisinopril', '', false, '06/20/2017', 60, 'One time in a day', '50 mg capsules per dose', 'Oral', false, '01/08/2016', '08/15/2017', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(17, 'nitroGlycerin', '', false, '07/09/2017', 50, 'Three times in a day', '3.125 mg capsules per dose', 'Oral', false, '11/01/2015', '02/06/2017', false, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
    new Medication(18, 'Warfarin', '', false, '05/15/2017', 120, 'Three times in a day', '5 mg capsules per dose', 'Oral', false, '04/19/2016', '08/19/2017', true, 'Nebraska Medical Center Outpatient', '800-233-3435', '989200 Nebraska medical center', '', 'Omaha- 68192-9200', 'NE'),
  ];

  getActiveMedicationList() {
    return this.MedicationList.filter((Medicine: Medication) => {
      return Medicine.IsActive === true;
    }).slice();
  }
  getStoppedMedicationList() {
    return this.MedicationList.filter((Medicine: Medication) => {
      return Medicine.IsActive === false;
    }).slice();
  }
  getAllMedicationList() {
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
