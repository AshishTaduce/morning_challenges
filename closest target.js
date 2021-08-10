function revealClosestTargetDistance (arrOfStrings, target) {
    let targetPositions  = arrOfStrings.map((e, i) => e === target ? i : null).filter(e => e !== null);
    console.log(targetPositions);
    res = arrOfStrings.map((e, index) => Math.min(...targetPositions.map(e => Math.abs(e-index))));
    console.log(res)
}

revealClosestTargetDistance(['d', 'c', '2', 'g', '1', 'y', 'e', 't', 'b', 'q', 'f', 'c', 'e' ], 'c') // [ 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1]
