A Google Sheet Add on that provides functions on Google Sheet
to convert English Date (A.D.) to Nepali Date/Vikram Samvat (B.S.) 
and vice versa.

# Available Methods
## `NEPALIDATE(date, [format])`  
Convert the given date to a Nepali date (B.S.) with the given format
pattern.

**date**:  
A valid date object or cell reference to a date object.

**format**:  
A format pattern for conversion. Recognized format characters are
`Y`, `M`, `D`, `y`, `m`, and `d`. Rest of the characters are displayed
as it is. The upper case characters provides English texts (Baisakh, Jestha, Sun, Mon, etc) whereas lower case characters provides Nepali texts (बैशाख, जेठ, including numerals). Here are exmaples:  
```
  YYYY-MM-DD => 2074-04-02  
  yyyy-mm-dd => २०७४-०४-०२  
  yyy-mmm-dd => ०७४-श्रावण-०२  
  yy-mmmm-ddd => ७५-श्रावण-सोम  
```
If the format is omitted 'YYYY-MM-DD' is used.

## `NEPALIDATE_TO_ENGLISH(year, month, date)`  
Conver the given nepali date to a date object.

**year**  
A nepali year from 2000 to 2088

**month**  
A nepali month from 1 to 12

**date**  
Date of month from 1 to 32 (depending month of year)
