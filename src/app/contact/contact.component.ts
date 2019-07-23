import { Component, OnInit } from "@angular/core";
import { ContactServiceService } from "./contact-service.service";
import { Contact } from "../model/contact";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  enquiryType: {};
  contact: Contact = new Contact();
  submitted = false;
  constructor(private cService: ContactServiceService) {}
  ngOnInit() {
    this.enquiryType = this.cService.getEnquiries();
  }
  newContact(): void {
    //this.submitted = false;
    this.contact = new Contact();
  }
  contactUs() {
    this.contact.recipient = "1";
    this.cService
      .handleSubmit(this.contact)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contact = new Contact();
  }
  isExist(value) {
    this.cService.userExist(value).subscribe(itm => console.log(itm));
    // if true set input to ""
  }
  onSubmit() {
    this.submitted = true;
    this.contactUs();
  }
}
