const W = 7; // parseInt(inputs[0]);
const H = 7; // parseInt(inputs[1]);

const diagram = `A  B  C  D  E
|  |  |  |  |
|  |--|  |  |
|--|  |  |  |
|  |  |--|  |
|  |--|  |--|
|  |  |  |  |
1  2  3  4  5`;
const lines = diagram.split('\n');

const topLabels = lines[0].split('  ').join(''); // readline().split(' ');
console.log(topLabels);

const myMap = lines[0].split('  ').reduce((acc, c, i) => {
  acc[i] = [c];
  return acc;
}, {});
console.log(myMap);
let bridges = [];
for (let i = 1; i < H - 1; i++) {
  console.log(lines[i].replace(/ /g, '').split('--'));
  let pos = -1;
  const arr = lines[i].replace(/ /g, '').split('--');
  const bridges = Array.from(arr, (cur, i) => {
    const res = i !== 0 && i !== arr.length ? [pos, pos + 1] : null;
    pos += cur.length;
    return res;
  }).filter(c => c);
  console.log(bridges);

  // bridges = Array.from(lines[i].split('  '), (cur, i) =>
  //   cur.length == 4 ? [i, i + 1] : null
  // ).filter(c => c);
  // console.log(bridges);

  bridges.forEach(b => {
    const [startB, endB] = b;
    myMap[endB] = [myMap[startB], (myMap[startB] = myMap[endB])][0];
  });
}
const bottomLabels = lines[lines.length - 1].split('  ');
console.log(bottomLabels);
const format = Object.keys(myMap).reduce((acc, cur) => {
  acc.push(...myMap[cur].map(topLabel => topLabel + bottomLabels[cur]));
  return acc;
}, []);
const res = format.sort((a, b) => {
  return topLabels.indexOf(a[0]) - topLabels.indexOf(b[0]);
});

console.log(format);



// recordTopLabelAndBuildTopLabelCurPos
// buildBridge
