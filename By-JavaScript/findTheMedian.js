/**
 * @param Find_The_Median
 * Certainly! The "Median of Two Heaps" algorithm is used to 
 * efficiently find the median of a data stream. The algorithm 
 * maintains two heaps, a max heap and a min heap, 
 * to divide the elements into two halves. 
 * The max heap stores the smaller half of the numbers, 
 * while the min heap stores the larger half.

Here's an overview of how the algorithm works:

1. When a new number is added to the data stream using the 
`addNum(num)` method:
   - If the max heap is empty or the number is smaller 
   than the maximum element in the max heap, 
   add the number to the max heap.
   - Otherwise, add the number to the min heap.

2. After adding the number, the algorithm ensures 
that the heaps are balanced:
   - If the size of the max heap is greater than the size of 
   the min heap by more than 1, it means the max heap has more elements 
   than the min heap. To balance the heaps, 
   remove the maximum element from the max heap and insert 
   it into the min heap.
   - If the size of the min heap is greater than the 
   size of the max heap, move the minimum element 
   from the min heap to the max heap.

3. To find the median using the `findMedian()` method:
   - Check the total number of elements in both heaps. 
   If the total number is even, the median is the average 
   of the top elements from both heaps.
   - If the total number is odd, the median is the 
   top element of the max heap.

By maintaining the two heaps and ensuring their sizes are balanced, 
the algorithm guarantees that the median can be efficiently calculated 
in constant time complexity.

The advantage of using this algorithm is that it avoids 
sorting the entire data stream every time a new number is added, 
which would have a time complexity of O(nlogn). Instead, 
the heaps allow for efficient insertion and retrieval of 
the median with a time complexity of O(logn).

Note: The implementation provided includes separate 
`MinHeap` and `MaxHeap` classes that implement the necessary 
heap operations. These classes are used by the 
`MedianFinder` class to handle the operations specific to 
finding the median in a data stream.
 */

class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  addNum(num) {
    // Add the number to the appropriate heap
    if (this.maxHeap.isEmpty() || num < this.maxHeap.peek()) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    // Balance the heaps to ensure the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.insert(this.maxHeap.remove());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.insert(this.minHeap.remove());
    }
  }

  findMedian() {
    // Check the sizes of the heaps
    const totalSize = this.maxHeap.size() + this.minHeap.size();

    if (totalSize % 2 === 0) {
      // If the total size is even, take the average of the top elements from both heaps
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
      // If the total size is odd, the top element of the maxHeap is the median
      return this.maxHeap.peek();
    }
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  insert(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    const min = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  sinkDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let smallestChildIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestChildIndex]
    ) {
      smallestChildIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestChildIndex]
    ) {
      smallestChildIndex = rightChildIndex;
    }

    if (smallestChildIndex !== index) {
      this.swap(smallestChildIndex, index);
      this.sinkDown(smallestChildIndex);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  insert(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    const max = this.heap[0];
    const lastElement = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      this.sinkDown(0);
    }
    return max;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  sinkDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let largestChildIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largestChildIndex]
    ) {
      largestChildIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largestChildIndex]
    ) {
      largestChildIndex = rightChildIndex;
    }

    if (largestChildIndex !== index) {
      this.swap(largestChildIndex, index);
      this.sinkDown(largestChildIndex);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(5);
medianFinder.addNum(2);
medianFinder.addNum(7);
medianFinder.addNum(3);
const median = medianFinder.findMedian();
console.log(median); 

// class MedianFinder {
//   constructor() {
//     this.data = [];
//   }

//   addNum(num) {
//     // Insert the number in the sorted order
//     let left = 0;
//     let right = this.data.length - 1;
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (this.data[mid] < num) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//     this.data.splice(left, 0, num);
//   }

//   findMedian() {
//     const length = this.data.length;
//     const mid = Math.floor(length / 2);
//     if (length % 2 === 0) {
//       return (this.data[mid - 1] + this.data[mid]) / 2;
//     } else {
//       return this.data[mid];
//     }
//   }
// }

// const medianFinder = new MedianFinder();
// medianFinder.addNum(5);
// medianFinder.addNum(5);
// medianFinder.addNum(5);
// medianFinder.addNum(5);
// console.log(medianFinder.findMedian());
