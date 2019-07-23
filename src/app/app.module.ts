import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { NowinComponent } from "./nowin/nowin.component";
import { FooterComponent } from "./footer/footer.component";
import { StdenrolformComponent } from "./stdenrolform/stdenrolform.component";
import { AboutComponent } from "./about/about.component";
import { CoursesComponent } from "./courses/courses.component";
import { FranchiseComponent } from "./franchise/franchise.component";
import { FaqComponent } from "./faq/faq.component";
import { MediaComponent } from "./media/media.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ContactComponent } from "./contact/contact.component";
import { SliderComponent } from "./slider/slider.component";
import { AuthComponent } from "./auth/auth.component";
import { EnquiryformComponent } from "./contact/enquiryform/enquiryform.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PhotoComponent } from "./media/photo/photo.component";
import { VideoComponent } from "./media/video/video.component";
import { PressComponent } from "./media/press/press.component";
import { ContactServiceService } from "./contact/contact-service.service";
import { Childcomp } from "./contact/child.component";
import { MyInterceptor } from "./http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestimonialComponent,
    NowinComponent,
    FooterComponent,
    StdenrolformComponent,
    AboutComponent,
    CoursesComponent,
    FranchiseComponent,
    FaqComponent,
    MediaComponent,
    TestimonialsComponent,
    ContactComponent,
    SliderComponent,
    AuthComponent,
    EnquiryformComponent,
    PhotoComponent,
    VideoComponent,
    PressComponent,
    Childcomp
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    { provide: "api", useValue: "http://localhost:5071/" },
    { provide: ContactServiceService, useClass: ContactServiceService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
