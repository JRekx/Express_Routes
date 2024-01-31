// Function to build a frequency counter object from an array.
function createFrequencyCounter(arr) {
    // Use reduce to construct an object where each key is an array element and its value is the frequency.
    return arr.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

// Function to find the most common element in the array.
function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    // Iterate over the frequency counter to find the most frequent element.
    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    // Return the most frequent element as is.
    return mostFrequent;
}

// Function to convert an array of strings to an array of numbers and validate them.
function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);
        
        // Check if the conversion results in NaN and throw an error if so.
        if (Number.isNaN(valToNumber)) {
            throw new Error(`The value '${numsAsStrings[i]}' at index ${i} is not valid.`);
        }

        result.push(valToNumber);
    }
    return result;
}

// Function to find the mean of an array of numbers.
function findMean(nums) {
    if (nums.length === 0) return 0; // Return 0 if the array is empty.
    // Calculate the sum of the array elements and divide by the array length.
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }) / nums.length;
}

// Function to find the median of an array of numbers.
function findMedian(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order.

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    // Determine median for even and odd length arrays.
    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }

    return median;
}

// Exporting the functions for use in other modules.
module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray,
};
