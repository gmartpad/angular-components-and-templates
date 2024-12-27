import { Component, input, Input } from '@angular/core';
import { ItemData } from './dashboard-item.model';



@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  itemData = input.required<ItemData>()
}
