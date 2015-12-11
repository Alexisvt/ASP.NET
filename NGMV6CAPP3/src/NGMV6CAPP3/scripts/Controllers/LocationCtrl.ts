module app.Controllers {

    interface ILocationCtrlScope {
    }

    class LocationCtrl implements ILocationCtrlScope {
        
        static $inject = ["app.services.CurrentSpot"];
        constructor(public currentSpot: services.ICurrentSpot) {
            currentSpot.setCurrentSpot("Locations", "Manage the list of diving locations");
        }
    }

    angular
        .module("maintenance")
        .controller("app.Controllers.LocationCtrl", LocationCtrl);
}