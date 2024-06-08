function containsSubArraySummingToTarget(target, arr) {
    let subArrLeft = 0;
    let subArrRight = subArrLeft + 1;
    let sum = arr[subArrLeft];
    let found = false;

    // Begin: For visualization only
    let text = '' + arr[subArrLeft];
    // End
    while (subArrRight < arr.length) {
        if (sum === target) {
            found = true;
            break;
        } else if (sum < target) {
            sum += arr[subArrRight];
            text += arr[subArrRight];
            // Begin: For visualization only
            console.log(`
                Left: ${subArrLeft}, Right: ${subArrRight}, Consecutive sub arr: [${text}], Sum: ${sum}`
            );
            // End
            subArrRight++;
        } else {
            sum -= arr[subArrLeft];
            // Begin: For visualization only
            if (Math.abs(arr[subArrLeft]) > 9) {
                text = text.substring(2);
            } else {
                text = text.substring(1);
            }

            console.log(`
                Left: ${subArrLeft}, Right: ${subArrRight}, Consecutive sub arr: [${text}], Sum: ${sum}`
            );
            // End
            subArrLeft++;
        }
    }

    // Begin: For visualization only
    console.log('Final sub arr: [' + text + ']');
    // End

    return found;
}

let arr = [10, 5, 7, 4, 2, 7, 1, 9, 5];
let target = 14;
console.log("Input array: ", arr);
console.log('found:', containsSubArraySummingToTarget(target, arr));