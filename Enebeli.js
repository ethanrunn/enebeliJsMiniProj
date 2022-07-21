// create an object function to store the user details
let userDetailsDatabase = {}

function getUserDetails(){

// userName 
    let userName = prompt('Enter your username')
    if (userName==null){
        return
    }
function validateUsername(userName){
    if (userName.length>0 && userName.length<10) {
        return true
    }
    else {
        return false
    }
}
console.log(validateUsername(userName))
while (validateUsername(userName) == false){
    userName = prompt('Username must be more than 0 and less than 10')
}
userDetailsDatabase['UserName'] = userName

// email
let email = prompt('Enter your email address')
if (email==null){
    return
}
function validateEmail(email){
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true){
    return true
} else {
    return false
}
}
console.log(validateEmail(email))
while (validateEmail(email) == false){
    email = prompt('Enter a valid email address')
}
userDetailsDatabase['Email'] = email

// phoneNumber
let phoneNumber = prompt('Enter your phone number')
if (phoneNumber==null){
    return
}
function validatePhoneNumber(phoneNumber){
    if (phoneNumber.length == 11) {
        return true
    }else {
        return false
    }
}
console.log(validatePhoneNumber(phoneNumber))
while (validatePhoneNumber(phoneNumber) == false){
    phoneNumber = prompt('Phone number must be 11 digits')
}
userDetailsDatabase['PhoneNumber'] = phoneNumber

// password
let password = prompt('Enter your password')
if (password==null){
    return
}
function validatePassword(password){
    if(password.length < 6){
        return false
    }else{
        return true
    }
}
console.log(validatePassword(password))
while (validatePassword(password) == false){
    password = prompt('Password must be more than five characters')
}
userDetailsDatabase['Password'] = password

// confirmPassword
let confirmPassword = prompt('Confirm your password')
if (confirmPassword==null){
    return
}
function validateConfirmPassword(confirmPassword){
    if(confirmPassword == password){
        return true
    }else{
        return false
    }
}
// alternatively, we can use (!= which means 'not equal')
// if(confirmPassword != password){
// return false
// }else{
// return true
// }

console.log(validateConfirmPassword(confirmPassword))
while (validateConfirmPassword(confirmPassword) == false){
    confirmPassword = prompt('Password does not match!!!')
}
userDetailsDatabase['Confirm Password'] = confirmPassword

console.log(userDetailsDatabase)
}

 function displayUserDetails() {
     alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\nEmail: ${userDetailsDatabase.Email}\nPhone Number: ${userDetailsDatabase.PhoneNumber}`)
 }



// Validate email code (gotten online)
// function ValidateEmail(inputText){
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat)){
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
// }
// else {
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
// }
// }