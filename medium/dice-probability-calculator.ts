namespace DiceProbabilityCalculator {
  /*
   * step 1 => str -> reverse polish notation
   * step 2 => reverse polish notation -> generate all posibilities
   * step 3 => calculate -> results
   * step 4 => groupBy + sort + percentage
   */

  const DICE_OPERANDE = 'd';
  const isOperande = c => {
    return !isNaN(c);
  };
  const isDiceOperande = c => {
    return c === DICE_OPERANDE;
  };

  const isOperator = c => {
    const listOperators = ['*', '+', '-', '>', '(', ')'];
    return listOperators.some(op => op === c);
  };

  const OPERATOR = {
    MUL: '*',
    ADD: '+',
    SUB: '-',
    GT: '>',
    BEGIN_PARENTHESIS: '(',
    END_PARENTHESIS: ')'
  };

  const getOperatorPriority = c => {
    switch (c) {
      case OPERATOR.MUL:
        return 4;
      case OPERATOR.ADD:
        return 3;
      case OPERATOR.SUB:
        return 3;
      case OPERATOR.GT:
        return 2;
      case OPERATOR.BEGIN_PARENTHESIS:
        return 1;
      case OPERATOR.END_PARENTHESIS:
        return 1;
      default:
        return -1;
    }
  };

  // STEP 1
  const classicToReversePolishNotationExpression = str => {
    const operators = [];
    const output = [];
    for (let i = 0; i < str.length; i++) {
      if (isOperande(str[i])) {
        let j = 0;
        while (isOperande(str[i + j])) {
          j++;
        }
        output.push(parseInt(str.substring(i, i + j), 10));
        i += j;
      }
      if (isDiceOperande(str[i])) {
        output.push(str[i] + str[i + 1]);
        i++;
      }
      if (isOperator(str[i])) {
        if (str[i] === OPERATOR.END_PARENTHESIS) {
          const unstackedOperators = operators
            .splice(operators.lastIndexOf(OPERATOR.BEGIN_PARENTHESIS))
            .reverse();
          unstackedOperators.splice(-1);
          output.push(...unstackedOperators);
          continue;
        }
        if (str[i] === OPERATOR.BEGIN_PARENTHESIS) {
          operators.push(OPERATOR.BEGIN_PARENTHESIS);
          continue;
        }

        if (operators.length !== 0) {
          while (
            getOperatorPriority(str[i]) <
            getOperatorPriority(operators[operators.length - 1])
          ) {
            output.push(operators.pop());
          }
          operators.push(str[i]);
        } else {
          operators.push(str[i]);
        }
      }
    }
    const unstackedOperators = operators.reverse();
    output.push(...unstackedOperators);
    return output;
  };

  // STEP 2
  const calculGenerateAllExpression = (
    reversedPolishNotation,
    posibilities
  ) => {
    const op = reversedPolishNotation.shift();
    if (op === undefined) return posibilities;
    const res = [];

    posibilities.forEach(p => {
      if (isDiceOperande(op[0])) {
        for (let i = 1; i <= op[1]; i++) {
          res.push([...p, i]);
        }
      } else {
        res.push([...p, op]);
      }
    });

    return calculGenerateAllExpression(reversedPolishNotation, res);
  };

  const generateAllExpression = reversedPolishNotation => {
    const op = reversedPolishNotation.shift();
    const posibilities = [];
    if (isDiceOperande(op[0])) {
      for (let i = 1; i <= op[1]; i++) {
        posibilities.push([i]);
      }
    } else {
      posibilities.push([op]);
    }

    return calculGenerateAllExpression(reversedPolishNotation, posibilities);
  };

  // STEP 3
  const executeOperator = (op1, op2, operator) => {
    switch (operator) {
      case OPERATOR.MUL:
        return eval(op1 + OPERATOR.MUL + op2);
      case OPERATOR.ADD:
        return eval(op1 + OPERATOR.ADD + op2);
      case OPERATOR.SUB:
        return eval(op1 + OPERATOR.SUB + op2);
      case OPERATOR.GT:
        return eval(op1 + OPERATOR.GT + op2) ? 1 : 0;

      default:
        throw new Error('unkown operator');
    }
  };

  const executeExpression = reversePolishExpression => {
    const stack = [];
    for (let i = 0; i < reversePolishExpression.length; i++) {
      if (isNaN(reversePolishExpression[i])) {
        const [op1, op2] = stack.splice(-2);
        stack.push(executeOperator(op1, op2, reversePolishExpression[i]));
      } else {
        stack.push(reversePolishExpression[i]);
      }
    }
    return stack;
  };

  const executeAllExpressions2 = expressions => {
    return expressions.reduce((acc, cur) => {
      return acc.concat(executeExpression(cur));
    }, []);
  };

  // EXECUTION + STEP 4
  const expr = readline();
  printErr(expr);
  const reversePolishExpression = classicToReversePolishNotationExpression(
    expr
  );
  const allReversePolishExpressions = generateAllExpression(
    reversePolishExpression
  );

  const allResults = executeAllExpressions2(allReversePolishExpressions);
  const ALL_POSIBILITIES2 = allResults.length;

  const groupedResult = allResults.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});

  let final = '';
  Object.keys(groupedResult)
    .sort((a, b) => {
      return a - b;
    })
    .forEach((el, i) => {
      const prob = (groupedResult[el] / ALL_POSIBILITIES2) * 100;
      const formatProb = parseFloat(prob.toString()).toFixed(2);

      final += el + ' ' + formatProb;
      final += i !== Object.keys(groupedResult).length - 1 ? '\n' : '';
    });

  print(final);
}
