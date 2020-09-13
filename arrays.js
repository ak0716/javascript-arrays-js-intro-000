var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = () => {
  var myArray = [1];
  myArray.unshift('foo');
  return myArray;
}

var myArray = [1];
destructivelyAddElementToBeginningOfArray = (myArray) => {
  myArray.unshift('foo');
  return myArray;
}


addElementToEndOfArray = () => {
  var myArray = [1];
  myArray.push('foo');
  return myArray;
}

var myArray = [1];
destructivelyAddElementToEndOfArray = (myArray) => {
  myArray.push('foo');
  return myArray;
}

accessElementInArray = () => {
  var myArray = [1, 2, 3];
  return myArray[2];
}