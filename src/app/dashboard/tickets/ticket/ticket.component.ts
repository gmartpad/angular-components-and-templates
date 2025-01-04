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
  areTicketDetailsVisible = signal<boolean>(false)

  toggleDetails() {
    // this.areTicketDetailsVisible.set(!this.areTicketDetailsVisible())
    this.areTicketDetailsVisible.update((prevValue) => !prevValue)
  }
}
