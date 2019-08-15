import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './about/education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
  ],
  imports: [
    TooltipModule.forRoot(),//ngx-bootstrap
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),//ngx-bootstrap
    BrowserAnimationsModule, //Materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
