const earthtone: string[] = ['Andy', 'Colin', 'Marshall', 'Rick', 'Tommy'];
console.table(earthtone);
const earthtoneArray: string[] = earthtone.map((_user: string): string => {
  return `${_user} plays in Earthtone`;
});

console.table(earthtoneArray);