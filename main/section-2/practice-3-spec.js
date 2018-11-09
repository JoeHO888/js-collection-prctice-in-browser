/*global countSameElements*/
'use strict';

describe('practice-2-3', () => {

  const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c:8',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];

  it('Counting the same elements in Collection A', () => {
    const result = countSameElements(collection);
    expect(result).toEqual([
      {name: 'a', summary: 3},
      {name: 'e', summary: 7},
      {name: 'h', summary: 11},
      {name: 't', summary: 19},
      {name: 'f', summary: 9},
      {name: 'c', summary: 8},
      {name: 'g', summary: 7},
      {name: 'b', summary: 6},
      {name: 'd', summary: 5}
    ]);
  });
});

function countSameElements(collection) {
  var count_object = {};
  var count_array = [];
  for(var i = 0; i<collection.length ; i++)
  {
	if (hasSpecialCharacter(collection[i])){
		var key = extractCharacter(collection[i]);
		var value = parseInt(extractMiddleNumber(collection[i]));
		
		
		if (count_object.hasOwnProperty(key)){
			count_object[key] +=value;
		}else{
			count_object[key] =value;
		}
		
	}else{
		if (count_object.hasOwnProperty(collection[i])){
			count_object[collection[i]] +=1;
		}else{
			count_object[collection[i]] =1;
		}
		
	}

  }
  for (var property in count_object) {
	
    if (count_object.hasOwnProperty(property)) {
		
        count_array.push({name: property, summary: count_object[property]});
    }
  }
  console.log(count_array);
  return count_array;
}



function hasSpecialCharacter(str){
	var specialCharacters = '?;:][=+-';
	for (var i = 0; i<specialCharacters.length ; i++){
		if (str.indexOf(specialCharacters.substring(i,i+1)) > -1 ){
			return true
		}
	}
	return false
}


function extractMiddleNumber(str){
	var startIndex = 0;
	var endIndex = str.length;
	
	var specialCharacters = '?;:][=+-';
	
	for (var i = 0; i<specialCharacters.length ; i++){
		if (str.indexOf(specialCharacters[i]) > -1 ){
			startIndex = str.indexOf(specialCharacters[i])+1;
		}
	}
	
	for (var i = 0; i<specialCharacters.length ; i++){
		if (str.substring(startIndex,str.length).indexOf(specialCharacters[i]) > -1 ){
			endIndex = str.substring(startIndex,str.length).indexOf(specialCharacters[i])+startIndex;
		}
	}
	return str.substring(startIndex,endIndex)
}


function extractCharacter(str){
	var startIndex = 0;

	
	var specialCharacters = '?;:][=+-';
	
	for (var i = 0; i<specialCharacters.length ; i++){
		if (str.indexOf(specialCharacters[i]) > -1 ){
			startIndex = str.indexOf(specialCharacters[i]);
		}
	}

	return str.substring(0,startIndex)
}


