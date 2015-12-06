var App;
(function (App) {
    var DiveGenerator = Classes.DiveGenerator;
    angular.module("diveLog", [])
        .controller("diveLogCtrl", function ($scope) {
        var index = 0;
        $scope.dives = [];
        $scope.addDive = function () {
            if ($scope.enableAdd()) {
                $scope.dives.push(DiveGenerator.dives[index++]);
            }
        };
        $scope.clearDives = function () {
            $scope.dives = [];
            index = 0;
        };
        $scope.enableAdd = function () {
            return index < DiveGenerator.dives.length;
        };
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map