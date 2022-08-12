// You should implement your task here.

module.exports = function towelSort(arr) {
    if (!arr || !arr.length)
        return [];

    return arr.map((numbers, index) => index % 2 === 0 ? numbers : numbers.reverse()).flat();
}
