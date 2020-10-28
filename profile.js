function edit_profile(){
    let cool_stuff = document.getElementById("info");
    let bio = document.getElementById("bio");
    let edit = document.getElementById("edit");
    if(cool_stuff.hasAttribute("readonly")){
        debugger;
        cool_stuff.removeAttribute("readonly");
        bio.removeAttribute("readonly");
        edit.innerHTML = "Finish Editing"
    }
    else{
        cool_stuff.setAttribute("readonly", true);
        bio.setAttribute("readonly", true);
        edit.innerHTML = "Edit Profile"
    }

}