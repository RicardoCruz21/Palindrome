//Get the string from the page
function getString(){
    
    //hide the alert box
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    //Check to see if string is a Palindrome
    let returnObj = isPalindrome(userString);
        
    //Call displayString function
    displayPalindrome(returnObj);

}

//Reverse the string
function isPalindrome(userString){

    userString = userString.toLowerCase();

    //Remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    //Reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome!";
    }
    else {
        returnObj.msg = "Sorry! You did not enter a palindrome!";
    }

    returnObj.reversed = revString;

    return returnObj;
}

//Display the reversed string to the page
function displayPalindrome(returnObj){

    //Let the user know if palindrome to the page
    document.getElementById("alertHeader").innerHTML = returnObj.msg;

    //write the reversed string to the page
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}