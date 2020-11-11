/**
 * Search.js
 */
 
//"use strict";

function renderSearch(){

    // Capture User Search
    var searchValue = document.getElementById("userSearch").value.toLowerCase();
    // mentors is a JSON object located in mentors.js
    var mentor_json = mentors;

    // Create another JSON Object to hold mentors with matching criteria
    var mentor_matches = findMatches(searchValue, mentor_json);
    console.log(mentor_matches);

    // Store the matching_mentors JSON locally so that it can be used across the site
    localStorage.setItem("mentor_matches", JSON.stringify(mentor_matches));

    // Switch to search_landing page
    window.location.href = "search_landing.html";

 
}

function findMatches(search, mentor_list) {
       var mentor_match = {};
       var temp_mentor = {};

       // Iterate through mentor_json k,v style
       for (let [user, info] of Object.entries(mentor_list)) {

            // Convert mentor skills to lowercase for search comparison
            var user_skills = info["Skills"].map((skill) => {
                return skill.toLowerCase();
            });
        
            // Compare skills with search value and accumulate match list
            if (user_skills.includes(search)){
                temp_mentor[user] = info;
                Object.assign(mentor_match, temp_mentor);
            }

        }

    return mentor_match;

}