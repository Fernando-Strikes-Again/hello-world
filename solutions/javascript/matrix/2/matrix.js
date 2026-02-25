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
  let allColumns = [];
  
  for (let i = 0; i < this.matrix[0].length; i++) {
    let column = [];
    
    for (let row of this.matrix) {
      column.push(row[i]);
    }
    
    allColumns.push(column);
  }
  return allColumns;
}
}
