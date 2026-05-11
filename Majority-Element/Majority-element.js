// Boyer-Moore voting algorithm
function majorityElement(nums) {
    let maj = nums[0], count = 0;

    for (let num of nums) {
        if (count === 0) {
            maj = num;
        }
        if (num === maj) {
            count++;
        } else {
            count--;
        }
    }

    return  maj;
}

console.log(majorityElement([2,2,1,1,1,2,2]));
