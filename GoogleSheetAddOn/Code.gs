var EPOCH = new Date('1943-04-14');
var START_YEAR = 2000;
var MAX_DATE = new Date('2032-04-14');

var NEPALI_DATE_MAP = [
  [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
  [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
  [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
  [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
  [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365],
  [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
  [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366],
  [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30, 366],
  [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
  [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30, 365],
];

var MONTHS_EN = ['Baisakh', 'Jestha', 'Asadh', 'Shrawan', 'Bhadra', 'Aswin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
var MONTHS_NP = ['बैशाख', 'जेठ', 'आषाढ', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुण','चैत्र'];
var NUM_NP = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
var WEEKDAYS_SHORT_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var WEEKDAYS_LONG_NP = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var WEEKDAYS_SHORT_NP = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'];
var WEEKDAYS_LONG_NP = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'];

// The algorithm using the map to convert the given Date
// into nepali year, month, date and day object
function convert_(date) {
  var diff = (date - EPOCH)/86400000;
  for (var i = 0; i < NEPALI_DATE_MAP.length; ++i) {
    var year = NEPALI_DATE_MAP[i];
    if (diff < year[13]) {
      for (var m = 1; m <= 12; ++m) {
        var month = year[m];
        if (diff < month) {
          return {
            year: year[0],
            month: m,
            date: diff + 1,
            day: date.getDay(),
          }
        }
        diff -= month;
      }
    }
    diff -= year[13];
  }

  throw new Error('Could not convert ' + date);
}

function pad_(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return "" + n;
  }
}

function validateDate_(date) {
  if (!(date instanceof Date)) {
    throw new Error('Invalid date ' + date);
  }

  if (date < EPOCH || date > MAX_DATE) {
    throw new Error('Date must be between ' + NEPALI_DATE_MAP[0][0] + '-01-01 BS and ' + (NEPALI_DATE_MAP[NEPALI_DATE_MAP.length-1][0] + 1) + '-01-01 BS');
  }

  // To avoid timezone mixing, convert the given date to a string and use the Date constructor
  // to create the date once again
  var dateStr = date.getFullYear() + '-' + pad_(date.getMonth() + 1) + '-' + pad_(date.getDate());

  return new Date(dateStr);
}

function npDigit_(str) {
  var res = '';
  for (var i = 0; i < str.length; ++i) {
    res += NUM_NP[str.charCodeAt(i)-48];
  }
  return res;
}

function yearEn_(size) {
  return function(date) {
    if (size <= 2) {
      return String(date.year).substring(2);
    } else if (size === 3) {
      return String(date.year).substring(1);
    } else {
      return date.year;
    }
  }
}

function yearNp_(size) {
  return function(date) {
    if (size <= 2) {
      return npDigit_(String(date.year).substring(2));
    } else if (size === 3) {
      return npDigit_(String(date.year).substring(1));
    } else {
      return npDigit_(String(date.year));
    }
  }
}

function monthEn_(size) {
  return function (date) {
    if (size === 1) {
      return String(date.month);
    } else if (size === 2) {
      return pad_(date.month);
    } else {
      return MONTHS_EN[date.month - 1];
    }
  }
}

function monthNp_(size) {
  return function (date) {
    if (size === 1) {
      return npDigit_(String(date.month));
    } else if (size === 2) {
      return npDigit_(pad_(date.month));
    } else {
      return MONTHS_NP[date.month - 1];
    }
  }
}

function dateEn_(size) {
  return function (date) {
    if (size === 1) {
      return String(date.date);
    } else if (size === 2) {
      return pad_(date.date);
    } else if (size === 3) {
      return WEEKDAYS_SHORT_EN[date.day];
    } else {
      return WEEKDAYS_LONG_EN[date.day];
    }
  }
}

function dateNp_(size) {
  return function (date) {
    if (size === 1) {
      return npDigit_(String(date.date));
    } else if (size === 2) {
      return npDigit_(pad_(date.date));
    } else if (size === 3) {
      return WEEKDAYS_SHORT_NP[date.day];
    } else {
      return WEEKDAYS_LONG_NP[date.day];
    }
  }
}

function pass_(seq) {
  return function() {
    return seq;
  }
}

var fn_ = {
  Y: yearEn_,
  y: yearNp_,
  M: monthEn_,
  m: monthNp_,
  D: dateEn_,
  d: dateNp_,
};

function isSpecial_(ch) {
  return fn_.hasOwnProperty(ch);
}

function tokenize_(formatStr) {
  var inQuote = false;
  var seq = '';
  var special = '';
  var specialSize = 0;

  var tokens = [];

  for (var i = 0; i < formatStr.length; ++i) {
    var ch = formatStr[i];
    if (ch === special) {
      specialSize += 1;
      continue;
    }

    // Time to process special
    if (special !== '') {
      tokens.push(fn_[special](specialSize));
      special = '';
      specialSize = 0;
    }

    if (ch === '"') {
      inQuote = !inQuote;
      continue;
    }

    if (!isSpecial_(ch) || inQuote) {
      seq += ch;
    } else {
      // got a special character
      if (seq) {
        tokens.push(pass_(seq));
        seq = '';
      }

      special = ch;
      specialSize = 1;
    }
  }

  if (seq) {
    tokens.push(pass_(seq));
  } else if (special) {
    tokens.push(fn_[special](specialSize));
  }

  return tokens;
}

/**
 * Convert the given English date (A.D.) to Bikram Samvat (B.S.).
 *
 * @param {Date} date The gregorian date to be converted
 * @param {"YYYY-MM-DD"} format The pattern to format the date. Use a combination of YMDymd
 *   characters for formatting. The upper case (YMD) provides english characters whereas
 *   the lower case (ymd) provides nepali unicode characters. Ex: "yyyy-mmm-dd" returns
 *   २०७४-श्रावण-०२. If omitted the default format pattern is "YYYY-MM-DD".
 * @return A nepali date representation string
 * @customfunction
 */
function NEPALIDATE(date, format) {
  date = validateDate_(date);

  // convert the given date to B.S. Object
  const res = convert_(date);

  // If no format string is provided display separated by '-' with leading zeros
  if (!format) {
    return pad_(res.year) + "-" + pad_(res.month) + "-" + pad_(res.date);
  }

  // Parse the format string for special characters
  // YY     2 digit year
  // YYY    3 digit year
  // YYYY   4 digit year
  // yy     2 digit year in Nepali
  // yyy    3 digit year in Nepali
  // yyyy   4 digit year in Nepali
  // M      month number
  // MM     0 padded 2 digit month
  // MMM    complete month name
  // m      digit month in nepali
  // mm     0 padded 2 digit month in nepali
  // mmm    complete month name in nepali
  // D      date number
  // DD     0 padded date number (2 digit)
  // DDD    week day english short form
  // DDDD   week day english full form
  // d      date number in nepali
  // dd     0 padded date number in nepali (2 digit)
  // ddd    week day nepali short form
  // dddd   week day nepali full form
  return tokenize_(format).map(function(fn) { return fn(res);}).join('');
}

/**
 * Convert the given Nepali date (B.S.) to English Date (A.D.).
 *
 * @param {number} year The nepali year value between 2000 to 2088
 * @param {number} month The nepali month value between 1 to 12
 * @param {number} date The nepali date value between 1 to 32 (upper range is validated according to month)
 * @return A Date object corresponding to the given nepali date.
 * @customfunction
 */
function NEPALIDATE_TO_ENGLISH(year, month, date) {
  var yearNum = parseInt(year);
  var monthNum = parseInt(month);
  var dateNum = parseInt(date);

  var END_YEAR = START_YEAR + NEPALI_DATE_MAP.length;
  if (yearNum < START_YEAR || yearNum > END_YEAR) {
    throw new Error('Nepali date conversion works between ' + START_YEAR + ' B.S to ' + END_YEAR + ' B.S.');
  }

  var yearMap = NEPALI_DATE_MAP[yearNum - START_YEAR];
  if (monthNum < 1 || monthNum > 12) {
    throw new Error('Invalid month number. Should be between 1 to 12.');
  }

  if (dateNum < 1 || dateNum > yearMap[monthNum]) {
    throw new Error('Invalid date number. Should be between 1 to ' + yearMap[monthNum] + '.');
  }

  var result = EPOCH.getTime() / 86400000;
  for(var i = 0; i < (yearNum - START_YEAR); ++i) {
    result += NEPALI_DATE_MAP[i][13];
  }


  for(var m = 1; m < monthNum; ++m) {
    result += yearMap[m];
  }

  result += (dateNum - 1);

  return new Date(result * 86400000);
}
