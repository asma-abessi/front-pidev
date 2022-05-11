import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForumComponent } from './components/forum/forum.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TravelComponent } from './components/travel/travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtravelComponent } from './components/travel/addtravel/addtravel.component';
import { EdittravelComponent } from './components/travel/edittravel/edittravel.component';
import { CommonModule } from '@angular/common';
import { TravelplanningComponent } from './components/travelplanning/travelplanning.component';
import { VeiwPlanningsComponent } from './components/travelplanning/veiw-plannings/veiw-plannings.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { AddopportunityComponent } from './components/opportunity/addopportunity/addopportunity.component';
import { EditopportunityComponent } from './components/opportunity/editopportunity/editopportunity.component';
import { EditplanningComponent } from './components/travelplanning/editplanning/editplanning.component';
import { StatisticsComponent } from './components/travel/statistics/statistics.component';
import { MapsComponent } from './components/maps/maps.component';
import { AffectemployeeComponent } from './components/travel/affectemployee/affectemployee.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {  CategoryService, ChartModule, DataLabelService, LegendService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { AddComponent } from './components/opportunity/add/add.component';
import { MatchingComponent } from './components/travel/matching/matching.component';

import { InvitationComponent } from './components/invitation/invitation.component';
import { ClaimComponent } from './components/claim/claim.component';
import { AddinvitationComponent } from './components/invitation/addinvitation/addinvitation.component';
import { UpdateInvitationComponent } from './components/invitation/update-invitation/update-invitation.component';
import { EditclaimComponent } from './components/claim/editclaim/editclaim.component';
import { AddclaimComponent } from './components/claim/addclaim/addclaim.component';
import {NgxPaginationModule} from 'ngx-pagination';

import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from './components/calendar/calendar.component';
import { StatsinvitationComponent } from './components/statsinvitation/statsinvitation.component'; // a plugin!
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';

import {NgxPaginationModule} from 'ngx-pagination';
import { OpportunitystatisticComponent } from './components/travel/opportunitystatistic/opportunitystatistic.component';
import { CalendarComponent } from './components/travel/calendar/calendar.component';

//////////////////***************calendar*************************** */

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GettravelComponent } from './components/travel/gettravel/gettravel.component';
import { UsersTravelComponent } from './components/travel/users-travel/users-travel.component';
import { GettravelPlanningsComponent } from './components/travel/users-travel/gettravel-plannings/gettravel-plannings.component';


const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:DashboardComponent},
  {path:'forum', component:ForumComponent},
  {path:'statsinvitation', component:StatsinvitationComponent},

  {path:'chat',component:ChatComponent},
  {path:"travel",component:TravelComponent},
  {path:"edit",component:EdittravelComponent},
  {path:"travel/:id",component:TravelplanningComponent},
  {path:"view",component:VeiwPlanningsComponent},
  {path:"opportunity",component:OpportunityComponent},
  {path:"statistics",component:StatisticsComponent},
  {path:"effectemployee",component:AffectemployeeComponent},
  {path:"matching",component:MatchingComponent},

  {path:"invitation",component:InvitationComponent},
  {path:"claim",component:ClaimComponent},
  {path:"update-invitation/:id",component:UpdateInvitationComponent},

  {path:"update-claim/:id",component:EditclaimComponent},
  {path:"calender",component:CalendarComponent}

  {path:"calendar",component:CalendarComponent},
  {path:"get/:id",component:GettravelComponent},
  {path:"userstravel/:idUser",component:UsersTravelComponent},
  {path:"travel/getplan/:id",component:GettravelPlanningsComponent},

  
];




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    ForumComponent,
    ChatComponent,
    TravelComponent,
    AddtravelComponent,
    EdittravelComponent,
    TravelplanningComponent,
    VeiwPlanningsComponent,
    OpportunityComponent,
    AddopportunityComponent,
    EditopportunityComponent,
    EditplanningComponent,
    StatisticsComponent,
    MapsComponent,
    AffectemployeeComponent,
    AddComponent,
    MatchingComponent,
    InvitationComponent,
    ClaimComponent,
    AddinvitationComponent,
    UpdateInvitationComponent,
    EditclaimComponent,
    AddclaimComponent,
    CalendarComponent,
    StatsinvitationComponent
  

    OpportunitystatisticComponent,
    CalendarComponent,
    GettravelComponent,
    UsersTravelComponent,
    GettravelPlanningsComponent,
  
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxChartsModule,
    ChartModule,
    FullCalendarModule,
    
    NgxPaginationModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    NgxPaginationModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],

  providers: [CategoryService, LegendService, DataLabelService, LineSeriesService,
    {
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
