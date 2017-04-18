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
var forms_1 = require("@angular/forms");
var ContactComponent = (function () {
    function ContactComponent() {
        this.myForm = new forms_1.FormGroup({
            "userName": new forms_1.FormControl("Tom", forms_1.Validators.required),
            "userEmail": new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
            ]),
            "userPhone": new forms_1.FormControl()
        });
    }
    ContactComponent.prototype.submit = function () {
        console.log(this.myForm);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact-app',
        styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n    "],
        template: "<form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit()\">\n                    <div class=\"form-group\">\n                        <label>\u0418\u043C\u044F</label>\n                        <input class=\"form-control\" name=\"name\" formControlName=\"userName\" />\n                         \n                        <div class=\"alert alert-danger\"\n                            *ngIf=\"myForm.controls['userName'].invalid && myForm.controls['userName'].touched\">\n                            \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043C\u044F\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input class=\"form-control\" name=\"email\" formControlName=\"userEmail\" />\n                         \n                        <div class=\"alert alert-danger\"\n                            *ngIf=\"myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched\">\n                            \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\n                        <input class=\"form-control\" name=\"phone\" formControlName=\"userPhone\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-default\" [disabled]=\"myForm.invalid\">\n                            \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\n                        </button>\n                    </div>\n                </form>"
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map