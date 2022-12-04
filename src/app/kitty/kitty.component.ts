import { Component } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-kitty',
  templateUrl: './kitty.component.html',
  styleUrls: ['./kitty.component.css']
})
export class KittyComponent {

  constructor (public foo: GreetingService) {};
}
