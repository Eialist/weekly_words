import adjectives from "../db/Adjectives";
import animals from "../db/Animals";
import cityWords from "../db/City";
import houseWords from "../db/Domestic";
import farmWords from "../db/Farm";
import foods from "../db/Foods";
import fruits from "../db/Fruits";
import hobbiesWords from "../db/Hobbies";
import commonWords from "../db/MostCommonWords";
import schoolWords from "../db/School";
import verbs from "../db/Verbs";
import words from "../db/wordList";


const weekLists = [
    adjectives, animals, cityWords, houseWords, farmWords, foods, fruits, hobbiesWords, commonWords, schoolWords, verbs, words
]

const generateNewWeekList = () => {
    let currentDate = new Date();
    const getWeekNumber = (date) => {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
    let currentWeek = getWeekNumber(currentDate);

    const indexToShow = (currentWeek - 1) % weekLists.length;
    const thisWeeksList = weekLists[indexToShow];
    return thisWeeksList;
}

export default generateNewWeekList; 