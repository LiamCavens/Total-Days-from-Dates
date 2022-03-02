/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/

// Liam
// Got days after 5 Minutes
// Got Months after 20m
// Got Years after 20m
// Issue arrised is 458 Days = 2 years 15Months
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    const datesSplit1 = dates[0].split('.');
    const datesSplit2 = dates[1].split('.');

    // Get new dates from Year, Month, Day // Javascript counts months Jan = 0 | Dec = 11 so minus 1 in month
    let date1 = new Date(datesSplit1[2], datesSplit1[1] - 1, datesSplit1[0]);
    let date2 = new Date(datesSplit2[2], datesSplit2[1] - 1, datesSplit2[0]);

    const differenceInTime = date2.getTime() - date1.getTime();
    const totalDays = (differenceInTime / (1000 * 3600 * 24)).toFixed(0);
    const monthsAndYears = getMonthsAndYears(date1, date2);
    let totalMonths = monthsAndYears.months;
    let totalYears = monthsAndYears.years;

    while (totalMonths >= 12) {
        totalMonths = totalMonths - 12;
    }

    let yearsString = '';
    let monthsString = '';

    if (totalYears > 1){
        yearsString = `${totalYears} years, `;
    } else if (totalYears === 1) {
        yearsString = `${totalYears} year, `;
    }

    if (totalMonths > 1){
        monthsString = `${totalMonths} months, `;
    } else if (totalMonths === 1) {
        monthsString = `${totalMonths} month, `;
    }

    const fullString = `${yearsString}${monthsString}total ${totalDays} days`;

     return fullString;
}

function getMonthsAndYears(date1, date2) {
    let yearsDifference = date2.getFullYear() - date1.getFullYear();
    let monthsDifference = date2.getMonth() - date1.getMonth();
    let daysDifference = date2.getDate() - date1.getDate();
    let monthCorrection = 0;

    //If the day difference between the 2 months is negative, the last month is not a whole month.
    if(daysDifference < 0){
        monthCorrection = -1;
    }

    if (monthsDifference < 0 ){
        yearsDifference = yearsDifference - 1;
    }
    return {
        months: yearsDifference * 12 + monthsDifference + monthCorrection,
        years: yearsDifference
    };
}

outputDate(dates);