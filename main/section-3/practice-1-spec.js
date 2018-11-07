/*global createUpdatedCollection*/
'use strict';

describe('practice-3-1', () => {

  const collectionA = [
    {key: 'a', count: 2},
    {key: 'e', count: 2},
    {key: 'h', count: 2},
    {key: 't', count: 2},
    {key: 'f', count: 2},
    {key: 'c', count: 2},
    {key: 'g', count: 2},
    {key: 'b', count: 2},
    {key: 'd', count: 2}
  ];

  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('Get the same elements both in key properties of Collection A and value property of Collection B, then let the count minus 1(count - 1) and output the new collection', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {key: 'a', count: 1},
      {key: 'e', count: 1},
      {key: 'h', count: 2},
      {key: 't', count: 2},
      {key: 'f', count: 1},
      {key: 'c', count: 2},
      {key: 'g', count: 2},
      {key: 'b', count: 2},
      {key: 'd', count: 1}
    ]);
  });
});


function createUpdatedCollection(collectionA, objectB){
	var arrayB = objectB["value"];
	
	for (var i = 0; i < collectionA.length; i++) { 
		var e = collectionA[i]["key"];
		var value = collectionA[i]["count"];
		for (var j = 0; j < arrayB.length; j++) { 
			if (e == arrayB[j]){
				value -=1;
			}
		}
		collectionA[i] = {key: e, count: value};
	}
	console.log(collectionA);
	return collectionA
}
