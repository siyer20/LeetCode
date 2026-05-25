/**
 * @param {number[]} nums
 * @return {number[]}
 */

//this is the O(n) solution. runtime : 1ms; memory = 62.11mb

/*
going to be a two pointer solution.
the largest squares are going to be at either end of nums. this way
we only need one pass to solve the problem, resulting in 0(n)
*/

var sortedSquares = function(nums) {

    let startIndex = 0;
    let sortedSquares = new Array(nums.length);
    let endIndex = nums.length-1;
    let counter = 1;

    while (counter <= sortedSquares.length){
        let siSquared = nums[startIndex]*nums[startIndex];
        let eiSquared = nums[endIndex]*nums[endIndex];

        if (siSquared > eiSquared){
            sortedSquares[sortedSquares.length-counter] = siSquared;
            startIndex ++;
            counter ++;
        }
        if (siSquared < eiSquared){
            sortedSquares[sortedSquares.length-counter] = eiSquared;
            endIndex --;
            counter ++;
        }
        if (siSquared == eiSquared) { 
            if (startIndex == endIndex){ //pointing at the same object
                sortedSquares[sortedSquares.length-counter] = siSquared;
                counter ++;
            }
            else { //pointing at duplicate numbers
                sortedSquares[sortedSquares.length-counter] = siSquared;
                startIndex ++;
                counter ++;

                sortedSquares[sortedSquares.length-counter] = eiSquared;
                endIndex --;
                counter ++;
            }
        }
    }

    return sortedSquares;
};