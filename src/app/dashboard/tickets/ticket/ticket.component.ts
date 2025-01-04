import { Component, input, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>()
  isTicketOpen = signal<boolean>(false)

  toggleIsTicketOpen() {
    this.isTicketOpen.set(!this.isTicketOpen())
  }
}
