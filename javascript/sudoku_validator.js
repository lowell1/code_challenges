var Sudoku = function(data) 
{
  function badNum(num) {
    return (
              num < 1 
              || num === undefined
              || !Number.isInteger(num)
              || num > data.length
              || isNaN(parseInt(num,10))
           );
  } 

  return {
    isValid: function() {
      const sqrt = Math.sqrt(data.length);

      if(!Number.isInteger(sqrt))
        return false;
      
      const squares = new Array(data.length / sqrt)
                          .fill(null)
                          .map(() => {
                            return new Array(data.length / sqrt)
                                        .fill(null)
                                        .map(() => new Object)
                          });
      const colNums = new Array(data.length)
                          .fill(null)
                          .map(() => new Object);
    
      for(i in data) {
        const rowNums = {};

        if(data[i].length !== data.length)
          return false;

        for(j in data[i]) {
          const num = data[i][j];

          if(badNum(num))
            return false;

          if(colNums[j][num] === 1 || rowNums[num] === 1)
            return false;

          const sqRow = Math.floor(i / sqrt)
          const sqCol = Math.floor(j / sqrt);
          const square = squares[sqRow][sqCol];

          if(square[num] === 1)
            return false;

          square[num] = 1;
          colNums[j][num] = 1; 
          rowNums[num] = 1;
        }
      }

      return true;
    }
  };
};