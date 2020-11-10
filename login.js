
function login(){
    // debugger;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let check_user = mentors[user];

    if (pass == check_user["Password"]){
        window.alert("Login Successful")
        document.location.href = "profile.html";
        sessionStorage.setItem("user", "thdespai");
    }
    else{
        window.alert("Login Failed")
    }
}