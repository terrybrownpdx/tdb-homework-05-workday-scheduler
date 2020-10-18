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

    var calendarInfo = "#textarea";
    $("calendarInfo").on("click", "button")
    localStorage.setItem("calendarInfo", calendarInfo);
    console.log(calendarInfo);
 
    $(".hour").each(function () {

        //Save this id as an integer to a variable to do comparison on.
        var timeBlock = parseInt($(this).attr('id'))
        console.log('id')
        //Fin the current time and assign it a variable
        var hourCurrent = moment().hour()
        if (hourCurrent == timeBlock) {
            $(this).parent().addClass("present")

        }

        else if (hourCurrent > timeBlock) {
            $(this).parent().addClass("past")
        }

        else {
            $(this).parent().addClass("future")
        }
    })


})







