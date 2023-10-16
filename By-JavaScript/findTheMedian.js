class MedianFinder {
  constructor() {
    this.data = [];
  }

  addNum(num) {
    // Insert the number in the sorted order
    let left = 0;
    let right = this.data.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (this.data[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    this.data.splice(left, 0, num);
  }

  findMedian() {
    const length = this.data.length;
    const mid = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (this.data[mid - 1] + this.data[mid]) / 2;
    } else {
      return this.data[mid];
    }
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(5);
medianFinder.addNum(5);
medianFinder.addNum(5);
medianFinder.addNum(5);
console.log(medianFinder.findMedian());
