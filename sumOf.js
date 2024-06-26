function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
function range2(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(range2(1, 10, 3));
console.log(sum(range(1, 10)));
