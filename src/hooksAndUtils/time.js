

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthsOfTheYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const getTime = () => {
  let currentDay = new Date();
  let day = daysOfTheWeek[currentDay.getDay() - 1];
  let date = currentDay.getDate();
  let month = monthsOfTheYear[currentDay.getMonth()];
  let hour = currentDay.getHours();
  let minutes = currentDay.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let todaysDate =
    day + " " + date + " " + month + " kl. " + hour + ":" + minutes;
  return todaysDate;
};



export default getTime;
