import {Caregiver} from './caregiver.Model';
import { Subject } from 'rxjs/Subject';
import {combineAll} from "rxjs/operator/combineAll";
declare const jQuery;

export class CaregiverService {

  caregiversListChanged = new Subject<Caregiver[]>();
  activeScreenChanged = new Subject<string>();

  private caregiversList: Caregiver [] = [
    new Caregiver( 1, 'Tom Windle', '','Tom.Windle@unmc.edu','(402)-987-3241','Friend',false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false),
    // new Caregiver( 2, 'Yves', '','yves@unomaha.edu','(402)-458-7412','Son',false,true,true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,true,false),
    // new Caregiver( 3, 'Aditya', '','achouhan@unomaha.edu','(402)-913-4882','Father',false,true,true,true,true, true,true,true,true,false,true,false,true,true,true,true,true,true,false),
    ];

    // activeScreen: Possible values= ['CaregiverHome', 'CaregiverDetails', 'CaregiverNew'];
    private activeScreen = 'CaregiverHome' ;

    getActiveScreen() {
      return this.activeScreen;
    }

    setActiveScreen(activeScreen: string) {
      this.activeScreen = activeScreen;
      this.activeScreenChanged.next(this.activeScreen);
    }

    getCaregiversList() {
      return this.caregiversList.slice();
    }

    setCaregiversList(caregiversList: Caregiver[]) {
      this.caregiversList = caregiversList;
      this.caregiversListChanged.next(this.caregiversList.slice());
    }

    addCaregiver(newcaregiver: Caregiver) {
    this.caregiversList.push(newcaregiver);
    this.caregiversListChanged.next(this.caregiversList.slice());
  }

    getCaregiverDetails(index: number) {
     return this.caregiversList.filter(x => x.Id === +index)[0];
    }

    deleteCaregiver(index: number) {
      this.caregiversList = this.caregiversList.filter(x => x.Id !== +index);
      this.caregiversListChanged.next(this.caregiversList.slice());
    }
    getNextCaregiverID() {
      if (this.caregiversList.length === 0) {
        return 1;
      } else {
        return this.caregiversList.slice(-1).pop()['Id'] + 1;
      }
    }
}
