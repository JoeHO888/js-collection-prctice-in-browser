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


function collectSameElements(collectionA, collectionB) {
  var c = new Array();
  collectionB = collectionB[0];
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionB.length ; j++)
    {
      if (collectionA[i] == collectionB[j])
      {
        c.push(collectionA[i]);
        break;
      }
    }
  }
  return c;

}