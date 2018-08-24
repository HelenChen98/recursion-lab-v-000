function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(mystring){
  if (mystring === ""){ // This is the terminal case that will end the recursion
    return "";
  }
  else{
    return reverseString(mystring.substr(1)) + mystring.charAt(0);
  }

}

function isPalindrome(mystring){

  return mystring == reverseString(mystring);
}


