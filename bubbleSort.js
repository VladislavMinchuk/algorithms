function bubbleSort(array) {
  let flag;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let current = array[i];

      array[i] = array[i + 1]; // swap element
      array[i + 1] = current; // swap element

      flag = true;
    }
  }

  if (!flag) {
    return;
  }

  bubbleSort(array);
}

function simpleTest() {
  let arr = [2, 3, 8, 23, 45, 2, 8, 5, 6, 44, 56];
  let sortedArr = [2, 2, 3, 5, 6, 8, 8, 23, 44, 45, 56];

  bubbleSort(arr);

  let testFlag = arr.every(function(item, i, array) {
    return item === sortedArr[i];
  });

  console.log(testFlag, 'test BubbleSort');
}

simpleTest();