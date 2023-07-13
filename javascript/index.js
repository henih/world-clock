setInterval(function () {
  let cityElement = document.querySelector("#city");
  let dateElement = cityElement.querySelector(".date");
  let timeElement = cityElement.querySelector(".time");

  dateElement.innerHTML = moment().tz("US/Hawaii").format("MMMM Do YYYY");
  timeElement.innerHTML = moment()
    .tz("US/Hawaii")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
