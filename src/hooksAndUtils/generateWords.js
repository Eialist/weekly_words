const pickWordsOfTheWeek = (words) => {
    // const wordsOfTheWeek = [];
    // const wordsAvail = words.length;

    // if (numWords > wordsAvail) {
    //     console.error("Du har inte så många ord i listan");

    //     return wordsOfTheWeek;
    // }

    const result = [];
    const shuffledList = words.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 9; i++) {
        result.push(shuffledList[i]);
    }


    // for (let i = 0; i < numWords; i++) {
    //     const randomIndex = Math.floor(Math.random() * words.length);
    //     wordsOfTheWeek.push(words[randomIndex]);
    //     words.splice(randomIndex, 1);
    //     console.log(words);
    // }
    return result;
};


export default pickWordsOfTheWeek; 