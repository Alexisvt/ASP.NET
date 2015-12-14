module app.Directives {

    ywActiveMenu.$inject = ["app.services.CurrentSpot"];
    function ywActiveMenu(currentSpot: services.CurrentSpot) : ng.IDirective {

        var directive = <ng.IDirective>{};

        return directive;
    }

    angular
        .module("maintenance")
        .directive("app.Directives.ywActiveMenu", ywActiveMenu);
}