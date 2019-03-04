namespace Casino {
  const ROUNDS = parseInt(readline());
  let CASH = parseInt(readline());

  const calculRoulette = (PLAY, currentBet) => {
    let lol = PLAY.split(' ');
    const BALL = parseInt(lol[0]);
    const CALL = lol[1];
    const NUMBER = parseInt(lol[2]);

    switch (CALL) {
      case 'PLAIN':
        return NUMBER === BALL ? currentBet * 35 : -currentBet;
      case 'ODD':
        return BALL % 2 === 1 ? currentBet : -currentBet;
      case 'EVEN':
        return BALL % 2 === 0 && BALL !== 0 ? currentBet : -currentBet;
    }
  };

  for (let i = 0; i < ROUNDS; i++) {
    let currentBet = Math.ceil(CASH / 4);

    const PLAY = readline();
    const res = calculRoulette(PLAY, currentBet);
    CASH += res;
  }

  print(CASH);
}
