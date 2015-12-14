module app.Controllers {

    interface ISitesCtrlScope {
    }

    class SitesCtrl implements ISitesCtrlScope {
        
        static $inject = ["app.services.CurrentSpot"];
        constructor(public currentSpot: services.ICurrentSpot) {
            //currentSpot.setCurrentSpot("Sites", "Manage the list of dive sites");
        }
    }

    angular
        .module("maintenance")
        .controller("app.Controllers.SitesCtrl", SitesCtrl);
}