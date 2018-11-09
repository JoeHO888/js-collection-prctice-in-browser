/*global countSameElements*/
'use strict';

describe('practice-2-2', () => {

  const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
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
	  if (count_object.hasOwnProperty(collection[i]) && collection[i].indexOf('-') == -1)
	  {
		 count_object[collection[i]] +=1;
      }else if(!(count_object.hasOwnProperty(collection[i])) && collection[i].indexOf('-') == -1){
		  count_object[collection[i]] =1;
	  }
	  
	  if (collection[i].indexOf('-') > -1){
		  count_object[collection[i].substring(0,collection[i].indexOf('-'))] = parseInt(collection[i].substring(collection[i].indexOf('-')+1,collection[i].length));
	  }
  }
  
  for (var property in count_object) {
    if (count_object.hasOwnProperty(property)) {
        count_array.push({key: property, count: count_object[property]});
    }
  }
  //console.log(count_object);
  return count_array;
}



