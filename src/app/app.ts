import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentA } from './component-a/component-a';
import { ComponentB } from './component-b/component-b';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentA, ComponentB],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('service-test');
}
