"use strict";

console.log("testing");

let $ = require('jquery'),
    apiCall = require("./underground-api"),
    conditionsHBS = require("../templates/current.hbs"),
    forecastHBS = require("../templates/forecast.hbs");

$("#zip-code").keyup((event) =>{
    if (event.keyCode === 13) {
        console.log("You pressed enter", $("#zip-code").val());
        apiCall.getWeather($("#zip-code").val())
        .then(
            (data) => {
            let currentConditions = data.current_observation;
            $("#output").append(conditionsHBS(currentConditions));
            foreCastFunc();
        });
    }
});


$("#big-butts").click((event) => {
    console.log("someone likes big butts and clicked the check weather button");
    apiCall.getWeather($("#zip-code").val())
        .then(
            (data) => {
            let currentConditions = data.current_observation;
            $("#output").append(conditionsHBS(currentConditions));

            foreCastFunc();

        });

});

function foreCastFunc () {
    $("#show-forecast").click((event) => {
        apiCall.getWeather($("#zip-code").val())
        .then(
            (data) =>{
                let forecast = data.forecast.simpleforecast.forecastday;
                forecast.shift();
                $("#output2").append(forecastHBS(forecast));
        });
    });
}
