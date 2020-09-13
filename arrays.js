var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var myArray;
function addElementToBeginningOfArray(myArray, a) {
  myArray = [1];
  return myArray.unshift('foo');
}

addElementToBeginningOfArray()
