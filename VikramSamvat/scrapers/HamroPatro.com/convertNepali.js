const request = require('request');

const AJAX_URI = 'http://www.hamropatro.com/getMethod.php';
const HAMRO_PATRO_REQ_CONFIG = {
  actionName: 'dconverter',
  convert_option: 'nep_to_eng',
};
const RESP_PREFIX = '</strong>';
const RESP_SUFFIX = ' | <span>';

/**
 * Send an AJAX request to hamropatro server and convert the
 * given english date into Nepali date (B.S.).
 *
 * @param {String} date An english date of format YYYY-M-D
 * @return Promise<String>
 */
function convertNepali(date) {
  return new Promise((resolve, reject) => {
    console.log('Requesting for', date);
    request({
      uri: AJAX_URI,
      method: 'POST',
      form: Object.assign({
        state: Math.random(),
        datefield: date,
      }, HAMRO_PATRO_REQ_CONFIG),
    }, (error, response, body) => {
      if (error) {
        return reject(error);
      }

      const startIdx = body.indexOf(RESP_PREFIX) + RESP_PREFIX.length;
      const endIdx = body.indexOf(RESP_SUFFIX);

      if (startIdx < RESP_PREFIX.length) {
        // Most probably the date is out of range
        return reject(new Error('Invalid input date'));
      }

      const dateStr = new Date(body.substring(startIdx, endIdx));
      return resolve(dateStr);
    });
  });
}

module.exports = convertNepali;
