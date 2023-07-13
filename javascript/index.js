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

function updateTimezone(event) {
  setInterval(function () {
    let citySelected = event.target.value;
    if (citySelected === "current") {
      citySelected = moment.tz.guess().replace("_", " ").split("/")[1];
      let citySelectorTimezone = moment().tz(citySelected);
      let citiesElement = document.querySelector("#cities");
      let cityDate = citySelectorTimezone.format("MMMM Do YYYY");
      let cityTime = citySelectorTimezone.format(
        "h:mm:ss [<small>]A[</small>]"
      );

      citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${citySelected}</h2>

            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        ⬅<a href="/"> Back to all cities</a>`;
    }

    let citySelectorTimezone = moment().tz(citySelected);
    let citiesElement = document.querySelector("#cities");
    let cityDate = citySelectorTimezone.format("MMMM Do YYYY");
    let cityTime = citySelectorTimezone.format("h:mm:ss [<small>]A[</small>]");
    let cityName = document.getElementById(citySelected).textContent;

    citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
           ⬅<a href="/"> Back to all cities</a>`;
  }, 1000);
}

let citySelectorElement = document.querySelector("#city");
citySelectorElement.addEventListener("change", updateTimezone);
