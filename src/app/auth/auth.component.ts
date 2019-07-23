import { Component, OnInit } from "@angular/core";
import { ContactServiceService } from "../contact/contact-service.service";
import { Appuser } from "../model/appuser";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  usr: Appuser = new Appuser();
  submitted = false;
  constructor(private cService: ContactServiceService) {}

  ngOnInit() {}
  handleLogin() {
    this.submitted = true;
    this.cService.doLogin(this.usr).subscribe(itm => {
      console.log(JSON.stringify(itm), err => {
        console.log(JSON.stringify(err));
      });
    });
  }
}
