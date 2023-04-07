var earthtone = ['Andy', 'Colin', 'Marshall', 'Rick', 'Tommy'];
console.table(earthtone);
var earthtoneArray = earthtone.map(function (_user) {
    return "".concat(_user, " plays in Earthtone");
});
console.table(earthtoneArray);
