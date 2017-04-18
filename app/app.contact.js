"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Contact = (function () {
    function Contact(name, title, masage) {
        this.name = name;
        this.title = title;
        this.masage = masage;
    }
    return Contact;
}());
exports.Contact = Contact;
var AppComponent = (function () {
    function AppComponent() {
        this.contact = [];
    }
    AppComponent.prototype.addPhone = function () {
        this.contact.push(new Contact(this.contact.name, this.contact.title, this.contact.masage));
        alert(new Contact(this.contact.name, this.contact.title, this.contact.masage));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'contact-app',
        template: "<div class=\"col-xs-10\"> \n                    <div class=\"form-group\">\n                        <label>Your name</label>\n                        <input class=\"form-control\" name=\"title\" [(ngModel)]=\"contact.name\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Title</label>\n                        <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]=\"contact.title\" />\n                    </div>\n                   <div class=\"form-group\">\n                        <label>Masage</label>\n                        <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]=\"contact.masage\" />\n                    </div>\n\t\t\t\t\t <div class=\"form-group\">\n                        <button class=\"btn btn-default\" (click)=\"addPhone()\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                    </div>\n              </div>\n              "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.contact.js.map