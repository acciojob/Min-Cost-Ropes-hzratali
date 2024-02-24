function mincost(arr){
	const PriorityQueue = require('priorityqueuejs');
    const pq = new PriorityQueue((a, b) => a - b);
    for (const rope of arr) {
        pq.enq(rope);
    }
    let totalCost = 0;
    while (pq.size() > 1) {
        const shortest1 = pq.deq();
        const shortest2 = pq.deq();
        const cost = shortest1 + shortest2;
        totalCost += cost;
        pq.enq(cost);
    }
    return totalCost;
}
module.exports=mincost;
