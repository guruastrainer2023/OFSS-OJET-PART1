require(
    ["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "knockout", 
    "ojs/ojknockout", 
    "oj-c/button"], 
    function (require, exports, ko, Bootstrap) {
    "use strict";
    
    class ButtonModel {
        constructor() {
            this.buttonClick = (event) => {
                this.clickedButton(event.currentTarget.id);
                return true;
            };
            this.button2Text = "Button 2";
            this.clickedButton = ko.observable("(None clicked yet)");
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById("buttons-container"));
        ko.applyBindings(new ButtonModel(), document.getElementById("buttons-container"));
    });
});