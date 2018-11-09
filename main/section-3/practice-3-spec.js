/*global createUpdatedCollection*/
'use strict';

describe('practice-3-3', () => {

  const collectionA = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd', 'd', 'd', 'd', 'd'
  ];


  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('Counting the same elements in Collection A and get a new Collection C. the elements in C should like {key:"a", count: 3}. then Get the same elements both in key properties of Collection C and value property of Collection B, counting them and follow the rule which is full three minus one in Collection C, ouput the new Collection C', () => {

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

function countSameElements(collection) {
  var count_object = {};
  var count_array = [];
  for(var i = 0; i<collection.length ; i++)
  {
	  if (count_object.hasOwnProperty(collection[i]))
	  {
		 count_object[collection[i]] +=1;
      }else{
		  count_object[collection[i]] =1;
	  }
  }
  
  for (var property in count_object) {
    if (count_object.hasOwnProperty(property)) {
        count_array.push({key: property, count: count_object[property]});
    }
  }
  return count_array;
}

function createUpdatedCollection(collectionA, objectB){
	collectionA = countSameElements(collectionA);
	
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

