/// <reference path="../../typings/angularjs/angular.d.ts" />
var NgApp;
(function (NgApp) {
    "use strict";
    angular.module("diveLog", []);
    NgApp.getModule = function () {
        return angular.module("diveLog");
    };
})(NgApp || (NgApp = {}));
var NgApp;
(function (NgApp) {
    "use strict";
    var app = Module();
    var DiveLogCtrl = (function () {
        function DiveLogCtrl() {
        }
        return DiveLogCtrl;
    })();
})(NgApp || (NgApp = {}));
//angular.module("diveLog", [])
//    .controller("diveLogCtrl", ($scope: any) => {
//        $scope.dives = dives;
//    });
