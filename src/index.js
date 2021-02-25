
exports.min = function min (array) {
    if(!array || array.length === 0) return 0;
    let min = array[0];
    for(let a of array){
        if(a < min){
            min = a;
        }
    }
  return min;
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0;
    let max = array[0];
    for(let a of array){
        if(a > max){
            max = a;
        }
    }
    return max;
}

exports.avg = function avg (array) {
    if(!array  || array.length === 0) return 0;
    let avg = 0;
    for(let a of array) {
        avg+=a;
    }
  return avg/array.length;
}
