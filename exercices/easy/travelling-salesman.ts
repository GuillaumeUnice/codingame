const calculateDistance = (p, q) => {
  return (Math.sqrt(Math.pow(q[0] - p[0], 2)+ Math.pow(q[1] - p[1], 2)));
 };

 const isClosePoint = (ref, p, q) => {
   return calculateDistance(ref, p) <= calculateDistance(ref, q);
 };

 const addDistance = (distance, curPoint, nextPoint) => {
   return distance + calculateDistance(curPoint, nextPoint);
 };

 const greedyAlgorithm = (acc, curPoint, points, departurePoint) => {
   let temporaryClosestPointIndex = 0;
   if (points.length === 1) {
     const distance = addDistance(acc, curPoint, points[temporaryClosestPointIndex])
     return addDistance(distance, points[temporaryClosestPointIndex], departurePoint);
   }

   for (let i = 1; i < points.length; ++i) {
     if (
       !isClosePoint(curPoint, points[temporaryClosestPointIndex], points[i])
     ) {
       temporaryClosestPointIndex = i;
     }
   }

   const nextDistance = addDistance(acc, curPoint, points[temporaryClosestPointIndex]);

   const nextPoint = points[temporaryClosestPointIndex];
   points.splice(temporaryClosestPointIndex, 1);
   return greedyAlgorithm(nextDistance, nextPoint, points, departurePoint);
 };


 // Execution part
//  const N = parseInt(readline());
//  const curPoint = readline().split(' ');
//  const points = [];
//  for (let i = 0; i < N-1; i++) {
//      points.push(readline().split(' '));
//  }
const curPoint = [9, 12];
const points = [[24, 15], [12, 30], [4, 3], [13, 27]];
 console.log(Math.round(greedyAlgorithm(0, curPoint, points, curPoint)))
