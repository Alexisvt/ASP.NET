(function () {
    "use strict";
    ywActiveMenu.$inject = ["app.services.CurrentSpot"];
    function ywActiveMenu(currentSpot) {
        var directive = {};
        directive.restrict = "A";
        directive.link = function (scope, element, attributes) {
            var activeMenuId = attributes["ywActiveMenu"];
            var activeTitle = attributes["ywActiveTitle"];
            currentSpot.setCurrentSpot(activeMenuId, activeTitle);
        };
        return directive;
    }
    angular
        .module("maintenance")
        .directive("ywActiveMenu", ywActiveMenu);
})();
//# sourceMappingURL=ywActiveMenu.js.map