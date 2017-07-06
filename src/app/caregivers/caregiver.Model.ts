/**
 * Created by aditya.chouhan on 7/5/2017.
 */

export class caregiver
{
    Id : number;
    Name : string;
    ImageURL : string;
    EmailId : string ;
    PhoneNumber : string ;
    Relationship : string ;
    IsPowerofAttorney : boolean ;
    ViewReports : boolean ;
    ViewAVS : boolean ;
    ViewHealthGlance : boolean ;
    ViewProviders : boolean ;
    ManageProviders : boolean ;
    ViewMessages  : boolean ;
    SendMessages : boolean ;
    ViewMedications : boolean ;
    RefillMedication : boolean ;
    ViewBills : boolean ;
    PayBills : boolean ;
    ViewAppointments : boolean ;
    ScheduleAppointments : boolean ;
    FillQuestionnaire : boolean ;

  constructor(Id : number, Name : string, ImageURL : string, EmailId : string, PhoneNumber : string , Relationship : string , IsPowerofAttorney : boolean, ViewReports : boolean, ViewAVS : boolean,
              ViewHealthGlance : boolean , ViewProviders : boolean , ManageProviders : boolean ,ViewMessages  : boolean , SendMessages : boolean , ViewMedications : boolean ,
              RefillMedication : boolean , ViewBills : boolean , PayBills : boolean , ViewAppointments : boolean , ScheduleAppointments : boolean , FillQuestionnaire : boolean )
  {
    this.Id = Id;
    this.Name = Name;
    this.ImageURL = ImageURL;
    this.EmailId = EmailId ;
    this.PhoneNumber = PhoneNumber ;
    this.Relationship = Relationship ;
    this.IsPowerofAttorney = IsPowerofAttorney ;
    this.ViewReports = ViewReports ;
    this.ViewAVS = ViewAVS ;
    this.ViewHealthGlance = ViewHealthGlance ;
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

  }
}