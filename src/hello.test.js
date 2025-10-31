const helloFatima = require('./hello');

test('says hello to Fatima', () => {
    expect(helloFatima('Fatima')).toBe('Hello, Fatima!');
});

test('says hello to anyone', () => {
    expect(helloFatima('John')).toBe('Hello, John!');
});