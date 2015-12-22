var app;
(function (app) {
    var Directive;
    (function (Directive) {
        var ywMenuId = (function () {
            function ywMenuId(currentSpot) {
                this.currentSpot = currentSpot;
                this.menuElements = [];
            }
            ywMenuId.prototype.setActive = function (element, menuId) {
                if (this.currentSpot.getActiveMenu() == menuId) {
                    element.addClass("active");
                }
                else {
                    element.removeClass("active");
                }
            };
            ywMenuId.prototype.watcherFn = function (watchScope) {
                return watchScope.$eval("getActiveMenu()");
            };
            ywMenuId.prototype.watcherCallback = function (newValue, oldValue) {
                for (var i = 0; i < this.menuElements.length; i++) {
                    var menuElement = this.menuElements[i];
                    this.setActive(menuElement.node, menuElement.id);
                }
            };
            ywMenuId.prototype.link = function (scope, element, attributes) {
                var menuId = attributes["ywMenuId"];
                this.menuElements.push({ id: menuId, node: element });
                scope.$watch(this.watcherFn, this.watcherCallback);
            };
            ywMenuId.$inject = ["app.services.CurrentSpot"];
            return ywMenuId;
        })();
        angular
            .module("maintenance")
            .directive("ywMenuId", function () { return new ywMenuId(); });
    })(Directive = app.Directive || (app.Directive = {}));
})(app || (app = {}));
//# sourceMappingURL=ywMenuId.js.map