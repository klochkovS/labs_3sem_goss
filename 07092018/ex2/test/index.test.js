require('should');
const { get } = require('axios');

const headers = { 'Content-Type': 'application/json' };
const cases = [];
for (let i = -10; i < 10; i += 1) {
  cases.push(i);
}


cases.forEach(val => describe(`${val} calculate`, () => {
  it('respond', async () => {
    const firstURL = `https://kodaktor.ru/api2/there/${val}`;
    const firstRes = await get(firstURL, { headers });

    const secondURL = `https://kodaktor.ru/api2/andba/${firstRes.data}`;
    const secondRes = await get(secondURL, { headers });
    secondRes.data.should.equal(val);
  });
}));

// Ответ:
// Некорректно работает с отрицательными числами
