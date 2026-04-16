// Implementation 1: Bitwise XOR (Most efficient O(n) time, O(1) space)
function findSingleNumberXOR(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return null;
    }

    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number') continue;
        result ^= num;
    }

    // Since 0 ^ X = X, but an empty/invalid array also results in 0, 
    // verify the result exists in the original array to prevent false positives.
    return nums.includes(result) ? result : null;
}

// Implementation 2: Hash Map / Frequency Counter (O(n) time, O(n) space)
function findSingleNumberMap(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return null;
    }

    const counts = new Map();

    for (let num of nums) {
        if (typeof num !== 'number') continue;
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    for (let [num, count] of counts) {
        if (count === 1) {
            return num;
        }
    }

    return null;
}