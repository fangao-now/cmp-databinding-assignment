import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 0;
  oddNumberArrary: number[] = [];
  evenNumberArrary: number[] = [];

  onGameStarted() {
    this.counter += 1;
    if (this.counter % 2 === 1) {
      this.oddNumberArrary.push(this.counter);
    } else {
      this.evenNumberArrary.push(this.counter);
    }
    console.log(this.counter);
  }

  onGameStopped() {
    this.counter = 0;
    console.log('Counter reset in app-component!');
  }
}
