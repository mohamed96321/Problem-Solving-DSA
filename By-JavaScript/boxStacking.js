/**
 * @param Box_Stacking
 */

class Box {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  getBaseArea() {
    return this.dimensions[0] * this.dimensions[1];
  }

  canBeStackedOn(topBox) {
    return (
      this.dimensions[0] < topBox.dimensions[0] &&
      this.dimensions[1] < topBox.dimensions[1] &&
      this.dimensions[2] < topBox.dimensions[2]
    );
  }
}

class BoxStackingSolver {
  constructor(boxes) {
    this.boxes = boxes;
  }

  getMaxStackHeight() {
    const rotatedBoxes = this.generateRotatedBoxes();
    const allBoxes = this.boxes.concat(rotatedBoxes);
    allBoxes.sort((a, b) => b.getBaseArea() - a.getBaseArea());

    const stackHeight = new Array(allBoxes.length);
    for (let i = 0; i < allBoxes.length; i++) {
      stackHeight[i] = allBoxes[i].dimensions[2];
    }

    for (let i = 1; i < allBoxes.length; i++) {
      for (let j = 0; j < i; j++) {
        if (allBoxes[i].canBeStackedOn(allBoxes[j])) {
          stackHeight[i] = Math.max(
            stackHeight[i],
            stackHeight[j] + allBoxes[i].dimensions[2]
          );
        }
      }
    }

    return Math.max(...stackHeight);
  }

  generateRotatedBoxes() {
    const rotatedBoxes = [];
    for (const box of this.boxes) {
      const [d1, d2, d3] = box.dimensions;
      rotatedBoxes.push(new Box([d1, d2, d3]));
      rotatedBoxes.push(new Box([d1, d3, d2]));
      rotatedBoxes.push(new Box([d2, d1, d3]));
    }
    return rotatedBoxes;
  }
}

const boxes = [
  new Box([1, 2, 3]),
  new Box([4, 5, 6]),
  new Box([3, 4, 5])
];

const solver = new BoxStackingSolver(boxes);
const maxStackHeight = solver.getMaxStackHeight();
console.log("Max Stack Height:", maxStackHeight);
