var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var MainCtrl = (function () {
            function MainCtrl(currentSpot) {
                this.currentSpot = currentSpot;
                currentSpot.setCurrentSpot("", "");
            }
            MainCtrl.$inject = ["app.services.CurrentSpot"];
            return MainCtrl;
        })();
        angular
            .module("maintenance")
            .controller("app.Controllers.MainCtrl", MainCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=MainCtrl.js.map