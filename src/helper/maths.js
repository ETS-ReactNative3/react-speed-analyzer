/**
 * Rounds a floating point number to tenth.
 *
 * E.g.: 4.555435345345 -> 4.6
 *
 * @param {number} num The number to round.
 * @return {number} The rounded number.
 */
export function roundToTenths(num) {
  return Math.round(num * 10) / 10
}

/**
 * Rounds a floating point number to hundredth.
 *
 * E.g.: 4.555435345345 -> 4.56
 *
 * @param {number} num The number to round.
 * @return {number} The rounded number.
 */
export function roundToHundredths(num) {
  return Math.round(num * 100) / 100
}

/**
 * @param {number} float The float to format.
 * @return {string} A formatted percentage.
 */
export function formatPercentage(float) {
  return Math.floor(float * 100).toFixed(0)
}

export function zeroSafeDiv(divisor, dividend) {
  return divisor / Math.max(dividend, 1)
}

/**
 * Check whether the number is already a round number to 100
 *
 * @param {number} num The number
 * @returns {boolean} true, if the number is rounded to 100
 */
export function isWholeNumberToHundreds(num) {
  return num % 100 === 0
}

/**
 * Rounds the given number to the nearest 10
 *
 * @param {number} num The number to round to nearest 10
 * @returns {number} The rounded number
 */
export function roundToNearestTen(num) {
  return Math.round(num / 10) * 10
}
