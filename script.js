function mincost(arr){
	arr.sort((a, b) => a - b);
    let totalCost = 0;
    while (arr.length > 1) {
        const shortest1 = arr.shift();
        const shortest2 = arr.shift();
        const combinedLength = shortest1 + shortest2;
        totalCost += combinedLength;
        let insertIndex = 0;
        while (insertIndex < arr.length && arr[insertIndex] < combinedLength) {
            insertIndex++;
        }
        arr.splice(insertIndex, 0, combinedLength);
    }

    return totalCost;
}
module.exports=mincost;
