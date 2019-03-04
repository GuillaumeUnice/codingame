/**
 * TOTAL: O(1)
 */
namespace ShadowOfTheKnight {
  const Direction = {
    Up: 'U',
    UpRight: 'UR',
    UpLeft: 'UL',
    Right: 'R',
    DownRight: 'DR',
    Down: 'D',
    DownLeft: 'DL',
    Left: 'L'
  };

  const getTemporaryExtremum = (Y0, X0, H, W, dir) => {
    switch (dir) {
      case Direction.Up: {
        return { firstElement: [0, X0], lastElement: [Y0 - 1, X0] };
      }
      case Direction.UpLeft: {
        return { firstElement: [0, 0], lastElement: [Y0 - 1, X0 - 1] };
      }
      case Direction.UpRight: {
        return { firstElement: [0, X0 + 1], lastElement: [Y0 - 1, W - 1] };
      }
      case Direction.Right: {
        return { firstElement: [Y0, X0 + 1], lastElement: [Y0, W - 1] };
      }
      case Direction.Left: {
        return { firstElement: [Y0, 0], lastElement: [Y0, X0 - 1] };
      }
      case Direction.Down: {
        return { firstElement: [Y0 + 1, X0], lastElement: [H - 1, X0] };
      }
      case Direction.DownRight: {
        return { firstElement: [Y0 + 1, X0 + 1], lastElement: [H - 1, W - 1] };
      }
      case Direction.DownLeft: {
        return { firstElement: [Y0 + 1, 0], lastElement: [H - 1, X0 - 1] };
      }
    }
  };

  const getFinalExtremum = (previous, temp): {
    firstElement: [number, number],
    lastElement: [number, number]
  } => {
    return {
      firstElement: [
        previous.firstElement[0] > temp.firstElement[0]
          ? previous.firstElement[0]
          : temp.firstElement[0],
        previous.firstElement[1] > temp.firstElement[1]
          ? previous.firstElement[1]
          : temp.firstElement[1]
      ],
      lastElement: [
        previous.lastElement[0] < temp.lastElement[0]
          ? previous.lastElement[0]
          : temp.lastElement[0],
        previous.lastElement[1] > temp.lastElement[1]
          ? temp.lastElement[1]
          : previous.lastElement[1]
      ]
    };
  };

  const getNewPosition = ({
    firstElement: [firstY, firstX],
    lastElement: [lastY, lastX]
  }) => {
    return [Math.floor((firstY + lastY) / 2), Math.floor((firstX + lastX) / 2)];
  };

  // Execution
  // const [W, H] = readline()
  //   .split(' ')
  //   .map(n => parseInt(n));
  // console.log('W', W);
  // console.log('H', H);
  // const N = parseInt(readline()); // maximum number of turns before game over.
  // let [X0, Y0] = readline()
  //   .split(' ')
  //   .map(c => parseInt(c));
  // console.log('X0', X0);
  // console.log('Y0', Y0);
  // let previousExtremum = { firstElement: [0, 0], lastElement: [H - 1, W - 1] };
  // console.log('previousExtremum', previousExtremum);
  // let curDirection = readline();

  // while (1) {
  //   const temp = getTemporaryExtremum(Y0, X0, H, W, curDirection);
  //   console.log('temp', temp);
  //   const newExtremum = getFinalExtremum(previousExtremum, temp);
  //   console.log('newExtremum', newExtremum);
  //   const res = getNewPosition(newExtremum);
  //   console.log('res', res);

  //   print(res[1] + ' ' + res[0]);
  //   X0 = res[1];
  //   Y0 = res[0];
  //   previousExtremum = newExtremum;
  //   curDirection = readline();
  // }
}
