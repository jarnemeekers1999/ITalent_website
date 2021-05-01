import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SeminarieComponent } from './seminarie-component/seminarie.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { InnovatierouteComponent } from './innovatieroute/innovatieroute.component';
import { PersoonlijkeOntwikkelingComponent } from './persoonlijke-ontwikkeling/persoonlijke-ontwikkeling.component';
import { CvComponent } from './cv/cv.component';
import { SeminarieDetailsComponent } from './seminarie-details/seminarie-details.component';
import { HomeComponent } from './home/home.component';
import { StudentEngagementComponent } from './student-engagement/student-engagement.component';
import { ReflectieComponent } from './reflectie/reflectie.component';

const routes: Routes = [
  {
    path: 'portofolio',
    component : PortofolioComponent
  },
  {
    path: 'seminaries',
    component : SeminarieComponent
  },
  {
    path: 'seminarie/details',
    component: SeminarieDetailsComponent
  },
  {
    path: 'innovatieroute',
    component : InnovatierouteComponent
  },
  {
    path: 'PersoonlijkeOntwikkeling',
    component : PersoonlijkeOntwikkelingComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'StudentEngagement',
    component: StudentEngagementComponent
  },  {
    path: 'reflectie',
    component: ReflectieComponent
  },
  {
    path: '**',
    component: HomeComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
