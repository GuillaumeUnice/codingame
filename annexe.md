// remove duplicates from Array
http://jsben.ch/ziS3i

https://stackoverflow.com/questions/37949813/array-fillarray-creates-copies-by-references-not-by-value
let matrix = new Array(H).fill(new Array(W).fill(1)) => copy by reference
VS
let matrix = Array.from({length: H}, e => Array(W).fill(1)); => copy by value
