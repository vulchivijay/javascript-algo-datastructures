
# Algorithms:
# 1. Linear Search:
# 2. Binary Search:
# 3. Bubble Sort:

// O(n), If we use for inside for it will be O(n^2)
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

// O(n), If we use for inside for it will be O(n^2)
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

// O(n), If we use for inside for it will be O(n^2)
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

// O(n), If we use for inside for it will be O(n^2)
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
// [1, 5, 3, 9, 2, 8]
// [1, 5, 3, 9, 2, 8]
// [1, 2, 3, 9, 5, 8]

// [1, 2, 3, 9, 5, 8]
// [1, 2, 3, 9, 5, 8]
// [1, 2, 3, 5, 9, 8]

// [1, 2, 3, 5, 9, 8]
// [1, 2, 3, 5, 8, 9]

# 6. Merge Sort:

// O(n log n)
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

// O(n log n)
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
//  p  swapIndex
// [4, 2, 8, 1, 5, 7, 6, 3]
//  pivot swapIndex
// [4, 2, 1, 8, 5, 7, 6, 3]
//  pivot    swapIndex
// [4, 2, 1, 3, 5, 7, 6, 8]
// pivot     swapIndex

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

# 8. Radix Sort:

// Radix sort is special sorting alog that works on list of numbers,
// mever comparisons with any element/digit

//[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]
// check max length of number 4 digits, 4 loops required.

// check last from right side of the number
// 0 =
// 1 =
// 2 = 902
// 3 = 593
// 4 = 4
// 5 = 
// 6 = 1556, 3556, 4386, 86
// 7 = 7, 8157, 9637
// 8 =
// 9 = 29

// [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 29]

// check 2 digit from right side of the number
// 0 = 902, 04, 07, 408
// 1 =
// 2 = 29
// 3 = 9637
// 4 =
// 5 = 1556, 3556, 8157
// 6 = 
// 7 =
// 8 = 4389, 86
// 9 = 593

// [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4389, 86, 593]

// check 3 digit from right side of the number
// 0 = 4, 7, 29, 86
// 1 = 8157
// 2 = 
// 3 = 4386
// 4 = 408
// 5 = 1556, 3556, 593
// 6 = 9637
// 7 =
// 8 =
// 9 = 902

//[4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]

// check 4 digit from right side of the number
// 0 = 4, 7, 29, 86, 408, 593, 902
// 1 = 1556
// 2 =
// 3 = 3556
// 4 = 4386
// 5 = 
// 6 =
// 7 =
// 8 = 8157
// 9 = 9637

//Result = [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

// O(nk) where k is number of digits(average)
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function moreDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigits = moreDigits(nums);
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
}

radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]);

