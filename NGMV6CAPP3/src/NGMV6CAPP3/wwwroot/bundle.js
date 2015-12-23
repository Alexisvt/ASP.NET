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
            AdminCtrl.prototype.getActiveMenu = function () {
                return this.currentSpot.getActiveMenu();
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
                return new ywMenuId;
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