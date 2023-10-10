// import React from "react";
 
// This is the function that will be added to the application
function Output(){

    var ePrice = document.getElementById('originalPrice').value;
    // Calculate tip
    if (document.querySelector('input[id="tip-custom-perc"]:checked')) {
      var numToPerc = .01;
      var eTipDecimal = (document.querySelector('input[id="tip-custom-perc-value"]').value) * numToPerc;
    } else {
      var eTipDecimal = document.querySelector('input[name="tip-percent"]:checked').value;
    }
    // Set EXACT values (totals, prices, and tips) & make them have a decimal and cents
    ePrice = parseFloat(ePrice).toFixed(2);
    var eTipPerc = eTipDecimal * 100 + '%';
    var eTip = parseFloat(ePrice) * parseFloat(eTipDecimal);
    eTip = eTip.toFixed(2);
    var eTotal = (Number(ePrice) + Number(eTip)).toFixed(2);

    // take 'eTotal' and only keep numbers before decimal
    var totalFullNumber = Math.floor(eTotal);
    var totalFullNumberPLUSONE = Math.floor(eTotal) + 1;
    var totalFullNumberMINUSONE = Math.floor(eTotal) - 1;

    // set variable for division based on length of total 
    var lengthDivider;
    if (totalFullNumber.toString().length == 2) {
      console.log('two digit number');
      lengthDivider = 100;
    }
    if (totalFullNumber.toString().length == 3) {
      console.log('three digit number');
      lengthDivider = 1000;
    }
    if (totalFullNumber.toString().length == 4) {
      console.log('four digit number');
      lengthDivider = 10000;
    }
    if (totalFullNumber.toString().length == 5) {
      console.log('four digit number');
      lengthDivider = 100000;
    }
    if (totalFullNumber.toString().length == 6) {
      console.log('four digit number');
      lengthDivider = 1000000;
    }
    // NEXT, convert above ^ to function that will handle unlimited length numbers
      // THEN, convert numbers to (XXX.XX) numbers with decimal and cents. Either add decimals or cut off and round longer decimals.

    // create after decimal values
    var totalFullNumberDec = (reversedNum(totalFullNumber) / lengthDivider) * 100;
    var totalFullNumberDec = Math.floor(totalFullNumberDec);
    var totalFullNumberDec = totalFullNumberDec / 100;
    var totalFullNumberMINUSONEDec = (reversedNum(totalFullNumberMINUSONE) / lengthDivider) * 100;
    var totalFullNumberMINUSONEDec = Math.floor(totalFullNumberMINUSONEDec);
    var totalFullNumberMINUSONEDec = totalFullNumberMINUSONEDec / 100;
    // add decimal and 'after decimal values' above to 'totalFullNumber' to create the palindrome
    var hTotal = totalFullNumber + totalFullNumberDec;
    var lTotal = totalFullNumberMINUSONE + totalFullNumberMINUSONEDec;

    // make sure 'hTotalindrome' is higher or equal to 'eTotal'
    if (hTotal < eTotal) {
      // test with '27.77'
      // alert ("Your high and low palindromes are incorrect. Apply auto fix.");
      // create after decimal values
      var totalFullNumberPLUSONEDec = (reversedNum(totalFullNumberPLUSONE) / lengthDivider) * 100;
      var totalFullNumberPLUSONEDec = Math.floor(totalFullNumberPLUSONEDec);
      var totalFullNumberPLUSONEDec = totalFullNumberPLUSONEDec / 100;
      totalFullNumberDec = (reversedNum(totalFullNumber) / lengthDivider) * 100;
      totalFullNumberDec = Math.floor(totalFullNumberDec);
      totalFullNumberDec = totalFullNumberDec / 100;
      // add decimal and reversed version of 'totalFullNumberPLUSONE' to create the palindrome
      hTotal = totalFullNumberPLUSONE + totalFullNumberPLUSONEDec;
      lTotal = totalFullNumber + totalFullNumberDec;
      // var lTotal = (totalFtotalFullNumberPLUSONEullNumber - 1) + (reversedNum(totalFullNumberPLUSONE) / 100);
    } else if (hTotal == eTotal) {
      // WHAT TO DO HERE? START with ONE option (because they nailed the palindrome). END with THREE options (original, high, and low)
      // alert ("Your total is already a palindrome!");
    } else if (hTotal > eTotal) {
      // do nothing
      // alert ("Your high and low palindromes are correct");
    }

    // export num and reversed num for debugging
    console.log('total full number: ' + totalFullNumber);
    console.log('total full number reversed: ' + (reversedNum(totalFullNumber) / lengthDivider));

    // Set HIGH and LOW values (totals, and tips)
    var hTip = hTotal - ePrice;
    hTip = hTip * 100;
    hTip = Math.floor(hTip);
    hTip = hTip / 100;
    var hTipPerc = (hTip / hTotal) * 100;
    hTipPerc = hTipPerc * 100;
    hTipPerc = Math.floor(hTipPerc);
    hTipPerc = hTipPerc / 100;
    hTipPerc = hTipPerc + '%';
    var lTip = lTotal - ePrice;
    lTip = lTip * 100;
    lTip = Math.floor(lTip);
    lTip = lTip / 100;
    var lTipPerc = (lTip / lTotal) * 100;
    lTipPerc = lTipPerc * 100;
    lTipPerc = Math.floor(lTipPerc);
    lTipPerc = lTipPerc / 100;
    lTipPerc = lTipPerc + '%';

    // Print values (totals, prices, and tips)
    document.getElementById('eTotal').innerHTML = 'Exact total = ' + eTotal;
    document.getElementById('ePrice').innerHTML = 'Exact price = ' + ePrice;
    document.getElementById('eTip').innerHTML = 'Exact tip = ' + eTip;
    document.getElementById('eTipPerc').innerHTML = 'Exact tip % = ' + eTipPerc;

    document.getElementById('hTotal').innerHTML = 'High total = ' + hTotal;
    // document.getElementById('hPrice').innerHTML = 'High price = ' + 0;
    document.getElementById('hTip').innerHTML = 'High tip = ' + hTip;
    document.getElementById('hTipPerc').innerHTML = 'High tip % = ' + hTipPerc;
    
    document.getElementById('lTotal').innerHTML = 'Low total = ' + lTotal;
    // document.getElementById('lPrice').innerHTML = 'Low price = ' + 0;
    document.getElementById('lTip').innerHTML = 'Low tip = ' + lTip;
    document.getElementById('lTipPerc').innerHTML = 'Low tip % = ' + lTipPerc;
  }
  function tipCustomPercValue_ON() {
    console.log('test-toggle-ON');
    var element = document.getElementById("placeholder-custom-perc-field");
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
  }
  function tipCustomPercValue_OFF() {
    console.log('test-toggle-OFF');
    var element = document.getElementById("placeholder-custom-perc-field");
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
  }
  function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }
 
export default Output;
export default tipCustomPercValue_ON;
export default tipCustomPercValue_OFF;