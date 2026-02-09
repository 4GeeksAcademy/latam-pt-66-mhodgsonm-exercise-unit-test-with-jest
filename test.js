// Import the function sum from the app.js file
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // 1 USD = 1/1.07 EUR, luego EUR * 156.5 = JPY
    // 1 USD debería ser aproximadamente 146.26 yenes
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 2);
})

test("One yen should be 0.0056 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // 1 JPY = 1/156.5 EUR, luego EUR * 0.87 = GBP
    // 1000 yenes para tener un número más significativo
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBeCloseTo(expected, 2);
})