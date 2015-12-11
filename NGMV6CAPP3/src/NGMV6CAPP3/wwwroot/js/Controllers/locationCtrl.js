var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var LocationCtrl = (function () {
            function LocationCtrl(currentSpot) {
                this.currentSpot = currentSpot;
                currentSpot.setCurrentSpot("Locations", "Manage the list of diving locations");
            }
            LocationCtrl.$inject = ["app.services.CurrentSpot"];
            return LocationCtrl;
        })();
        angular
            .module("maintenance")
            .controller("app.Controllers.LocationCtrl", LocationCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=LocationCtrl.js.map