
function login(){
     localStorage.clear();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let check_user = mentors[user];

    if (pass == check_user["Password"]){
        debugger;
        window.alert("Login Successful")
        sessionStorage.setItem("user", user);
        window.open("profile.html");

    }
    else{
        window.alert("Login Failed")
    }
}