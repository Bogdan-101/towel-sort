
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined) {
        return [];
    }
    if(matrix.length<2)
        return matrix;
    var mat = matrix;
    for(let i=1; i<mat.length; i+=2) {
        mat[i].reverse();
    }

    var arr = [];
    for(let i=0; i<mat.length; i++) {
        for(let j=0; j<mat[i].length; j++) {
            arr.push(mat[i][j]);
        }
    }
    return arr;
}
