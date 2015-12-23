//((): void => {

//    ywMenuId.$inject = ["app.services.CurrentSpot"];
//    function ywMenuId(currentSpot) {
//        var menuElements = [];

//        function setActive(element, menuId) {
//            if (currentSpot.getActiveMenu() == menuId) {
//                element.addClass('active');
//            } else {
//                element.removeClass('active');
//            }
//        }

//        return function(scope, element, attrs) {
//            var menuId = attrs["ywMenuId"];
//            menuElements.push({ id: menuId, node: element });

//            var watcherFn = function(watchScope) {
//                return watchScope.$eval('getActiveMenu()');
//            }
//            scope.$watch(watcherFn, function(newValue, oldValue) {
//                for (var i = 0; i < menuElements.length; i++) {
//                    var menuElement = menuElements[i];
//                    setActive(menuElement.node, menuElement.id);
//                }
//            });
//        }
//    }

//    angular
//        .module("maintenance")
//        .directive("ywMenuId", ywMenuId);
//})();



namespace app.Directive {

    class ywMenuIdController {

        public menuElements: any[];

        static $inject = ["app.services.CurrentSpot"];
        constructor(private CurrentSpot: services.CurrentSpot) {
            this.menuElements = [];
        }

        public setActive = (element: ng.IAugmentedJQuery, menuId: string): void => {
            if (this.CurrentSpot.getActiveMenu() == menuId) {
                element.addClass("active");
            } else {
                element.removeClass("active");
            }
        }

        public watcherCallback = (newValue: string, oldValue: string): void => {
            for (var i = 0; i < this.menuElements.length; i++) {
                let menuElement = this.menuElements[i];
                this.setActive(menuElement.node, menuElement.id);
            }
        }
        
    }

    class ywMenuId implements ng.IDirective {

        restrict = "A";

        controller = ywMenuIdController;

        static instance(): ng.IDirective {
            return new ywMenuId;
        }

        private watcherFn(watchScope: any): any {
            return watchScope.$eval("vm.getActiveMenu()");
        }

        public link = (scope: ng.IScope,
            element: ng.IAugmentedJQuery,
            attributes: ng.IAttributes, controller: ywMenuIdController): void => {

            let menuId = attributes["ywMenuId"];
            controller.menuElements.push({ id: menuId, node: element });

            scope.$watch(this.watcherFn, controller.watcherCallback);
        }

    }

    angular
        .module("maintenance")
        .directive("ywMenuId", ywMenuId.instance);
}