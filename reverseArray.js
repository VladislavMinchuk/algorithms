function reverseArray(arr) {
  let limit = parseInt(arr.length / 2);

  for (var i = 0; i < limit; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

let newArr = [1, 2, 3, 4, 5, 6, 7];

let reversedArr = reverseArray(newArr);

console.log(reversedArr);
