import { Injectable, Inject } from "@angular/core";
import { enquiry } from "../model/mockdata/enquiry";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Appuser } from "../model/appuser";

@Injectable({
  providedIn: "root"
})
export class ContactServiceService {
  constructor(@Inject("api") private api, private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic YWRtaW5AZXNzbC5uZXQ6UGFzc3dvcmQyJA=="
    })
  };
  handleSubmit(cus: Object): Observable<any> {
    // send it to api
    return this.http.post(`${this.api}api/user/contact`, cus);
  }
  getEnquiryType(id: number) {
    // console.log(JSON.stringify(enquiry.filter(itm => itm.id == id)));
    return enquiry.filter(itm => itm.id == id);
  }
  getEnquiries() {
    return enquiry;
  }
  userExist(em: string): Observable<any> {
    //const params = new HttpParams().set("email",em).set("id","1");
    //return this.http.get(this.baseUrl,{params: params});
    return this.http.get(`${this.api}api/isexist`, {
      params: new HttpParams().set("email", em)
    });
  }
  doLogin(us: Appuser): Observable<any> {
    return this.http.post(`${this.api}api/user/login`, us);
  }
}
