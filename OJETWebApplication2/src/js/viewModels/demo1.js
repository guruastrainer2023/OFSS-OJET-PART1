require(["require", 
        "exports", 
        "knockout", 
        "ojs/ojbootstrap", 
        "ojs/ojarraydataprovider",
        "ojs/ojknockout", 
        "ojs/ojinputtext", 
        "ojs/ojlabel", 
        "ojs/ojbutton", 
        "oj-c/input-number",
        "ojs/ojdatetimepicker",
        "oj-c/input-password",
        "oj-c/checkbox",
        "oj-c/checkboxset",
        "oj-c/radioset",
        "ojs/ojselectcombobox",
         "oj-c/select-multiple",
         "oj-c/select-single",
          "ojs/ojslider",
          "ojs/ojswitch",
          "oj-c/text-area",
         "ojs/ojformlayout"], 
        function (require, exports, ko, Bootstrap, ArrayDataProvider) {
    "use strict";
    
    class DemoModel {
        constructor() {
            this.error = [{ summary: "summary", detail: "detail", severity: "error" }];
            this.warning = [
                { summary: "summary", detail: "detail", severity: "warning" },
            ];
            this.info = [{ summary: "summary", detail: "detail", severity: "info" }];
            this.confirmation = [
                { summary: "summary", detail: "detail", severity: "confirmation" },
            ];
            this.nameValue = ko.observable("Tom");
            this.salaryValue=ko.observable(1000.00);
            this.doj = ko.observable("");
            this.password=ko.observable("");
            this.readyToTravel=ko.observable(true);
            this.rawValue = ko.observable("");
            this.options = [
                { value: 'safari', label: 'Safari' },
                { value: 'edge', label: 'Edge' },
                {
                    value: 'chrome',
                    label: 'Chrome',
                    assistiveText: 'More Info',
                    helpSourceLink: 'http://oracle.com',
                    helpSourceText: 'help link'
                },
                { value: 'firefox', label: 'Firefox' }
            ];

            this.laptopOptions = [
                { value: "desktop", label: "Desktop" },
                { value: "laptop", label: "Laptop" },
                { value: "tablet", label: "Tablet" },
            ];

            this.selectVal = new Set(['CH', 'FF']);
            this.browsers = [
                { value: 'IE', label: 'Internet Explorer' },
                { value: 'FF', label: 'Firefox' },
                { value: 'CH', label: 'Chrome' },
                { value: 'OP', label: 'Opera' },
                { value: 'SA', label: 'Safari' }
            ];
            this.browsersDP = new ArrayDataProvider(this.browsers, {
                keyAttributes: 'value'
            });

            this.address = ko.observable("");
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
      ko.cleanNode(document.getElementById("div1"));
      ko.applyBindings(new DemoModel(), document.getElementById("div1"));
  });
  });