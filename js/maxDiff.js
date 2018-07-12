// write a function that finds the Maximum difference between two elements such 
// that larger element appears after the smaller number
// The function should return -1 if there is no max diff

//O(n)
function maxDifference(arr) {
    var maxDiff = -1;
    if (arr.length < 2) { return maxDiff; }

    var currentLow = arr[0];
    var currentHigh = arr[0];
    var i;

    for(i = 1; i< arr.length; i++) {
        if(arr[i] < currentLow) {
            currentLow = a[i];
        }

        if(arr[i] > currentHigh) {
            currentHigh = a[i];
            var currentDiff = currentHigh - currentLow;
            if(currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }

    }
    return maxDiff;

}
