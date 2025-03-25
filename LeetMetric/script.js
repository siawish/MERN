document.addEventListener("DOMContentLoaded",function(){

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");

    const statsContainer = document.querySelector(".stats-container");

    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easylabel = document.getElementById(".easy-label");
    const mediumlabel = document.getElementById(".medium-label");
    const hardlabel = document.getElementById(".hard-label");

    const cardStatsContainer = document.querySelector(".stats-cards");
 
    function validateusername(username){
        if(username.trim === ""){
            alert("Username should not be empty");
            return false;
        }
        const regex= /^[a-zA-Z0-9_-]{1,15}$/;

        const isMatching= regex.test(username);
        if (!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }


    async function fetchUserDetails(username){
        const url=`https://leetcode-stats-api.herokuapp.com/${username}`;
        try{
            searchButton.textContent="Searching...";
            searchButton.disabled=true;
            
            const response= await fetch(url);
            if (!response.ok){
                throw new Error("Unable to fetch the User Details");
            }
            const data= await response.json // parsing
            console.log("logging data", data);
        }
        catch(error){

        }
        finally{
             
        }
    }


    searchButton.addEventListener("click", function(){
        const username=usernameInput.value;
        console.log("logging username:", username);
        if(validateusername(username)){
            fetchUserDetails(username);
        }
    })
})

