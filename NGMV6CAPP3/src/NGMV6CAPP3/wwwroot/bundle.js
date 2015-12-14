(function () {
    angular.module("maintenance", ["ngRoute"]);
})();
//# sourceMappingURL=app.js.map
(function () {
    "use strict";
    angular.module("maintenance")
        .config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider
            .when("/locations", {
            templateUrl: "views/locations.html",
            controller: "app.Controllers.LocationCtrl",
            controllerAs: "vm"
        })
            .when("/sites", {
            templateUrl: "views/sites.html",
            controller: "app.Controllers.SitesCtrl",
            controllerAs: "vm"
        })
            .otherwise({
            templateUrl: "views/main.html",
            controller: "app.Controllers.MainCtrl",
            controllerAs: "vm"
        });
    }
})();
//# sourceMappingURL=config.js.map
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
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var LocationCtrl = (function () {
            function LocationCtrl(currentSpot) {
                this.currentSpot = currentSpot;
            }
            LocationCtrl.$inject = ["app.services.CurrentSpot"];
            return LocationCtrl;
        })();
        angular
            .module("maintenance")
            .controller("app.Controllers.LocationCtrl", LocationCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=LocationCtrl.js.map
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var MainCtrl = (function () {
            function MainCtrl(currentSpot) {
                this.currentSpot = currentSpot;
            }
            MainCtrl.$inject = ["app.services.CurrentSpot"];
            return MainCtrl;
        })();
        angular
            .module("maintenance")
            .controller("app.Controllers.MainCtrl", MainCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=MainCtrl.js.map
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var SitesCtrl = (function () {
            function SitesCtrl(currentSpot) {
                this.currentSpot = currentSpot;
            }
            SitesCtrl.$inject = ["app.services.CurrentSpot"];
            return SitesCtrl;
        })();
        angular
            .module("maintenance")
            .controller("app.Controllers.SitesCtrl", SitesCtrl);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SitesCtrl.js.map
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
            .factory("app.services.CurrentSpot", factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=CurrentSpot.js.map