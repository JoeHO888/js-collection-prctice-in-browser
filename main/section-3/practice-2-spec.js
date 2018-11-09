/*global createUpdatedCollection*/
'use strict';

describe('practice-3-2', () => {

  const collectionA = [
    {key: 'a', count: 3},
    {key: 'e', count: 7},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 9},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 5}
  ];

  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('Get the same elements both in key properties of Collection A and value property of Collection B, then let the count minus 1 if count full 3 and output the new collection', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {key: 'a', count: 2},
      {key: 'e', count: 5},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 6},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 4}
    ]);
  });
});



function createUpdatedCollection(collectionA, objectB){
	var arrayB = objectB["value"];
	
	for (var i = 0; i < collectionA.length; i++) { 
		var e = collectionA[i]["key"];
		var decrement = Math.floor(collectionA[i]["count"]/3); 
		var value = collectionA[i]["count"];
		for (var j = 0; j < arrayB.length; j++) { 
			if (e == arrayB[j]){
				value -=decrement;
			}
		}
		collectionA[i] = {key: e, count: value};
	}
	console.log(collectionA);
	return collectionA
}