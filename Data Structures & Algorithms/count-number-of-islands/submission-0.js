class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length
        let count =0

        function dfs(i,j){
            if(i<0 || j<0 || i>= rows || j>=cols){
                return;
            }
            if(grid[i][j] === "0"){
                return;
            }
            grid[i][j] = "0"
            dfs(i-1,j)
            dfs(i+1,j)
            dfs(i,j-1)
            dfs(i,j+1)

        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j] === "1"){
                    count++;
                    dfs(i,j)
                }
            }
        }
        return count;
    }
    
}
