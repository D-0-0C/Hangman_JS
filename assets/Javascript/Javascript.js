
//global variables
  var word = ["dog", "cat", "monkey", "chicken", "cheetah", "hippotamus", "shark", "ox", "donkey", "llama", "goat",
  "frog", "jellyfish", "fox", "wolf", "starfish", "eagle", "condor", "falcon", "panther", "mule", "sheep", "pig", 
  "duck", "rhinoceros", "kangaroo", "orangutan", "baboon", "lemur", "ferret", "barracuda", "whale", "gibbon",
  "aardvark", "wildebeest", "moose", "cobra", "python", "antelope", "elephant", "jackal", "crow", "vulture", "lynx",
  "bison", "bat", "beaver","deer", "sloth", "buffalo", "capuchin", "chimpanzee", "bonobo", "salamander", "crab",
  "coyote", "flamingo", "dolphin", "puma", "bobcat", "badger", "wolverine", "squirrel", "chipmunk", "turtle",
  "tortoise", "hummingbird", "jaguar", "lion", "tiger", "chameleon", "macaque", "stingray", "ocelot", "peacock"]; 

  var actual_Word = "";
  var letters= [];
  var output = [];
  var incorrect_Letters = [];
  var guessedLetters = [];

  var num = 0;
  var guesses_Left = 14;
  var wins = 0;
  var losses = 0;

//This function is used to reset, randomize, & update the variables involved for the basic function of the actual word & letters
  function startGame() {
    actual_Word = word[Math.floor(Math.random() * word.length)];
    letters = actual_Word.split("");
    underscoreLetters = actual_Word.split("").fill("_")
    console.log(letters)
    console.log(underscoreLetters)
    num = letters.length;
    guessedLetters = [];        
    document.getElementById("chosen-letters").innerHTML = guessedLetters
    

    guesses_Left = 14;
    incorrect_Letters = [];
    output = [];

    for (var i = 0; i < num; i++) {
        output.push = ("_")
        console.log(output) 
    }

    updatecurrentWord();
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guesses_Left;

    };

startGame();

  
// onkey press
document.onkeypress = function (event) {
    // guesses left decreases
    guesses_Left--;
    // Shows guesses left
    document.getElementById("guesses-left").innerHTML = guesses_Left;

    //Stored the guessed letters
    guessedLetters.push(event.key)
    document.getElementById("chosen-letters").innerHTML = guessedLetters;
    
    // Check for if the user lost & tracking losses
    if (guesses_Left <= 0){
        alert("You have lost! Please Try Again")
        losses++;
        document.getElementById("losses").innerHTML = losses;

        startGame();

        return 
        
    }
    //Checking to see if the letter matches
    for(var i=0; i < letters.length; i++ ) {
        if (event.key == letters[i]){
            console.log("true  " + event.key + "  is in the word");
            underscoreLetters[i] = event.key

        }
       
    }
    //This is showing the correct guessed letters
    updatecurrentWord();
    
    //Check to see if the user won & tracking wins
    var underscoreFound = false;
    for( var i= 0; i < underscoreLetters.length; i++) {
        if (underscoreLetters[i] == '_'  ) {
            underscoreFound = true;
        }
    }
    if (underscoreFound == false) {
        alert("You Win!");
        wins++;
        document.getElementById("wins").innerHTML = wins;

        startGame();
    }
};

//The function updates the current word on the DOM & adds spaces between the underscores
function updatecurrentWord () {
    document.getElementById("current-word").innerHTML = underscoreLetters.join(" ");

}





  
