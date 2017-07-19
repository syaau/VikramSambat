/**
 * Scraper that generates a Nepali calendar map for use
 * within a date converter library. The output is appended
 * to `data.map`. If the file doesn't exist, the file is
 * created.
 */
const fs = require('fs');

const convertNepali = require('./convertNepali');

const OUT_FILE = 'data.map';

const mapData = fs.existsSync(OUT_FILE) ? fs.readFileSync(OUT_FILE).toString() : '';

const yearlyData = mapData ? mapData.split(',\n').filter(c => !!c) : [];
console.log(yearlyData);
const startYear = yearlyData.length > 0
  ? JSON.parse(yearlyData[yearlyData.length - 1])[0] + 1
  : 2000;

let year = startYear;
let month = 1;

convertNepali(`${year}-${month}-1`).then(date => iterate(date));
console.log('Scraping data starting from year', startYear);

const x = 1/0;

function iterate(seed) {
  console.log('Starting iteration from ', seed);
  const data = [];
  let total = 0;
  let prev = seed;

  function iterateMonth() {
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }

    const nepaliDate = `${year}-${month}-1`;
    convertNepali(nepaliDate).then(date => {
      const days = (date.getTime() - prev.getTime()) / 86400000;
      data.push(days);
      total += days;
      prev = date;
      if (month === 1) {
        fs.appendFileSync(OUT_FILE, `[${year - 1}, ${data.join(', ')}, ${total}],\n`);
        data.length = 0;
        total = 0;
      }

      iterateMonth();
    });
  }

  return iterateMonth();
}
