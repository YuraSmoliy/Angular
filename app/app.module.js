"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var heder_component_1 = require("./heder.component");
var hot_component_1 = require("./hot.component");
var tours_component_1 = require("./tours.component");
var contact_component_1 = require("./contact.component");
var admin_component_1 = require("./admin.component");
var footer_component_1 = require("./footer.component");
var hover_directive_1 = require("./hover.directive");
var hot_trevel_service_1 = require("./hot-trevel.service");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', component: heder_component_1.HederComponent },
    { path: 'HotTours', component: hot_component_1.HotComponent },
    { path: 'Tours', component: tours_component_1.ToursComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, heder_component_1.HederComponent, hot_component_1.HotComponent,
            tours_component_1.ToursComponent, contact_component_1.ContactComponent, footer_component_1.FooterComponent,
            hover_directive_1.HoverDirective, admin_component_1.AdminComponent],
        providers: [hot_trevel_service_1.HotTrevelService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map