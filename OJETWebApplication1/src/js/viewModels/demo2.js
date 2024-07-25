require(
    ["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojknockout", 
    "oj-c/checkboxset", 
     "ojs/ojtoolbar", 
    "ojs/ojlabel",
     "oj-c/button", 
    "oj-c/menu-button", 
    "oj-c/split-menu-button"], 
    function (require, exports, ko, Bootstrap) {
    "use strict";
    
    class ToolbarModel {
        constructor() {
            this.isSelected = (option) => {
                return this.toolbarClassNames().indexOf(option) >= 0;
            };
            this.menuItemAction = (event) => {
                this.selectedMenuItem(event.detail.selectedValue);
            };
            // if the contents of the array can change, then replace the [...] with ko.observableArray([...])
            this.drinkValues = [
                { id: 'coffee', label: 'Coffee' },
                { id: 'tea', label: 'Tea' },
                { id: 'milk', label: 'Milk' }
            ];
            // if the contents of the array can change, then replace the [...] with ko.observableArray([...])
            this.someButtons = [
                { id: 'Library', icon: 'oj-ux-ico-library' },
                { id: 'Home', icon: 'oj-ux-ico-home' },
                { id: 'Grid', icon: 'oj-ux-ico-grid-view-small' }
            ];
            this.toolbarClassNames = ko.observableArray([]);
            this.toolbarClasses = ko.computed(() => {
                return this.toolbarClassNames().join(' ');
            });
            this.fileMenuItems = [
                {
                    id: 'new',
                    label: 'New File',
                    icon: 'oj-ux-ico-new-application',
                    disabled: false
                },
                {
                    id: 'open',
                    label: 'Open File',
                    icon: 'oj-ux-ico-folder-open',
                    disabled: false
                },
                { id: 'divider', label: '----', icon: '', disabled: false },
                { id: 'save', label: 'Save', icon: 'oj-ux-ico-save', disabled: false },
                {
                    id: 'print',
                    label: 'Print...',
                    icon: 'oj-ux-ico-print',
                    disabled: true
                }
            ];
            this.cMenuButtonItems = ko.observableArray([
                {
                    label: 'Always Show Bookmarks Bar',
                    key: 'bookmarks',
                    disabled: false
                },
                {
                    label: 'Always Show Toolbar in Full Screen',
                    key: 'fullscreen',
                    disabled: false
                },
                {
                    label: 'Show Side Bar',
                    key: 'sidebar',
                    disabled: true
                },
                { type: 'divider' },
                {
                    label: 'Zoom In',
                    key: 'zoomin',
                    disabled: false
                },
                {
                    label: 'Zoom Out',
                    key: 'zoomout',
                    disabled: false
                }
            ]);
            this.cSplitMenuButtonText = ko.observable('Edit');
            this.cSplitMenuButtonItems = ko.observableArray([
                { label: 'Copy' },
                { label: 'Cut' },
                { label: 'Paste', disabled: true },
                { type: 'divider' },
                { label: 'Undo' }
            ]);
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('toolbar-container'))
        ko.applyBindings(new ToolbarModel(), document.getElementById('toolbar-container'));
    });
});