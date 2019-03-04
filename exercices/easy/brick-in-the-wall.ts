namespace BrinckInTheWall {
  const buildWall = (bricks, rowLevel, BRICK_BY_ROW, amountWork) => {
    if (bricks.length === 0) {
      return amountWork.toFixed(3);
    }
    let cpt = 0;
    while (bricks.length !== 0 && cpt < BRICK_BY_ROW) {
      cpt++;
      amountWork += calculateWork(rowLevel, bricks.shift());
    }
    return buildWall(bricks, ++rowLevel, BRICK_BY_ROW, amountWork);
  };

  const g = 10;
  const calculateWork = (L, m) => {
    return (((L - 1) * 6.5) / 100) * g * m;
  };

  // execution
  const X = 2;
  const N = 3;
  const bricks = [100, 10, 150];

  bricks.sort((a, b) => b - a);
  console.log(buildWall(bricks, 1, X, 0));
}
