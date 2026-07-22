import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentA } from './component-a/component-a';
import { ComponentB } from './component-b/component-b';
import { UserService } from './service/user-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentA,
    ComponentB
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('service-test');
  userService = inject(UserService);

  // mit signal wird daraus eine funktion
  count = signal(0)
  countmultiplier = signal(5)
  computedCount = computed(() => this.count() * this.countmultiplier())
  signalUpdate() {
    this.count.update(number => number + 1)
  }

  currentCount = 10;
  myText = "";

  loggerFct(value:string) {
    console.log('event emitted');
    this.myText = value;
  }
}
