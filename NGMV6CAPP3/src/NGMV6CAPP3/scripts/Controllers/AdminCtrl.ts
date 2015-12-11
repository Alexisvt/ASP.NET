module app.Controllers {

    interface IAdminCtrlScope {
        isActive(menuId:string): boolean;
        getTitle(): string;
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
    }

    angular.module("maintenance")
        .controller("app.Controllers.AdminCtrl", AdminCtrl);
}