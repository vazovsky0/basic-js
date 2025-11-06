const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

/**
 * Create a repeating string based on the given parameters
 */
function repeater(str, options) {
  const baseStr = String(str);
  const addition = "addition" in options ? String(options.addition) : undefined;

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";

  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  let additionStr = "";
  if (addition !== undefined) {
    const additionParts = Array(additionRepeatTimes).fill(addition);
    additionStr = additionParts.join(additionSeparator);
  }

  const subString = baseStr + additionStr;
  const finalParts = Array(repeatTimes).fill(subString);
  return finalParts.join(separator);
}

module.exports = {
  repeater,
};

let obj = {
  repeatTimes: 3,
  separator: "**",
  addition: "PLUS",
  additionRepeatTimes: 3,
  additionSeparator: "00",
};

console.log(repeater("STRING", obj));

module.exports = {
  repeater,
};
