require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojlabel", "ojs/ojbutton", "ojs/ojformlayout"], function (require, exports, ko, Bootstrap) {
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
          this.value = ko.observable("Tom");
          this.rawValue = ko.observable("");
      }
  }
  Bootstrap.whenDocumentReady().then(() => {
    ko.cleanNode(document.getElementById("div1"));
    ko.applyBindings(new DemoModel(), document.getElementById("div1"));
});
});