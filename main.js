"use strict";
exports.__esModule = true;
var person = {
    greeting: function (name) {
        console.log("Hello ".concat(name));
    }
};
// person.greeting('Salva')
//? Problem 1.B - How would you make the name immutable?
//? (Can write or just describe)
// Object.freeze(person)
//? Problem 2 - Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least
var citiesList = [
    'nashville',
    'nashville',
    'los angeles',
    'nashville',
    'memphis',
    'barcelona',
    'los angeles',
    'sevilla',
    'madrid',
    'canary islands',
    'barcelona',
    'madrid',
    'nashville',
    'barcelona',
    'london',
    'berlin',
    'madrid',
    'nashville',
    'london',
    'madrid',
];
var logMostCities = function () {
    var arr = [];
    var arrAux = [];
    var set = new Set(citiesList);
    var uniqueCities = Array.from(set);
    for (var _i = 0, uniqueCities_1 = uniqueCities; _i < uniqueCities_1.length; _i++) {
        var city = uniqueCities_1[_i];
        arr.push({ name: city, count: 0 });
    }
    for (var _a = 0, citiesList_1 = citiesList; _a < citiesList_1.length; _a++) {
        var i = citiesList_1[_a];
        for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
            var j = arr_1[_b];
            if (i === j.name) {
                j.count += 1;
            }
        }
    }
    var sortArr = arr.sort(function (a, b) { return b.count - a.count; });
    for (var i = 0; i < 5; i++) {
        arrAux.push(sortArr[i].name);
    }
    return arrAux;
};
console.log(logMostCities());
