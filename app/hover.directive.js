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
var HoverDirective = (function () {
    function HoverDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }
    HoverDirective.prototype.onMouseEnter = function () {
        this.setTextShadow("0px 0px 13px rgba(255,255,255,0.7)");
    };
    HoverDirective.prototype.onMouseLeave = function () {
        this.setTextShadow("0px 0px 0px");
    };
    HoverDirective.prototype.setTextShadow = function (val) {
        this.renderer.setElementStyle(this.element.nativeElement, "text-shadow", val);
    };
    return HoverDirective;
}());
HoverDirective = __decorate([
    core_1.Directive({
        selector: '[hover]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], HoverDirective);
exports.HoverDirective = HoverDirective;
//# sourceMappingURL=hover.directive.js.map