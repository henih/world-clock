setInterval(function () {
  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  let hawaiiTimezone = moment().tz("US/Hawaii");

  hawaiiDateElement.innerHTML = hawaiiTimezone.format("MMMM Do YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTimezone = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML =
    johannesburgTimezone.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let frenchPolynesiaElement = document.querySelector("#french-polynesia");
  let frenchPolynesiaDateElement =
    frenchPolynesiaElement.querySelector(".date");
  let frenchPolynesiaTimeElement =
    frenchPolynesiaElement.querySelector(".time");
  let frenchPolynesiaTimezone = moment().tz("Pacific/Tahiti");

  frenchPolynesiaDateElement.innerHTML =
    frenchPolynesiaTimezone.format("MMMM Do YYYY");
  frenchPolynesiaTimeElement.innerHTML = frenchPolynesiaTimezone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
