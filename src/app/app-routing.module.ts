import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StdenrolformComponent } from "./stdenrolform/stdenrolform.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { EnquiryformComponent } from "./contact/enquiryform/enquiryform.component";
import { AboutComponent } from "./about/about.component";
import { CoursesComponent } from "./courses/courses.component";
import { FranchiseComponent } from "./franchise/franchise.component";
import { FaqComponent } from "./faq/faq.component";
import { PhotoComponent } from "./media/photo/photo.component";
import { PressComponent } from "./media/press/press.component";
import { VideoComponent } from "./media/video/video.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "std-enrolment", component: StdenrolformComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "courses", component: CoursesComponent },
  { path: "franchise", component: FranchiseComponent },
  { path: "faq", component: FaqComponent },
  { path: "photo", component: PhotoComponent },
  { path: "press", component: PressComponent },
  { path: "video", component: VideoComponent },
  { path: "testimonial", component: TestimonialComponent },
  { path: "contact", component: ContactComponent },
  { path: "enquiryform/:eq", component: EnquiryformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
