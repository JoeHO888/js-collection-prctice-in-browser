/*global collectSameElements*/
'use strict';

describe('practice-1-3', () => {

  const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = {value: ['a', 'd', 'e', 'f']};

  it('Get the same elements both in Collection A and the value property of Object B', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});


function collectSameElements(collectionA, collectionB) {
  var c = new Array();
  collectionB = collectionB.value;
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