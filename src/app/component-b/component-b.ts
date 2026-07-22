import { Component, inject } from '@angular/core';
import { CountService } from '../count_service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  styleUrl: './component-b.scss',
  providers: [CountService]
})
export class ComponentB {
  counterService = inject(CountService);
}
