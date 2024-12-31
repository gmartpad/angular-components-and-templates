import { Component } from '@angular/core';
import { TicketsComponent } from "../tickets/tickets.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [TicketsComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

}
