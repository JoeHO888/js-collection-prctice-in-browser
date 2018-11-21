'use strict';




const collectSameElements = (collectionA, collectionB)=>collectionA.filter(a=>collectionB.value.includes(a.key)).map(_=>_.key)