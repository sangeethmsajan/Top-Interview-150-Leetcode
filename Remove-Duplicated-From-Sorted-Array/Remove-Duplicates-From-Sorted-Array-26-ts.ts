export function removeDuplicates(nums : number[]) {
    let left : number = 0;
    for(let right: number = 0; right < nums.length; right++)
    {
        if(nums[right] !== nums[left])
        {
            left++;
            nums[left] = nums[right];
        }
    }
    return left+1;
}

console.log(removeDuplicates([1,1,1,2,2,3]));
// console.log(removeDuplicates([1, 1, 2]));