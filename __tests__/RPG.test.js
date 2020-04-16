import { Game } from './../src/RPG-game.js';
// import { Character } from './../src/RPG.js';

describe('Game', () => {
  
  test ("should have inputted characters in game",() => {
    let game= new Game("shopper1");
    expect(game.character).toEqual("shopper1");
   

  });
})





























