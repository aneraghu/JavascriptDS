var sortArray = function (arr) {
    var count = 0;
    var n = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr[count] = arr[i]
            count++
        }
    }
    console.log(n)
    while (n > count) {
        arr[count] = 1;
        count++
    }
    return arr
}

console.log(sortArray([0, 1, 1, 1, 0, 0, 1, 0]))
