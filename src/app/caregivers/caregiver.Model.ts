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
    ViewMessages: boolean ;
    SendMessages: boolean ;
    ViewAppointments: boolean ;
    ScheduleAppointments: boolean ;
    ViewMedications: boolean ;
    RefillMedication: boolean ;
    ViewReports: boolean ;
    SaveReports: boolean;
    ViewPatientGoals: boolean;
    EditPatientGoals: boolean;
    ViewHistory: boolean ;
    SaveHistory: boolean;
    FillQuestionnaire: boolean ;
    SaveQuestionnaire: boolean ;
    ViewAVS: boolean ;
    SaveAVS: boolean;
    ViewProviders: boolean ;
    ManageProviders: boolean ;
    ViewBills: boolean ;
    PayBills: boolean ;
    constructor(Id: number, Name: string, ImageURL: string, EmailAddress: string, PhoneNumber: string, Relationship: string, IsPowerofAttorney: boolean,
                ViewMessages: boolean, SendMessages: boolean,  ViewAppointments: boolean , ScheduleAppointments: boolean , ViewMedications: boolean , RefillMedication: boolean ,
                ViewReports: boolean, SaveReports: boolean,  ViewPatientGoals: boolean, EditPatientGoals: boolean, ViewHistory: boolean, SaveHistory: boolean,
               FillQuestionnaire: boolean, SaveQuestionnaire: boolean, ViewAVS: boolean, SaveAVS: boolean,  ViewProviders: boolean , ManageProviders: boolean , ViewBills: boolean, PayBills: boolean) {
    this.Id = Id;
    this.Name = Name;
    this.ImageURL = ImageURL;
    this.EmailAddress = EmailAddress ;
    this.PhoneNumber = PhoneNumber ;
    this.Relationship = Relationship ;
    this.IsPowerofAttorney = IsPowerofAttorney ;
    this.ViewReports = ViewReports ;
    this.SaveReports = SaveReports;
    this.ViewAVS = ViewAVS ;
    this.SaveAVS = SaveAVS;
    this.ViewHistory = ViewHistory ;
    this.SaveHistory = SaveHistory;
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
    this.SaveQuestionnaire = SaveQuestionnaire;
    this.ViewPatientGoals = ViewPatientGoals;
    this.EditPatientGoals = EditPatientGoals;

  }
}
