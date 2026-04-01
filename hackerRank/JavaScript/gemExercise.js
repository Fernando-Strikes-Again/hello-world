/*
You are given an array of integers representing a sequence of transaction amounts (in Yen) from a single user. To prevent fraud, the system flags any sequence where three consecutive transactions are strictly increasing and the total sum of those three exceeds a certain limit (e.g., 10,000).

The Task: Write a function findFraudulentSequences that returns the starting index of every such "danger zone" in the array.
Constraints & Requirements:

    Input: int[] transactions, int threshold.

    Output: A list of integers (indices).

    Performance: Aim for O(n) time complexity (one pass).

    No Results: If the input is invalid or no sequences are found, return an empty list.
*/

function findFraudulentSequences(transactions, threshold) {
    if (!Array.isArray(transactions) || transactions.length < 3 || typeof threshold !== 'number') {
        return [];
    }

    const dangerZones = [];

    for (let i = 0; i <= transactions.length - 3; i++) {
        const a = transactions[i];
        const b = transactions[i + 1];
        const c = transactions[i + 2];

        // Validate types within the array to prevent NaN/null logic errors
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            continue;
        }

        const isStrictlyIncreasing = a < b && b < c;
        const totalSum = a + b + c;

        if (isStrictlyIncreasing && totalSum > threshold) {
            dangerZones.push(i);
        }
    }

    return dangerZones;
}

// --- Test Scenarios ---
const myTransactions = [1000, 4000, 6000, 2000, 5000, 8000, 1000];
const myThreshold = 10000;

const results = findFraudulentSequences(myTransactions, myThreshold);

console.log("Fraudulent Indices Found:", results);