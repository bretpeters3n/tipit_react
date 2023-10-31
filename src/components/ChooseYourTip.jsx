import TipCustomPercValue_OFF from './TipCustomPercValue_OFF'
import TipCustomPercValue_ON from './TipCustomPercValue_ON'

const ChooseYourTip = () => {
    return (
        <fieldset className="pb-2">
            <legend htmlFor="eTipPerc">Choose your tip %:</legend>
            <form className="toggle">
                <input type="radio" id="tip-10-perc" name="tip-percent" value=".1" onClick={TipCustomPercValue_OFF} />
                <label htmlFor="tip-10-perc">10%</label>
                <input type="radio" id="tip-15-perc" name="tip-percent" value=".15" onClick={TipCustomPercValue_OFF} />
                <label htmlFor="tip-15-perc">15%</label>
                <input type="radio" id="tip-20-perc" name="tip-percent" value=".2" onClick={TipCustomPercValue_OFF} />
                <label htmlFor="tip-20-perc">20%</label><br />
                <input type="radio" id="tip-25-perc" name="tip-percent" value=".25" onClick={TipCustomPercValue_OFF} />
                <label htmlFor="tip-25-perc">25%</label>
                <input type="radio" id="tip-custom-perc" name="tip-percent" value="other" onClick={TipCustomPercValue_ON} />
                <label htmlFor="tip-custom-perc">custom</label>
                <div id="placeholder-custom-perc-field" data-placeholder="%">
                    <input title="tip custom percent value" type ="text" name="tip-percent" id="tip-custom-perc-value" className="w-24 float-right custom-perc-field bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                </div>
            </form>
        </fieldset>
    )
}
export default ChooseYourTip;