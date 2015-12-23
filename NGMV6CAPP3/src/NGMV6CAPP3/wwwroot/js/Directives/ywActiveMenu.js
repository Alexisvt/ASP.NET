var app;
(function (app) {
    var Directive;
    (function (Directive) {
        var ywActiveMenuController = (function () {
            function ywActiveMenuController(currentSpot) {
                this.currentSpot = currentSpot;
            }
            ywActiveMenuController.$inject = ["app.services.CurrentSpot"];
            return ywActiveMenuController;
        })();
        var ywActiveMenu = (function () {
            function ywActiveMenu() {
                this.restrict = "A";
                this.controller = ywActiveMenuController;
                this.link = function (scope, element, attributes, controller) {
                    var activeMenuId = attributes["ywActiveMenu"];
                    var activeTitle = attributes["ywActiveTitle"];
                    controller.currentSpot.setCurrentSpot(activeMenuId, activeTitle);
                };
            }
            ywActiveMenu.instance = function () {
                return new ywActiveMenu;
            };
            return ywActiveMenu;
        })();
        angular
            .module("maintenance")
            .directive("ywActiveMenu", ywActiveMenu.instance);
    })(Directive = app.Directive || (app.Directive = {}));
})(app || (app = {}));
//# sourceMappingURL=ywActiveMenu.js.map