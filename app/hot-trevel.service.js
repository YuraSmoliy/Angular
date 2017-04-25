"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var hot_1 = require("./hot");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HotTrevelService = (function () {
    function HotTrevelService(http) {
        this.http = http;
        this.items = [];
    }
    HotTrevelService.prototype.getData = function () {
        var _this = this;
        return this.http.get('app/hot.json')
            .map(function (resp) {
            var hotsList = resp.json().data;
            //let hots:Hot[]=[];
            for (var index in hotsList) {
                var hot = hotsList[index];
                _this.items[index] = new hot_1.Hot(hot.url, hot.name, hot.cost);
            }
            //this.items=hots;
            return _this.items;
        });
    };
    ;
    HotTrevelService.prototype.addData = function (url, name, cost) {
        this.items.push(new hot_1.Hot(url, name, cost));
    };
    HotTrevelService.prototype.deleteDate = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    return HotTrevelService;
}());
HotTrevelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HotTrevelService);
exports.HotTrevelService = HotTrevelService;
//# sourceMappingURL=hot-trevel.service.js.map