import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef)

  constructor() {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      console.log('ON INIT')
      const rnd = Math.random()

      if(rnd < 0.5) {
        this.currentStatus = 'online'
      } else if(rnd < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000)

    this.destroyRef.onDestroy(() => clearInterval(interval))
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT')
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval)
  }
}
