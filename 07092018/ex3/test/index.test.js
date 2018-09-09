require('should');
const puppeteer = require('puppeteer');

const URL = 'https://kodaktor.ru/g/autocase';
const cases = [
  { s: 'abc', xs: 'CBA' },
  { s: 'zyx', xs: 'XYZ' },
];

cases.forEach(({ s, xs }) => describe(`${xs} + ' asyncREV()`, () => {
  let page;
  let browser;

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it('respond', async () => {
    await page.goto(URL);
    page.evaluate(s => (document.querySelector('#inp').value = s), s);

    await page.$eval('#button_do', el => el.click());
    (await page.$eval('#ans', el => el.value)).should.equal(xs);
  });
}));
