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
var AdminComponent = (function () {
    function AdminComponent(hotTrevelService) {
        this.hotTrevelService = hotTrevelService;
        this.items = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotTrevelService.getData().subscribe(function (data) { return _this.items = data; });
    };
    AdminComponent.prototype.addElem = function (url, name, cost) {
        this.hotTrevelService.addData(url, name, +cost);
    };
    AdminComponent.prototype.deleteHotTour = function (item) {
        this.hotTrevelService.deleteDate(item);
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin-app',
        templateUrl: 'app/admin.component.html',
        styleUrls: ['app/admin.component.css']
    }),
    __metadata("design:paramtypes", [hot_trevel_service_1.HotTrevelService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map