// // CHAPTERS # 31-34

// // QUESTION#01
// var date=new Date();
// console.log(date);

// // QUESTION#02
// var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var now=new Date();
// var theMonth=now.getMonth();
// var nameOfToday=monthNames[theMonth]
// console.log("Current Month:",nameOfToday);

// // QUESTION#03
// var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var now=new Date();
// var theDay=now.getDay();
// var nameOfToday=dayNames[theDay];
// alert(`Today is: ${nameOfToday.slice(0,3)}`);

// // QUESTION#04
// var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var currentDate = new Date();
// var dayOfWeek = currentDate.getDay();
// if (dayOfWeek === 0 || dayOfWeek === 6) {
//     alert("It’s Fun day");
// }

// // QUESTION#05

// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// // QUESTION#06

// var currentDate = new Date();
// console.log(`Current Date: ${currentDate}`);

// var millisecondsSince1970 = currentDate.getTime();
// console.log(`Elapsed milliseconds Since January 1 1970: ${millisecondsSince1970}`);

// var minutesSince1970 = Math.floor(millisecondsSince1970 / 1000 / 60);
// console.log(`Elapsed minutes Since January 1 1970: ${minutesSince1970}`);

// //QUESTION#07
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// //QUESTION#08
// var laterDate = new Date(2020, 11, 31);
// console.log(`Later Date: ${laterDate}`);

// //QUESTION#09
// var ramadanStartDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(`${daysPassed} days have passed since 1st Ramadan (June 18, 2015).`);

// //QUESTION#10
// var startOf2015 = new Date(2015, 0, 1); 
// var currentDates = new Date();
// var timeDifferences = currentDate - startOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write(`Seconds elapsed since the beginning of 2015: ${secondsElapsed}`);

// //QUESTION#11
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// document.write(`Updated Date and Time (one hour ahead): ${currentDate}`);

// //QUESION#12
// var currentDate3 = new Date();
// alert(currentDate3);
// var pastDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 100));
// alert(`The date 100 years back was: ${pastDate}`);

// //QUESTION#13
// var age=+prompt("Enter your age");
// var year=2024
// var birthYear=2024-age
// document.write(`Your age is ${age}<br>`);
// document.write(`Your birth year is ${birthYear}`);


// //QUESTION#14l
//     function generateBill() {
//     var customerName = "John Doe";
//     var currentMonth = "October";
//     var numberOfUnits = 350; 
//     var chargesPerUnit = 12.5;
//     var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
//     var latePaymentSurcharge = 50.00;
//     var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
//     var billMessage = `
//     Customer Name: ${customerName}
//     Current Month: ${currentMonth}
//     Number of Units: ${numberOfUnits}
//     Charges per Unit: ${chargesPerUnit.toFixed(2)}
//     Net Amount Payable (within Due Date): ${netAmountPayable}
//     Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}
//     Gross Amount Payable (after Due Date): ${grossAmountPayable}
//     `;
//     console.log(billMessage);
//     alert(billMessage);
// }
// generateBill();


