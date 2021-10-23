import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  playerWin = "";
  currentRaund = 0;
  isGameStarted: Boolean = false;
  isGameOver: Boolean = false;
  isFightStarted: Boolean = false;

  player1 = {
    id: 1,
    name: "Computer",
    score: 0,
    value: 0,
    raundResult: 0
  }

  player2 = {
    id: 2,
    name: {
      value: "",
      hasError: false
    },
    score: 0,
    value: 0,
    raundResult: 0
  };

  getRandom(min: number, max: number) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  }

  startGame(): void {
    if (this.player2.name.value.length < 3) {
      this.player2.name.hasError = true;
    }
    else {
      this.player2.name.value.trim();
      this.isGameStarted = true;
    }
  }

  startFight(selectedValue: number): void {
    this.isFightStarted = true;
    this.currentRaund += 1;

    setTimeout(() => {
      this.player1.value = this.getRandom(1, 3);
      this.player2.value = selectedValue;

      if ((this.player1.value === 1 && this.player2.value === 2) ||
        (this.player1.value === 2 && this.player2.value === 3) ||
        (this.player1.value === 3 && this.player2.value === 1)) {
        this.player1.score += 1;
        this.player1.raundResult = 1;
        this.player2.raundResult = 2;
      }
      else if ((this.player1.value === 2 && this.player2.value === 1) ||
        (this.player1.value === 3 && this.player2.value === 2) ||
        (this.player1.value === 1 && this.player2.value === 3)) {
        this.player2.score += 1;
        this.player2.raundResult = 1;
        this.player1.raundResult = 2;
      }
      else {
        this.player1.raundResult = 3;
        this.player2.raundResult = 3;
      }
      setTimeout(() => {
        this.player1.value = 0;
        this.player1.raundResult = 0;
        this.player2.value = 0;
        this.player2.raundResult = 0;
        this.isFightStarted = false;

        if (this.currentRaund === 3) {
          this.isGameOver = true;
          if (this.player1.score > this.player2.score) {
            this.playerWin = this.player1.name
          }
          else if (this.player1.score < this.player2.score) {
            this.playerWin = this.player2.name.value
          }
          else {
            this.playerWin = "Draw"
          }
        }
      }, 1500);
    }, 2500);
  }

  raundResult(player: any) {
    if (player.roundResult === 1) {
      return "won"
    }
    else if (player.roundResult === 2) {
      return "lost"
    }
    else if (player.roundResult === 3) {
      return "draw"
    }
    else {
      return ""
    }
  }

  retryGame(): void {
    this.isGameOver = false;
    this.isFightStarted = false;
    this.currentRaund = 0;
    this.player1.value = 0;
    this.player1.score = 0;
    this.player2.value = 0;
    this.player2.score = 0;
  }

  ngOnInit(): void {

  }
}
