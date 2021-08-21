//Get the string from the page
function getString(){
    
    //hide the alert box
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    //Call reverseString function
    let revString = reverseString(userString);

    let palindrome = isPalindrome(userString, revString);

    if (palindrome) {
        
        //Call displayString function
        displayPalindrome(revString);

    } else {
        alert("Sorry! Your phrase is not a palidrome.")
    }
}

//Reverse the string
function reverseString(userString){

    let revString = [];

    //Reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    return revString;
}

//Check to see if string is a palindrome
function isPalindrome(string1, string2){
    
    for (let index = 0; index < string1.length; index++) {
                
        if (string1[index] != string2[index]) {
                
            return false;
        }        
    }
    return true;
}

//Display the reversed string to the page
function displayPalindrome(revString){

    //write the string to the page
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}