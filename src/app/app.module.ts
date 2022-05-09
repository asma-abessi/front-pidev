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
import {NgxPaginationModule} from 'ngx-pagination';
import { OpportunitystatisticComponent } from './components/travel/opportunitystatistic/opportunitystatistic.component';
const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:DashboardComponent},
  {path:'forum', component:ForumComponent},
  {path:'chat',component:ChatComponent},
  {path:"travel",component:TravelComponent},
  {path:"edit",component:EdittravelComponent},
  {path:"travel/:id",component:TravelplanningComponent},
  {path:"view",component:VeiwPlanningsComponent},
  {path:"opportunity",component:OpportunityComponent},
  {path:"statistics",component:StatisticsComponent},
  {path:"effectemployee",component:AffectemployeeComponent},
  {path:"matching",component:MatchingComponent},
  
  
];

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
    OpportunitystatisticComponent,
  
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
    NgxPaginationModule,

  ],

  providers: [CategoryService, LegendService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
