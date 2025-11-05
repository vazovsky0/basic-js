const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // 1. Проверка на некорректный аргумент
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const tempArr = [...arr];

  for (let i = 0; i < tempArr.length; i++) {
    const current = tempArr[i];

    switch (current) {
      case "--discard-next":
        if (i < tempArr.length - 1) {
          tempArr[i + 1] = null;
        }
        break;

      case "--discard-prev":
        if (i > 0 && tempArr[i - 1] !== null) {
          result.pop();
        }
        break;

      case "--double-next":
        if (i < tempArr.length - 1) {
          result.push(tempArr[i + 1]);
        }
        break;

      case "--double-prev":
        if (i > 0 && tempArr[i - 1] !== null) {
          result.push(tempArr[i - 1]);
        }
        break;

      default:
        if (current !== null) {
          result.push(current);
        }
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
