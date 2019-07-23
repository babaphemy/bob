import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ContactServiceService } from "../contact-service.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-enquiryform",
  templateUrl: "./enquiryform.component.html",
  styleUrls: ["./enquiryform.component.css"]
})
export class EnquiryformComponent implements OnInit {
  enquiryType: any;
  enquiry = this.cService.getEnquiries();
  constructor(
    private route: ActivatedRoute,
    private cService: ContactServiceService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) =>
          this.cService.getEnquiryType(params["eq"])
        )
      )
      .subscribe(enquiryType => {
        this.enquiryType = enquiryType;
      });
    // let id = +this.route.snapshot.paramMap.get('id') convert string to int
    // let id = this.route.snapshot.paramMap.get('id') if id wont change
    //this.enquiryType = this.cService.getEnquiryType(pid);
  }
}
