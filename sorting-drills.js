'use strict';

let qSortCounter = 0;
let swapCounter = 0;
let partitionCounter = 0;

function qSort(array, start=0, end=array.length) {
  qSortCounter++;
  start = start;
  end = end;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  partitionCounter++;
  const pivot = array[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};


function swap(array, i, j) {
  swapCounter++;
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};


let mSortCounter = 0;

function mSort(array) {
  mSortCounter++;
  if(array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
};


let mergeCounter = 0;

function merge(left, right, array) {
  mergeCounter++;
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for(let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for(let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}


//================================================================
// BUCKET SORT
function bucketSort(array, min, max) {
  let buckets = new Array(max - min + 1);

  for(let i = 0; i < array.length; i++) {
    buckets[array[i] - min] = (buckets[array[i] - min]|0) + 1;
  }

  let ans = [];
  for(let i = min; i <= max; i++) {
    for(let j = 0; j < buckets[i - min]; j++) {
      ans.push(i);
    }
  }
  return ans;
}


//================================================================
// SORT IN PLACE
function sortInPlace(array) {
  for(let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


//================================================================

const testArray = [3, 2, 1, 10, 5, 8, 9, 7, 6, 4, 10, 10];
const dataString = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

const data = dataString.split(' ').map(string => Number(string));

//================================================================
// console.log(data);
// console.log(qSort(testArray));
// console.log(qSort(data));
// console.log('qSort() Count:', qSortCounter);
// console.log('swap() Count:', swapCounter);
// console.log('parition() Count:', partitionCounter);
// console.log(mSort(testArray));
// console.log(mSort(data));
// console.log('mSort() Count:', mSortCounter);
// console.log('merge() Count:', mergeCounter);
// console.log(totalOperations);
// console.log(mSort(data));
// console.log(bucketSort(testArray, 1, 10));
console.log(sortInPlace(testArray));

