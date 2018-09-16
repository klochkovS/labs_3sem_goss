const Timer = require('timerpromise');

(async () => {
  console.time('both');
  console.time('3sec');
  await new Timer(3).start;
  console.timeEnd('3sec');
  console.time('2sec');
  await new Timer(2).start;
  console.timeEnd('2sec');
  console.timeEnd('both');
})();
