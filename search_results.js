/**
 * search_results.js
 */
 

 // Execute on load of body element
function initialize() {
    var output = [];
    var result_list = document.getElementById("ResultList");
    // Retrieve mentor_matches from Search.js
    var mentor_matches = JSON.parse(localStorage.getItem("mentor_matches"));
    
    // For each matching mentor...
    for (let [user, info] of Object.entries(mentor_matches)) {
        // Assign JSON artifacts to vars
        var username = user;
        var full_name = `${info["Name"]["First"]} ${info["Name"]["Last"]}`;
        var skills = info["Skills"].join(", ");
        var bio = truncateBio(info["Bio"])
        var rating = info["Rating"]["Stars Rated"] / info["Rating"]["Total Stars"] * 5;
        var email = info["Contact"]["Email"];
        var linkedIn = info["Contact"]["LinkedIn"];
        var image = info["Image"];
        var image_height = "100px"
        var image_width = "100px"
        var evenings = convertBoolean(info["Availability"]["Evenings"]);
        var weekends = convertBoolean(info["Availability"]["Weekend"]);

        // Create li for the ol (ID:ResultList) in search_landing.html
        output.push(
            `<li class="mentor_result">
                <h4 class="mentor_name"> ${full_name} </h4>
                <img src="${image}" alt="${full_name}'s Photo" id = "user_image" style="width: ${image_width}; height ${image_height}; display="block"">
                <p class="username">${username}</p>
                <p class="skills">Skills: ${skills}</p>
                <p class="bio">Bio: ${bio}</p>
                <p class="availability">Evenings: ${evenings} Weekends: ${weekends}</p>
                <p class="rating">Rating: ${rating}</p>
                <button class="email" onclick="emailMentor(${email})">Email</button>
                <button class="email" onclick="navigateLinkedIn(${linkedIn})">LinkedIn</button>

            </li>
            `)
                        
        // Create the li
        result_list.innerHTML = output.join(" ");

    }


    // Bool --> yes/no
    function convertBoolean(bool) {
        if (bool) {
            return "yes";
        }
        else {
            return "no";
        }
    }

    // Creates bio preview
    function truncateBio(bio) {
        if (bio.length > 100) {
            return `${bio.substring(0, 100)}...`;
        }
        else {
            return bio;
        }
    }
}
