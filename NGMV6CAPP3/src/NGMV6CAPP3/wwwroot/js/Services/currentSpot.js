var app;
(function (app) {
    var services;
    (function (services) {
        var CurrentSpot = (function () {
            function CurrentSpot() {
                this.activeMenuId = "";
                this.titleText = "";
            }
            CurrentSpot.prototype.setCurrentSpot = function (menuId, title) {
                this.activeMenuId = menuId;
                this.titleText = title;
            };
            CurrentSpot.prototype.getActiveMenu = function () {
                return this.activeMenuId;
            };
            CurrentSpot.prototype.getTitle = function () {
                return this.titleText;
            };
            return CurrentSpot;
        })();
        services.CurrentSpot = CurrentSpot;
        function factory() {
            return new CurrentSpot();
        }
        angular
            .module("maintenance")
            .service("app.services.CurrentSpot", CurrentSpot);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=CurrentSpot.js.map