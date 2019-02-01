const computeTriangleArea = (A, B, C) => {
  return (
    0.5 *
    Math.abs(A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1]))
  );
};

const isWithinTriangle = (A, B, C, I) => {
  const referentialTriangleArea = computeTriangleArea(A, B, C);
  const ABITriangleArea = computeTriangleArea(A, B, I);
  const BICTriangleArea = computeTriangleArea(B, I, C);
  const AICTriangleArea = computeTriangleArea(A, I, C);
  return (
    referentialTriangleArea ===
    (ABITriangleArea + BICTriangleArea + AICTriangleArea)
  );
};

const calculConvexPolynomCenter = (polynomPoints) => {
  const sumPoints = polynomPoints.reduce((acc, cur) => {
    acc.x += cur[0];
    acc.y += cur[1];
    return acc;
  }, {x: 0, y: 0});
  return [Math.round(sumPoints.x/polynomPoints.length), Math.round(sumPoints.y/polynomPoints.length)];
}

const isWithinPolynom = (polynomPoints, shot) => {
 for(let i = 0; i < polynomPoints.length + 1; ++i) {
    const length = polynomPoints.length;
    const p1 = polynomPoints[i%length];
    const p2 = polynomPoints[(i+1)%length];
    if (isWithinTriangle(calculConvexPolynomCenter(polynomPoints), p1, p2, shot)) {
      return true;
    }
  }
  return false;
};

// execution
const N = parseInt(readline());
const polynomPoints = [];
for (let i = 0; i < N; i++) {
  polynomPoints.push(
    readline().split(' ').map(c => parseInt(c, 10))
  );
}

const M = parseInt(readline(), 10);
for (let i = 0; i < M; i++) {
  const shot = readline().split(' ').map(c => parseInt(c, 10));
  if (isWithinPolynom(polynomPoints, shot)) {
    print('hit');
  } else {
    print('miss');
  }
}
