/*global countSameElements*/
'use strict';

describe('practice-2-1', () => {

  const collection = [
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

  it('Counting the same elements in Collection A', () => {

    const result = countSameElements(collection);

    expect(result).toEqual([
      {key: 'a', count: 3},
      {key: 'e', count: 7},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 9},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 5}
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








