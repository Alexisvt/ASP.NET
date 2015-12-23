var app;
(function (app) {
    var Directive;
    (function (Directive) {
        var ywMenuIdController = (function () {
            function ywMenuIdController(CurrentSpot) {
                var _this = this;
                this.CurrentSpot = CurrentSpot;
                this.setActive = function (element, menuId) {
                    if (_this.CurrentSpot.getActiveMenu() == menuId) {
                        element.addClass("active");
                    }
                    else {
                        element.removeClass("active");
                    }
                };
                this.watcherCallback = function (newValue, oldValue) {
                    for (var i = 0; i < _this.menuElements.length; i++) {
                        var menuElement = _this.menuElements[i];
                        _this.setActive(menuElement.node, menuElement.id);
                    }
                };
                this.menuElements = [];
            }
            ywMenuIdController.$inject = ["app.services.CurrentSpot"];
            return ywMenuIdController;
        })();
        var ywMenuId = (function () {
            function ywMenuId() {
                var _this = this;
                this.restrict = "A";
                this.controller = ywMenuIdController;
                this.link = function (scope, element, attributes, controller) {
                    var menuId = attributes["ywMenuId"];
                    controller.menuElements.push({ id: menuId, node: element });
                    scope.$watch(_this.watcherFn, controller.watcherCallback);
                };
            }
            ywMenuId.instance = function () {
                return new ywMenuId();
            };
            ywMenuId.prototype.watcherFn = function (watchScope) {
                return watchScope.$eval("vm.getActiveMenu()");
            };
            return ywMenuId;
        })();
        angular
            .module("maintenance")
            .directive("ywMenuId", ywMenuId.instance);
    })(Directive = app.Directive || (app.Directive = {}));
})(app || (app = {}));
//# sourceMappingURL=ywMenuId.js.map