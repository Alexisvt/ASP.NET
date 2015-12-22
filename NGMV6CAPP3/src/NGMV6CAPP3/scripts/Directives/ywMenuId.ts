//(():void => {
//    "use strict";

//    ywMenuId.$inject = ["app.services.CurrentSpot"];
//    function ywMenuId( currentSpot: app.services.CurrentSpot): ng.IDirective {

//        var menuElements: any[] = [];
//        var directive = <ng.IDirective>{};

//        function setActive(element: ng.IAugmentedJQuery, menuId: string): void {
//            if (currentSpot.getActiveMenu() == menuId) {
//                element.addClass("active");
//            } else {
//                element.removeClass("active");
//            }    
//        }

//        directive.restrict = "A";
//        directive.link = (scope: ng.IScope,
//            element: ng.IAugmentedJQuery,
//            attributes: ng.IAttributes): void => {


//            var menuId = attributes["ywMenuId"];
//            menuElements.push({ id: menuId, node: element });

//            var watcherFn = (watchScope: any): any => {
//                return watchScope.$eval('getActiveMenu()');
//            };

//            scope.$watch(watcherFn, (newValue: any, oldValue: any):void => {
//                for (var i = 0; i < menuElements.length; i++) {
//                    var menuElement = menuElements[i];
//                    setActive(menuElement.node, menuElement.id);
//                }
//            });

//        }

//        return directive;
//    }

//    angular
//        .module("maintenance")
//        .directive("ywMenuId", ywMenuId);
//})()

namespace app.Directive {

    interface IywMenuId extends ng.IDirective{
    }

    class ywMenuId implements IywMenuId {

        private  menuElements: any[];

        static $inject = ["app.services.CurrentSpot"];
        constructor(public currentSpot?: services.CurrentSpot) {
            this.menuElements = [];
        }

        private setActive(element: ng.IAugmentedJQuery, menuId: string): void {
            if (this.currentSpot.getActiveMenu() == menuId) {
                element.addClass("active");
            } else {
                element.removeClass("active");
            }
        }

        private watcherFn(watchScope: any): any {
            return watchScope.$eval("getActiveMenu()");
        }

        private watcherCallback(newValue: string, oldValue: string): void {
            for (var i = 0; i < this.menuElements.length; i++) {
                let menuElement = this.menuElements[i];
                this.setActive(menuElement.node, menuElement.id);
            }
        }

        public link(scope: ng.IScope,
            element: ng.IAugmentedJQuery,
            attributes: ng.IAttributes): void {

            let menuId = attributes["ywMenuId"];
            this.menuElements.push({ id: menuId, node: element });

            scope.$watch(this.watcherFn, this.watcherCallback);
        }

    }

    angular
        .module("maintenance")
        .directive("ywMenuId", () => new ywMenuId());
}