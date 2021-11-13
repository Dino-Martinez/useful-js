module.exports = {
  selectionSort: (array, direction = 0) => {
    const { length } = array

    for (let i = 0; i < length - 1; i++) {
      let extrema = i
      for (let j = i + 1; j < length; j++) {
        // If ascending, check for min. If descending check for max
        if (
          direction ? array[j] > array[extrema] : array[j] < array[extrema]
        ) { extrema = j }
      }

      const temp = array[extrema]
      array[extrema] = array[i]
      array[i] = temp
    }
    return array
  }
}
