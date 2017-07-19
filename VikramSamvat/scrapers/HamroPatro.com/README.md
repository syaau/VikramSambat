A simple web scraper that sends request to HamroPatro server
and converts a English date (A.D.) to Bikram Samvat (B.S.).

This utility exposes a method `convertNepali` that converts
the given English date (string of format YYYY-M-D) and
returns a Nepali date via Promise.

When run directly, the packages generates a `data.map` file 
containing arrays with year number followed by days in every
month and total days in year. The packages automatically 
continues generating this file where it left of in the last
run. The `data.map` file could be useful for creating your
own date conversion libraries. Hamro patro at the moment supports
nepali date starting from year 2000 B.S. so the scraping starts
from year 2000;

A sample data.map output looks like:
```javascript
  [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],

```
A generated sample file for year 2000 to 2088 has been included
in the repo at [samples/data.map](samples/data.map).

You can start the scraper using `npm start` from the package.
Or you could import `convertNepali` from the package.
