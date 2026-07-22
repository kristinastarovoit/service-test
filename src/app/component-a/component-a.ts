import { Component, inject, input, output } from '@angular/core';
import { CountService } from '../count_service';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.scss',
  providers: [CountService]
})
export class ComponentA {
  counterService = inject(CountService);
  counterInput = input(0);
  // void / string ist der ausgabewert der outputfunktion
  halloWeltEvent = output<string>();
  userService = inject(UserService);

}
