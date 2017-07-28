export class Medication {

  Id: number;
  Name: string;
  GenericName: string;
  RefillStatus: boolean;
  Frequency: string;
  Dosage: string;
  Route: string;
  StartDate: string;
  StopDate: string;
  IsPrescribed: boolean;

  constructor(Id: number, Name: string, GenericName: string, RefillStatus: boolean, Frequency: string, Dosage: string, Route: string, StartDate: string, StopDate: string, IsPrescribed: boolean) {
    this.Id = Id;
    this.Name = Name;
    this.GenericName = GenericName;
    this.RefillStatus = RefillStatus;
    this.Frequency = Frequency;
    this.Dosage  = Dosage;
    this.Route = Route;
    this.StartDate = StartDate;
    this.StopDate = StopDate;
    this.IsPrescribed = IsPrescribed;
  }
}
