//# sourceMappingURL=interfaces.js.map
var Classes;
(function (Classes) {
    var DiveGenerator = (function () {
        function DiveGenerator() {
        }
        DiveGenerator.dives = [
            { site: "Abu Gotta Ramada", location: "Hurghada, Egypt", depth: 72, time: 54 },
            { site: "Ponte Mahoon", location: "Maehbourg, Mauritius", depth: 54, time: 38 },
            { site: "Molnar Cave", location: "Budapest, Hungary", depth: 98, time: 62 }
        ];
        return DiveGenerator;
    })();
    Classes.DiveGenerator = DiveGenerator;
})(Classes || (Classes = {}));
//# sourceMappingURL=classes.js.map
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