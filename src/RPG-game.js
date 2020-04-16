

export class Player {
  constructor() {
    this.shopper1 = { action: "grab", level:2, power:"fly"  }
    this.hoarder1 = { action: "swipe", level:1, power:"invisable" }

  }
  pickCharacter(player, choose) {
    if (choose === "shopper1") {
      this.character= player.shopper1;
      alert("shopper1");
    }
    if (choose === "hoarder1") {
      this.character=player.hoarder1;
    }
  }
}
    
  

export class Game {
  constructor(currentPlayer, powerUsed) {
    this.currentPlayer = [];
    this.powerUsed = [];
    this.level = 0;

  }
}


























