/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    // Scan the whole matrix for positions of 1s
    // Add the positions of the 1s to an object
    
    const toCheck = {};
    const serializeCoords = ([row, col]) => {
        return row+','+col;
    }
    const deserializeCoords = (coordStr) => {
        const [row, col] = coordStr.split(',');
        return [parseInt(row), parseInt(col)]
    }
    let islands = 0;
    
    // Check all elements linearly and add them to toCheck as a string (key) if it's a 1
    for(let row=0; row<grid.length; row++) {
        for(let col=0; col<grid[0].length; col++) {
            if(grid[row][col] === '1') {
                toCheck[serializeCoords([row, col])] = true;
            }
        }
    }
    
    if(Object.keys(toCheck).length === 0) {
        return islands;
    }
        
    while(Object.keys(toCheck).length > 0) {
        const firstToCheck = deserializeCoords(Object.keys(toCheck)[0]); // Grab the first coord we find
        const checkNext = [firstToCheck];
        delete toCheck[serializeCoords(firstToCheck)];
        while(checkNext.length > 0) {
            const currentCoord = checkNext.shift();
            const [currRow, currCol] = currentCoord;
             // Delete this coord from toCheck
        
            const up = [currRow - 1, currCol]
            const left = [currRow, currCol - 1];
            const right = [currRow, currCol + 1];    
            const down = [currRow + 1, currCol];
            
            if((currRow > 0) && toCheck[serializeCoords(up)]) {
                checkNext.push(up);
            delete toCheck[serializeCoords(up)];
                
            }
            
            if((currCol > 0) && toCheck[serializeCoords(left)]) {
                checkNext.push(left);
                delete toCheck[serializeCoords(left)];                
            }
            
            if((currCol < grid[0].length - 1) && toCheck[serializeCoords(right)]) {
                checkNext.push(right);
                delete toCheck[serializeCoords(right)];                
            }
            
            if((currRow < grid.length - 1) && toCheck[serializeCoords(down)]) {
                checkNext.push(down);
                delete toCheck[serializeCoords(down)];                
            }
            
        }
        
        islands++;
        
    }
    
    
    return islands;
    
};