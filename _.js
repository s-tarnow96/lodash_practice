_ = {
    clamp(number, lower, upper) {
        lowerClampedValue = Math.max(lower, number)
        clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue
    },
    inRange(number, start, end) {
        if (end == undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            new_end = start
            start = end
            end = new_end
        }
        isInRange = Boolean(start <= number && number < end)
        return isInRange
    },
    words(string) {
        words = string.split(" ")
        return words
    },
    pad(string, length) {
        if (length <= string.length) {
            return string
        }
        startPaddingLength = Math.floor((length - string.length) / 2)
        endPaddingLength = length - string.length - startPaddingLength
        paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength)
        return paddedString
    },
    has(object, key) {
        hasValue = Boolean(object[key] != undefined)
        return hasValue
    },
    invert(object) {
        inverted = {};
        for (property in object) {
            inverted[object[property]] = property
        }
        return inverted
    },
    findKey(object, predicate) {
        for (key in object) {
            if (predicate(object[key])) {
                return key
            }
        }
        return undefined
    },
    drop(array, number) {
        if (number == undefined) {
            number = 1
        }
        droppedArray = array.slice(number, array.length)
        return droppedArray
    },
    dropWhile(array, predicate) {
        droppedArray = [];
        dropNumber = array.findIndex(function(element, index) {return !predicate(element, index, array)});
        droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        if (size === undefined) {
            size = 1;
        };
        arrayChunks = [];
        for (let i = 0; i < array.length; i = i+size) {
            arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};




// Do not write or modify code below this line.
module.exports = _;