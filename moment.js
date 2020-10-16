$(document).ready(function () {

    var now = moment().toString("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(now);

    var now1 = now.split(' ');
    console.log(now1);  

    //var today = [now1]
    //console.log(today);

    var day = now1 [0];
    console.log(day);

    var month = now1 [1];
    console.log(month);

    var date = now1 [2];
    console.log(date);

    var year = now1 [3];
    console.log(year);

    var hour = now1 [4];
    console.log(hour);

    //var calendarYearMonthDay = document.getElementById("currentDay")
    //var calendarHour = document.getElementById("hour")   


});
   



