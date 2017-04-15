"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HotComponent = (function () {
    function HotComponent() {
        this.items = [{ url: "green", name: "safsdf", cost: 12 }, { url: "green", name: "safsdf", cost: 12 }, { url: "green", name: "safsdf", cost: 12 }, { url: "green", name: "safsdf", cost: 12 }];
    }
    return HotComponent;
}());
HotComponent = __decorate([
    core_1.Component({
        selector: 'hot-app',
        templateUrl: 'app/hot.component.html',
        styleUrls: ['app/hot.component.css']
    })
], HotComponent);
exports.HotComponent = HotComponent;
//# sourceMappingURL=hot.component.js.map