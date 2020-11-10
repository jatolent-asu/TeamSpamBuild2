// var tempUser = '';
function edit_profile(){
    // debugger;
    let cool_stuff = document.getElementById("skills");
    let bio = document.getElementById("bio");
    let availability = document.getElementById("availability");
    let edit = document.getElementById("edit");
    if(cool_stuff.hasAttribute("readonly")){
        debugger;
        cool_stuff.removeAttribute("readonly");
        availability.removeAttribute("readonly")
        bio.removeAttribute("readonly");
        edit.innerHTML = "Finish Editing"
    }
    else{
        cool_stuff.setAttribute("readonly", true);
        bio.setAttribute("readonly", true);
        availability.setAttribute("readonly", true);
        edit.innerHTML = "Edit Profile"
    }

}

function linkedin(){
    let link = 'https://google.com'
    window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      );
}

function user_load(){
        // var output = [];
        // var result_list = document.getElementById("ResultList");
        // // Retrieve mentor_matches from Search.js
        // var mentor_matches = JSON.parse(localStorage.getItem("mentor_matches"));

        // For each matching mentor...
        var tempUser = sessionStorage.getItem('user');

       
            var info = mentors[tempUser];
            // Assign JSON artifacts to vars
            
            var username = tempUser;
            var full_name = `${info["Name"]["First"]} ${info["Name"]["Last"]}`;
            var skills = info["Skills"].join(", ");
            var bio = info["Bio"]
            var rating = info["Rating"]["Stars Rated"] / info["Rating"]["Total Stars"] * 5;
            var email = info["Contact"]["Email"];
            var linkedIn = info["Contact"]["LinkedIn"];
            var image = info["Image"];
            var image_height = "100px"
            var image_width = "100px"
            var evenings = convertBoolean(info["Availability"]["Evenings"]);
            var weekends = convertBoolean(info["Availability"]["Weekend"]);
            
        
            document.getElementById('profile-entry').innerHTML = 
            `   <h4 class="mentor_name"> ${full_name} </h4>
                <p class="username">${username}</p>
                <img src="${image}" alt="${full_name}'s Photo" id = "user_image" style="width: ${image_width}; height ${image_height}; display="block">
                <textarea readonly id="skills">Skills: ${skills}</textarea>
                <textarea readonly id="bio">Bio: ${bio}</textarea>
                <textarea readonly id="availability">Evenings: ${evenings} Weekends: ${weekends}</textarea>
                <p class="rating">Rating: ${rating}</p>
                <button class="email" onclick="emailMentor(${email})">Email</button>
                <button class="email" onclick="navigateLinkedIn(${linkedIn})">LinkedIn</button>`
                            
            // Create the li
            // result_list.innerHTML = output.join(" ");
    
        
}
function convertBoolean(bool) {
    if (bool) {
        return "yes";
    }
    else {
        return "no";
    }
}
