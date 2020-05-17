
# Algorithms:
# 1. Linear Search:
# 2. Binary Search:
# 3. Bubble Sort:

// O(n)
function bubbleSort(arr) {
    var noSwap = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            var temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            noSwap = false;
        }
    }
    if (noSwap) return arr; // 1. recursion end point
    else return bubbleSort(arr); // 2. calling recursion with different value.
}

bubbleSort([4, 6, 3, 9, 2, 0, 1]);

# 4. Insertion Sort:

// O(n)
function insertionSort(arr) {
    var noSwap = true;
    var startPoint = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            startPoint = i+1;
            break;
        }
    }
    for (var j = 0; j < startPoint; j++) {
        if (arr[j] > arr[startPoint] && startPoint > 0) {
            var temp = arr[startPoint];
            arr[startPoint] = arr[j];
            arr[j] = temp;
            noSwap = false;
        }
    }
    if (noSwap) return arr;  // 1. recursion end point
    else return insertionSort(arr); // 2. calling recursion with different value.
}
//var x = performance.now();
insertionSort([6, 8, 4, 3, 2, 0, 1]);
//var y = performance.now();

// [6, 8, 4, 3, 2, 0, 1]
//        i
// [4, 6, 8, 3, 2, 0, 1]
//           i
// [3, 4, 6, 8, 2, 0, 1]
//              i
// [2, 3, 4, 6, 8, 0, 1]
//                 i
// [0, 2, 3, 4, 6, 8, 1]
//                    i
// [0, 1, 2, 3, 4, 6, 8]
//                    i

O(n2)
function insertionSort (arr) {
     for(var i= 1; i < arr.length; i++) {
         var currentVal = arr[i];
         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
             arr[j+1] = arr[j];
         }
         arr[j+1] = currentVal;
     }
     return arr;
}

insertionSort([6, 8, 4, 3, 2, 0, 1]);

# 5. Selection Sort:

// O(n)
function selectionSort(arr) {
    var noSwap = true;
    var startPoint = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            startPoint = i+1;
        }
    }
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > arr[startPoint] && startPoint > 0) {
            var temp = arr[startPoint];
            arr[startPoint] = arr[j];
            arr[j] = temp;
            noSwap = false;
            break;
        }
    }
    if (noSwap) return arr;
    else return selectionSort(arr);
}

selectionSort([8, 5, 3, 9, 2, 1]);


// [8, 5, 3, 9, 2, 1]
//  s 
// [8, 5, 3, 9, 2, 1]
//     s
// [8, 5, 3, 9, 2, 1]
//        s
// [8, 5, 3, 9, 2, 1]
//              s
// [8, 5, 3, 9, 2, 1]
//                 s
// [1, 5, 3, 9, 2, 8]
//     s

// [1, 5, 3, 9, 2, 8]
//        s
// [1, 5, 3, 9, 2, 8]
//              s
// [1, 5, 3, 9, 2, 8]
//              s
// [1, 2, 3, 9, 5, 8]
//        s

// [1, 2, 3, 9, 5, 8]
//           s
// [1, 2, 3, 9, 5, 8]
//              s
// [1, 2, 3, 5, 9, 8]
//              s

// [1, 2, 3, 5, 9, 8]
//                 s
// [1, 2, 3, 5, 8, 9]

# 6. Merge Sort:

// O(n)
// Sorted arrays merge sort algorithm
function merge (arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    console.log(result);
    return result;
}

// merge([1, 10, 50], [2, 14, 99, 100]); // sorted two arrays

// without sorting array 
function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, midPoint)); // recursion method with different values
    let right = mergeSort(arr.slice(midPoint)); // recursion method with different values
    return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);

// [10, 24, 76, 73, 72, 1, 9]
// [10, 24, 76], [73, 72, 1, 9]
// [10] [24, 76] [73, 72, 1, 9]
// [10] [24, 76] [73, 72] [1, 9]
// [10] [24, 76] [72, 73] [1, 9]
// [10, 24, 76] [1, 9, 72, 73]
// [1, 9, 10, 24, 72, 73, 76]

# 7. Quick Sort:

// O(n)
function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);   
    }
    return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

// [4, 8, 2, 1, 5, 7, 6, 3]
//  p
// [4, 8, 2, 1, 5, 7, 6, 3]
//     p
// [4, 2, 8, 1, 5, 7, 6, 3]
//        p
// [4, 2, 1, 8, 5, 7, 6, 3]
//           p
// [4, 2, 1, 3, 5, 7, 6, 8]

// [4, 2, 1, 3, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [3, 1, 2, 4, 5, 7, 6, 8]
// [3, 1, 2, 4, 5, 7, 6, 8]

// [3, 1, 2] [4] [5, 7, 6, 8]
// [1, 3, 2] [4] [5, 7, 6, 8]
// [1, 2, 3] [4] [5, 7, 6, 8]
// [1, 2, 3] [4] [5, 7, 6, 8]
// [1, 2, 3] [4] [5, 6, 7, 8]
// [1, 2, 3] [4] [5, 6, 7, 8]
// [1, 2, 3] [4] [5, 6, 7, 8]

# 8. Redix Sort:
