const AnagramFinder = function (word) {
    this.word = word
    this.wordListSorted = word.toLowerCase().split("").sort()
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter((word) => {
        if (this.word === word || this.word.length !== word.length){
            return false
        };
        let sortedWord = word.toLowerCase().split("").sort()
         return sortedWord.every((char) => {
            return this.wordListSorted[sortedWord.indexOf(char)] === char 
        });
    });
}

module.exports = AnagramFinder;
