const History = () => {

    let tipEvents = JSON.parse(localStorage.getItem('tipEvents'));

    if (tipEvents === null) {
        console.log('empty');
        tipEvents = [
            {
                "highLow": "high",
                "total": "83.38",
                "tipPerc": "20.84",
                "eventDate": "2023-11-06T00:10:38.857Z"
            },
            {
                "highLow": "low",
                "total": "82.28",
                "tipPerc": "19.24",
                "eventDate": "2023-11-06T00:10:40.941Z"
            },
            {
                "highLow": "high",
                "total": "79.97",
                "tipPerc": "15.89",
                "eventDate": "2023-11-06T00:10:43.385Z"
            },
            {
                "highLow": "low",
                "total": "78.87",
                "tipPerc": "14.3",
                "eventDate": "2023-11-06T00:10:44.360Z"
            }
        ];
        localStorage.setItem('tipEvents', JSON.stringify(tipEvents));
    }

    function handleRemoveItem(event) {
        console.log(event);
        let result = confirm("Are you sure to delete?");
        if(result){
            // console.log('delete confirmed');
            // console.log(event.target.id);
            // convert button we pressed (`event.target`) to a jQuery DOM object
            let btnClicked = document.getElementById(event);
            btnClicked.remove();
            // // log out index
            // let choiceIndex = event.target.id;
            // // remove the selected index from the array
            tipEvents = tipEvents.slice(0, event).concat(tipEvents.slice(event + 1));
            // // save in localStorage
            localStorage.setItem('tipEvents', JSON.stringify(tipEvents));
            // // get the parent `<li>` element from the button we pressed and remove it
            // btnClicked.parentNode.parentNode.removeChild(node);
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-purple-600 pb-2">
                History + Tipit
            </h1>
            <div className="pb-2">
                <p>Your tip history</p>
            </div>
            {tipEvents.map((tipEvent, index, tipEvents) => {
                // translate Date into human readable display time
                let date = new Date();
                // let beforeDateDisplayable = tipEvent.eventDate;
                let beforeDateDisplayable = date;
                let dateDisplayable = beforeDateDisplayable.getMonth() + '/' + beforeDateDisplayable.getDate() + '/' + beforeDateDisplayable.getFullYear();
                return (
                    <li id={index} className="splide__slide block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 mb-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" key={index}>
                        <div className="flex justify-between">
                            <div>
                                <p id="lTotal" className="text-base uppercase font-bold text-purple-600 pt-1">{tipEvent.total}</p>
                            </div>
                            <div>
                                <p id="lTip" className="text-xs uppercase text-purple-600 pt-2">{dateDisplayable}</p>
                            </div>
                            <div>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full bg-white border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 delete-item-btn" data-index-number={index} onClick={() => handleRemoveItem(index)}>Remove</button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </>
    )
}
export default History;