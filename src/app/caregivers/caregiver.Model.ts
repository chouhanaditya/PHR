/**
 * Created by aditya.chouhan on 7/5/2017.
 */

export class Caregiver {
    Id: number;
    Name: string;
    ImageURL: string;
    EmailAddress: string ;
    PhoneNumber: string ;
    Relationship: string ;
    IsPowerofAttorney: boolean ;
    ViewReports: boolean ;
    ViewAVS: boolean ;
    ViewHealthGlance: boolean ;
    EditHealthGlance: boolean;
    ViewProviders: boolean ;
    ManageProviders: boolean ;
    ViewMessages: boolean ;
    SendMessages: boolean ;
    ViewMedications: boolean ;
    RefillMedication: boolean ;
    ViewBills: boolean ;
    PayBills: boolean ;
    ViewAppointments: boolean ;
    ScheduleAppointments: boolean ;
    FillQuestionnaire: boolean ;
    ViewPatientPlan: boolean;
    EditPatientPlan: boolean;


  constructor(Id: number, Name: string, ImageURL: string, EmailAddress: string, PhoneNumber: string, Relationship: string,
              IsPowerofAttorney: boolean, ViewReports: boolean, ViewAVS: boolean, ViewHealthGlance: boolean,
              EditHealthGlance: boolean, ViewProviders: boolean , ManageProviders: boolean , ViewMessages: boolean ,
              SendMessages: boolean, ViewMedications: boolean , RefillMedication: boolean , ViewBills: boolean,
              PayBills: boolean , ViewAppointments: boolean , ScheduleAppointments: boolean , FillQuestionnaire: boolean,
              ViewPatientPlan: boolean, EditPatientPlan: boolean ) {
    this.Id = Id;
    this.Name = Name;
    this.ImageURL = ImageURL;
    this.EmailAddress = EmailAddress ;
    this.PhoneNumber = PhoneNumber ;
    this.Relationship = Relationship ;
    this.IsPowerofAttorney = IsPowerofAttorney ;
    this.ViewReports = ViewReports ;
    this.ViewAVS = ViewAVS ;
    this.ViewHealthGlance = ViewHealthGlance ;
    this.EditHealthGlance = EditHealthGlance;
    this.ViewProviders = ViewProviders ;
    this.ManageProviders = ManageProviders ;
    this.ViewMessages  = ViewMessages ;
    this.SendMessages = SendMessages ;
    this.ViewMedications = ViewMedications ;
    this.RefillMedication = RefillMedication ;
    this.ViewBills = ViewBills ;
    this.PayBills = PayBills ;
    this.ViewAppointments = ViewAppointments ;
    this.ScheduleAppointments = ScheduleAppointments ;
    this.FillQuestionnaire = FillQuestionnaire ;
    this.ViewPatientPlan = ViewPatientPlan;
    this.EditPatientPlan = EditPatientPlan;

  }
}
