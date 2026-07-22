import { Component, inject } from '@angular/core';
import { CountService } from '../count_service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.scss',
  providers: [CountService]
})
export class ComponentA {
  counterService = inject(CountService);

}
