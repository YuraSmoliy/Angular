"use strict";
var hot_1 = require("./hot");
var HotTrevelService = (function () {
    function HotTrevelService() {
        this.data = [
            { url: "\'app/berlin.jpg\'", name: "safsdf", cost: 12 },
            { url: "\'app/egypt.jpg\'", name: "safsdf", cost: 12 },
            { url: "\'app/barsik.jpg\'", name: "safsdf", cost: 12 },
            { url: "\'app/carpath.jpg\'", name: "safsdf", cost: 12 }
        ];
    }
    HotTrevelService.prototype.getData = function () {
        return this.data;
    };
    HotTrevelService.prototype.addData = function (url, name, cost) {
        this.data.push(new hot_1.Hot(url, name, cost));
    };
    return HotTrevelService;
}());
exports.HotTrevelService = HotTrevelService;
//# sourceMappingURL=hot-trevel.service.js.map