const showTime = function () {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var session = "AM";

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
    session = "PM";
  }

  //To fix the 0 appearing in front of the number
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("MyClockDisplay").textContent = time;
};

setInterval(showTime, 1000);

showTime();
