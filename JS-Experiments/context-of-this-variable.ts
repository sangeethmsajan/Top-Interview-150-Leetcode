const my0bj : any = {
a: 1,
b:2,
c: function() {
console. log(this);

}
}
var aa : any = my0bj.c;
aa();