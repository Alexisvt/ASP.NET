var app;
(function (app) {
    var Directives;
    (function (Directives) {
        ywActiveMenu.$inject = ["app.services.CurrentSpot"];
        function ywActiveMenu(currentSpot) {
            var directive = {};
            return directive;
        }
        angular
            .module("maintenance")
            .directive("app.Directives.ywActiveMenu", ywActiveMenu);
    })(Directives = app.Directives || (app.Directives = {}));
})(app || (app = {}));
//# sourceMappingURL=ywActiveMenu.js.map