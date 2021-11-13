module.exports = {
  selectionSort: (array) => {
      const n = array.length;

      // One by one move boundary of unsorted subarray
      for (let i = 0; i < n - 1; i++)
      {
          // Find the minimum element in unsorted array
          let min_idx = i;
          for (let j = i+1; j < n; j++)
              if (array[j] < array[min_idx])
                  min_idx = j;

          // Swap the found minimum element with the first
          // element
          const temp = array[min_idx];
          array[min_idx] = array[i];
          array[i] = temp;
      }
      return array
  }
}
