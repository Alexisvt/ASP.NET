var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var SitesCtrl = (function () {
            function SitesCtrl(currentSpot) {
                this.currentSpot = currentSpot;
                currentSpot.setCurrentSpot("Sites", "Manage the list of dive sites");
            }
            SitesCtrl.$inject = ["app.services.CurrentSpot"];
            return SitesCtrl;
        })();
        angular
            .module("maintenance")
            .controller("app.Controllers.SitesCtrl", SitesCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SitesCtrl.js.map