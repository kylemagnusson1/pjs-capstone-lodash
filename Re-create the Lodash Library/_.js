const _ = {
  clamp(number, lower, upper) {
    lowerClampedValue = Math.max(number, lower);
    clampedValue = Math.min(lowerClampedValue, upper);  
    return clampedValue;
  },
  inRange(number, start, end) {
    if(end === undefined) {
      end = start;
      start = 0;
    };
    if(start > end) {
      const temp = end;
      end = start;
      start = temp;
    };
    const isInRange = start <= number && number < end;
    if(isInRange) {
      return true;
    } else {
      return false;
    }
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    };
    const startPaddingLength = Math.floor((length - string.length)/2);
    const endPaddingLength = (length - string.length) - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' ' .repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    const hasValue = (object[key] !== undefined);
    return hasValue;   
  },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = {originalValue: key};
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
    return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if(n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },
  dropWhile(array, predicate){
    let dropNumber = array.findIndex(function(element, index) {
      return !(predicate(element, index, array));
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    if(size === undefined) {
      size = 1;
    }
    const arrayChunks = [];
    for(let i = 0; i < array.length - 2; i++) {
      const arrayChunk = array.slice(i + i, i + size);
      arrayChunks.push(arrayChunk);
      size++;
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;