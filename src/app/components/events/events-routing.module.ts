import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventMapComponent } from './event-map/event-map.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path:"events",component:EventListComponent},
  {path:"add-event",component:EventFormComponent},
  {path:"event/:id",component:EventComponent},
  {path:'eventMap',component:EventMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
