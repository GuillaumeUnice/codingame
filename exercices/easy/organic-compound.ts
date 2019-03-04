const numberOfBound = element => {
  switch (element) {
    case '4':
      return 0;
    case '3':
      return 1;
    case '2':
      return 2;
    case '1':
      return 3;
    case '0':
      return 4;

    default:
      throw new Error('Unexpected not classified CH(x) element');
  }
};
const highlightRestLink = atomeLine => {
  const splitedLine = atomeLine.match(/.{1,3}/g) || [];
  const restBound = [];
  let curBound = 0;
  splitedLine.forEach(element => {
    switch (element[0]) {
      case 'C': {
        restBound.push(numberOfBound(element[2]) - curBound);
        curBound = 0;
        break;
      }
      case ' ':
        restBound.push(0);
        break;
      case '(': {
        curBound = element[1];
        restBound[restBound.length - 1] -= curBound;
        restBound.push(0);
        break;
      }
      default:
        throw new Error(`Unexpected element: ${element}`);
    }
  });
  return restBound;
};

// make a diff
const diffWithPreviousLink = (previousFormatedLine, curFormatedLine) => {
  return curFormatedLine.map((el, i) => {
    if (previousFormatedLine[i]) {
      return el - previousFormatedLine[i];
    }
    return el;
  });
};

const atomTreatment = (str, previousLink) => {
  const currentFormatedByIndexRestLink = highlightRestLink(str);
  return diffWithPreviousLink(previousLink, currentFormatedByIndexRestLink);
};

const highlightLink = atomeLine => {
  const splitedLine = atomeLine.match(/.{1,3}/g) || [];
  const res = [];
  splitedLine.forEach(element => {
    switch (element[0]) {
      case ' ':
        res.push(0);
        break;
      case '(': {
        res.push(parseInt(element[1], 10));
        break;
      }
      default:
        throw new Error(`Unexpected element: ${element}`);
    }
  });
  return res;
};

const liaisonTreatment = (str, previousAtom) => {
  const currentLink = highlightLink(str);
  const currentAtom = diffWithPreviousLink(currentLink, previousAtom);
  return { currentLink, currentAtom };
};

const gameLoop = () => {
  let previousLink = [];
  let previousAtom = [];

  const mock = [
    'CH2(1)CH1(1)CH1(1)CH3',
    '(1)         (1)',
    'CH2         CH2',
    '(1)         (1)',
    'CH2         CH2   CH3',
    '(1)         (1)   (1)',
    'CH2(1)CH3   CH2(1)CH2'
  ];

  for (let i = 0; i < A; i++) {
    const COMPOUND = mock[i];
    if (i % 2 === 0) {
      previousAtom = atomTreatment(COMPOUND, previousLink);

      // check if a negative link amount means too much liaison for this molecule
      const res = previousAtom.findIndex(numOfLink => numOfLink < 0);
      if (previousAtom.findIndex(numOfLink => numOfLink < 0) !== -1) {
        return RES.INVALID;
      }
      if (i === A - 1) {
        // corner case last row
        if (previousAtom.findIndex(numOfLink => numOfLink !== 0) !== -1) {
          return RES.INVALID;
        }
      }
    } else {
      const { currentLink, currentAtom } = liaisonTreatment(
        COMPOUND,
        previousAtom
      );
      previousLink = currentLink;
      previousAtom = currentAtom;
      if (previousAtom.findIndex(numOfLink => numOfLink !== 0) !== -1) {
        return RES.INVALID;
      }
    }
  }
  return RES.VALID;
};

// execution
const RES = {
  VALID: 'VALID',
  INVALID: 'INVALID'
};
// const N = parseInt(readline());
const A = 7;
console.log(gameLoop());
