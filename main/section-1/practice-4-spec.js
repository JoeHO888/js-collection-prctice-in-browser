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


function collectSameElements(collectionA, collectionB) {
  var c = new Array();
  collectionB = collectionB.value;
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionB.length ; j++)
    {
      if (collectionA[i].key == collectionB[j])
      {
        c.push(collectionA[i].key);
        break;
      }
    }
  }
  console.log(c);
  return c;

}