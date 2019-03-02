import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 0;

  onGameStarted() {
    this.counter += 1;
    console.log(this.counter);
  }

  onGameStopped() {
    this.counter = 0;
    console.log('Counter reset in app-component!');
  }
}
