import { useState } from 'react'
import TipResults from './TipResults'
import '../css/tipStyles.css'
import '../js/splide.min.js'


const Home = () => {
    const [price, setPrice] = useState('');
    const [percentage, setPercentage] = useState('');
    const [data, setData] = useState('');
  
    const parentToChild = () => {
        let dataPair = [price, percentage];
        setData(dataPair);
    }

    // const output = () => {
    //     console.log('output() fired');
    //     console.log('price: ' + price);
    //     console.log('percentage: ' + percentage);
    //     let ePrice = document.getElementById('originalPrice').value;

    //     let eTipDecimal;

    //     // Calculate tip
    //     if (document.querySelector('input[id="tip-custom-perc"]:checked')) {
    //         let numToPerc = .01;
    //         eTipDecimal = (document.querySelector('input[id="tip-custom-perc-value"]').value) * numToPerc;
    //     } else if (document.querySelector('input[name="tip-percent"]:checked')) {
    //         eTipDecimal = document.querySelector('input[name="tip-percent"]:checked').value;
    //     } else {
    //         eTipDecimal = null;
    //     }

    //     // Set EXACT values (totals, prices, and tips) & make them have a decimal and cents
    //     ePrice = parseFloat(ePrice).toFixed(2);
    //     let eTipPerc = eTipDecimal * 100;
    //     let eTip = parseFloat(ePrice) * parseFloat(eTipDecimal);
    //     eTip = eTip.toFixed(2);
    //     let eTotal = (Number(ePrice) + Number(eTip)).toFixed(2);

    //     // take 'eTotal' and only keep numbers before decimal
    //     let totalFullNumber = Math.floor(eTotal);
    //     let totalFullNumberPLUSONE = Math.floor(eTotal) + 1;
    //     let totalFullNumberMINUSONE = Math.floor(eTotal) - 1;
    // }
    // const output = () => {
    //     console.log('output() firing');
    //     var ePrice = document.getElementById('originalPrice').value;
    //     // Calculate tip
    //     if (document.querySelector('input[id="tip-custom-perc"]:checked')) {
    //         var numToPerc = .01;
    //         var eTipDecimal = (document.querySelector('input[id="tip-custom-perc-value"]').value) * numToPerc;
    //     } else {
    //         var eTipDecimal = document.querySelector('input[name="tip-percent"]:checked').value;
    //     }
    //     // Set EXACT values (totals, prices, and tips) & make them have a decimal and cents
    //     ePrice = parseFloat(ePrice).toFixed(2);
    //     // var eTipPerc = eTipDecimal * 100 + '%';
    //     var eTipPerc = eTipDecimal * 100;
    //     var eTip = parseFloat(ePrice) * parseFloat(eTipDecimal);
    //     eTip = eTip.toFixed(2);
    //     var eTotal = (Number(ePrice) + Number(eTip)).toFixed(2);

    //     // take 'eTotal' and only keep numbers before decimal
    //     var totalFullNumber = Math.floor(eTotal);
    //     var totalFullNumberPLUSONE = Math.floor(eTotal) + 1;
    //     var totalFullNumberMINUSONE = Math.floor(eTotal) - 1;

    //     // set variable for division based on length of total 
    //     var lengthDivider;
    //     if (totalFullNumber.toString().length == 2) {
    //         console.log('two digit number');
    //         lengthDivider = 100;
    //     }
    //     if (totalFullNumber.toString().length == 3) {
    //         console.log('three digit number');
    //         lengthDivider = 1000;
    //     }
    //     if (totalFullNumber.toString().length == 4) {
    //         console.log('four digit number');
    //         lengthDivider = 10000;
    //     }
    //     if (totalFullNumber.toString().length == 5) {
    //         console.log('four digit number');
    //         lengthDivider = 100000;
    //     }
    //     if (totalFullNumber.toString().length == 6) {
    //         console.log('four digit number');
    //         lengthDivider = 1000000;
    //     }
    //     // NEXT, convert above ^ to function that will handle unlimited length numbers
    //         // THEN, convert numbers to (XXX.XX) numbers with decimal and cents. Either add decimals or cut off and round longer decimals.

    //     // create after decimal values
    //     var totalFullNumberDec = (reversedNum(totalFullNumber) / lengthDivider) * 100;
    //     var totalFullNumberDec = Math.floor(totalFullNumberDec);
    //     var totalFullNumberDec = totalFullNumberDec / 100;
    //     var totalFullNumberMINUSONEDec = (reversedNum(totalFullNumberMINUSONE) / lengthDivider) * 100;
    //     var totalFullNumberMINUSONEDec = Math.floor(totalFullNumberMINUSONEDec);
    //     var totalFullNumberMINUSONEDec = totalFullNumberMINUSONEDec / 100;
    //     // add decimal and 'after decimal values' above to 'totalFullNumber' to create the palindrome
    //     var hTotal = totalFullNumber + totalFullNumberDec;
    //     var lTotal = totalFullNumberMINUSONE + totalFullNumberMINUSONEDec;

    //     // make sure 'hTotalindrome' is higher or equal to 'eTotal'
    //     if (hTotal < eTotal) {
    //         // test with '27.77'
    //         // alert ("Your high and low palindromes are incorrect. Apply auto fix.");
    //         // create after decimal values
    //         var totalFullNumberPLUSONEDec = (reversedNum(totalFullNumberPLUSONE) / lengthDivider) * 100;
    //         var totalFullNumberPLUSONEDec = Math.floor(totalFullNumberPLUSONEDec);
    //         var totalFullNumberPLUSONEDec = totalFullNumberPLUSONEDec / 100;
    //         totalFullNumberDec = (reversedNum(totalFullNumber) / lengthDivider) * 100;
    //         totalFullNumberDec = Math.floor(totalFullNumberDec);
    //         totalFullNumberDec = totalFullNumberDec / 100;
    //         // add decimal and reversed version of 'totalFullNumberPLUSONE' to create the palindrome
    //         hTotal = totalFullNumberPLUSONE + totalFullNumberPLUSONEDec;
    //         lTotal = totalFullNumber + totalFullNumberDec;
    //         // var lTotal = (totalFtotalFullNumberPLUSONEullNumber - 1) + (reversedNum(totalFullNumberPLUSONE) / 100);
    //     } else if (hTotal == eTotal) {
    //         // WHAT TO DO HERE? START with ONE option (because they nailed the palindrome). END with THREE options (original, high, and low)
    //         // alert ("Your total is already a palindrome!");
    //     } else if (hTotal > eTotal) {
    //         // do nothing
    //         // alert ("Your high and low palindromes are correct");
    //     }

    //     // export num and reversed num for debugging
    //     console.log('total full number: ' + totalFullNumber);
    //     console.log('total full number reversed: ' + (reversedNum(totalFullNumber) / lengthDivider));

    //     hTotal = (Math.round(hTotal * 100) / 100).toFixed(2);
    //     hTipPerc = (Math.round(hTipPerc * 100) / 100).toFixed(2);
    //     lTotal = (Math.round(lTotal * 100) / 100).toFixed(2);
        
    //     lTipPerc = (Math.round(lTipPerc * 100) / 100).toFixed(2);

    //     // Set HIGH values (totals, and tips)
    //     var hTip = hTotal - ePrice;
    //     // hTip = hTip * 100;
    //     // hTip = Math.floor(hTip);
    //     // hTip = hTip / 100;
    //     var hTipPerc = (hTip / ePrice) * 100;
    //     hTipPerc = hTipPerc * 100;
    //     hTipPerc = Math.floor(hTipPerc);
    //     hTipPerc = hTipPerc / 100;
    //     hTipPerc = hTipPerc + '%';
    //     // Set LOW values (totals, and tips)
    //     var lTip = lTotal - ePrice;
    //     // lTip = lTip * 100;
    //     // lTip = Math.floor(lTip);
    //     // lTip = lTip / 100;
    //     var lTipPerc = (lTip / ePrice) * 100;
    //     lTipPerc = lTipPerc * 100;
    //     lTipPerc = Math.floor(lTipPerc);
    //     lTipPerc = lTipPerc / 100;
    //     lTipPerc = lTipPerc + '%';

    //     hTip = (Math.round(hTip * 100) / 100).toFixed(2);
    //     lTip = (Math.round(lTip * 100) / 100).toFixed(2);
    //     eTipPerc = (Math.round(eTipPerc * 100) / 100).toFixed(2);
    //     eTipPerc += '%';

    //     // Print values (totals, prices, and tips)
    //     // document.getElementById('eTotal').innerHTML = 'Exact total = ' + eTotal;
    //     // commenting out to 
    //     document.getElementById('eTotal').innerHTML = '$' + eTotal;
    //     // document.getElementById('ePrice').innerHTML = 'Exact price = ' + ePrice;
    //     // document.getElementById('eTip').innerHTML = 'Exact tip = ' + eTip;
    //     document.getElementById('eTip').innerHTML = '$' + eTip;
    //     // document.getElementById('eTipPerc').innerHTML = 'Exact tip % = ' + eTipPerc;
    //     document.getElementById('eTipPerc').innerHTML = eTipPerc;

    //     // document.getElementById('hTotal').innerHTML = 'High total = ' + hTotal;
    //     document.getElementById('hTotal').innerHTML = '$' + hTotal;
    //     // document.getElementById('ePrice2').innerHTML = 'Exact price = ' + ePrice;
    //     // document.getElementById('hTip').innerHTML = 'High tip = ' + hTip;
    //     document.getElementById('hTip').innerHTML = '$' + hTip;
    //     // document.getElementById('hTipPerc').innerHTML = 'High tip % = ' + hTipPerc;
    //     document.getElementById('hTipPerc').innerHTML = hTipPerc;
        
    //     // document.getElementById('lTotal').innerHTML = 'Low total = ' + lTotal;
    //     document.getElementById('lTotal').innerHTML = '$' + lTotal;
    //     // document.getElementById('ePrice3').innerHTML = 'Exact price = ' + ePrice;
    //     // document.getElementById('lTip').innerHTML = 'Low tip = ' + lTip;
    //     document.getElementById('lTip').innerHTML = '$' + lTip;
    //     // document.getElementById('lTipPerc').innerHTML = 'Low tip % = ' + lTipPerc;
    //     document.getElementById('lTipPerc').innerHTML = lTipPerc;

    //     // Make Splide visible
    //     document.getElementById("splide").classList.remove("hide");
    // }

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

    // function reversedNum(num) {
    //     return (
    //         parseFloat(
    //         num
    //             .toString()
    //             .split('')
    //             .reverse()
    //             .join('')
    //         ) * Math.sign(num)
    //     )                 
    // }

    return (
        <>
            <h1 className="text-3xl font-bold text-purple-600 pt-1 pb-2">
                Tipit - palindrome tip calculator
            </h1>
            <div className="pb-2 flex flex-col content-start">
                <label htmlFor="originalPrice">Enter your total:</label>
                <input id="originalPrice" type="text" className="dollar-sign-start block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" onChange={event => setPrice(event.target.value)} />
            </div>
            <fieldset className="pb-0">
                <legend htmlFor="eTipPerc">Choose your tip %:</legend>
                <form className="toggle">
                    <input type="radio" id="tip-10-perc" name="tip-percent" value=".1" onClick={event => setPercentage(event.target.value)} />
                    <label htmlFor="tip-10-perc">10%</label>
                    <input type="radio" id="tip-15-perc" name="tip-percent" value=".15" onClick={event => setPercentage(event.target.value)} />
                    <label htmlFor="tip-15-perc">15%</label>
                    <input type="radio" id="tip-20-perc" name="tip-percent" value=".2" onClick={event => setPercentage(event.target.value)} />
                    <label htmlFor="tip-20-perc">20%</label><br/>
                    <input type="radio" id="tip-25-perc" name="tip-percent" value=".25" onClick={event => setPercentage(event.target.value)} />
                    <label htmlFor="tip-25-perc">25%</label>
                    <input type="radio" id="tip-custom-perc" name="tip-percent" value="other" onClick={tipCustomPercValue_ON} />
                    <label htmlFor="tip-custom-perc">custom</label>
                    <div id="placeholder-custom-perc-field" data-placeholder="%">
                        <input title="tip custom percent value" type ="text" name="tip-percent" id="tip-custom-perc-value" className="w-24 float-right custom-perc-field bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                    </div>
                </form>
            </fieldset>
            {/* <div className="pb-6">
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="submit" onClick={output}>Calculate</button>
            </div> */}
            <div className="pb-6">
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="submit" onClick={() => parentToChild()}>Calculate</button>
            </div>

            <TipResults parentToChild={data}/>

            {/* <section id="splide" className="splide hide" aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li id="high" className="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        <p className="text-xs uppercase font-bold text-purple-600 block pb-2 pt-1">High Palindrome</p>
                        <div className="flex justify-between">
                            <div>
                            <p id="hTotal" className="text-base uppercase font-bold text-purple-600"></p>
                            <p className="text-xs uppercase text-purple-600">High Total</p>
                            </div>
                            <div>
                            <p id="hTip" className="text-base uppercase font-bold text-purple-600"></p>
                            <p className="text-xs uppercase text-purple-600">High Tip</p>
                            </div>
                            <div>
                            <p id="hTipPerc" className="text-right text-base uppercase font-bold text-purple-600"></p>
                            <p className="text-right text-xs uppercase text-purple-600">Tip %</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className="w-full px-4 py-1 text-sm text-white font-semibold rounded-full bg-purple-500 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Choose high tip</button>
                        </div>
                        </li>
                        <li className="splide__slide block w-full border-dashed border-slate-300 border-2 rounded-md py-2 pl-3 pr-3 mb-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        <p className="text-xs uppercase font-bold text-slate-500 block pb-2 pt-1">Original <span className="font-normal normal-case">(not palindrome)</span></p>
                        <div className="flex justify-between">
                            <div>
                            <p id="eTotal" className="text-base uppercase font-bold text-slate-500"></p>
                            <p className="text-xs uppercase text-slate-500">Total</p>
                            </div>
                            <div>
                            <p id="eTip" className="text-base uppercase font-bold text-slate-500"></p>
                            <p className="text-xs uppercase text-slate-500">Tip</p>
                            </div>
                            <div>
                            <p id="eTipPerc" className="text-right text-base uppercase font-bold text-slate-500"></p>
                            <p className="text-right text-xs uppercase text-slate-500">Tip %</p>
                            </div>
                        </div>
                        </li>
                        <li id="low" className="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                        <p className="text-xs uppercase font-bold text-purple-600 block pb-2 pt-1">Low Palindrome</p>
                        <div className="flex justify-between">
                            <div>
                            <p id="lTotal" className="text-base uppercase font-bold text-purple-600"></p>
                            <p className="text-xs uppercase text-purple-600">Low Total</p>
                            </div>
                            <div>
                            <p id="lTip" className="text-base uppercase font-bold text-purple-600"></p>
                            <p className="text-xs uppercase text-purple-600">Low Tip</p>
                            </div>
                            <div>
                            <p id="lTipPerc" className="text-right text-base uppercase font-bold text-purple-600"></p>
                            <p className="text-right text-xs uppercase text-purple-600">Tip %</p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className="w-full px-4 py-1 text-sm text-white font-semibold rounded-full bg-purple-500 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Choose low tip</button>
                        </div>
                        </li>
                    </ul>
                </div>
            </section> */}
        </>
    )
}
export default Home;