import { Component, OnInit } from '@angular/core';

interface Player {
  name: string;
  score: number;
  value: number;
  roundResult: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})

export class GameComponent {
  playerWin = "";
  currentRound = 0;
  isGameStarted = false;
  isGameOver = false;
  isFightStarted = false;

  matrixAssociations: any = {
    1: [3], // rock
    2: [1], // scissors
    3: [2], // paper
  }

  computer: Player = {
    name: "Computer",
    score: 0,
    value: 0,
    roundResult: ""
  }

  user: Player = {
    name: "",
    score: 0,
    value: 0,
    roundResult: ""
  }

  // Generates random value from min to max
  getRandom(min: number, max: number) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  }

  // Checks if user name value not empty and start the game
  startGame(): void {
    if (this.user.name.length !== 0) {
      this.user.name.trim();
      this.isGameStarted = true;
    }
  }

  // Starts round fight, where player.value: 
  startFight(userValue: number): void {
    this.isFightStarted = true;
    this.currentRound += 1;

    setTimeout(() => {
      this.computer.value = this.getRandom(1, 3);
      this.user.value = userValue;

      if (this.computer.value == userValue) {
        this.computer.roundResult = "draw";
        this.user.roundResult = "draw";
      }
      else if (!this.matrixAssociations[this.computer.value].includes(userValue)) {
        this.computer.score += 1;
        this.computer.roundResult = "won";
        this.user.roundResult = "lost";
      }
      else {
        this.user.score += 1;
        this.user.roundResult = "won";
        this.computer.roundResult = "lost";
      }

      setTimeout(() => {
        this.computer.value = 0;
        this.computer.roundResult = "";
        this.user.value = 0;
        this.user.roundResult = "";
        this.isFightStarted = false;

        if (this.currentRound === 3) {
          this.isGameOver = true;
          if (this.computer.score > this.user.score) {
            this.playerWin = this.computer.name + " wins!"
          }
          else if (this.computer.score < this.user.score) {
            this.playerWin = this.user.name + " wins!"
          }
          else {
            this.playerWin = "Draw!"
          }
        }
      }, 1500);
    }, 1500);
  }

  // Returns the game to its starting positions
  retryGame(): void {
    this.isGameOver = false;
    this.isFightStarted = false;
    this.currentRound = 0;
    this.computer.value = 0;
    this.computer.score = 0;
    this.user.value = 0;
    this.user.score = 0;
  }
}