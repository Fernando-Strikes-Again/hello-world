//
//'Matrix' exercise.
//

export class Matrix {
  constructor(inputString) {
    this.matrix = inputString.split('\n').map(row => {
      return row.split(' ').map(Number);
    });
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, columnIndex) => {
      return this.matrix.map(row => row[columnIndex]);
    });
  }
}
