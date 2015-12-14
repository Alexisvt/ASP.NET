((): void => {
    "use strict";

    ywActiveMenu.$inject = ["app.services.CurrentSpot"];
    function ywActiveMenu(currentSpot: app.services.CurrentSpot): ng.IDirective {

        var directive = <ng.IDirective>{};

        directive.restrict = "A";
        directive.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes): void => {
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
