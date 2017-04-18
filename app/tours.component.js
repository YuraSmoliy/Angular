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
var Tours_service_1 = require("./Tours.service");
var ToursComponent = (function () {
    function ToursComponent(toursService) {
        this.toursService = toursService;
        this.items = [];
    }
    ToursComponent.prototype.addItem = function (url, name, cost) {
        this.toursService.addData(url, name, cost);
    };
    ToursComponent.prototype.ngOnInit = function () {
        this.items = this.toursService.getData();
    };
    return ToursComponent;
}());
ToursComponent = __decorate([
    core_1.Component({
        selector: 'tours-app',
        templateUrl: 'app/tours.component.html',
        styleUrls: ['app/tours.component.css'],
        providers: [Tours_service_1.ToursService]
    }),
    __metadata("design:paramtypes", [Tours_service_1.ToursService])
], ToursComponent);
exports.ToursComponent = ToursComponent;
//# sourceMappingURL=tours.component.js.map