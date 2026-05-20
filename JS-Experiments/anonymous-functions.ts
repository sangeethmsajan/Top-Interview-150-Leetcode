myFunction1(100);
// fn(200);
// Block-scoped variable 'fn' used before its declaration.
function myFunction1(val : number) {
console. log("Hello Me ", val);
}

const fn = function  (val : number) {
console. log("Hello World = ", val);
}
fn(200); 
