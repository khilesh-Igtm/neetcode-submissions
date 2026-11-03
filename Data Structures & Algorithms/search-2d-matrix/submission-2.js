class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       if (!matrix || matrix.length === 0) return false;
  const rows = matrix.length;
  const cols = matrix[0].length;

  // imagine kar rahe hai hum ki array flatten hai
  let low = 0;
  let high = (rows * cols) - 1; 

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //Because each row has cols elements. Flattening the matrix, every cols indices form one row. So floor(index / cols) tells me which group, hence the row, and index % cols tells me the offset within that group, hence the colum

    let midValue = matrix[Math.floor(mid / cols)][mid % cols];
    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
    }
}
