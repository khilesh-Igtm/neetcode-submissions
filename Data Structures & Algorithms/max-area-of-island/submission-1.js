class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;

        let directions =[
            [-1,0],
            [1,0],
            [0,-1],
            [0,1]
        ]

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j] === 1){
                    let area = 0
                    let stack = [[i,j]]
                    grid[i][j] =0;
                    while(stack.length > 0){
                        let [row, col] = stack.pop()
                        area++;
                        for(let [dr, dc] of directions){
                            let newRow = row + dr;
                            let newCol = col + dc;

                            if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1){
                                grid[newRow][newCol] =0;
                                stack.push([newRow,newCol])
                            }
                        }
                    }
                    maxArea = Math.max(maxArea, area)
                }
            }
        }

      
        return maxArea;
    }
}
