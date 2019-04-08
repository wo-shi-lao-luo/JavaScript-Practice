// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

 

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5
 

// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

var repeatedNTimes = function(A) {
	var checked = {}
    for (var i = 0; i < A.length; i++) {
    	if (! checked[A[i]]){
    		checked[A[i]] = 1
    	}
    	else{
    		checked[A[i]]++
    	}
    }

    return Object.keys(checked).find(key => checked[key] === A.length/2)
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))

