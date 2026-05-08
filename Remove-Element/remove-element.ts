export function removeElement(nums: number[], val: number): number {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
}
let nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
let val: number = 2;
let result: number = removeElement(nums, val);
console.log(result);