interface IMerge {
  merge: (collection_1: number[], collection_2: number[]) => number[];
}

export const merge: IMerge = {
  merge(collection_1: number[], collection_2: []): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] <= collection_2[j]) result.push(collection_1[i++]);
      else result.push(collection_2[j++]);
    }
    while (i < collection_1.length) result.push(collection_1[i++]);
    while (j < collection_2.length) result.push(collection_2[j++]);

    return result;
    // return [1, 2, 3, 4, 5, 6];
  },
};
