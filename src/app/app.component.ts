import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { SupportTicketsComponent } from "./dashboard/support-tickets/support-tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { ItemData } from './dashboard/dashboard-item/dashboard-item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent
],
})
export class AppComponent {
  itemObj: { [key: string]: ItemData } = {
    "server-status": {
      imgSrc: "status.png",
      imgAlt: "A signal symbol",
      headerTitle: "Server Status"
    }, 
    "traffic": {
      imgSrc: "globe.png",
      imgAlt: "A globe",
      headerTitle: "Traffic"
    },
    "support-tickets": {
      imgSrc: "list.png",
      imgAlt: "A list of items",
      headerTitle: "Support Tickets"
    }
  }
}
