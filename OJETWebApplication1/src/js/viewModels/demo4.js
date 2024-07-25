require([
    "require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojknockout", 
    "oj-c/progress-bar", 
    "ojs/ojbutton"], 
    function (require, exports, ko, ojbootstrap_1) {
    "use strict";
    
    class ViewModel {
        constructor() {
            this.step = ko.observable(0);
            this.progressValue = ko.pureComputed(() => {
                return Math.min(this.step(), 100);
            });
            window.setInterval(() => {
                this.step((this.step() + 1) % 200);
            }, 30);
        }
    }
    (0, ojbootstrap_1.whenDocumentReady)().then(() => {
        ko.cleanNode(document.getElementById("progressBarWrapper"))
        ko.applyBindings(new ViewModel(), document.getElementById("progressBarWrapper"));
    });
});