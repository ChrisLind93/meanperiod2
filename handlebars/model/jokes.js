var jokes = [
    "alex is such a faggot, that it is not even funny anymore",
    "at what age is it appropriate to tell your son he is not really a virgin",
    "wat?"
];


module.exports = {
    allJokes : jokes,
    getRandomJoke : function (){
        return jokes[Math.floor(Math.random() * jokes.length)];
    },
    addJoke : function (joke){
        jokes.push(joke);
    }
}

