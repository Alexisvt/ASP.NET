(function () {
    angular.module("maintenance", ["ngRoute"]);
})();
//# sourceMappingURL=app.js.map
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