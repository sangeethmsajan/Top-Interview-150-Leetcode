function removeElement(arr, elem)
{
    let left = 0;
    for(let right = 0; right < arr.length; right++)
    {
        if(arr[right] !== elem)
        {
            arr[left] = arr[right];
            left++;
        }
    }
    return left;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));