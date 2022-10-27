// *** targeting timer  *** //
const timer = document.querySelector('.timer')

// ***  targeting all boxes   *** //
const daysBox = timer.childNodes[1].children[0]
const hourBox = timer.childNodes[3].children[0]
const minutesBox = timer.childNodes[5].children[0]
const secondBox = timer.childNodes[7].children[0]



// *** setting time here *** //

// let endingTime = new Date("October 28, 2022 11:13:04"); //<====Your date will be here

// getting today's time 
let beginningTime = new Date();

let endingTime = beginningTime.setDate(beginningTime.getDate() + 3);// comment this line 

function clock() {
    let beginningTime = new Date();
    if ((endingTime - beginningTime) > 0) {
        // *** calculating difference *** //
        const different = (endingTime - beginningTime) / 1000; //from millisecond to second
        // *** calculating days *** //
        daysBox.value = Math.floor(different / 3600 / 24)
        // *** calculating hours *** //
        hourBox.value = Math.floor((different / 3600) % 24)
        // *** calculating minutes *** //
        minutesBox.value = Math.floor((different / 60) % 60)
        // *** calculating seconds *** //
        secondBox.value = Math.floor((different) % 60)
    }
}
setInterval(clock, 1000)



