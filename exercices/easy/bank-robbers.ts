namespace BankRobbers {
  // TODO: rm sort and search robbers index at least then O(V) * O(R)
  const R = parseInt(readline());
  const V = parseInt(readline());

  // goal: optimize algorithm O(V) * O(R log R)
  const NUMBER_OF_DIGITS = 10;
  const NUMBER_OF_VOWELS = 5;

  const generateCombinations = (digits, vowels) => Math.pow(NUMBER_OF_DIGITS, digits) * Math.pow(NUMBER_OF_VOWELS, vowels)

  const robbers = new Array(R).fill(0);

  for (let i = 0; i < V; i++) {
    var inputs = readline().split(' ');
    const C = parseInt(inputs[0]);
    const N = parseInt(inputs[1]);
      printErr(C);
      printErr(N);
    const currentVaultTimeSpend = generateCombinations(N, C-N);

    const nextAvailableRobber = robbers.shift();
    const newRobberTimeSpent = nextAvailableRobber + currentVaultTimeSpend;

    robbers.push(newRobberTimeSpent);
    robbers.sort((r1, r2) => {
      return r1 - r2
    })

  }

  print(robbers.pop());
}
