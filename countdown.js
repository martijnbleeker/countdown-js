(function() {
  "use strict";

  var countDownDate, countTimeout;
  var countdownHolder, daysHolder, hoursHolder, minutesHolder, secondsHolder;

  var minuteMilliseconds = 60000;
  var hourMilliseconds = minuteMilliseconds * 60;
  var dayMilliseconds = hourMilliseconds * 24;

  function pad2(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function dayRemainder(date) {
    return date % dayMilliseconds;
  }

  function hourRemainder(date) {
    return dayRemainder(date) % hourMilliseconds;
  }

  function minuteRemainder(date) {
    return hourRemainder(date) % minuteMilliseconds;
  }

  function countdown(futureDate) {
    var dd = futureDate - new Date();
    var dday = Math.floor(dd / dayMilliseconds);
    var dhour = Math.floor(dayRemainder(dd) / hourMilliseconds);
    var dmin = Math.floor(hourRemainder(dd) / minuteMilliseconds);
    var dsec = Math.floor(minuteRemainder(dd) / 1000);

    daysHolder.text(pad2(Math.max(0, dday)));
    hoursHolder.text(pad2(Math.max(0, dhour)));
    minutesHolder.text(pad2(Math.max(0, dmin)));
    secondsHolder.text(pad2(Math.max(0, dsec)));
  }

  function count() {
    clearTimeout(countTimeout);

    countdown(countDownDate);

    if(countDownDate >= new Date()) {
      setTimeout(count, 1000);
    }
  }

  window.Countdown = function(date) {
    countDownDate = date;

    if($(".js-countdown").length > 0) {
      countdownHolder = $(".js-countdown");
      daysHolder = $(".js-days", countdownHolder);
      hoursHolder = $(".js-hours", countdownHolder);
      minutesHolder = $(".js-minutes", countdownHolder);
      secondsHolder = $(".js-seconds", countdownHolder);
      count();
    }
  }
})();
