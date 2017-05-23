"use strict";

let $ = require('jquery');

let config = require("./under-config");

function getWeather(zip) {
    return new Promise(function(resolve, reject){
        $.ajax({
            url: `${config.getKey().url}${config.getKey().apiKey}/conditions/forecast/q/${zip}.json`
        }).done(function(data){
            resolve(data);
        });


    });
}

module.exports = {getWeather};



