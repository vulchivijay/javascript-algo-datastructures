# javascript-algo-datastructures
my practice snippets

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
# 7. Quick Sort:
# 8. Redix Sort:
