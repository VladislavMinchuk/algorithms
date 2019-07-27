function qSort(array, first, last) {
  let leftLimit = first;
  let rightLimit = last;
  let pivot = parseInt((leftLimit + rightLimit) / 2);
  let mid = array[pivot];

  while (leftLimit < rightLimit) {
    while (array[rightLimit] > mid) {
      rightLimit--;
    }

    while (array[leftLimit] < mid) {
      leftLimit++;
    }

    if (leftLimit <= rightLimit) {
      let temp = array[leftLimit];
      array[leftLimit] = array[rightLimit];
      array[rightLimit] = temp;

      leftLimit++;
      rightLimit--;
    }
  }

  if (first < rightLimit) {
    qSort(array, first, rightLimit);
  }

  if (leftLimit < last) {
    qSort(array, leftLimit, last);
  }
}

// Time Test =======================================================

// console.log(arr);
// let arr = [5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4,4,5,7,8,87,9,345,345,23,313,213,34,3,35,52,343,6,56,3,5,7,4,6,8,6,34,2,4];
// var t0 = performance.now();
// qSort(arr, 0, arr.length-1);
// var t1 = performance.now();
// console.log('QSort', (t1 - t0).toFixed(4), 'milliseconds to generate');
//
// console.log(arr);

function simpleTest() {
  let arr = [2, 3, 8, 23, 45, 2, 8, 5, 6, 44, 56];
  let sortedArr = [2, 2, 3, 5, 6, 8, 8, 23, 44, 45, 56];

  qSort(arr, 0, arr.length - 1);

  let testFlag = arr.every(function(item, i, array) {
    return item === sortedArr[i];
  });

  console.log(testFlag, 'test quicksort');
}

simpleTest();
