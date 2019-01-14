const tributes = parseInt(readline());
const players = {};
for (let i = 0; i < tributes; i++) {
  const newPlayer = readline();
  players[newPlayer] = { killed: [], killer: null };
}

const turns = parseInt(readline());
for (let i = 0; i < turns; i++) {
  const info = readline();
  const [killerPlayer, killed, ...killedPlayers] = info.replace(/,/g, '').split(' ');

  // add player killed to the concerned player
  players[killerPlayer].killed.push(...killedPlayers);

  // mark player as killed
  killedPlayers.forEach(killedPlayer => {
    players[killedPlayer].killer = killerPlayer;
  });
}


const WINNER = 'Winner';
const NONE = 'None';
const displayPlayerTribute = (playerName, playerInfo) => {
  print('Name:', playerName);
  print('Killed:', playerInfo.killed.length !== 0 ? playerInfo.killed.sort().join(', ') : NONE);
  print('Killer:', playerInfo.killer ? playerInfo.killer : WINNER);
}

const printResult = (players) => {
  Object.keys(players).sort().forEach((playerName, i) => {
    displayPlayerTribute(playerName, players[playerName]);
    if(Object.keys(players).length !== i+1) {
        print('')
    }
  });
}

printResult(players);
