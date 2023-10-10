const EnterTotal = () => {
    return (
        <div className="pb-2">
            <label htmlFor="originalPrice">Enter your total:</label>
            <input id="originalPrice" type="text" className="dollar-sign-start block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
        </div>
    )
}
export default EnterTotal;