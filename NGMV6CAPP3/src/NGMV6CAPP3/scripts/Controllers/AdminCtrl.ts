module app.Controllers {

    interface IAdminCtrlScope {
        isActive(menuId:string): boolean;
        getTitle(): string;
        getActiveMenu(): string;
    }

    class AdminCtrl implements IAdminCtrlScope{

        //injecting currentSpot
        static $inject = ["app.services.CurrentSpot"];
        constructor(public currentSpot: services.ICurrentSpot) {
        }

        isActive(menuId: string): boolean {
            return this.currentSpot.getActiveMenu() == menuId;
        }

        getTitle(): string {
            return this.currentSpot.getTitle();
        }

        getActiveMenu(): string {
            return this.currentSpot.getActiveMenu();
        }
    }

    angular.module("maintenance")
        .controller("app.Controllers.AdminCtrl", AdminCtrl);
}