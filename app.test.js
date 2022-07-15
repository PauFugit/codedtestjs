const {fromEuroToDollar}=require('./app.js');
const {fromDollarToYen}= require('./app.js'); 
const {fromYenToPound}= require('./app.js'); 

test('One euro should be 1.2 dollars', () => {
    expect(fromEuroToDollar(4)).toBe(4.8);
});

test('One Dollar should be 127.9 yen', () => {
    expect(fromDollarToYen(2)).toBe(255.8);
});

test('One Yen should be 0.8 pound', () => {
    expect(fromYenToPound(5)).toBe(4);
});