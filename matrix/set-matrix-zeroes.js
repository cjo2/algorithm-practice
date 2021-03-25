/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    // Problem is, if we change numbers to a 0 on the first iteration, we won't know which rows/columns we still need to change
    // Need to figure out how to establish that a row or column has a 0
    // We could change the 0th row and 0th column as an indicator that we need to change the whole row and column?
        // If we do this, we'd need to take into account the 0th row / 0th column matrix position. Otherwise we'd end up flipping the whole first row and column to 0
    
    
    // Iterate over row >= 1 and column >= 1
        // If we see a 0 in the current box, update its row and column to 0
    
    // Iterate for each column
        // If there's a 0 in the column header, change all values in the column to 0
    
    // Iterate for each row. 
        // If there's a 0 in the row header, change all values in the row to 0
    
    if(matrix.length === 0 || matrix[0].length === 0) {
        return;
    } 
    
    const height = matrix.length;
    const width = matrix[0].length;
    const topLeftIsZero = matrix[0][0] === 0;
    const zeroInTopRow = (() => {
        for(let col=1; col< width; col++) {
            if(matrix[0][col] === 0) return true;
        }
        
        return false;
    })();
    const zeroInLeftColumn = (() => {
        for(let row=1; row < height; row++) {
            if(matrix[row][0] === 0) return true; 
        }
        return false;
    })();
    
    
    for(let row=1; row<height; row++) {
        for(let column=1; column<width; column++ ) {
            const current = matrix[row][column];
            if(current === 0) {
                matrix[row][0] = 0;
                matrix[0][column] = 0;
            }
        }
    }
    
    for(let row=1; row<height; row++) {
        if(matrix[row][0] === 0) {
            for(let col=1; col<width; col++) {
                matrix[row][col] = 0;
            }
        }
    }
    
    for(let col=1; col<width; col++) {
        if(matrix[0][col] === 0) {
            for(let row=1; row<height; row++) {
                matrix[row][col] = 0;
            }
        }
    }
    
    if(topLeftIsZero) {
        for(let row=1; row<height; row++) {
            matrix[row][0] = 0;
        }
        
        for(let col=1; col < width; col++) {
            matrix[0][col] = 0;
        }
    }
    
    if(zeroInLeftColumn) {
        for(let row=0; row < height; row++) {
            matrix[row][0] = 0;
        }
    }
    
    if(zeroInTopRow) {
        for(let col=0; col < width; col++) {
            matrix[0][col] = 0;
        }
    }
    
    // Is top left corner zero? If so change 0th row and 0th col
};