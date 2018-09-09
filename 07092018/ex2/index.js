const { get } = require('axios');

const headers = { 'Content-Type': 'application/json' };
const N = 13;
(async () => {
  const firstURL = `https://kodaktor.ru/api2/there/${N}`;
  console.log(`Исходное значение: ${N}`);
  const firstRes = await get(firstURL, { headers });
  console.log(`Первое вычисление: ${firstRes.data}`);
  const secondURL = `https://kodaktor.ru/api2/andba/${firstRes.data}`;
  const secondRes = await get(secondURL, { headers });
  console.log(`Финальное вычисление: ${secondRes.data}`);
})();
