///<reference path="../typings/angularjs/angular.d.ts"/>

module App {
    
    var a = new Classes.DiveGenerator();

    a.dives.forEach(p => {
        alert(p);
    });

    alert(a.funct("Alexis"));

    angular.module("diveLog", [])
        .controller("diveLogCtrl", ($scope: any) => {
            $scope.dives = new Classes.DiveGenerator().dives;
        });
}

