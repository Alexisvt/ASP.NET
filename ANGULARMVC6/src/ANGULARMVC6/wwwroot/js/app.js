var App;
(function (App) {
    var a = new Classes.DiveGenerator();
    a.dives.forEach(function (p) {
        alert(p);
    });
    alert(a.funct("Alexis"));
    angular.module("diveLog", [])
        .controller("diveLogCtrl", function ($scope) {
        $scope.dives = new Classes.DiveGenerator().dives;
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map