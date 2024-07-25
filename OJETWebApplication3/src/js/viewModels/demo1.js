require(
    ["require", 
        "exports", 
        "knockout", 
        "ojs/ojbootstrap", 
        "ojs/ojconverter-number", 
        "ojs/ojknockout", 
        "oj-c/input-number",
        "oj-c/input-text", 
        "ojs/ojformlayout"], 
        function (require, exports, ko, Bootstrap, ojconverter_number_1) {
    "use strict";
    
    class MemberViewModel {
        constructor() {
            this.currency = ko.observable(12345);
            this.currencyRoundDuringParse = ko.observable(78000);
            this.decimal = ko.observable(23450);
            this.decimalRoundingMode = ko.observable(45000.5);
            this.decimalRoundingModeUpParse = ko.observable(35450.5);
            this.decimalRoundingModeDownParse = ko.observable(45999.5);
            this.decimalRoundingModeEvenParse = ko.observable(12500.5);
            this.percent = ko.observable(459);
            this.percentRoundDuringParse = ko.observable(890);
            this.formatDigitalUnits = ko.observable(34321);
            this.eurNumberConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "currency",
                currency: "EUR",
                currencyDisplay: "symbol",
            });
            this.usdNumberConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "currency",
                currency: "USD",
                currencyDisplay: "code",
            });
            this.currencyHalfUpConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "currency",
                currency: "EUR",
                currencyDisplay: "symbol",
                roundingMode: "HALF_UP",
                roundDuringParse: true,
            });
            this.usdShortNumberConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "currency",
                currency: "USD",
                currencyDisplay: "symbol",
                currencyFormat: "short",
                minimumFractionDigits: 0,
            });
            this.usdLongNumberConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "currency",
                currency: "USD",
                currencyDisplay: "symbol",
                currencyFormat: "long",
                minimumFractionDigits: 0,
            });
            this.decimal1Converter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                minimumIntegerDigits: 2,
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
                useGrouping: false,
            });
            this.decimal2Converter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                decimalFormat: "short",
                minimumIntegerDigits: 2,
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
                useGrouping: false,
            });
            this.decimalHalfDownConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_DOWN",
                maximumFractionDigits: 0,
                useGrouping: false,
            });
            this.decimalHalfDownGroupConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_DOWN",
                maximumFractionDigits: 0,
            });
            this.decimalHalfUpGroupConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_UP",
                maximumFractionDigits: 0,
            });
            this.decimalHalfEvenGroupConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_EVEN",
                maximumFractionDigits: 0,
            });
            this.decimalHalfUpGroupRoundConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_UP",
                maximumFractionDigits: 2,
                roundDuringParse: true,
            });
            this.decimalHalfDownGroupRoundConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_DOWN",
                maximumFractionDigits: 2,
                roundDuringParse: true,
            });
            this.decimalHalfEvenGroupRoundConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                roundingMode: "HALF_EVEN",
                maximumFractionDigits: 2,
                roundDuringParse: true,
            });
            this.decimalShortConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                decimalFormat: "short",
            });
            this.decimalLongConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "decimal",
                decimalFormat: "long",
            });
            this.percent1Converter = new ojconverter_number_1.IntlNumberConverter({
                style: "percent",
                maximumFractionDigits: 2,
                useGrouping: false,
                roundingMode: "HALF_DOWN",
                roundDuringParse: true,
            });
            this.percent2Converter = new ojconverter_number_1.IntlNumberConverter({
                style: "percent",
                maximumFractionDigits: 2,
                useGrouping: false,
            });
            this.unitConverter = new ojconverter_number_1.IntlNumberConverter({
                style: "unit",
                unit: "bit",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById("div1"));
        ko.applyBindings(new MemberViewModel(), document.getElementById("div1"));
    });
});