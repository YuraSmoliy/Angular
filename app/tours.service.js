"use strict";
var tour_1 = require("./tour");
var ToursService = (function () {
    function ToursService() {
        this.data = [
            { url: "green", name: "safsdf", cost: 12 },
            { url: "green", name: "safsdf", cost: 12 },
            { url: "green", name: "safsdf", cost: 12 },
            { url: "green", name: "safsdf", cost: 12 }
        ];
    }
    ToursService.prototype.getData = function () {
        return this.data;
    };
    ToursService.prototype.addData = function (url, name, cost) {
        this.data.push(new tour_1.Tour(url, name, cost));
    };
    return ToursService;
}());
exports.ToursService = ToursService;
//# sourceMappingURL=Tours.service.js.map