/*global collectSameElements*/
'use strict';

describe('practice-1-4', () => {

  const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  ];
  const collectionB = {value: ['a', 'd', 'e', 'f']};

  it('Get the same elements both in key properties of Collection A and value property of Collection B', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
