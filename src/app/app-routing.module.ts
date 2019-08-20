import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './about/education/education.component';
import { SkillsComponent } from './about/skills/skills.component';
import { ProfessionalComponent } from './about/professional/professional.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about/education', component: EducationComponent },
  { path: 'about/skills', component: SkillsComponent },
  { path: 'about/professional', component: ProfessionalComponent },
  { path: '404', component: HomeComponent },
  { path: 'baertschi', component: HomeComponent },
  {path: '**', redirectTo: '/404'} // if path dosnt exist


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
