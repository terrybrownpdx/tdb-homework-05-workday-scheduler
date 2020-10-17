$(document).ready(function () {

    var now = moment().toString("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(now);

    var now1 = now.split(' ');
    console.log(now1);

    var day = now1[0];
    console.log(day);

    var month = now1[1];
    console.log(month);

    var date = now1[2];
    console.log(date);

    var year = now1[3];
    console.log(year);

    var hourCurrent = now1[4];
    console.log(hourCurrent);

    var today = day + " " + month + " " + date + " " + year;
    console.log(today)

    $("#currentDay").text(today);

        
    if (hourCurrent === true) {
        $("#row").css(".present");
    }

    else if (hourCurrent > ".hour") {
        $("#row").css(".past");
    }

    else { $("#row").css(".future"); }
    
    
    })




