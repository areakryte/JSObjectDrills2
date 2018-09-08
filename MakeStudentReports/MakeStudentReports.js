function makeStudentsReport(data) {
  // your code here
  var arr = [];

  Object.keys(data).forEach(function(key){
     arr.push(JSON.stringify(data[key].name) + ": " + JSON.stringify(data[key].grade))
  });

  return arr;
}

/*SOLUTION
function makeStudentsReport(data) {
  var results = [];
  for (var i=0; i<data.length; i++) {
    var item = data[i];
    results.push(item.name + ': ' + item.grade);
  }
  return results;
}
*/

/* From here down, you are not expected to
   understand.... for now :)

   Nothing to see here!

*/


// tests

function testIt() {

  var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];

  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  var results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an array');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (var i=0; i < expectations.length; i++) {
    var expect = expectations[i];
    if (!results.find(function(item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();
