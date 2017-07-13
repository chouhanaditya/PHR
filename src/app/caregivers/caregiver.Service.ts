import {Caregiver} from './caregiver.Model';

export class CaregiverService {

  private caregiversList: Caregiver [] = [
    new Caregiver( 1, "Tom", "","Tom.Windle@unmc.edu","(402) 987- 3241","Friend",false,true,true,true,true,false,true,true,false,true,false,true,true,true,false,true,true,false),
    new Caregiver( 2, "Yves", "","yves@unomaha.edu","(402) 458- 7412","Son",false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,true,false),
    new Caregiver( 3, "Aditya", "","achouhan@unomaha.edu","(402) 913- 4882","Father",false,true,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true,false),
    ];

      caregiverGeneralDescription: string =  'Caregivers are the individuals which help patients with the basic life functions, manage medical care, help people  maintain health and remain in their home or community. ' +
      'Caregivers are the individuals which help patients with the basic life functions, manage medical care, help people  maintain health and remain in their home or community';

    getCaregiversList() {
      return this.caregiversList.slice();
    }

    getCaregiverGeneralDescription()
    {
      return this.caregiverGeneralDescription;
    }

    getCaregiverDetails(index: number) {
       return this.caregiversList[index - 1];
    }
    newCaregiver(newcaregiver: Caregiver) {
      this.caregiversList.push(newcaregiver);
    }
}
