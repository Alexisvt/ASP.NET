namespace app.Directive {

    class ywActiveMenuController {

        static $inject = ["app.services.CurrentSpot"];
        constructor(public currentSpot: services.CurrentSpot){}
        
    }

    class ywActiveMenu implements ng.IDirective{

        restrict = "A";
        controller = ywActiveMenuController;

        static instance(): ng.IDirective {
            return new ywActiveMenu;
        }

        link = (scope: ng.IScope,
            element: ng.IAugmentedJQuery,
            attributes: ng.IAttributes,
            controller: ywActiveMenuController): void => {

            var activeMenuId: string = attributes["ywActiveMenu"];
            var activeTitle: string = attributes["ywActiveTitle"];
            controller.currentSpot.setCurrentSpot(activeMenuId, activeTitle);
            
        }
        
        
    }

    angular
        .module("maintenance")
        .directive("ywActiveMenu", ywActiveMenu.instance);
}
