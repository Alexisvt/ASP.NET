var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var AdminCtrl = (function () {
            function AdminCtrl(currentSpot) {
                this.currentSpot = currentSpot;
            }
            AdminCtrl.prototype.isActive = function (menuId) {
                return this.currentSpot.getActiveMenu() == menuId;
            };
            AdminCtrl.prototype.getTitle = function () {
                return this.currentSpot.getTitle();
            };
            AdminCtrl.$inject = ["app.services.CurrentSpot"];
            return AdminCtrl;
        })();
        angular.module("maintenance")
            .controller("app.Controllers.AdminCtrl", AdminCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=AdminCtrl.js.map