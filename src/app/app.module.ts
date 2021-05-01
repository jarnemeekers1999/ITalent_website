import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SeminarieComponent } from './seminarie-component/seminarie.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { InnovatierouteComponent } from './innovatieroute/innovatieroute.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { PersoonlijkeOntwikkelingComponent } from './persoonlijke-ontwikkeling/persoonlijke-ontwikkeling.component';
import { SeminarieDetailsComponent } from './seminarie-details/seminarie-details.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { StudentEngagementComponent } from './student-engagement/student-engagement.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReflectieComponent } from './reflectie/reflectie.component';

//hier api link zetten


@NgModule({
  declarations: [
    AppComponent,
    SeminarieComponent,
    PortofolioComponent,
    InnovatierouteComponent,
    PersoonlijkeOntwikkelingComponent,
    SeminarieDetailsComponent,
    CvComponent,
    HomeComponent,
    StudentEngagementComponent,
    ReflectieComponent,
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule,
    MatIconModule, MatSidenavModule, MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatStepperModule,
    MatGridListModule
    //hier importeren
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
