class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
          // store numbers present in each row
  const rows = Array.from({ length: 9 }, () => new Set());

  // store numbers present in each column
  const cols = Array.from({ length: 9 }, () => new Set())

  // store numbers present in each 3 x 3 box
  const boxes = Array.from({ length: 9 }, () => new Set())

  // traverse every cell
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];

      // ignore empty cells
      if (num === ".") {
        continue;
      }

      // find which 3x 3 box this cell belongs to
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // if number already exist in row, col, or box -> invalid
      if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      // add number to row, col and box
      rows[r].add(num);
      cols[c].add(num);
      boxes[boxIndex].add(num);
    }
  }
  return true; //no duplicates found
    }
}
