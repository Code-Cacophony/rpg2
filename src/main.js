import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Game } from '../src/RPG-game';




function checkTurnBattle(game, battle, attackSelect) {
  battle.enterBattle(attackSelect);
  $("#enemyAttack").text('Hoarder just attacked you! What do you do?');
  
}

$("#attack").click(function(event){
  event.preventDefault();
  let attackSelkect = $("input:radio[name=attackSelect]:checked").val();
  check
})