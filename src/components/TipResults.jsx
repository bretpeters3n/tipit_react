import { Splide, SplideSlide } from '@splidejs/react-splide';


const ResultsForTesting = ({parentToChild}) => {
    let price = parentToChild[0];
    let percentage = parentToChild[1];

    let tipEvents = JSON.parse(localStorage.getItem('tipEvents'));
    if (tipEvents === null) {
        console.log('empty');
        tipEvents = [];
    }

    const resultsToHistory = (tipEvent) => {
        tipEvents.push(tipEvent);
        localStorage.setItem('tipEvents', JSON.stringify(tipEvents));
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
        // <div className="pb-2">
        //     <p id="eTotal">eTotal - ${eTotal}</p>
        //     <p id="ePrice">ePrice - ${ePrice}</p>
        //     <p id="eTip">eTip - ${eTip}</p>
        //     <p id="eTipPerc">eTipPerc - {eTipPerc}%</p>
        //     <p>&nbsp;</p>
        //     <p id="hTotal">hTotal - ${hTotal}</p>
        //     <p id="hTip">hTip - ${hTip}</p>
        //     <p id="hTipPerc">hTipPerc - {hTipPerc}%</p>
        //     <p>&nbsp;</p>
        //     <p id="lTotal">lTotal - ${lTotal}</p>
        //     <p id="lTip">lTip - ${lTip}</p>
        //     <p id="lTipPerc">lTipPerc - {lTipPerc}%</p>
        // </div>
        <Splide>
            <SplideSlide>
                <div id="high" className="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                    <p className="text-xs uppercase font-bold text-purple-600 block pb-2 pt-1">High Palindrome</p>
                    <div className="flex justify-between">
                        <div>
                        <p id="hTotal" className="text-base uppercase font-bold text-purple-600">${hTotal}</p>
                        <p className="text-xs uppercase text-purple-600">High Total</p>
                        </div>
                        <div>
                        <p id="hTip" className="text-base uppercase font-bold text-purple-600">${hTip}</p>
                        <p className="text-xs uppercase text-purple-600">High Tip</p>
                        </div>
                        <div>
                        <p id="hTipPerc" className="text-right text-base uppercase font-bold text-purple-600">{hTipPerc}%</p>
                        <p className="text-right text-xs uppercase text-purple-600">Tip %</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <button className="w-full px-4 py-1 text-sm text-white font-semibold rounded-full bg-purple-500 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => resultsToHistory({'highLow': 'high', 'total': hTotal, 'tipPerc': hTipPerc, 'eventDate': new Date()})}>Choose high tip</button>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="splide__slide block w-full border-dashed border-slate-300 border-2 rounded-md py-2 pl-3 pr-3 mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                    <p className="text-xs uppercase font-bold text-slate-500 block pb-2 pt-1">Original <span className="font-normal normal-case">(not palindrome)</span></p>
                    <div className="flex justify-between">
                        <div>
                        <p id="eTotal" className="text-base uppercase font-bold text-slate-500">${eTotal}</p>
                        <p className="text-xs uppercase text-slate-500">Total</p>
                        </div>
                        <div>
                        <p id="eTip" className="text-base uppercase font-bold text-slate-500">${eTip}</p>
                        <p className="text-xs uppercase text-slate-500">Tip</p>
                        </div>
                        <div>
                        <p id="eTipPerc" className="text-right text-base uppercase font-bold text-slate-500">{eTipPerc}</p>
                        <p className="text-right text-xs uppercase text-slate-500">Tip %</p>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div id="low" className="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                    <p className="text-xs uppercase font-bold text-purple-600 block pb-2 pt-1">Low Palindrome</p>
                    <div className="flex justify-between">
                        <div>
                        <p id="lTotal" className="text-base uppercase font-bold text-purple-600">${lTotal}</p>
                        <p className="text-xs uppercase text-purple-600">Low Total</p>
                        </div>
                        <div>
                        <p id="lTip" className="text-base uppercase font-bold text-purple-600">${lTip}</p>
                        <p className="text-xs uppercase text-purple-600">Low Tip</p>
                        </div>
                        <div>
                        <p id="lTipPerc" className="text-right text-base uppercase font-bold text-purple-600">{lTipPerc}%</p>
                        <p className="text-right text-xs uppercase text-purple-600">Tip %</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <button className="w-full px-4 py-1 text-sm text-white font-semibold rounded-full bg-purple-500 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => resultsToHistory({'highLow': 'low', 'total': lTotal, 'tipPerc': lTipPerc, 'eventDate': new Date()})}>Choose low tip</button>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    )
}
export default ResultsForTesting;