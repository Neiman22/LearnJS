function deepCount (array) {
    return array.reduce((sum, cur) => {
        return sum + (Array.isArray(cur) ? 1 + deepCount(cur) : 1)
    }, 0)
};

console.log (deepCount([1, 2, [3, 4, [5]]])) //7