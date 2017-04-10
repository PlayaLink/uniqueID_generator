function uniqueId() {
  var uniqueId;
  //code that generates the uniqueId;
  return uniqueId;
}

function foo( id = uniqueId() ) {
  // If no ID is passed into the function, uniqueId() is called, which returns a new unique ID and passes that into the function
}


// Another alternative

function required() {
  throw "Parameter required!";
}

function foo( id = required() ){
  // Error is thrown if no ID is passed in
}
