"use strict";
const earthtone = ['Andy', 'Colin', 'Marshall', 'Rick', 'Tommy'];
console.table(earthtone);
const earthtoneArray = earthtone.map((_user) => {
    return `${_user} plays in Earthtone`;
});
console.table(earthtoneArray);
