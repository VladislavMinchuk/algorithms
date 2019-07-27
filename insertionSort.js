function insertSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;

    if (array[i + 1] < array[i]) {
      let current = array[i + 1];

      while (current < array[j]) {
        array[j + 1] = array[j];
        array[j] = current;
        j--;
      }
    }
  }
}

function simpleTest() {
  let arr = [2, 3, 8, 23, 45, 2, 8, 5, 6, 44, 56];
  let sortedArr = [2, 2, 3, 5, 6, 8, 8, 23, 44, 45, 56];

  insertSort(arr);

  let testFlag = arr.every(function(item, i) {
    return item === sortedArr[i];
  });

  console.log(testFlag, 'test insertionSort');
}

simpleTest();
