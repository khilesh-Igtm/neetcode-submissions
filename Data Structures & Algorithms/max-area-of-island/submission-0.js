class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j] === 1){
                    let area = dfs(i,j)
                    maxArea = Math.max(maxArea,area)
                }
            }
        }

        function dfs(row,col){
            if(row < 0 || row >=rows || col <0 || col >=cols || grid[row][col] === 0){
                return 0;
            }
            grid[row][col]=0;
            let area = 1;
            area += dfs(row-1,col)
            area += dfs(row+1, col)
            area += dfs(row, col-1)
            area += dfs(row, col+1)

            return area;
        }
        return maxArea;
    }
}
