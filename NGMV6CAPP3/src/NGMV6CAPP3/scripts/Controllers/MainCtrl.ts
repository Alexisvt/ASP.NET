module app.Controllers {

    interface IMainCtrlScope {
    }

    class MainCtrl implements IMainCtrlScope {
        
        static $inject = ["app.services.CurrentSpot"];
        constructor(public currentSpot: services.ICurrentSpot) {
            //currentSpot.setCurrentSpot("", "");
        }
    }

    angular
        .module("maintenance")
        .controller("app.Controllers.MainCtrl", MainCtrl);

}