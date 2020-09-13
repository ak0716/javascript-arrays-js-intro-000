var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = () => {
  var myArray = [1];
  myArray.unshift('foo');
  return myArray;
}

var myArray = [1];
destructivelyAddElementToBeginningOfArray = () => {
  myArray.unshift('foo');
  return myArray;
}
