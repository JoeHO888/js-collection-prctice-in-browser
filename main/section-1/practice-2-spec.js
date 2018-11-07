/*global collectSameElements*/
'use strict';

describe('practice-1-2', () => {

  const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = [['a', 'd', 'e', 'f']];

  it('Get the same elements both in Collection A and the sub Collection of Collection B', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
