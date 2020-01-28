var fabWithCache = function () {
    let memo = {}
    return function fab(n) {
        if (n in memo) {
            return memo[n]
        } else {
            if (n < 2)
                return 1;
            else {
                memo[n] = fab(n - 2) + fab(n - 1)
                return memo[n];
            }
        }

    }
}
var fabonacci = fabWithCache()

console.log(fabonacci(150))
