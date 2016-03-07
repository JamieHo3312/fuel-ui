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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var AnimationListener_1 = require("../../directives/Animation/AnimationListener");
var Range_1 = require("../../pipes/Range/Range");
var Modal = (function () {
    function Modal(el) {
        this.displayed = false;
        this.closeOnUnfocus = true;
        this.closeButton = true;
        this.modalTitle = '';
        this._el = el.nativeElement;
    }
    Modal.prototype.clickElement = function (e) {
        if (this.closeOnUnfocus) {
            if (e.srcElement.className == 'modal customFadeIn' || e.srcElement.className == 'modal-dialog')
                this.showModal(false);
        }
    };
    Modal.prototype.getElement = function () {
        return this._el;
    };
    Modal.prototype.showModal = function (isDisplayed) {
        var _this = this;
        var body = document.body;
        if (isDisplayed === undefined) {
            this.displayed = !this.displayed;
        }
        else {
            this.displayed = isDisplayed;
        }
        if (this.displayed) {
            body.classList.add('modal-open');
        }
        else {
            body.classList.remove('modal-open');
            if (this.closeOnUnfocus) {
                this._el.childNodes[0].removeEventListener('click', function (e) {
                    if (e.srcElement.className == 'modal customFadeIn' || e.srcElement.className == 'modal-dialog')
                        _this.showModal(false);
                });
            }
        }
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Modal.prototype, "closeOnUnfocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Modal.prototype, "closeButton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Modal.prototype, "modalTitle", void 0);
    Modal = __decorate([
        core_1.Component({
            selector: 'modal',
            host: {
                '(click)': 'clickElement($event)'
            }
        }),
        core_1.View({
            styles: ["\n   .customFadeIn {\n     -webkit-animation-name: fadeInDown;\n     -moz-animation-name: fadeInDown;\n     animation-name: fadeInDown;\n     -webkit-animation-duration: 1s;\n     -moz-animation-duration: 1s;\n     animation-duration: 1s;\n     -webkit-animation-timing-function: ease;\n     -moz-animation-timing-function: ease;\n     animation-timing-function: ease; }\n    "],
            template: "\n   <div class=\"modal\" [ngClass]=\"{customFadeIn: displayed}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [style.display]=\"displayed ? 'block' : 'none'\">\n       <div class=\"modal-dialog\" role=\"document\">\n           <div class=\"modal-content\">\n               <div class=\"modal-header\">\n                   <button *ngIf=\"closeButton\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"showModal(false)\">\n                       <span aria-hidden=\"true\">&#215;</span>\n                       <span class=\"sr-only\">Close</span>\n                   </button>\n                   <h4 class=\"modal-title\" id=\"myModalLabel\">{{modalTitle}}</h4>\n               </div>\n               <ng-content></ng-content>\n           </div>\n       </div>\n   </div>\n   <div class=\"modal-backdrop\" [ngClass]=\"{fade: displayed, in: displayed}\" [style.display]=\"displayed ? 'block' : 'none'\"></div>\n    ",
            directives: [common_1.CORE_DIRECTIVES, AnimationListener_1.AnimationListener],
            pipes: [Range_1.Range]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
exports.MODAL_PROVIDERS = [
    Modal
];

//# sourceMappingURL=Modal.js.map
