const BINARY_BASE = 2;
const DECIMAL_BASE = 10;

/**
 *
 * @param {number} num decimal number to convert
 * @param {number} size size of the representation, total amount of bit
 * @returns 3, 4 => [0, 0, 1, 1]  number[]
 */
const decimalToBinaryBase = (num, size) => {
  const numBase2 = num.toString(BINARY_BASE);
  const partialRes = numBase2.split('').map(bit => parseInt(bit, DECIMAL_BASE));
  return size - numBase2.length > 0 // add zero offset bit to complete according to the size representation
    ? Array(size - numBase2.length)
        .fill(0)
        .concat(partialRes)
    : partialRes;
};

/**
 *
 * @param {number} num binary number to convert in array format e.g [0,0,1,1]
 * @returns [0,0, 1, 1] -> 3 number
 */
const binaryToDecimalBase = num => {
  return parseInt(num.join(''), BINARY_BASE);
};
/**
 * return an array with the index of all potential permutation
 * step 1 take all 0bit & 1bit index position from the source
 * step2 for each target 1bit target set 1bit source position
 * O(2n) -> O(n)
 * @param {number[]} source binary array representation
 * @param {number[]} target binary array representation
 * @returns [0,0,1,1], [1010] -> [[2,3], [0,1], [0,1], [2,3]]
 */
const generateAllPotentialIndexPermutations = (source, target) => {
  // step 1
  const { 0: all0Index, 1: all1Index } = source.reduce(
    (acc, bit, index) => {
      if (bit === 0) {
        acc['0'].push(index);
      } else {
        acc['1'].push(index);
      }
      return acc;
    },
    { '0': [], '1': [] }
  );
  // step 2
  const potentialPermutations = target.map(bit => {
    return bit ? all1Index : all0Index;
  });

  return potentialPermutations;
};
/**
 * average O(n log(m))
 * @param {*} arr1 potential index permutation worth n
 * @param {*} arr2 other potential index permutation worth m
 * @returns [1,2] [2,3] -> [2]
 */
const intersect = (arr1, arr2) => {
  const res = [];
  arr1.forEach(cur => {
    if (arr2.some(index => index === cur)) {
      res.push(cur);
    }
  });
  return res;
};

/**
 * give the interesction result of all potential
 * according to the puzzle clue are satisfying to find one uniq solution
 * therefore for each position just return the first and uniq result
 * @param {number[][]} arr each clue potential permutations from generateAllPotentialIndexPermutations[]
 */
const intersectionOfPotentialIndex = arr => {
  const res = arr.reduce((acc, cur) => {
    if (acc.length === 0) return cur;
    return acc.map((pos, i) => {
      return intersect(pos, cur[i]);
    });
  });
  return res.map(arr => arr[0]); // because clue of the puzzle remains determinist
};

/**
 *
 * @param {number} source a binary array representation ['0', '0', '1', '1']
 * @param {*} arr [1, 3, 2, 0] array
 * @returns ['0', '0', '1', '1'] -> ['0', '1', '1', '0']
 */
const applyPermutation = (source, arr) => {
  return source.map((bit, i) => {
    return source[arr[i]];
  });
};

// execution
let [N, C] = readline().split(' ');
printErr(N + ' ' + C);
const allPotentialIndexPermutations = [];
for (let i = 0; i < C; i++) {
  const [XI, YI] = readline().split(' ').map(el => parseInt(el, DECIMAL_BASE));
  allPotentialIndexPermutations.push(
    generateAllPotentialIndexPermutations(
      decimalToBinaryBase(XI, N),
      decimalToBinaryBase(YI, N)
    )
  );
}

const finalPermutation = intersectionOfPotentialIndex(
  allPotentialIndexPermutations
);

let result = '';
for (let i = 1; i <= N; i++) {
  const source = decimalToBinaryBase(Math.pow(2, i - 1), N);
  result +=
    binaryToDecimalBase(applyPermutation(source, finalPermutation)) + ' ';
}
print(result.substring(0, result.length - 1));

