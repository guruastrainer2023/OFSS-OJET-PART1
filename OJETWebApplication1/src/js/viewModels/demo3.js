require([
    "require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "knockout", 
    "ojs/ojknockout", 
    "oj-c/menu-button"], 
    function (require, exports, ko, Bootstrap) {
    "use strict";
    
    class MenuButtonModel {
        constructor() {
            this.itemsBasic = ko.observableArray([
                {
                    label: 'Save',
                    key: 'save'
                },
                {
                    label: 'Zoom In',
                    key: 'zoomin',
                },
                {
                    label: 'Zoom Out',
                    key: 'zoomout'
                },
                {
                    label: 'Print...',
                    key: 'print',
                    disabled: true
                }
            ]);
            
           
            
            this.label = ko.observable("Actions");
            this.suffix = ko.observable("");
            this.icon = ko.observable('oj-ux-ico-settings');
            this.single = ko.observable({ 'font': 'bold' });
            this.multiple = ko.observable({ 'font': ['bold', 'italic'] });
            
           
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById("menuButtons-container"));
        ko.applyBindings(new MenuButtonModel(), document.getElementById("menuButtons-container"));
    });
});