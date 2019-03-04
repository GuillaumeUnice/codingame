namespace BracketExtremEdition {
  // goal: optimize algorithm: O(n)
  const expression = readline();

  const stack = [];
  const brackets = { '{': '}', '[': ']', '(': ')' };
  const openCharacter = Object.keys(brackets);
  const endCharacter = Object.keys(brackets).map(key => brackets[key]);

  const checkBracketPattern = (expression, stack) => {
    const curChar = expression.shift();

    if (!curChar) {
      return stack.length === 0 ? print('true') : print('false');
    }

    if (openCharacter.some(c => c === curChar)) {
      return checkBracketPattern(expression, [...stack, curChar]);
    }

    if (
      endCharacter.some(c => c === curChar) &&
      brackets[stack.pop()] !== curChar
    ) {
      return print('false');
    }

    return checkBracketPattern(expression, stack);
  };

  checkBracketPattern(expression.split(''), stack);
}
