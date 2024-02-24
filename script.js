function mincost(arr){
	arr.sort((a, b) => a - b);

    let totalCost = 0;

    // Iterate until there is only one rope left
    while (arr.length > 1) {
        // Take the two shortest ropes
        const shortest1 = arr.shift();
        const shortest2 = arr.shift();

        // Combine the lengths of the two ropes
        const combinedLength = shortest1 + shortest2;

        // Add the combined length to the total cost
        totalCost += combinedLength;

        // Insert the combined rope back into the array
        // Maintain the sorted order by finding the correct position to insert
        let insertIndex = 0;
        while (insertIndex < arr.length && arr[insertIndex] < combinedLength) {
            insertIndex++;
        }
        arr.splice(insertIndex, 0, combinedLength);
    }

    return totalCost;
}
module.exports=mincost;
