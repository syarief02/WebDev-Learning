/* 
This JavaScript code is for a simple tweet functionality. It takes a username and tweet from an HTML form, and on form submission, it appends the tweet to a list of tweets on the webpage. It also has a reset functionality which clears all the tweets from the webpage when a reset button is clicked.
*/

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", handleSubmit);

// Handles form submission
function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;
    addTweet(username, tweet);
    tweetForm.elements.username.value = "";
    tweetForm.elements.tweet.value = "";
}

// Appends tweet to the list of tweets
function addTweet(username, tweet) {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
    tweetsContainer.innerHTML = ""; // Clears all the tweets
})

tweetsContainer.addEventListener("click", function (e) {
    e.target.remove();
})