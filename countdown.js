(function() {
  "use strict";

  var countDownDate, countTimeout;
  var countdownHolder, daysHolder, hoursHolder, minutesHolder, secondsHolder;

  function pad2(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function countdown(futureDate) {
    var dd = futureDate - new Date();
    var dday = Math.floor(dd / (60 * 60 * 1000 * 24));
    var dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000));
    var dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000));
    var dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000);

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

  window.Countdown = function(time) {
    countDownDate = time;

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
