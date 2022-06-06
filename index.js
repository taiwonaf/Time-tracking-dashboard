const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthy = document.getElementById("monthly");

const playCurrent = document.getElementById("play-current");
const workCurrent = document.getElementById("play-current");
const playPrevious = document.getElementById("play-previous");
const workPrevious = document.getElementById("work-previous");

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

const studyTime = {
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

const exerciseTime = {
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

const socialTime = {
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

const selfTime = {
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



weekly.onclick = () => {
    workCurrent.textContent = workTime.weekly.current;
    workPrevious.textContent = workTime.weekly.previous;
    playCurrent.textContent = playTime.weekly.current;
    playPrevious.textContent = playTime.weekly.previous;
}