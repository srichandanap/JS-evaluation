
const inputArr = [1, 2, [3, 4, [5]]];

function flatArr(newArr) {
    var res = []


    for (var i of newArr) {
        if (Array.isArray(i)) {
            res = res.concat(flatArr(i));

        }
        else {
            res.push(i);
        }
    }
    return res;

}
console.log(flatArr(inputArr));