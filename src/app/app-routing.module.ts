import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './about/education/education.component';
import { SkillsComponent } from './about/skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about/education', component: EducationComponent },
  { path: 'about/skills', component: SkillsComponent },
  { path: 'https://joogibaer.github.io/baertschi/baertschi/', component: HomeComponent },
  { path: 'baertschi/', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
