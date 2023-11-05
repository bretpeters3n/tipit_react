// target input and enter number
let tempTotal = document.getElementById('originalPrice');
// tempTotal.value="69"; 

// target radio button and select it
let tempTipPerc = document.getElementById('tip-20-perc');
// tempTipPerc.checked = true;

// target 'Calculate' botton and press is
output();

// nav links
function navigate(url) {
    window.location.href=url;
}

// tip choice acions
function tipChoice(choice) {

    if (choice=='high') {
        // console.log('You chose the high tip');
        let highLow = 'high';
        let total = document.getElementById('hTotal').innerText;
        let tip = document.getElementById('hTip').innerText;
        let tipPerc = document.getElementById('hTipPerc').innerText;
        let eventDate = new Date();
        // let result = confirm("Confirm " + highLow + " tip?");
        // if (result) {
            console.log(highLow + ' ' + total + ' ' + tip + ' ' + tipPerc + ' ' + eventDate);
            // set and save tips object
            let tipEvent = {
                highLow: highLow,
                total: total,
                tip: tip,
                tipPerc: tipPerc,
                eventDate: eventDate,
            };
            let tipEventTest = { highLow: tipEvent.highLow, total: tipEvent.total, total: tipEvent.total, tipPerc: tipEvent.tipPerc, eventDate: tipEvent.eventDate };
            tipEvents.push(tipEventTest);
            localStorage.setItem('tipEvents', JSON.stringify(tipEvents));
        // }
    } else if (choice=='low') {
        // console.log('You chose the low tip');
        let highLow = 'low';
        let total = document.getElementById('lTotal').innerText;
        let tip = document.getElementById('lTip').innerText;
        let tipPerc = document.getElementById('lTipPerc').innerText;
        let eventDate = new Date();
        // let result = confirm("Confirm " + highLow + " tip?");
        // if (result) {
            console.log(highLow + ' ' + total + ' ' + tip + ' ' + tipPerc + ' ' + eventDate);
            // set and save tips object
            let tipEvent = {
                highLow: highLow,
                total: total,
                tip: tip,
                tipPerc: tipPerc,
                eventDate: eventDate,
            };
            let tipEventTest = { highLow: tipEvent.highLow, total: tipEvent.total, total: tipEvent.total, tipPerc: tipEvent.tipPerc, eventDate: tipEvent.eventDate };
            tipEvents.push(tipEventTest);
            localStorage.setItem('tipEvents', JSON.stringify(tipEvents));
        // }
    } else {
        console.log('high or low not caught, error.');
    }
}

// saved initial tips object
let tipEvent = {
    highLow: 'high',
    total: '$83.38',
    tip: '$14.38',
    tipPerc: '20.84%',
    date: '01 January, 1970 00:00:00 Universal Time (UTC)',
};

// initiate tipEvents array and add first object ^
let tipEventTest = { highLow: tipEvent.highLow, total: tipEvent.total };

// if array does not exist, create it and load it
// if (tipEvents!=null) {
//     let tipEvents = [];
//     tipEvents.unshift(tipEventTest);
// }

let tipEvents = JSON.parse(localStorage.getItem('tipEvents'));
if (tipEvents == null) {
    console.log('null');
    tipEvents = [];
}

// save in localStorage
localStorage.setItem('tipEvents', JSON.stringify(tipEvents));