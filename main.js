// Step 1
// Below, there is a string called story. We want to gather some information about the individual words and sentences in the string. 
// Let’s split the string into individual words and save them in a new array called storyWords.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

// Step 2
// Log how many words there are in this story to the console.

// console.log(storyWords.length);

// Step 3
// There is an array of words that are unnecessary. Iterate over your array to filter out these words.
// Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

function filterOut (array, iteratorFunction) {
    return array.filter(function(item) {
        return !iteratorFunction(item);
    });
}

let betterWords = filterOut(storyWords, function (storyWord) {
    for(let i=0; i<unnecessaryWords.length; i++) {
        if(storyWord === unnecessaryWords[i]) {
            return true;
        }
    } 
});

// Step 4
// There is an array of words called overusedWords. These are words overused in this story.
// You want to let the user of your program know how many times they have used these overused words.
// There are two ways to achieve this. Try it on your own first.

let overusedWordsUse = storyWords.filter(function (storyWord) {
    for(let i=0; i<overusedWords.length; i++) {
        if(storyWord === overusedWords[i]) {
            return true;
        }
    }
});

// Step 5
// Now, count how many sentences are in the paragraph.
// This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!).
// You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as 
// its final character.

let sentencesCount = 0
for (let i = 0; i < storyWords.length; i++) {
    if(storyWords[i].match(/(\.|!)/)) {
        sentencesCount++;
    }
}

// Step 6
// Log these items to the console:
// The word count
// The sentence count
// The number of times each overused word appears
// You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

console.log(`There are ${storyWords.length} words in the story.`);
console.log(`There are ${sentencesCount} sentences in the story.`);
console.log(`You have ${overusedWordsUse.length} overused words.`);

// Step 7
// Now, log the betterWords array to the console as a single string.

console.log(betterWords.join(' '));

// Write a function that finds the word that appears the greatest number of times.

const findFrequency = function(array) {

    let counts = {};    //This is to store the count of an item in the array
    let compare = 0;    //This is used to compare to the count above and decide if it is more or less frequesnt in the array
    let mostFrequent;   //This will store the most frequent item in the array

    for(var i = 0, len = array.length; i < len; i++){ //Loop through every item in the array
        var word = array[i];    //set a variable equal to an array item. each loop through will set this to the next array item
     
        if(counts[word] === undefined){ //If this is the first time seeing this item -->
           counts[word] = 1;            //then set the count to one
        }else{                  
           counts[word]++;              //If the item is seen again after the first time, add one to the count.
        }
        if(counts[word] > compare){     //If the word count is larger than 0 (0 only on first loop)
           compare = counts[word];      //set the compare value to the word count value
           mostFrequent = array[i];     //Set the mostFrequent to the array item. After the loop is complete, mostFrequent will be set to the correct value.
        }
    };
    return mostFrequent;
}

console.log(findFrequency(storyWords));

