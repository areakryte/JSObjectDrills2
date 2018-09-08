// running the function with `objectA` and `expectedKeys`
// should return `true`
var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
 // your code here
 if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

 Object.keys(object).forEach(function(key){
   for(var i = 0; i <= expectedKeys.length; i++){
    if(object.keys.find(expectedKeys[i]) === undefined){
      return false;
    }
  }
 });

 /*SOLUTION
 for (var i; i<expectedKeys.length; i++) {
  if (!Object.keys(object).find(function(key) {
    return key === expectedKeys[i];
  })) {
    return false;
  }
}
 */

 return true;
}


/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



function testIt() {
  var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  var objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  var expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }

  console.log('SUCCESS: `validateKeys` is working');
}

testIt()
