//# sourceMappingURL=interfaces.js.map
var Classes;
(function (Classes) {
    var DiveGenerator = (function () {
        function DiveGenerator() {
            this.funct = function (dato) {
                var message = "Hola " + dato;
                return message;
            };
            this.dives = [
                { site: "Abu Gotta Ramada", location: "Hurghada, Egypt", depth: 72, time: 54 },
                { site: "Ponte Mahoon", location: "Maehbourg, Mauritius", depth: 54, time: 38 },
                { site: "Molnar Cave", location: "Budapest, Hungary", depth: 98, time: 62 }
            ];
        }
        return DiveGenerator;
    })();
    Classes.DiveGenerator = DiveGenerator;
})(Classes || (Classes = {}));
//# sourceMappingURL=classes.js.map
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