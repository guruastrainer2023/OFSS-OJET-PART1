require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojconverter-datetime", "ojs/ojconverterutils-i18n", "ojs/ojknockout", "ojs/ojdatetimepicker", "ojs/ojformlayout"], function (require, exports, ko, Bootstrap, ojconverter_datetime_1, ojconverterutils_i18n_1) {
    "use strict";
    
    class MemberViewModel {
        constructor() {
            this.date = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIsoDateString(new Date(2019, 2, 11)));
            this.datetime = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIso(new Date(2019, 0, 1)));
            this.time = ko.observable('T18:00:00');
            this.dateTimeNumericConverter = new ojconverter_datetime_1.IntlDateTimeConverter({
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            this.dateMediumConverter = new ojconverter_datetime_1.IntlDateTimeConverter({
                formatType: 'date',
                dateFormat: 'medium'
            });
            this.dateShortConverter = new ojconverter_datetime_1.IntlDateTimeConverter({
                formatType: 'date',
                dateFormat: 'short'
            });
            this.dateTimeShortConverter = new ojconverter_datetime_1.IntlDateTimeConverter({
                formatType: 'datetime',
                dateFormat: 'short',
                timeFormat: 'short'
            });
            this.timeFullConverter = new ojconverter_datetime_1.IntlDateTimeConverter({
                formatType: 'time',
                timeFormat: 'full'
            });
            this.twoDigitTimeConverter = new ojconverter_datetime_1.IntlDateTimeConverter({
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('div1'))
        ko.applyBindings(new MemberViewModel(), document.getElementById('div1'));
    });
});