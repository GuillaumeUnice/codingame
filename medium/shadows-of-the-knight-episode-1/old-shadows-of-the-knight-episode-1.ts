namespace ShadowOfTheKnight {
  // const Direction = {
  //   U: 'Up',
  //   UR: 'Up-Right',
  //   R: 'Right',
  //   DR: 'Down-Right',
  //   D: 'Down',
  //   DL: 'Down-Left',
  //   L: 'Left',
  //   UL: 'U'
  // };
  // // return the concerned array part according to the supplied device direction
  // const cropConcernedBuildingPart = (arr, direction, X0, Y0) => {
  //   switch (direction) {
  //     case Direction.U:
  //       return arr.slice(0, Y0);
  //     case Direction.UL:
  //       return arr.slice(0, Y0).map(row => row.slice(0, Y0 - 1));
  //     case Direction.UR:
  //       return arr.slice(0, Y0).map(row => row.slice(Y0));
  //     case Direction.R:
  //       return arr.slice(Y0, Y0 + 1).map(row => row.slice(X0 + 1));
  //     case Direction.L:
  //       return arr.slice(Y0, Y0 + 1).map(row => row.slice(0, X0));
  //     case Direction.D:
  //       return arr.slice(Y0 + 1);
  //     case Direction.DL:
  //       return arr.slice(Y0 + 1).map(row => row.slice(0, Y0 - 1));
  //     case Direction.DR:
  //       return arr.slice(Y0 + 1).map(row => row.slice(Y0));

  //     default:
  //       return 0;
  //   }
  // };

  // const refreshPotentialBuildingPart = (arr, direction, X0, Y0) => {
  //   switch (direction) {
  //     case Direction.U: {

  //       const refreshMatrix = (arr, X0, Y0) => yIndexSelector => xIndexSelector => {
  //         for (let j = 0; j < arr.length; j++) {
  //           return arr.map((row, Yi) => {
  //             if(yIndexSelector(Yi, Y0)) {
  //               return row.map((el, Xi) => {
  //                 return (xIndexSelector(Xi, Y0)) ? el : 0;
  //               })
  //             } else {
  //               return Array(arr[0].length).fill(0);
  //             }
  //           });
  //         }
  //       }
  //       const selectPreviousIndex = (i, referentialIndex) => (i < referentialIndex);
  //       const selectSameIndex = (i, referentialIndex) => (i === referentialIndex);
  //       const selectNextIndex = (i, referentialIndex) => (i > referentialIndex);

  //       const refreshUMatrix = refreshMatrix(arr, X0, Y0)(selectPreviousIndex)(selectSameIndex);
  //       console.log(refreshUMatrix)
  //       return refreshUMatrix;
  //       // for (let j = Y0; j < arr.length; j++) {
  //       //   return arr.map((row, i) => {
  //       //     if(i < Y0) {
  //       //       return row.map((el, Yi) => {
  //       //         return (Yi === Y0) ? el : 0;
  //       //       })
  //       //     } else {
  //       //       return Array(arr[0].length).fill(0);
  //       //     }
  //       //   });
  //       // }
  //     }
  //     case Direction.UL: {
  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i < Y0) {
  //             return row.map((el, Yi) => {
  //               return (Yi < Y0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     case Direction.UR: {
  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i < Y0) {
  //             return row.map((el, Yi) => {
  //               return (Yi > Y0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     case Direction.R: {

  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i === Y0) {
  //             return row.map((el, Yi) => {
  //               return (Yi > Y0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     case Direction.L: {
  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i === Y0) {
  //             return row.map((el, Yi) => {
  //               return (Yi < Y0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     case Direction.D: {
  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i > Y0) {
  //             return row.map((el, Yi) => {
  //               return (Yi === Y0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     case Direction.DR: {
  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i > Y0) {
  //             return row.map((el, Yi) => {
  //               return (Yi < Y0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     case Direction.DL: {
  //       for (let j = Y0; j < arr.length; j++) {
  //         return arr.map((row, i) => {
  //           if(i > Y0) {
  //             return row.map((el, Xi) => {
  //               return (Xi < X0) ? el : 0;
  //             })
  //           } else {
  //             return Array(arr[0].length).fill(0);
  //           }
  //         });
  //       }
  //     }
  //     default:
  //       throw new Error(`Direction ${direction} not implemented yet!`);
  //   }
  //   return arr;
  // };

  // const arr = [
  //   [1, 2, 3, 4],
  //   [10, 20, 30, 40],
  //   [100, 200, 300, 400],
  //   [1000, 2000, 3000, 4000]
  // ];
  // const X = 4;
  // const Y = 4;
  // const X0 = 1;
  // const Y0 = 2;
  // const referentialMatrix = [
  //   [1,1,1,1],
  //   [1,1,1,1],
  //   [1,1,1,1],
  //   [1,1,1,1],
  // ]
  // console.log(refreshPotentialBuildingPart(referentialMatrix, Direction.DL, X0, Y0));



















// proper way
  /**
 * STEP 1: generate referential Matrix
 * STEP 2: calculate intersection deduce the new Potential Matrix O(n) with n number of element || O(n*m) with n number of row and m number of column
 * STEP 3: generate next Position (by applying dichotomic approach)
 *        3.1: find First concerned matrix position O(n) || O(n*m)
 *        3.2: find Last concerned matrix position O(n) || O(n*m)
 *        3.3: calculate next position equal the average floor for X & Y O(1)
 * TOTAL: O(n*3)+ O(1) => O(n)
 */
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

  const refreshMatrix = (arr, X0, Y0) => yIndexSelector => xIndexSelector => {
    for (let j = 0; j < arr.length; j++) {
      return arr.map((row, Yi) => {
        if(yIndexSelector(Yi, Y0)) {
          return row.map((el, Xi) => {
            return (xIndexSelector(Xi, X0) && el === 1) ? el : 0;
          })
        } else {
          return Array(arr[0].length).fill(0);
        }
      });
    }
  }
  const selectPreviousIndex = (i, referentialIndex) => (i < referentialIndex);
  const selectSameIndex = (i, referentialIndex) => (i === referentialIndex);
  const selectNextIndex = (i, referentialIndex) => (i > referentialIndex);

  const refreshPotentialBuildingPart = (arr, direction, X0, Y0) => {
  const refreshMatrixBySelectingUpSide = refreshMatrix(arr, X0, Y0)(selectPreviousIndex);
  const refreshMatrixBySelectingSameRow = refreshMatrix(arr, X0, Y0)(selectSameIndex);
  const refreshMatrixBySelectingDownSide = refreshMatrix(arr, X0, Y0)(selectNextIndex);

  switch (direction) {
    case Direction.Up: {
      return refreshMatrix(arr, X0, Y0)(selectPreviousIndex)(selectSameIndex);
    }
    case Direction.UpLeft: {
      return refreshMatrix(arr, X0, Y0)(selectPreviousIndex)(selectPreviousIndex);
    }
    case Direction.UpRight: {
      return refreshMatrix(arr, X0, Y0)(selectPreviousIndex)(selectNextIndex);
    }
    case Direction.Right: {
      return refreshMatrix(arr, X0, Y0)(selectSameIndex)(selectNextIndex);
    }
    case Direction.Left: {
      return refreshMatrix(arr, X0, Y0)(selectSameIndex)(selectPreviousIndex);
    }
    case Direction.Down: {
      return refreshMatrix(arr, X0, Y0)(selectNextIndex)(selectSameIndex);
    }
    case Direction.DownRight: {
      return refreshMatrix(arr, X0, Y0)(selectNextIndex)(selectNextIndex);
    }
    case Direction.DownLeft: {
      return refreshMatrix(arr, X0, Y0)(selectNextIndex)(selectPreviousIndex);
    }
    default:
      throw new Error(`Direction ${direction} not implemented yet!`);
    }
  };

  const firstMatrixElement = (arr) => {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr[j].length; i++) {
        if(arr[j][i] === 1) {
          return [j,i];
        }
      }
    }
  }

  const lastMatrixElement = (arr) => {
    for (let j = arr.length -1; j >= 0; j--) {
      for (let i = arr[j].length -1; i >= 0; i--) {
        if(arr[j][i]) {
          return [j,i];
        }
      }
    }
  }
  const getNewPosition = (arr) => {
    const [Y1, X1] = firstMatrixElement(arr);

    const [Y2, X2] = lastMatrixElement(arr);
    return [Math.floor((Y1+Y2) / 2), Math.floor((X1+X2) / 2)]
  }

  // Execution
  // const [W, H] = readline().split(' ').map(n => parseInt(n));
  // const N = parseInt(readline()); // maximum number of turns before game over.
  // let [Y0, X0] = readline().split(' ').map(c => parseInt(c));

  // let referentialMatrix = new Array(H).fill(new Array(W).fill(1))

  // let curDirection = readline();

  // while(1) {
  //  referentialMatrix = refreshPotentialBuildingPart(referentialMatrix, curDirection, Y0, X0);
  //  const [nextX, nextY] = getNewPosition(referentialMatrix)

  //  X0 = nextX;
  //  Y0 = nextY;
  //  curDirection = readline();
  //  print(nextY + ' ' + nextX);
  // }
}
