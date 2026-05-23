//code to find out the triangle types
let x = 10;
let y = 10;
let z = 10;

if ((x === y) && (y === z)) {
    console.log("This is a Equilateral triangle");
}
else if (x === y && y != z) {
    console.log("This is an Isosceles triangle");
}
else {
    console.log("This is a Scalene triangle");
}