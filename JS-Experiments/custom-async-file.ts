const a : number[] = [2,3,7,6,4,5];
async function myFunction( argument : number) {
    const result = await new Promise((resolve) => setTimeout(resolve, 1000));
}
a.forEach(myFunction);
