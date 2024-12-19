const a = 20;
const b = 30;

function countPerimeterAndArea(a, b) {
    return {
        perimeter: (a + b) * 2,
        area: a * b
    };
}

const s = countPerimeterAndArea(a, b);

console.log(`rectangle perimeter = ${s.perimeter}
rectangle area = ${s.area}`);