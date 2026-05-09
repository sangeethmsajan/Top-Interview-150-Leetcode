export function removeDuplicatesTwo(nums : number[]) {
    if(nums.length <= 2)
    {
        return nums.length;
    }
    let index : number = 2;
    for(let i : number = 2; i < nums.length; i++)
    {
        if(nums[i] != nums[index-2])
        {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
   
}

console.log(removeDuplicatesTwo([1,1,1,2,2,3]));
// console.log(removeDuplicates([1, 1, 2]));