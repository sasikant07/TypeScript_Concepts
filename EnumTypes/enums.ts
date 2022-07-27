enum Month {Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec};

let isItSummer = (month: Month) => {
    let isSummer: boolean;

    switch(month) {
        case Month.Apr:

        case Month.May:

        case Month.Jun: isSummer = true; break;

        default: isSummer = false; break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // true