// Замыкания

const createMultiplayer = function(n) {
    return function () {
        return n * 10;
    }
}
const mutilpy = createMultiplayer(10);
const result = mutilpy();
console.log(result)