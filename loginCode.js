function checkCreds(){
    console.log("checkCreds() started");
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength
// var are the options or required areas to fillout //

    firstName = document.getElementById("fName").value;
    console.log("The first name is: " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name is: " + lastName);

    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is: " +badgeNumb);

    fullName = firstName + " " + lastName;
    console.log("The user's full name is: " + fullName);

    fullNameLength = fullName.length;
    console.log("The user's full name length is: " + fullNameLength + " characthers.");
// full name can not excees more than 20 characters //
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again."
    } else if(badgeNumb > 999 || badgeNumb < 1){
    // badge number cant exceed 999 when inputing number to log in //
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again."
    } else {
        location.replace("./uatSpace.html");
    // location will navigate to a designated page if login was sucessful //
    }

}