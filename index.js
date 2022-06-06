const Daily = document.getElementById("daily");
const Weekly = document.getElementById("weekly");
const Monthy = document.getElementById("monthly");

const playCurrent = document.getElementById("play-current");
const workCurrent = document.getElementById("work-current");
const playPrevious = document.getElementById("play-previous");
const workPrevious = document.getElementById("work-previous");
const studyCurrent = document.getElementById("study-current");
const exerciseCurrent = document.getElementById("exercise-current");
const studyPrevious = document.getElementById("study-previous");
const exercisePrevious = document.getElementById("exercise-previous");
const socialCurrent = document.getElementById("social-current");
const selfCurrent = document.getElementById("self-current");
const socialPrevious = document.getElementById("social-previous");
const selfPrevious = document.getElementById("self-previous");

const workTime = {
    daily: {
        current: "5hrs",
        previous: "7hrs"
    },
    weekly: {
        current: "32hrs",
        previous: "36hrs"
    },
    monthly: {
        current: "103hrs",
        previous: "128hrs"
    }
}

const playTime = {
    daily: {
        current: "1hr",
        previous: "2hrs"
    },
    weekly: {
        current: "10hrs",
        previous: "8hrs"
    },
    monthly: {
        current: "23hrs",
        previous: "29hrs"
    }
}

const studyTime = {
    daily: {
        current: "0hr",
        previous: "1hr"
    },
    weekly: {
        current: "4hrs",
        previous: "7hrs"
    },
    monthly: {
        current: "13hrs",
        previous: "19hrs"
    }
}

const exerciseTime = {
    daily: {
        current: "1hr",
        previous: "1hr"
    },
    weekly: {
        current: "4hrs",
        previous: "5hrs"
    },
    monthly: {
        current: "11hrs",
        previous: "18hrs"
    }
}

const socialTime = {
    daily: {
        current: "1hr",
        previous: "3hrs"
    },
    weekly: {
        current: "5hrs",
        previous: "10hrs"
    },
    monthly: {
        current: "21hrs",
        previous: "23hrs"
    }
}

const selfTime = {
    daily: {
        current: "0hrs",
        previous: "1hr"
    },
    weekly: {
        current: "2hrs",
        previous: "2hrs"
    },
    monthly: {
        current: "7hrs",
        previous: "11hrs"
    }
}



// weekly.onclick = () => {
//     workCurrent.textContent = workTime.weekly.current;
//     workPrevious.textContent = workTime.weekly.previous;
//     playCurrent.textContent = playTime.weekly.current;
//     playPrevious.textContent = playTime.weekly.previous;
//     studyCurrent.textContent = studyTime.weekly.current;
//     workPrevious.textContent = workTime.weekly.previous;
//     playCurrent.textContent = playTime.weekly.current;
//     playPrevious.textContent = playTime.weekly.previous;
//     workCurrent.textContent = workTime.weekly.current;
//     workPrevious.textContent = workTime.weekly.previous;
//     playCurrent.textContent = playTime.weekly.current;
//     playPrevious.textContent = playTime.weekly.previous;
// }

// const periods = [
//     Daily,
//     Monthy,
//     Weekly
// ]

// periods.forEach(period => {
//     period.addEventListener("click", () => {
//         console.log(period)
//         period.classList.toggle("active");
//     })
// })

Daily.onclick = () => {
    // Daily.style.color = "white";
    workCurrent.textContent = workTime.daily.current;
    workPrevious.textContent = workTime.daily.previous;
    playCurrent.textContent = playTime.daily.current;
    playPrevious.textContent = playTime.daily.previous;
    studyCurrent.textContent = studyTime.daily.current;
    studyPrevious.textContent = studyTime.daily.previous;
    exerciseCurrent.textContent = exerciseTime.daily.current;
    exercisePrevious.textContent = exerciseTime.daily.previous;
    socialCurrent.textContent = socialTime.daily.current;
    socialPrevious.textContent = socialTime.daily.previous;
    selfCurrent.textContent = selfTime.daily.current;
    selfPrevious.textContent = selfTime.daily.previous;
}

Weekly.onclick = () => {
    // Weekly.style.color = "white";
    workCurrent.textContent = workTime.weekly.current;
    workPrevious.textContent = workTime.weekly.previous;
    playCurrent.textContent = playTime.weekly.current;
    playPrevious.textContent = playTime.weekly.previous;
    studyCurrent.textContent = studyTime.weekly.current;
    studyPrevious.textContent = studyTime.weekly.previous;
    exerciseCurrent.textContent = exerciseTime.weekly.current;
    exercisePrevious.textContent = exerciseTime.weekly.previous;
    socialCurrent.textContent = socialTime.weekly.current;
    socialPrevious.textContent = socialTime.weekly.previous;
    selfCurrent.textContent = selfTime.weekly.current;
    selfPrevious.textContent = selfTime.weekly.previous;
}

Monthy.onclick = () => {
    // Monthy.style.color = "white";
    workCurrent.textContent = workTime.monthly.current;
    workPrevious.textContent = workTime.monthly.previous;
    playCurrent.textContent = playTime.monthly.current;
    playPrevious.textContent = playTime.monthly.previous;
    studyCurrent.textContent = studyTime.monthly.current;
    studyPrevious.textContent = studyTime.monthly.previous;
    exerciseCurrent.textContent = exerciseTime.monthly.current;
    exercisePrevious.textContent = exerciseTime.monthly.previous;
    socialCurrent.textContent = socialTime.monthly.current;
    socialPrevious.textContent = socialTime.monthly.previous;
    selfCurrent.textContent = selfTime.monthly.current;
    selfPrevious.textContent = selfTime.monthly.previous;
}