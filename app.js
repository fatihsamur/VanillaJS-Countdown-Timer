// DOM elements
const nextYearBox = document.getElementById("next-year");
const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");

// call function first to display content immediately
displayTimer();
//update current Time and Time difference data every seconds
setInterval(() => displayTimer(), 1000);

function displayTimer() {
  // current Date
  const now = new Date();
  // next Year
  const nextYear = now.getUTCFullYear() + 1;
  // first day of next year
  const firstDayOfNewYear = new Date(`${nextYear}, 01, 01`);

  // total difference in mili-seconds
  const msDif = firstDayOfNewYear - now;

  // total difference in seconds
  const secondsDif = Math.floor(msDif / 1000);

  // difference in days
  const difDays = Math.floor(secondsDif / 86400);

  // difference in hours
  const hoursDif = Math.floor((secondsDif % 86400) / 3600);

  // difference in minutes
  const minDif = Math.floor(
    (secondsDif - difDays * 86400 - hoursDif * 3600) / 60
  );

  // remaining difference in seonds
  const remainingSecondsDif =
    secondsDif - difDays * 86400 - hoursDif * 3600 - minDif * 60;

  // show text on screen
  nextYearBox.innerText = nextYear;
  daysBox.innerText = difDays;
  hoursBox.innerText = hoursDif;
  minutesBox.innerText = minDif;
  secondsBox.innerText = remainingSecondsDif;
}
