var App;
(function (App) {
    angular.module("maintenance", [])
        .controller("siteEditCtrl", function ($scope) {
        $scope.sites = [
            "Shaab El Erg",
            "Abu Gotta Ramada",
            "El Arouk",
            "Small Giftun",
            "Erg Somaya"];
        var setView = function (view) {
            $scope.view = view;
        };
        var selected = -1;
        $scope.startEdit = function (index) {
            selected = index;
            $scope.siteBox = $scope.sites[index];
            setView("edit");
        };
        $scope.save = function () {
            $scope.sites[selected] = $scope.siteBox;
            setView("list");
        };
        $scope.startAdd = function () {
            $scope.siteBox = "";
            setView("add");
        };
        $scope.cancel = function () {
            setView("list");
        };
        $scope.add = function () {
            $scope.sites.push($scope.siteBox);
            setView("list");
        };
        setView("list");
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map