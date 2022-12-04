import { Component } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
    constructor (public greetingSvc: GreetingService) {};
}
