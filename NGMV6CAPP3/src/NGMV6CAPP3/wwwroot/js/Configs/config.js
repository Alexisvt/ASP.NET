(function () {
    angular.module("maintenance")
        .config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider
            .when("/locations", {
            templateUrl: "views/locations.html",
            controller: "app.Controllers.LocationCtrl",
            controllerAs: "vm"
        });
        $routeProvider
            .when("/sites", {
            templateUrl: "views/sites.html",
            controller: "app.Controllers.SitesCtrl",
            controllerAs: "vm"
        });
        $routeProvider.otherwise({
            templateUrl: "views/main.html",
            controller: "app.Controllers.MainCtrl",
            controllerAs: "vm"
        });
    }
})();
//# sourceMappingURL=config.js.map