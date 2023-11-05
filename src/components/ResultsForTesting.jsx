import { useState } from 'react'


const ResultsForTesting = ({parentToChild}) => {
    let price = parentToChild[0];
    let percentage = parentToChild[1];

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

    // set exact total, price, tip, and tip percentage variables
    let ePrice = parseFloat(price).toFixed(2);
    let eTipPerc = percentage * 100;
    let eTip = parseFloat(ePrice) * parseFloat(percentage);
    eTip = eTip.toFixed(2);
    let eTotal = (Number(ePrice) + Number(eTip)).toFixed(2);

    // take 'eTotal' and only keep numbers before decimal
    let totalFullNumber = Math.floor(eTotal);
    let totalFullNumberPLUSONE = Math.floor(eTotal) + 1;
    let totalFullNumberMINUSONE = Math.floor(eTotal) - 1;

    // set variable for division based on length of total 
    let lengthDivider;
    if (totalFullNumber.toString().length == 2) {
    //   console.log('two digit number');
      lengthDivider = 100;
    }
    if (totalFullNumber.toString().length == 3) {
    //   console.log('three digit number');
      lengthDivider = 1000;
    }
    if (totalFullNumber.toString().length == 4) {
    //   console.log('four digit number');
      lengthDivider = 10000;
    }
    if (totalFullNumber.toString().length == 5) {
    //   console.log('four digit number');
      lengthDivider = 100000;
    }
    if (totalFullNumber.toString().length == 6) {
    //   console.log('four digit number');
      lengthDivider = 1000000;
    }
    // NEXT, convert above ^ to function that will handle unlimited length numbers
        // THEN, convert numbers to (XXX.XX) numbers with decimal and cents. Either add decimals or cut off and round longer decimals.

    // create after decimal values
    var totalFullNumberDec = (reversedNum(totalFullNumber) / lengthDivider) * 100;
    totalFullNumberDec = Math.floor(totalFullNumberDec);
    totalFullNumberDec = totalFullNumberDec / 100;
    var totalFullNumberMINUSONEDec = (reversedNum(totalFullNumberMINUSONE) / lengthDivider) * 100;
    totalFullNumberMINUSONEDec = Math.floor(totalFullNumberMINUSONEDec);
    totalFullNumberMINUSONEDec = totalFullNumberMINUSONEDec / 100;
    // add decimal and 'after decimal values' above to 'totalFullNumber' to create the palindrome
    var hTotal = totalFullNumber + totalFullNumberDec;
    var lTotal = totalFullNumberMINUSONE + totalFullNumberMINUSONEDec;

    // make sure 'hTotalindrome' is higher or equal to 'eTotal'
    if (hTotal < eTotal) {
        // test with '27.77'
        // alert ("Your high and low palindromes are incorrect. Apply auto fix.");
        // create after decimal values
        var totalFullNumberPLUSONEDec = (reversedNum(totalFullNumberPLUSONE) / lengthDivider) * 100;
        totalFullNumberPLUSONEDec = Math.floor(totalFullNumberPLUSONEDec);
        totalFullNumberPLUSONEDec = totalFullNumberPLUSONEDec / 100;
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

    hTotal = (Math.round(hTotal * 100) / 100).toFixed(2);
    // let hTipPerc = (Math.round(hTipPerc * 100) / 100).toFixed(2);
    lTotal = (Math.round(lTotal * 100) / 100).toFixed(2);
    
    // let lTipPerc = (Math.round(lTipPerc * 100) / 100).toFixed(2);

    // Set HIGH values (totals, and tips)
    let hTip = hTotal - ePrice;
    let hTipPerc = (hTip / ePrice) * 100;
    hTipPerc = hTipPerc * 100;
    hTipPerc = Math.floor(hTipPerc);
    hTipPerc = hTipPerc / 100;
    // Set LOW values (totals, and tips)
    let lTip = lTotal - ePrice;
    let lTipPerc = (lTip / ePrice) * 100;
    lTipPerc = lTipPerc * 100;
    lTipPerc = Math.floor(lTipPerc);
    lTipPerc = lTipPerc / 100;

    hTip = (Math.round(hTip * 100) / 100).toFixed(2);
    lTip = (Math.round(lTip * 100) / 100).toFixed(2);
    eTipPerc = (Math.round(eTipPerc * 100) / 100).toFixed(2);

    return (
        <div className="pb-2">
            <p id="eTotal">eTotal - ${eTotal}</p>
            <p id="ePrice">ePrice - ${ePrice}</p>
            <p id="eTip">eTip - ${eTip}</p>
            <p id="eTipPerc">eTipPerc - {eTipPerc}%</p>
            <p>&nbsp;</p>
            <p id="hTotal">hTotal - ${hTotal}</p>
            <p id="hTip">hTip - ${hTip}</p>
            <p id="hTipPerc">hTipPerc - {hTipPerc}%</p>
            <p>&nbsp;</p>
            <p id="lTotal">lTotal - ${lTotal}</p>
            <p id="lTip">lTip - ${lTip}</p>
            <p id="lTipPerc">lTipPerc - {lTipPerc}%</p>
        </div>
    )
}
export default ResultsForTesting;