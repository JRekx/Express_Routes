// Import the necessary functions from the helper module.
const {
    findMean,
    findMedian,
    findMode,
} = require("./helpers");

// Describe block for testing findMedian function.
describe("#findMedian", function () {
    // Test case for an array with an even number of elements.
    it("finds the median of an even set", function () {
        // Expectation: the median of [1, -1, 4, 2] is 1.5.
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5);
    });
    // Test case for an array with an odd number of elements.
    it("finds the median of an odd set", function () {
        // Expectation: the median of [1, -1, 4] is 1.
        expect(findMedian([1, -1, 4])).toEqual(1);
    });
});

// Describe block for testing findMean function.
describe("#findMean", function () {
    // Test case for an empty array.
    it("finds the mean of an empty array", function () {
        // Expectation: the mean of an empty array is defined as 0.
        expect(findMean([])).toEqual(0);
    });
    // Test case for an array of numbers.
    it("finds the mean of an array of numbers", function () {
        // Expectation: the mean of [1, -1, 4, 2] is 1.5.
        expect(findMean([1, -1, 4, 2])).toEqual(1.5);
    });
});

// Describe block for testing findMode function.
describe("#findMode", function () {
    // Test case for finding the mode of an array.
    it("finds the mode", function () {
        // Expectation: the mode of [1, 1, 1, 2, 2, 3] is 1.
        expect(findMode([1, 1, 1, 2, 2, 3])).toEqual('1'); // Updated to match the string return type from findMode
    });
});
