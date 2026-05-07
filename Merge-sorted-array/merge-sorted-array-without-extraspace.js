function mergeArrays(arr1, arr2)
{
    const m = arr1.length;
    const n = arr2.length;
    let i = m-1, j = n-1, k = m+n-1;
    while(i>=0 && j>=0)
    {
        if(arr1[i] > arr2[j])
        {
            arr1[k] = arr1[i];
            i--;
        }
        else
        {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }
    while(j >= 0)
    {
        nums1[k] = nums2[j];
        j--;
        k--;
    } 
    return arr1;
        
}

console.log(mergeArrays([1, 2, 3], [2, 5, 6]));