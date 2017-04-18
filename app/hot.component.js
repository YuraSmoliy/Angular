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
var core_1 = require("@angular/core");
var hot_trevel_service_1 = require("./hot-trevel.service");
var HotComponent = (function () {
    function HotComponent(hotTrevelService) {
        this.hotTrevelService = hotTrevelService;
        this.items = [];
    }
    /*addItem(url:string, name: string, cost: number){
         
        this.hotTrevelService.addData(url, name, cost);
    }*/
    HotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotTrevelService.getData().subscribe(function (data) { return _this.items = data; });
    };
    return HotComponent;
}());
HotComponent = __decorate([
    core_1.Component({
        selector: 'hot-app',
        templateUrl: 'app/hot.component.html',
        styleUrls: ['app/hot.component.css'],
        providers: [hot_trevel_service_1.HotTrevelService]
    }),
    __metadata("design:paramtypes", [hot_trevel_service_1.HotTrevelService])
], HotComponent);
exports.HotComponent = HotComponent;
//# sourceMappingURL=hot.component.js.map