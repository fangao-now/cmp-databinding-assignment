import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{}>();
  @Output() gameStopped = new EventEmitter<{}>();
  isGameStarted = false;
  counterStart: any;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    if (!this.isGameStarted) {
      this.isGameStarted = true;
      this.counterStart = setInterval(() => { this.gameStarted.emit(); }, 1000);
      console.log('Game started in game-control-component!');
    }
  }

  onStopGame() {
    if (this.isGameStarted) {
      this.isGameStarted = false;
      clearInterval(this.counterStart);
      this.gameStopped.emit();
      console.log('Game stopped in game-control-component!');
    }
  }

}
