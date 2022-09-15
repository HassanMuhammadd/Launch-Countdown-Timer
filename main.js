var countDown = new Date("July 19,2023").getTime();
var x = setInterval(function() {

        var now = new Date().getTime();
        var timeDifference = countDown - now;
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var Hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var Minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(timeDifference % (1000 * 60) / 1000);
        document.getElementById("days").innerHTML = `<h2>${days}<h2>`;
        document.getElementById("hours").innerHTML = `<h2>${Hours}<h2>`;
        document.getElementById("mins").innerHTML = `<h2>${Minutes}<h2>`;
        document.getElementById("secs").innerHTML = `<h2>${seconds}<h2>`;
    },
    1000);