export class Medication {

  Id: number;
  Name: string;
  GenericName: string;
  RefillStatus: boolean;
  NumberofPills: number;
  Frequency: string;
  Dosage: string;
  Route: string;
  IsActive: boolean;
  StartDate: string;
  StopDate: string;
  IsPrescribed: boolean;
  PharmacyName: string;
  PharmacyPhoneNumber: string;
  PharmacyAddressLine1: string;
  PharmacyAddressLine2: string;
  PharmacyCity: string;
  PharmacyState: string;

  constructor(Id: number, Name: string, GenericName: string, RefillStatus: boolean, NumberofPills: number, Frequency: string, Dosage: string, Route: string,IsActive: boolean, StartDate: string, StopDate: string, IsPrescribed: boolean,
              PharmacyName: string, PharmacyPhoneNumber: string, PharmacyAddressLine1: string, PharmacyAddressLine2: string, PharmacyCity: string, PharmacyState: string ) {
    this.Id = Id;
    this.Name = Name;
    this.GenericName = GenericName;
    this.RefillStatus = RefillStatus;
    this.NumberofPills  = NumberofPills;
    this.Frequency = Frequency;
    this.Dosage  = Dosage;
    this.Route = Route;
    this.IsActive = IsActive;
    this.StartDate = StartDate;
    this.StopDate = StopDate;
    this.IsPrescribed = IsPrescribed;
    this.PharmacyName = PharmacyName;
    this.PharmacyPhoneNumber = PharmacyPhoneNumber ;
    this.PharmacyAddressLine1 = PharmacyAddressLine1;
    this.PharmacyAddressLine2 = PharmacyAddressLine2;
    this.PharmacyCity = PharmacyCity;
    this.PharmacyState = PharmacyState;
  }
}
