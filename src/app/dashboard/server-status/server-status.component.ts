import { AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef)

  constructor() {
    effect((onCleanup) => {
      console.log(this.currentStatus())

      onCleanup(() => {
        // clean up anything that you set up in
        // the body of the effect callback
      })
    })
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      console.log('ON INIT')
      const rnd = Math.random()

      if(rnd < 0.5) {
        this.currentStatus.set('online')
      } else if(rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
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
