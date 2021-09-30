//Signup Page:

if (localStorage.getItem("myUsers") === null){
      
    localStorage.setItem("myUsers", "[]");
}

let myUsers = localStorage.getItem("myUsers");

myUsers = JSON.parse(myUsers);

let signup_button = document.getElementById("signupbutton");
signup_button.addEventListener("click", function(){

let name = document.getElementById("signupFullName").value;
let email = document.getElementById("signupemail").value;
let mobile = document.getElementById("signupMobileNumber").value;
let password = document.getElementById("signupPassword").value;

let gender_select = document.querySelectorAll('input[name="gender"]');
for (let i = 0; i < gender_select.length; i++){
if (gender_select[i].checked){
    var gender = gender_select[i].id;
}
}

    const user = {
        username: name,
        useremail: email,
        usermobile: mobile,
        userpassword: password,
        usergender: gender
    }
    myUsers.push(user);
    
    const userdetails_json = JSON.stringify(myUsers);
    localStorage.setItem("myUsers", userdetails_json);
    window.location.href = "sendotp.html"
})